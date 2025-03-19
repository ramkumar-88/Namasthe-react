import React from "react";
import ReactDOM from "react-dom/client";
import IncDecFun from "./IncDecFun.js";
import ApiCallDataList from "./ApiCallDataList";
import SortingList from "./sortingList";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading); // we can render a element like this
    root.render(<SortingList />); // we can render a component like this