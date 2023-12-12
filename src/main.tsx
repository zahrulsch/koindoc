import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("_root")!).render(
    <React.StrictMode>
        <div className="w-full h-screen">
            <App />
        </div>
    </React.StrictMode>
)
