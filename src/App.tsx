import { h } from "preact";
import { Router } from "preact-router";

import { HomePage } from "src/pages/HomePage";

export function App() {
  return (
    <Router>
      <HomePage path="/" />
    </Router>
  );
}
