import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { dsaTopicsContent } from "../data/dsaTopicsContent"

function toggleOpenId(id, setState) {
  setState(previousIds => (
    previousIds.includes(id)
      ? previousIds.filter(previousId => previousId !== id)
      : [...previousIds, id]
  ))
}

function getDefaultOpenSections(content) {
  const defaultOpenSections = ["explanation"]
  if (content?.visual) {
    defaultOpenSections.push("visual")
  }
  if (content?.code) {
    defaultOpenSections.push("code")
  }
  return defaultOpenSections
}

function TopicDetailContent({ content, topicId }) {
  const [language, setLanguage] = useState("cpp")
  const [openSectionIds, setOpenSectionIds] = useState(() => getDefaultOpenSections(content))

  const isSectionOpen = sectionId => openSectionIds.includes(sectionId)

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
      <Link
        to={`/learning-paths/dsa?topic=${topicId}`}
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
      >
        <span className="mr-2">&lt;-</span> Back to Roadmap
      </Link>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 md:p-8 shadow-sm dark:shadow-none transition-colors">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors">{content.title}</h1>

        <div className="space-y-4">
          <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
            <button
              type="button"
              onClick={() => toggleOpenId("explanation", setOpenSectionIds)}
              aria-expanded={isSectionOpen("explanation")}
              className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
            >
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Explanation</h2>
              <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                {isSectionOpen("explanation") ? "Hide" : "Show"}
              </span>
            </button>

            {isSectionOpen("explanation") && (
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed transition-colors">
                  {content.explanation}
                </p>
              </div>
            )}
          </section>

          {content.visual && (
            <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
              <button
                type="button"
                onClick={() => toggleOpenId("visual", setOpenSectionIds)}
                aria-expanded={isSectionOpen("visual")}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Visual Walkthrough</h2>
                <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                  {isSectionOpen("visual") ? "Hide" : "Show"}
                </span>
              </button>

              {isSectionOpen("visual") && (
                <div className="px-4 pb-4">
                  {content.visual}
                </div>
              )}
            </section>
          )}

          {content.code && (
            <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
              <button
                type="button"
                onClick={() => toggleOpenId("code", setOpenSectionIds)}
                aria-expanded={isSectionOpen("code")}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Code Snippets</h2>
                <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                  {isSectionOpen("code") ? "Hide" : "Show"}
                </span>
              </button>

              {isSectionOpen("code") && (
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-colors">
                    <div className="flex bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors">
                      <button
                        type="button"
                        onClick={() => setLanguage("cpp")}
                        className={`flex-1 py-3 text-sm font-semibold tracking-wider transition-colors ${language === "cpp"
                          ? "bg-white dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-500 dark:border-cyan-400"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
                          }`}
                      >
                        C++ Snippet
                      </button>
                      <button
                        type="button"
                        onClick={() => setLanguage("java")}
                        className={`flex-1 py-3 text-sm font-semibold tracking-wider transition-colors ${language === "java"
                          ? "bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 border-b-2 border-amber-500 dark:border-amber-400"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
                          }`}
                      >
                        Java Snippet
                      </button>
                    </div>

                    <pre className="p-4 md:p-5 overflow-x-auto min-h-[150px]">
                      <code className="text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre transition-colors">
                        {language === "cpp" ? content.code.cpp : content.code.java}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TopicDetail() {
  const { topicId, pointId } = useParams()
  const content = dsaTopicsContent[pointId]

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

  return <TopicDetailContent key={pointId} content={content} topicId={topicId} />
}
