import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import { Services } from "./services/services";
import { BookstoreServiceProvider } from "./components/bookstore-service-context/BookstoreService";

import store from "./store";

const bookstoreService = new Services();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
