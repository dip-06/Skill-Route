import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p className="text-gray-900 dark:text-white p-4 md:p-6 transition-colors">Project not found</p>;

  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-white p-4 md:p-8 max-w-4xl transition-colors">
      <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 md:mt-2 text-gray-700 dark:text-gray-300 transition-colors leading-relaxed">{project.description}</p>

      <p className="mt-4">
        <b>Category:</b> {project.category}
      </p>

      <p>
        <b>Difficulty:</b> {project.difficulty}
      </p>

      <p className="mt-2">
        <b>Skills:</b> {project.skills.join(", ")}
      </p>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
        >
          View Project
        </a>
      ) : (
        <p className="mt-4 text-yellow-600 dark:text-yellow-400 transition-colors">
          This is a project idea. You can build it!
        </p>
      )}
    </div>
  );
}
