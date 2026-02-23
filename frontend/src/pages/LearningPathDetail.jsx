import { useParams, useSearchParams, Link } from "react-router-dom"
import paths from "../data/learningPaths.json"
import dsaLearningPath from "../data/dsaLearningPath"

function NonDsaPathDetail({ path }) {
  return (
    <div className="p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
      <h1 className="mb-4 text-3xl md:text-4xl font-bold">{path.title}</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{path.description}</p>

      <h2 className="mb-3 text-xl md:text-2xl font-semibold">Topics</h2>
      <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
        {path.topics.map((topic, index) => (
          <li key={`${path.slug}-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  )
}

export default function LearningPathDetail() {
  const { slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const path = paths.find(item => item.slug === slug)

  if (!path) {
    return <p className="p-10">Path not found</p>
  }

  if (path.slug !== "dsa") {
    return <NonDsaPathDetail path={path} />
  }

  const selectedTopicId = searchParams.get("topic")
  const selectedTopic = dsaLearningPath.topics.find(topic => topic.id === selectedTopicId)
  const selectedContent = selectedTopic ? dsaLearningPath.content[selectedTopic.id] : null

  return (
    <div className="space-y-6 md:space-y-8 p-4 md:p-10 transition-colors">
      <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm dark:shadow-none p-5 md:p-8 transition-colors">
        <h1 className="mb-2 md:mb-3 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">{dsaLearningPath.hero.title}</h1>
        <p className="mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300 transition-colors">{path.description}</p>
        <p className="mb-2 text-gray-600 dark:text-gray-400 transition-colors">{dsaLearningPath.hero.subtitle}</p>
        <p className="text-sm text-cyan-600 dark:text-cyan-200 transition-colors">{dsaLearningPath.hero.audience}</p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-200 transition-colors">Choose Topic</h2>
          {selectedTopic && (
            <button
              type="button"
              onClick={() => setSearchParams({})}
              className="w-fit rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 transition hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-200 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
            >
              Back to topic cards
            </button>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dsaLearningPath.topics.map(topic => {
            const isSelected = topic.id === selectedTopicId
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSearchParams({ topic: topic.id })}
                className={`rounded-xl border p-4 md:p-5 text-left transition-colors ${isSelected
                  ? "border-cyan-500 bg-cyan-50 dark:border-cyan-400 dark:bg-cyan-900/20"
                  : "border-gray-200 bg-white shadow-sm hover:border-cyan-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40 dark:shadow-none dark:hover:border-cyan-600 dark:hover:bg-gray-800/70"
                  }`}
              >
                <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-colors">{topic.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">{topic.shortDescription}</p>
              </button>
            )
          })}
        </div>
      </section>

      {selectedContent ? (
        <section className="space-y-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 p-5 md:p-7 transition-colors">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{selectedContent.title}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 transition-colors">{selectedContent.intro}</p>
          </div>

          <div className="space-y-5">
            {selectedContent.phases.map(phase => (
              <article key={phase.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-5 shadow-sm dark:shadow-none transition-colors">
                <h3 className="mb-4 text-xl font-semibold text-cyan-600 dark:text-cyan-200 transition-colors">{phase.title}</h3>

                <div className="space-y-4">
                  {phase.sections.map((section, sectionIndex) => (
                    <div key={`${phase.id}-section-${sectionIndex}`}>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white transition-colors">{section.heading}</h4>
                      <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300 transition-colors">
                        {section.points.map((point, pointIndex) => (
                          <li key={`${phase.id}-point-${sectionIndex}-${pointIndex}`}>
                            <Link
                              to={`/dsa/${selectedTopic.id}/${point.id}`}
                              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 hover:underline transition-colors block py-0.5"
                            >
                              {point.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {phase.note && (
                  <p className="mt-4 rounded-lg border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/40 p-3 text-sm text-cyan-800 dark:text-cyan-100 transition-colors">
                    <span className="font-semibold">Mindset:</span> {phase.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/20 p-6 transition-colors">
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            Select a topic card above to view its structured content here.
          </p>
        </section>
      )}
    </div>
  )
}
