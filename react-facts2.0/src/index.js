import { createRoot } from "react-dom/client";
import { createElement } from "react";

// createRoot(document.getElementById("root")).render(
//   <ul>
//     <li>Super popular JS library</li>
//     <li>Will help me be even more employable</li>
//     <li>React has a great logo</li>
//   </ul>
// );

// const root = createRoot(document.getElementById("root"));
// const reactElement = <h1>Hello from JSX</h1>;
// console.log(reactElement);
// root.render(reactElement);

// const root = createRoot(document.getElementById("root"));

// function MainContent() {
//   return <h1>Hello React, React is awesome</h1>;
// }

// root.render(
//   <div>
//     <MainContent />
//   </div>
// );

// const h1 = document.createElement("h1");
// h1.textContent = "This is imperative coding";
// h1.className = "header";
// document.getElementById("root").appendChild(h1);

const root = createRoot(document.getElementById("root"));
root.render(
  <main>
    <img src="logo512.png" alt="" />
    <h1>This is another element</h1>
  </main>
);
