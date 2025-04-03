import { Routes, Route } from "react-router-dom";
// Customer side pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Admin Panel pages
import Staff from "./pages/admin/Staff";

function RouterConfig() {
  return (
    <Routes>
      {/* Customer Side routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin Panel routes */}
      <Route path="/admin/staff" element={<Staff />} />
    </Routes>
  );
}

export default RouterConfig;
