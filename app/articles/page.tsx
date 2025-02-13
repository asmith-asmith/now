import { ExternalLink } from "lucide-react"

export default function ArticlesPage() {
  return (
    <section className="space-y-12">
      <div className="border-t border-b border-gray-200 py-16">
        <h1 className="text-4xl font-medium">/articles</h1>
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <article key={article.title} className="space-y-2">
            <h2 className="text-xl font-medium">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-gray-600"
              >
                {article.title}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </h2>
            <p className="text-sm text-gray-600">{article.source}</p>
            <p className="text-gray-600">{article.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const articles = [
  {
    title: "The Friendship That Made Google Huge",
    source: "The New Yorker",
    url: "#",
    description:
      "An fascinating look at the partnership between Jeff Dean and Sanjay Ghemawat, whose close collaboration helped make Google what it is today.",
  },
  {
    title: "How Music Affects Your Brain",
    source: "Scientific American",
    url: "#",
    description:
      "A deep dive into the neuroscience of music and its profound effects on our emotions, memory, and cognitive function.",
  },
  {
    title: "The Secret Life of Trees",
    source: "National Geographic",
    url: "#",
    description:
      "An exploration of how trees communicate and share resources through underground fungal networks, revealing the complex social lives of forests.",
  },
]

