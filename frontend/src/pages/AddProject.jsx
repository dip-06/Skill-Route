export default function AddProject() {
  return (
    <div className="min-h-screen bg-transparent p-4 md:p-6 text-gray-900 dark:text-white transition-colors">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Add Project Idea</h1>

      <form className="space-y-4 max-w-xl">
        <input
          className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white transition-colors"
          placeholder="Project Title"
        />

        <select className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white transition-colors">
          <option>Web Development</option>
          <option>DSA</option>
          <option>AI / ML</option>
          <option>Cyber Security</option>
        </select>

        <select className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white transition-colors">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <textarea
          className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white transition-colors"
          placeholder="Short Description"
        />

        <input
          className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white transition-colors"
          placeholder="Project Link (optional)"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
          Submit Idea
        </button>
      </form>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 transition-colors">
        👉 Submit via Pull Request by adding this project to <b className="text-gray-900 dark:text-white transition-colors">projects.json</b>
      </p>
    </div>
  );
}
