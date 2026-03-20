import { BrowserPod } from '@leaningtech/browserpod'
import { copyFile } from './utils'
import QRCode from 'qrcode'

// Initialize the Pod
// VITE_BP_APIKEY is an environmental variable containing your Api Key
// Its value is defined in the file `.env` in the project's main directory
// To get an Api Key, visit https://console.browserpod.io
const pod = await BrowserPod.boot({ apiKey: import.meta.env.VITE_BP_APIKEY });

// Create a Terminal
const terminal = await pod.createDefaultTerminal(document.querySelector("#console"));

// Hook the portal to preview the web page in an iframe
const portalIframe = document.getElementById("portal");
const urlDiv = document.getElementById("url");

pod.onPortal(({ url, port }) => {
  urlDiv.innerHTML = `Portal: <a href="${url}" target="_blank">${url}</a>`;

  portalIframe.src = url;

  // Render QR beside the iframe
  const qrContainer = document.getElementById("qr");
  qrContainer.innerHTML = "";

  const qrCanvas = document.createElement("canvas");
  qrContainer.appendChild(qrCanvas);
  QRCode.toCanvas(qrCanvas, url, {
    width: 160,
    margin: 1,
    color: { dark: '#0DFF72', light: '#0d0d0d' }
  });

  const qrLabel = document.getElementById("qr-label");
  if (qrLabel) qrLabel.textContent = "Scan to play on your phone";

  const qrUrl = document.getElementById("qr-url");
  if (qrUrl) qrUrl.textContent = url;
});

// Copy our project files
await pod.createDirectory("/workspace");
await pod.createDirectory("/workspace/build");
await pod.createDirectory("/workspace/data");
await copyFile(pod, "workspace/server.js");
await copyFile(pod, "workspace/build/index.html");
await copyFile(pod, "workspace/build/game.js");
await copyFile(pod, "workspace/build/style.css");
await copyFile(pod, "workspace/data/scores.json");

// Run the web server
await pod.run("node", ["server.js"], { echo: true, terminal: terminal, cwd: "/workspace" });