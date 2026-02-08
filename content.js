function getSelectionText() {
  try {
    const selection = window.getSelection && window.getSelection();
    return selection ? String(selection.toString() || "") : "";
  } catch {
    return "";
  }
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (!message || message.type !== "WORDLY_GET_SELECTION") return;

  sendResponse({
    text: getSelectionText()
  });

  // Indicate we might respond asynchronously (even though we respond sync).
  return true;
});
