import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Feed from "./pages/Feed.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-footer-background h-screen w-screen">
      <Feed />
    </div>
  </StrictMode>,
);
