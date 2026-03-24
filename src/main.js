import { BrowserPod } from '@leaningtech/browserpod'
import { copyFile } from './utils'
import QRCode from 'qrcode'

// ============================================================
// BrowserPod Tetris Workshop
// ============================================================
// Your goal: get Tetris running inside your browser tab,
// publicly accessible via a Portal URL + QR code.
//
// Fill in the TODOs below using the BrowserPod docs.
// Each task links to the exact doc page you need.
// The sidebar lights up green as you complete each step!
// You'll know it's working when Tetris appears in the preview.
// ============================================================


// ----------------------------------------
// TASK 1: Boot the Pod
// ----------------------------------------
// Initialize a BrowserPod instance using your API key.
// Your key is stored in .env as VITE_BP_APIKEY.
//
// 📖 Docs: https://browserpod.io/docs/reference/BrowserPod/boot
//
// TODO: Replace null with the correct BrowserPod.boot() call

const pod = null // ← fix this

markStepComplete(1)


// ----------------------------------------
// TASK 2: Set up a Terminal
// ----------------------------------------
// Attach a terminal to the #console element so you can
// see what's happening inside the pod in real time.
//
// 📖 Docs: https://browserpod.io/docs/reference/BrowserPod/createDefaultTerminal
//
// TODO: Replace null with pod.createDefaultTerminal(...)

const terminal = null // ← fix this

markStepComplete(2)


// ----------------------------------------
// TASK 3: Set up the Portal
// ----------------------------------------
// A Portal exposes your pod's server as a public URL.
// When the server starts, BrowserPod fires this callback
// with { url, port }.
//
// You need to:
//   1. Show the URL in #url as a clickable link
//   2. Set the #portal iframe src to the URL
//   3. Generate a QR code into #qr using QRCode.toCanvas()
//
// 📖 Docs: https://browserpod.io/docs/guides/setup-portal
//
// TODO: Fill in the portal handler below

pod.onPortal(({ url, port }) => {
    // 1. Update the URL display
    document.getElementById('url').innerHTML = '' // ← fix this

    // 2. Load the URL in the iframe
    document.getElementById('portal').src = '' // ← fix this

    // 3. Generate QR code
    const qrContainer = document.getElementById('qr')
    qrContainer.innerHTML = ''
    const qrCanvas = document.createElement('canvas')
    qrContainer.appendChild(qrCanvas)
    // TODO: call QRCode.toCanvas() here
    // QRCode.toCanvas(qrCanvas, ???, { width: 160, margin: 1, color: { dark: '#0DFF72', light: '#0d0d0d' } })

    document.getElementById('qr-label').textContent = '📱 Scan to play on your phone'

    markStepComplete(3)
})


// ----------------------------------------
// TASK 4: Copy files into the Pod
// ----------------------------------------
// The Tetris game lives in public/workspace/.
// You need to copy those files into the pod's virtual
// filesystem so Node.js can run them.
//
// Files to copy:
//   workspace/server.js
//   workspace/build/index.html
//   workspace/build/game.js
//   workspace/build/style.css
//   workspace/data/scores.json
//
// 📖 Docs: https://browserpod.io/docs/reference/BrowserPod/createDirectory
// 📖 Docs: https://browserpod.io/docs/guides/write-files-to-pod
//
// The copyFile helper is already imported at the top.
// Usage: await copyFile(pod, "workspace/server.js")
//
// TODO: Create the directories and copy the files below

// await pod.createDirectory(...)
// await copyFile(pod, ...)

markStepComplete(4)


// ----------------------------------------
// TASK 5: Run the server
// ----------------------------------------
// Now that the files are in the pod, start the Node.js server.
// The server listens on port 3000 — that's what triggers
// the Portal callback above.
//
// 📖 Docs: https://browserpod.io/docs/reference/BrowserPod/run
//
// TODO: Call pod.run() to start the server

// await pod.run(...)

markStepComplete(5)
