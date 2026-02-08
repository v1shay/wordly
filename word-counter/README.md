# Word Counter
A simple, framework-free word counter web app built with HTML, CSS, and vanilla JavaScript.

## Features
- Paste or type text into a textarea
- Click **Count Words** to display the total word count
- Word counting rules:
  - Words are separated by whitespace
  - Extra spaces, tabs, and newlines are ignored
  - Empty input returns 0

## Project structure
```
word-counter/
├── index.html
├── styles.css
├── script.js
├── package.json
└── README.md
```

## Requirements
- Node.js (any modern LTS version)

## Install
From the `word-counter` folder:

```sh
npm install
```

## Run
Start a local static server:

```sh
npm run start
```

Then open the app in your browser:
- http://localhost:8080

## Usage
1. Paste or type text into the textarea.
2. Click **Count Words**.
3. The **Total words** number updates immediately.

Tip: Press **Cmd+Enter** (macOS) or **Ctrl+Enter** (Windows/Linux) to count words quickly.
