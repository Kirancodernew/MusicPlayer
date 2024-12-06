import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MusicPlayerProvider } from "./context/MusicContext";
import { BrowserRouter } from "react-router-dom";
import axios from "./authConfig.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MusicPlayerProvider>
        <App />
      </MusicPlayerProvider>
    </BrowserRouter>
  </StrictMode>
);
