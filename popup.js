function countWords(text) {
  const trimmed = String(text || "").trim();
  if (trimmed.length === 0) return 0;
  return trimmed.split(/\s+/).length;
}

function el(id) {
  return document.getElementById(id);
}

function setSelectionUI({ text, status }) {
  const selectionCount = el("selectionCount");
  const selectionStatus = el("selectionStatus");
  const details = el("selectionDetails");
  const preview = el("selectionPreview");

  const wordCount = countWords(text);

  if (text && text.trim().length > 0) {
    selectionCount.textContent = String(wordCount);
    selectionStatus.textContent = status || "Selected text found";

    preview.textContent = text;
    details.hidden = false;
  } else {
    selectionCount.textContent = "—";
    selectionStatus.textContent = status || "No text selected";

    preview.textContent = "";
    details.hidden = true;
  }
}

function setManualCount(count) {
  el("manualCount").textContent = String(count);
}

async function getActiveTab() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      resolve(tabs && tabs.length ? tabs[0] : null);
    });
  });
}

/* =========================================================
   ✅ FIXED SELECTION SOURCE (ONLY CHANGE)
   Replaced content-script messaging with executeScript
   ========================================================= */
async function requestSelectionTextFromContentScript() {
  const tab = await getActiveTab();
  if (!tab || typeof tab.id !== "number") {
    return { ok: false, text: "", reason: "No active tab" };
  }

  return new Promise((resolve) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          try {
            return window.getSelection()?.toString() || "";
          } catch {
            return "";
          }
        }
      },
      (results) => {
        if (chrome.runtime.lastError) {
          resolve({
            ok: false,
            text: "",
            reason: chrome.runtime.lastError.message
          });
          return;
        }

        const text = results?.[0]?.result || "";
        resolve({ ok: true, text });
      }
    );
  });
}

function wireManualUI() {
  const textarea = el("textInput");
  const countBtn = el("countBtn");
  const clearBtn = el("clearBtn");

  countBtn.addEventListener("click", () => {
    setManualCount(countWords(textarea.value));
  });

  clearBtn.addEventListener("click", () => {
    textarea.value = "";
    setManualCount(0);
    textarea.focus();
  });

  textarea.addEventListener("keydown", (e) => {
    const isEnter = e.key === "Enter";
    const isMeta = e.metaKey || e.ctrlKey;
    if (isEnter && isMeta) {
      e.preventDefault();
      setManualCount(countWords(textarea.value));
    }
  });
}

async function init() {
  wireManualUI();

  setSelectionUI({ text: "", status: "Reading selection…" });

  const res = await requestSelectionTextFromContentScript();

  if (!res.ok) {
    setSelectionUI({ text: "", status: "No text selected" });
    return;
  }

  const selectionText = res.text || "";
  setSelectionUI({
    text: selectionText,
    status: selectionText.trim()
      ? "Selected text found"
      : "No text selected"
  });

  // Prefill manual textarea if selection exists
  const textarea = el("textInput");
  if (selectionText && selectionText.trim().length > 0) {
    textarea.value = selectionText;
    setManualCount(countWords(selectionText));
  }
}

document.addEventListener("DOMContentLoaded", init);
