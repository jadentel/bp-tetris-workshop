# BrowserPod Tetris Workshop

Welcome to the **BrowserPod Tetris Workshop**! In this session, you'll learn how to use [BrowserPod](https://browserpod.io) to run a full Node.js backend directly in your browser's tab.

No cloud provisioning, no server setup—just pure browser-based backend power.

## The Goal
Your mission is to build a development dashboard that:
1.  **Boots** a BrowserPod instance.
2.  **Mounts** a virtual terminal for debugging.
3.  **Syncs** a Tetris game server from your local project into the pod's filesystem.
4.  **Serves** the game via a BrowserPod Portal.
5.  **Generates** a QR code so you can play Tetris on your phone!

---

## Getting Started

### 1. Project Setup
First, make sure you have your dependencies installed and an API key ready.

```bash
npm install
```

Create a `.env` file in the root directory (if you haven't already) and add your [BrowserPod API Key](https://console.browserpod.io):
```env
VITE_BP_APIKEY=your_api_key_here
```

### 2. Run the Development Server
Start the workshop dashboard:
```bash
npm run dev
```

### 3. Your Task
Open `src/main.js`. You'll find 5 "TODO" sections. Follow the instructions and the [BrowserPod Documentation](https://browserpod.io/docs/overview) to complete the implementation.

- **Step 1**: Boot the Pod.
- **Step 2**: Attach the Terminal.
- **Step 3**: Setup the Portal Hook.
- **Step 4**: Prepare the Filesystem.
- **Step 5**: Run the Node.js Server.

---

## Stuck?
If you get stuck, you can refer to `src/solution.js` for a working implementation. 

## Useful Resources
- [BrowserPod Documentation](https://browserpod.io/docs/overview)
- [How Portals Work](https://browserpod.io/docs/guides/portals)
- [Filesystem API](https://browserpod.io/docs/guides/filesystem)

---

Developed by Leaning Technologies.
