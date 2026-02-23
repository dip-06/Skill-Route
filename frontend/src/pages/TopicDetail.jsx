import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { dsaTopicsContent } from "../data/dsaTopicsContent"

export default function TopicDetail() {
    const { topicId, pointId } = useParams()
    const content = dsaTopicsContent[pointId]
    const [language, setLanguage] = useState("cpp")

    if (!content) {
        return (
            <div className="p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
                <h1 className="text-xl md:text-2xl font-bold">Content not found</h1>
                <Link to={`/learning-paths/dsa?topic=${topicId}`} className="text-cyan-400 hover:underline mt-4 inline-block">
                    Return to Roadmap
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
            <Link
                to={`/learning-paths/dsa?topic=${topicId}`}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
            >
                <span className="mr-2">←</span> Back to Roadmap
            </Link>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 md:p-8 shadow-sm dark:shadow-none transition-colors">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors">{content.title}</h1>

                <div className="prose dark:prose-invert max-w-none mb-6 md:mb-8 transition-colors">
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed transition-colors">
                        {content.explanation}
                    </p>
                </div>

                {/* Visual Component Section */}
                {content.visual && (
                    <div className="my-8">
                        {content.visual}
                    </div>
                )}

                {/* Code Snippet Section */}
                {content.code && (
                    <div className="bg-gray-50 dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-colors">
                        {/* Tabs Header */}
                        <div className="flex bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors">
                            <button
                                onClick={() => setLanguage("cpp")}
                                className={`flex-1 py-3 text-sm font-semibold tracking-wider transition-colors ${language === "cpp"
                                    ? "bg-white dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-500 dark:border-cyan-400"
                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
                                    }`}
                            >
                                C++ Snippet
                            </button>
                            <button
                                onClick={() => setLanguage("java")}
                                className={`flex-1 py-3 text-sm font-semibold tracking-wider transition-colors ${language === "java"
                                    ? "bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 border-b-2 border-amber-500 dark:border-amber-400"
                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
                                    }`}
                            >
                                Java Snippet
                            </button>
                        </div>

                        {/* Code Body */}
                        <pre className="p-4 md:p-5 overflow-x-auto min-h-[150px]">
                            <code className="text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre transition-colors">
                                {language === "cpp" ? content.code.cpp : content.code.java}
                            </code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    )
}
