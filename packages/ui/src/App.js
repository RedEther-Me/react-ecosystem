import React from "react";

import GlobalNavigation from "./components/navigation/GlobalNavigation";
import Login from "./components/auth/Login";

function App() {
  return (
    <div>
      <header>
        <GlobalNavigation />
      </header>
      <main className="App">
        <Login />
      </main>
    </div>
  );
}

export default App;
