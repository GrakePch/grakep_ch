import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Friends from "./pages/Friends";
import ProjectDetail from "./pages/ProjectDetail";
import Header from "./components/Header";
import Logos from "./pages/Logos";

export default function App() {
  const scrollLimit = 240;

  return (
    <Router>
      <div className="relative min-h-screen bg-stone-300 text-black dark:bg-black dark:text-white">
        <Header scrollLimit={scrollLimit} />
        <main className="p-4 mx-auto max-w-4xl" style={{ paddingTop: scrollLimit + 88 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/logos" element={<Logos />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
