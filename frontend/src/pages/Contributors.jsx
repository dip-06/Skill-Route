import contributors from "../data/contributors.json"

export default function Contributors() {
  return (
    <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {contributors.map((c, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none p-6 rounded-lg text-center transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{c.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{c.role}</p>
        </div>
      ))}
    </div>
  )
}
