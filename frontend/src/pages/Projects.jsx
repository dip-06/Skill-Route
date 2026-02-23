import { Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="min-h-screen bg-transparent p-6 text-gray-900 dark:text-white transition-colors">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Add Project Card */}
        <Link to="/add-project">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6
                          flex items-center justify-center text-gray-500 dark:text-gray-400
                          hover:border-blue-500 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-transparent transition-colors">
            + Add Project Idea
          </div>
        </Link>

        {/* Project Cards */}
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {project.category}
              </p>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{project.difficulty}</p>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}
