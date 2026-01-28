
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; 
import "./index.css";
import { AuthProvider } from "./context/UserProfile"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
createRoot(document.getElementById("root")).render( 
<React.StrictMode>        
<AuthProvider>      
<App />       
<ToastContainer />   
</AuthProvider> 
 </React.StrictMode> );  