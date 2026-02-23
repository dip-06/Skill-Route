import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import LearningPaths from "./pages/LearningPaths"
import Projects from "./pages/Projects"
import Contributors from "./pages/Contributors"
import LearningPathDetail from "./pages/LearningPathDetail"
import TopicDetail from "./pages/TopicDetail"

import AddProject from "./pages/AddProject";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/learning-paths/:slug" element={<LearningPathDetail />} />
        <Route path="/dsa/:topicId/:pointId" element={<TopicDetail />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />

      </Routes>
    </div>
  )
}

export default App
