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
    title: "Everything Everywhere All at Once",
    year: "2022",
    director: "Daniel Kwan, Daniel Scheinert",
    description:
      "A mind-bending exploration of family, identity, and the multiverse that somehow manages to be both deeply philosophical and wildly entertaining.",
  },
  {
    title: "Arrival",
    year: "2016",
    director: "Denis Villeneuve",
    description:
      "A thoughtful science fiction film about language, time, and human connection that stays with you long after watching.",
  },
  {
    title: "The Grand Budapest Hotel",
    year: "2014",
    director: "Wes Anderson",
    description:
      "A delightful comedy-drama that combines stunning visuals with a touching story about friendship and loyalty.",
  },
]

