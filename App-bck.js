import React from "react";
import ReactDOM from "react-dom/client";

/*

// React.createElement = ReactElement-JS Object ==> HTMLElement(render) 


*/

const parent = React.createElement(
    'div',
    {id:"parent"},
    [    React.createElement(
        'div',
        {id:'child'},
        [React.createElement(
            'h1',
            {},
            "This is Namaste React"
        ),React.createElement(
            'h2',
            {},
            "This is Namaste React test"
        )]
    ),
    React.createElement(
        'div',
        {id:'child2'},
        [React.createElement(
            'h1',
            {},
            "I'm an h1 tag"
        ),React.createElement(
            'h2',
            {},
            "I'm an h2 tag"
        )]
    )]

);

// JSX (transpiled before it reaches the JS ) - PARCEL - Babel
// Babel is installed by parcel itself
// Babel is javascript compiler and it basically transpiler it convert the jsx in to code that js engine understand which is react understand.
// JSX => converted into React.createElement => ReactElement-JS Object => HTMLElement(render).
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render).


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