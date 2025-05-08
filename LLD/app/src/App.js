import About from "./Study_CMP/About";
import Body from "./Study_CMP/Body";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Team from "./Study_CMP/Team";
import Login from "./Study_CMP/Login";
import ProtectedRoute from "./Study_CMP/ProtectedRoute";
import { useState } from "react";
import Comments from "./Study_CMP/comments/Comments";
import ImageSlider from "./Study_CMP/Image-slider/ImageSlider";
import Pagination from "./Study_CMP/Pagination/Pagination";
import LiveChat from "./Study_CMP/LiveChat/LiveChat";
import Accordion from "./Study_CMP/Accordion";
import SearchUI from "./Study_CMP/searchUI/SearchUI";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <HashRouter>
      <div>
        <header className="text-2xl font-bold py-5 bg-black text-white flex justify-between items-center">
          {/* Aligns the header content and links in a single row */}
          <h1 className="flex-1 text-left pl-5">Hello World</h1>

          {/* Navigation links */}
          <nav className="p-2 m-2 text-md">
            <Link to="/" className="p-2 text-sm">Home</Link>
            <Link to="/about" className="p-2 text-sm">About</Link>
            <Link to="/accordian" className="p-2 text-sm">Accordian</Link>
            <Link to="/image-slider" className="p-2 text-sm">ImageSlider</Link>
            <Link to="/comments" className="p-2 text-sm">Nested Comments</Link>
            <Link to="/pagination" className="p-2 text-sm">Pagination</Link>
            <Link to="/live-chat" className="p-2 text-sm">Live Chat</Link>
            <Link to="/search-ui" className="p-2 text-sm">SearchUI</Link>
            <Link to="/login" className="p-2 text-sm">Login</Link>
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)} 
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="sp">Spanish</option>
              <option value="ru">Russian</option>
            </select>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/accordian" element={<Accordion />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/search-ui" element={<SearchUI />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
