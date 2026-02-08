function countWords(text) {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;

  // Split on one-or-more whitespace characters.
  return trimmed.split(/\s+/).length;
}

function setWordCount(count) {
  const output = document.getElementById("wordCount");
  output.textContent = String(count);
}

function handleCountClick() {
  const textarea = document.getElementById("textInput");
  setWordCount(countWords(textarea.value));
}

function handleClearClick() {
  const textarea = document.getElementById("textInput");
  textarea.value = "";
  setWordCount(0);
  textarea.focus();
}

function init() {
  const countBtn = document.getElementById("countBtn");
  const clearBtn = document.getElementById("clearBtn");
  const textarea = document.getElementById("textInput");

  countBtn.addEventListener("click", handleCountClick);
  clearBtn.addEventListener("click", handleClearClick);

  // Convenience: Ctrl/Cmd+Enter triggers counting.
  textarea.addEventListener("keydown", (e) => {
    const isEnter = e.key === "Enter";
    const isMeta = e.metaKey || e.ctrlKey;
    if (isEnter && isMeta) {
      e.preventDefault();
      handleCountClick();
    }
  });

  // Start focused for quick paste.
  textarea.focus();
}

document.addEventListener("DOMContentLoaded", init);

// function countWords(text) {
//   const trimmed = text.trim();
//   if (trimmed.length === 0) return 0;

//   // Split on one-or-more whitespace characters.
//   return trimmed.split(/\s+/).length;
// }

// function setWordCount(count) {
//   const output = document.getElementById("wordCount");
//   output.textContent = String(count);
// }

// function handleCountClick() {
//   const textarea = document.getElementById("textInput");
//   setWordCount(countWords(textarea.value));
// }

// function handleClearClick() {
//   const textarea = document.getElementById("textInput");
//   textarea.value = "";
//   setWordCount(0);
//   textarea.focus();
// }

// function init() {
//   const countBtn = document.getElementById("countBtn");
//   const clearBtn = document.getElementById("clearBtn");
//   const textarea = document.getElementById("textInput");

//   countBtn.addEventListener("click", handleCountClick);
//   clearBtn.addEventListener("click", handleClearClick);

//   // Convenience: Ctrl/Cmd+Enter triggers counting.
//   textarea.addEventListener("keydown", (e) => {
//     const isEnter = e.key === "Enter";
//     const isMeta = e.metaKey || e.ctrlKey;
//     if (isEnter && isMeta) {
//       e.preventDefault();
//       handleCountClick();
//     }
//   });

//   // Start focused for quick paste.
//   textarea.focus();
// }

// document.addEventListener("DOMContentLoaded", init);
// function countWords(text) {
//   const trimmed = text.trim();
//   if (trimmed.length === 0) return 0;

//   // Split on one-or-more whitespace characters.
//   return trimmed.split(/\s+/).length;
// }

// function setWordCount(count) {
//   const output = document.getElementById("wordCount");
//   output.textContent = String(count);
// }

// function handleCountClick() {
//   const textarea = document.getElementById("textInput");
//   setWordCount(countWords(textarea.value));
// }

// function handleClearClick() {
//   const textarea = document.getElementById("textInput");
//   textarea.value = "";
//   setWordCount(0);
//   textarea.focus();
// }

// function init() {
//   const countBtn = document.getElementById("countBtn");
//   const clearBtn = document.getElementById("clearBtn");
//   const textarea = document.getElementById("textInput");

//   countBtn.addEventListener("click", handleCountClick);
//   clearBtn.addEventListener("click", handleClearClick);

//   // Convenience: Ctrl/Cmd+Enter triggers counting.
//   textarea.addEventListener("keydown", (e) => {
//     const isEnter = e.key === "Enter";
//     const isMeta = e.metaKey || e.ctrlKey;
//     if (isEnter && isMeta) {
//       e.preventDefault();
//       handleCountClick();
//     }
//   });

//   // Start focused for quick paste.
//   textarea.focus();
// }

// document.addEventListener("DOMContentLoaded", init);
// function countWords(text) {
//   const trimmed = text.trim();
//   if (trimmed.length === 0) return 0;

//   // Split on one-or-more whitespace characters.
//   return trimmed.split(/\s+/).length;
// }

// function setWordCount(count) {
//   const output = document.getElementById("wordCount");
//   output.textContent = String(count);
// }

// function handleCountClick() {
//   const textarea = document.getElementById("textInput");
//   setWordCount(countWords(textarea.value));
// }

// function handleClearClick() {
//   const textarea = document.getElementById("textInput");
//   textarea.value = "";
//   setWordCount(0);
//   textarea.focus();
// }

// function init() {
//   const countBtn = document.getElementById("countBtn");
//   const clearBtn = document.getElementById("clearBtn");
//   const textarea = document.getElementById("textInput");

//   countBtn.addEventListener("click", handleCountClick);
//   clearBtn.addEventListener("click", handleClearClick);

//   // Convenience: Ctrl/Cmd+Enter triggers counting.
//   textarea.addEventListener("keydown", (e) => {
//     const isEnter = e.key === "Enter";
//     const isMeta = e.metaKey || e.ctrlKey;
//     if (isEnter && isMeta) {
//       e.preventDefault();
//       handleCountClick();
//     }
//   });

//   // Start focused for quick paste.
//   textarea.focus();
// }

// document.addEventListener("DOMContentLoaded", init);
// function countWords(text) {
//   const trimmed = text.trim();
//   if (trimmed.length === 0) return 0;

//   // Split on one-or-more whitespace characters.
//   return trimmed.split(/\s+/).length;
// }

// function setWordCount(count) {
//   const output = document.getElementById("wordCount");
//   output.textContent = String(count);
// }

// function handleCountClick() {
//   const textarea = document.getElementById("textInput");
//   setWordCount(countWords(textarea.value));
// }

// function handleClearClick() {
//   const textarea = document.getElementById("textInput");
//   textarea.value = "";
//   setWordCount(0);
//   textarea.focus();
// }

// function init() {
//   const countBtn = document.getElementById("countBtn");
//   const clearBtn = document.getElementById("clearBtn");
//   const textarea = document.getElementById("textInput");

//   countBtn.addEventListener("click", handleCountClick);
//   clearBtn.addEventListener("click", handleClearClick);

//   // Convenience: Ctrl/Cmd+Enter triggers counting.
//   textarea.addEventListener("keydown", (e) => {
//     const isEnter = e.key === "Enter";
//     const isMeta = e.metaKey || e.ctrlKey;
//     if (isEnter && isMeta) {
//       e.preventDefault();
//       handleCountClick();
//     }
//   });

//   // Start focused for quick paste.
//   textarea.focus();
// }

// document.addEventListener("DOMContentLoaded", init);
// function countWords(text) {
//   const trimmed = text.trim();
//   if (trimmed.length === 0) return 0;

//   // Split on one-or-more whitespace characters.
//   return trimmed.split(/\s+/).length;
// }

// function setWordCount(count) {
//   const output = document.getElementById("wordCount");
//   output.textContent = String(count);
// }

// function handleCountClick() {
//   const textarea = document.getElementById("textInput");
//   setWordCount(countWords(textarea.value));
// }

// function handleClearClick() {
//   const textarea = document.getElementById("textInput");
//   textarea.value = "";
//   setWordCount(0);
//   textarea.focus();
// }

// function init() {
//   const countBtn = document.getElementById("countBtn");
//   const clearBtn = document.getElementById("clearBtn");
//   const textarea = document.getElementById("textInput");

//   countBtn.addEventListener("click", handleCountClick);
//   clearBtn.addEventListener("click", handleClearClick);

//   // Convenience: Ctrl/Cmd+Enter triggers counting.
//   textarea.addEventListener("keydown", (e) => {
//     const isEnter = e.key === "Enter";
//     const isMeta = e.metaKey || e.ctrlKey;
//     if (isEnter && isMeta) {
//       e.preventDefault();
//       handleCountClick();
//     }
//   });

//   // Start focused for quick paste.
//   textarea.focus();
// }

// document.addEventListener("DOMContentLoaded", init);
// function countWords(text) {
//   const trimmed = text.trim();
//   if (trimmed.length === 0) return 0;

//   // Split on one-or-more whitespace characters.
//   return trimmed.split(/\s+/).length;
// }

// function setWordCount(count) {
//   const output = document.getElementById("wordCount");
//   output.textContent = String(count);
// }

// function handleCountClick() {
//   const textarea = document.getElementById("textInput");
//   setWordCount(countWords(textarea.value));
// }

// function handleClearClick() {
//   const textarea = document.getElementById("textInput");
//   textarea.value = "";
//   setWordCount(0);
//   textarea.focus();
// }

// function init() {
//   const countBtn = document.getElementById("countBtn");
//   const clearBtn = document.getElementById("clearBtn");
//   const textarea = document.getElementById("textInput");

//   countBtn.addEventListener("click", handleCountClick);
//   clearBtn.addEventListener("click", handleClearClick);

//   // Convenience: Ctrl/Cmd+Enter triggers counting.
//   textarea.addEventListener("keydown", (e) => {
//     const isEnter = e.key === "Enter";
//     const isMeta = e.metaKey || e.ctrlKey;
//     if (isEnter && isMeta) {
//       e.preventDefault();
//       handleCountClick();
//     }
//   });

//   // Start focused for quick paste.
//   textarea.focus();
// }

// document.addEventListener("DOMContentLoaded", init);
