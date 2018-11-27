import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Hello from "./containers/Hello";
import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

// as HTMLElement. This syntax is called a type assertion, sometimes also called a cast.
// This is a useful way of telling TypeScript what the real type of an expression is when you know better than the type checker.
// The reason we need to do so in this case is that getElementById's return type is HTMLElement | null.
// Put simply, getElementById returns null when it can't find an element with a given id.
// We're assuming that getElementById will actually succeed, so we need to convince TypeScript of that using the as syntax.
// TypeScript also has a trailing "bang" syntax (!), which removes null and undefined from the prior expression.
// So we could have written document.getElementById('root')!, but in this case we wanted to be a bit more explicit.
