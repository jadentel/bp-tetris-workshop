import { BrowserPod } from '@leaningtech/browserpod'
import { copyFile } from './utils'
import QRCode from 'qrcode'

// ============================================================
// BrowserPod Tetris Workshop 🎮
// ============================================================
// Your goal: get Tetris running inside your browser tab,
// publicly accessible via a Portal URL + QR code.
//
// Fill in the TODOs below using the BrowserPod docs.
// Each step links to the exact page you need.
// Run `npm run dev` and open http://localhost:5173 to see progress.
// ============================================================


// ----------------------------------------
// STEP 1: Boot the Pod 🚀
// ----------------------------------------
// Initialize a BrowserPod instance using your API key.
// Your key is stored in .env as VITE_BP_APIKEY.
//
// 📖 https://browserpod.io/docs/reference/BrowserPod/boot
//
// TODO: Replace null with the correct BrowserPod.boot() call

const pod = null // ← fix this


// ----------------------------------------
// STEP 2: Set up a Terminal ⌨️
// ----------------------------------------
// Attach a terminal to the #console element so you can see
// what's happening inside the pod in real time.
//
// 📖 https://browserpod.io/docs/reference/BrowserPod/createDefaultTerminal
//
// TODO: Replace null with pod.createDefaultTerminal(...)

const terminal = null // ← fix this


// ----------------------------------------
// STEP 3: Set up the Portal 🌐
// ----------------------------------------
// A Portal exposes your pod's server as a public URL.
// When a server starts inside the pod, BrowserPod fires
// this callback with { url, port }.
//
// 📖 https://browserpod.io/docs/guides/setup-portal
//
// TODO: Fill in the portal handler body below
// You need to:
//   1. Show the URL in #url as a clickable link
//   2. Set the #portal iframe src to the URL
//   3. Generate a QR code (code provided below, just uncomment it)

const portalIframe = document.getElementById("portal");
const urlDiv = document.getElementById("url");

pod.onPortal(({ url, port }) => {
  // TODO: Display the URL
  // urlDiv.innerHTML = ...

  // TODO: Load URL in iframe
  // portalIframe.src = ...

  // QR code generation — uncomment once the above is working
  // const qrContainer = document.getElementById("qr");
  // qrContainer.innerHTML = "";
  // const qrCanvas = document.createElement("canvas");
  // qrContainer.appendChild(qrCanvas);
  // QRCode.toCanvas(qrCanvas, url, { width: 180, margin: 1, color: { dark: '#0DFF72', light: '#0d0d0d' } });
  // const qrLabel = document.createElement("p");
  // qrLabel.textContent = "📱 Scan to play on your phone";
  // qrLabel.style.cssText = "font-size: 13px; color: #888; margin: 6px 0 0 0;";
  // qrContainer.appendChild(qrLabel);
});


// ----------------------------------------
// STEP 4: Copy files into the Pod 📂
// ----------------------------------------
// The Tetris game lives in public/workspace/.
// You need to copy those files into the pod's virtual filesystem.
//
// 📖 https://browserpod.io/docs/guides/write-files-to-pod
// 📖 https://browserpod.io/docs/reference/BrowserPod/createDirectory
//
// The copyFile(pod, path) utility is already imported above.
// Usage: await copyFile(pod, "workspace/server.js")
//
// Files you need to copy:
//   workspace/server.js
//   workspace/build/index.html
//   workspace/build/game.js
//   workspace/build/style.css
//   workspace/data/scores.json
//
// TODO: Create the directories and copy the files below

// await pod.createDirectory(...)
// await copyFile(...)


// ----------------------------------------
// STEP 5: Run the server 🟢
// ----------------------------------------
// Start the Node.js server inside the pod.
// When it listens on port 3000, the Portal will fire automatically.
//
// 📖 https://browserpod.io/docs/reference/BrowserPod/run
//
// Hint: run "node" with ["server.js"], cwd: "/workspace"
//
// TODO: Run the server below

// await pod.run(...)