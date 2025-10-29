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
    url: "https://www.newyorker.com/magazine/2018/12/10/the-friendship-that-made-google-huge",
    description:
      "An fascinating look at the partnership between Jeff Dean and Sanjay Ghemawat, whose close collaboration helped make Google what it is today.",
  },
  {
    title: "How Music Affects Your Brain",
    source: "Scientific American",
    url: "https://www.scientificamerican.com/article/music-and-the-brain-2006-09/",
    description:
      "A deep dive into the neuroscience of music and its profound effects on our emotions, memory, and cognitive function.",
  },
  {
    title: "What Problems to Solve",
    source: "Richard Feynman",
    url: "http://genius.cat-v.org/richard-feynman/writtings/letters/problems",
    description:
      "",
  },
    {
    title: "Thoughts on Thinking",
    source: "Dustin Curtis",
    url: "https://dcurt.is/thinking",
    description:
      "",
  },
]

