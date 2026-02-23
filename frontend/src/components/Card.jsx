export default function Card({ title, description, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:scale-105 transition-all border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
      {title && <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors">{title}</h3>}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors">{description}</p>
      )}
      {children}
    </div>
  )
}
