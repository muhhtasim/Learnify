// 1. Imports
import React, { useState, useEffect } from "react";

// 2. Component
const ComponentName = () => {
  // 3. State
  const [state, setState] = useState(null);

  // 4. Effects
  useEffect(() => {
    // side effects here
  }, []);

  // 5. Functions
  const handleClick = () => {
    console.log("Clicked!");
  };

  // 6. Return UI
  return (
    <div>
      <h1>Component Name</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

// 7. Export
export default ComponentName;