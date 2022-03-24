import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";
import { ContactUs, Exchange, Home, PageNotFound, Service, Transaction } from "./pages";

import { MoneyGramTransactionProvider } from "./context/MoneyGramContext";

ReactDOM.render(
  <BrowserRouter>
    <MoneyGramTransactionProvider>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/Exchange" element={<Exchange />} />
            <Route path="/services" element={<Service />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Route>
        </Routes>
      </React.StrictMode>
    </MoneyGramTransactionProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
