import { ExternalLink } from "lucide-react"

export default function MusicPage() {
  return (
    <section className="space-y-12">
      <div className="border-t border-b border-gray-200 py-16">
        <h1 className="text-4xl font-medium">/music</h1>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <section key={category.title} className="space-y-4">
            <h2 className="text-xl font-medium">{category.title}</h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <article key={item.title} className="space-y-1">
                  <h3 className="font-medium">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-gray-600"
                    >
                      {item.title}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">{item.artist}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

const categories = [
  {
    title: "Current Favorites",
    items: [
      {
        title: "Circles",
        artist: "Mac Miller",
        url: "#",
      },
      {
        title: "Blue",
        artist: "Joni Mitchell",
        url: "#",
      },
      {
        title: "In Rainbows",
        artist: "Radiohead",
        url: "#",
      },
    ],
  },
  {
    title: "Classic Albums",
    items: [
      {
        title: "Kind of Blue",
        artist: "Miles Davis",
        url: "#",
      },
      {
        title: "Abbey Road",
        artist: "The Beatles",
        url: "#",
      },
      {
        title: "What's Going On",
        artist: "Marvin Gaye",
        url: "#",
      },
    ],
  },
]

