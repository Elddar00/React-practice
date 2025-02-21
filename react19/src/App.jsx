import { useState } from "react";

// NEXT
//useEffect

// fix: fixed delay in useEffect
// feat: added useEffect for dynamic data loading
// refactor: optimized useEffect and improved cleanup
// chore: added dependency in useEffect
// fix: resolved memory leak in useEffect cleanup function
// perf: improved useEffect call efficiency

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "💓" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
