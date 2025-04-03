import { BrowserRouter as Router } from "react-router-dom";

import './App.css'
import RouterConfig from './RouterConfig.jsx';

function App() {
  return (
    <Router>
      {/* Manage routes */}
      <RouterConfig />
    </Router>
  )
}

export default App
