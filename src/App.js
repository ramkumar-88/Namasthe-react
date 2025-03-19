import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading); // we can render a element like this
    root.render(<Applayout />); // we can render a component like this