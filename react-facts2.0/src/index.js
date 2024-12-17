import { createRoot } from "react-dom/client";
import { createElement } from "react";

import "./App.css";

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

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <main>
//     <img src="logo512.png" alt="" />
//     <h1>This is another element</h1>
//   </main>
// );

// const root = createRoot(document.getElementById("root"));

// root.render(<TemporaryName />);

// function TemporaryName() {
//   return (
//     <main>
//       <img src="logo512.png" width="40px" alt="React logo" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first realase in 2013</li>
//         <li>Was originally created bt Jordan Walke</li>
//         <li>He well over 200K stars on GitHub</li>
//         <li>It maintained by Meta</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </main>
//   );
// }

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <img src="logo512.png" width="40px" alt="React logo" />
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>I am exited to learn Reactcttcttc</h1>
      <ol>
        <li>React is great !</li>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
        <li>Test 4</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>@ 2024 CC development. All rights reserved</small>
    </footer>
  );
}

function Test() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Test />);
