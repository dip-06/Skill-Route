import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="px-4 md:px-20 py-10 md:py-16 space-y-16 md:space-y-24">

      {/* HERO */}
      <section className="text-center space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white transition-colors">
          Open Knowledge & Project Hub
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base md:text-lg transition-colors px-2">
          A community-driven open-source platform where students explore modern technologies, build real-world projects, and grow together through collaboration.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
          <Link
            to="/learning-paths"
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors w-full sm:w-auto"
          >
            Explore Learning Paths
          </Link>

          <Link
            to="/projects"
            className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* WHAT IS THIS */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm dark:shadow-none transition-colors">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            📘 Learn
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Follow structured learning paths like Web Development, DSA, AI/ML,
            and Cyber Security.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm dark:shadow-none transition-colors">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            🛠 Build
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Work on real frontend projects using React, TailwindCSS, and Vite.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm dark:shadow-none transition-colors sm:col-span-2 md:col-span-1 border-t sm:border-t-0">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            🤝 Contribute
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Contribute through GitHub PRs and experience real open-source
            collaboration.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-gray-900 dark:text-white transition-colors">
          How This Platform Works
        </h2>

        <ol className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300 transition-colors text-sm md:text-base">
          <li className="flex items-center gap-2"><span className="text-lg">1️⃣</span> Choose a learning path</li>
          <li className="flex items-center gap-2"><span className="text-lg">2️⃣</span> Explore topics and resources</li>
          <li className="flex items-center gap-2"><span className="text-lg">3️⃣</span> Build or improve projects</li>
          <li className="flex items-center gap-2"><span className="text-lg">4️⃣</span> Contribute via GitHub Pull Requests</li>
        </ol>
      </section>

      {/* CONTRIBUTION LEVELS */}
      <section className="text-center px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-gray-900 dark:text-white transition-colors">
          Everyone Can Contribute
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm dark:shadow-none transition-colors">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">🟢 Beginners</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              UI improvements, content updates, documentation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm dark:shadow-none transition-colors">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">🟡 Intermediate</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Add features, filters, search, and components.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm dark:shadow-none transition-colors sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">🔴 Advanced</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Refactoring, architecture, accessibility, performance.
            </p>
          </div>
        </div>
      </section>

      {/* JWOC CTA */}
      <section className="text-center border-t border-gray-200 dark:border-gray-800 pt-12 transition-colors">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This project is part of <strong className="text-gray-900 dark:text-white">JGEC Winter of Code (JWOC)</strong>
        </p>
        <p className="text-gray-500">
          Learn • Build • Contribute • Grow
        </p>
      </section>

    </div>
  )
}
