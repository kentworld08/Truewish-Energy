import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Component/scrollToTopPage";
import App from "./App.jsx";

import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log(error);
  console.log(error.message);
  console.log(error.status);

  return (
    <div className="error-page">
      <h2>Whoops...page not found</h2>
      <p>Unfortunately, the page you are looking for does not exist.</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
