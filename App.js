import React from "react";
import ReactDOM from "react-dom/client";


const heading = (
<h1 id="heading" className="head" tabIndex="1">Namaste React heading element</h1>);

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React Title component
    </h1>
);

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {heading}
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);



    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading); // we can render a element like this
    root.render(<HeadingComponent />); // we can render a component like this