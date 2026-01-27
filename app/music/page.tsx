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
        title: "SOS",
        artist: "SZA",
        url: "https://open.spotify.com/album/07w0rG5TETcyihsEIZR3qG",
      },
      {
        title: "the record",
        artist: "boygenius",
        url: "https://open.spotify.com/album/0e9GjrztzBw8oMC6n2CDeI",
      },
      {
        title: "Desire, I Want To Turn Into You",
        artist: "Caroline Polachek",
        url: "https://open.spotify.com/album/22PkV1Le9P3X4RY4xtmK0q",
      },
      {
        title: "Mr. Morale & The Big Steppers",
        artist: "Kendrick Lamar",
        url: "https://open.spotify.com/album/79ONNoS4M9tfIA1mYLBYVX",
      },
    ],
  },
  {
    title: "Deep Work / Focus",
    items: [
      {
        title: "Ambient 1: Music for Airports",
        artist: "Brian Eno",
        url: "https://open.spotify.com/album/063f8Ej8rLVTz9KkjQKEMa",
      },
      {
        title: "Sleep",
        artist: "Max Richter",
        url: "https://open.spotify.com/album/0JLN7JryQ2T7lBEYIrSQF1",
      },
    ],
  },
  {
    title: "All‑time Essentials",
    items: [
      {
        title: "Kind of Blue",
        artist: "Miles Davis",
        url: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA",
      },
      {
        title: "In Rainbows",
        artist: "Radiohead",
        url: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
      },
    ],
  },
]

