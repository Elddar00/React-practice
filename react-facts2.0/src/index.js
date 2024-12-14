import { createRoot } from "react-dom/client";

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

const root = createRoot(document.getElementById("root"));

function MainContent() {
  return <h1>Hello React, React is awesome</h1>;
}

root.render(
  <div>
    <MainContent />
  </div>
);
