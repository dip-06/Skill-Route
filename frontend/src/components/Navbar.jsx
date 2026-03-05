import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/learning-paths", label: "Learning Paths" },
    { path: "/projects", label: "Projects" },
    { path: "/contributors", label: "Contributors" },
    { path: "/contact", label: "Contact us" }
  ]

  return (
    <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 md:px-8 py-4 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex">
        <img src="../../logo.png" alt=""  className="h-[50px] w-[50px] pr-1"/>
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 py-2">
            SkillRoute
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors font-medium ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Auth Buttons */}
          <div className="flex items-center gap-4 ml-4">
            <Link
              to="/signin"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu + Theme */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg md:hidden flex flex-col pt-2 pb-4 px-4 gap-4 z-40 transition-colors">
          
          {navLinks.map((item, i) => (
            <NavLink
              key={`mobile-${i}`}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition-colors font-medium p-2 block rounded-md ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:text-gray-900 dark:hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <Link
              to="/signin"
              onClick={closeMenu}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
