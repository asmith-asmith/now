export default function MoviesPage() {
  return (
    <section className="space-y-12">
      <div className="border-t border-b border-gray-200 py-16">
        <h1 className="text-4xl font-medium">/movies</h1>
      </div>

      <div className="space-y-6">
        {movies.map((movie) => (
          <article key={movie.title} className="space-y-2">
            <h2 className="text-xl font-medium">{movie.title}</h2>
            <p className="text-sm text-gray-600">
              {movie.year} • Directed by {movie.director}
            </p>
            <p className="text-gray-600">{movie.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const movies = [
  {
    title: "Oppenheimer",
    year: "2023",
    director: "Christopher Nolan",
    description:
      "A dense, propulsive portrait of ambition, guilt, and world-altering technology that feels uncomfortably close to our present moment with AI.",
  },
  {
    title: "Barbie",
    year: "2023",
    director: "Greta Gerwig",
    description:
      "A bright, self-aware comedy that turns a toy into a lens for thinking about gender, consumerism, and who gets to write the story.",
  },
  {
    title: "Poor Things",
    year: "2023",
    director: "Yorgos Lanthimos",
    description:
      "A strange, gorgeous fable about agency and becoming, asking what it means to build a self from scratch in a world that wants to script you.",
  },
  {
    title: "Dune: Part Two",
    year: "2024",
    director: "Denis Villeneuve",
    description:
      "An operatic sci‑fi epic about prophecy, power, and exploitation, framing messianic narratives with the kind of skepticism that fits our age of techno‑utopianism.",
  },
  {
    title: "The Zone of Interest",
    year: "2023",
    director: "Jonathan Glazer",
    description:
      "A chilling study of ordinary life beside atrocity, about how people compartmentalize horror when the system rewards not looking too closely.",
  },
  {
    title: "Aftersun",
    year: "2022",
    director: "Charlotte Wells",
    description:
      "A quiet, fragmented memory of a father and daughter on vacation that captures how we reconstruct the past and the people we’ve lost.",
  },
  {
    title: "Anatomy of a Fall",
    year: "2023",
    director: "Justine Triet",
    description:
      "A courtroom drama that doubles as an epistemology puzzle, asking how much we can ever really know about another person—or even ourselves.",
  },
  {
    title: "Past Lives",
    year: "2023",
    director: "Celine Song",
    description:
      "A gentle, piercing story about migration, alternate timelines, and the lives we don’t live, told with the restraint of someone who trusts silence.",
  },
  {
    title: "Everything Everywhere All at Once",
    year: "2022",
    director: "Daniel Kwan, Daniel Scheinert",
    description:
      "A maximalist multiverse comedy that still finds room for tenderness, using absurdity to talk about regret, obligation, and choosing to care anyway.",
  },
  {
    title: "Arrival",
    year: "2016",
    director: "Denis Villeneuve",
    description:
      "A meditative first‑contact story about language, time, and grief that feels like a thought experiment written in light.",
  },
  {
    title: "Her",
    year: "2013",
    director: "Spike Jonze",
    description:
      "An intimate near‑future romance between a man and an operating system that anticipates today’s AI companions and asks what counts as a real relationship.",
  },
  {
    title: "The Social Network",
    year: "2010",
    director: "David Fincher",
    description:
      "A finely tuned origin myth for the social web, showing how a handful of bruised egos and asymmetric incentives can reshape the public sphere.",
  },
]

