export default function BooksPage() {
  return (
    <section className="space-y-12">
      <div className="border-t border-b border-gray-200 py-16">
        <h1 className="text-4xl font-medium">/books</h1>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-medium">Current</h3>
        {currentBooks.map((book, index) => (
          <article key={book.title} className="space-y-2">
            <h4 className="text-xl font-medium">
              {index + 1}. {book.title} <span className="text-sm text-gray-600">by {book.author}</span>
            </h4>
            <p className="text-gray-600 ml-4">{book.description}</p>
          </article>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-medium">Top Ten</h3>
        {topTenBooks.map((book, index) => (
          <article key={book.title} className="space-y-2">
            <h4 className="text-xl font-medium">
              {index + 1}. {book.title} <span className="text-sm text-gray-600">by {book.author}</span>
            </h4>
            <p className="text-gray-600 ml-4">{book.description}</p>
          </article>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-medium">Others</h3>
        {otherBooks.map((book, index) => (
          <article key={book.title} className="space-y-2">
            <h4 className="text-xl font-medium">
              {index + 1}. {book.title} <span className="text-sm text-gray-600">by {book.author}</span>
            </h4>
            <p className="text-gray-600 ml-4">{book.description}</p>
          </article>
        ))}
      </div>

   </section>
  )
}

const currentBooks = [
  {
    title: "The Alignment Problem",
    author: "Brian Christian",
    description:
      "A humane tour through the history of machine learning that asks what it would actually mean to build systems aligned with human values.",
  },
  {
    title: "Co‑Intelligence: Living and Working with AI",
    author: "Ethan Mollick",
    description:
      "A practical, story‑driven guide to treating AI as a collaborator, full of concrete experiments and a grounded sense of both promise and limits.",
  },
  {
    title: "The Coming Wave",
    author: "Mustafa Suleyman with Michael Bhaskar",
    description:
      "An insider’s view of how AI and synthetic biology could destabilize institutions, and what governance might look like if we take that seriously.",
  },
  {
    title: "AI Needs You",
    author: "Verity Harding",
    description:
      "Argues that steering AI is a civic, not just technical, project, and sketches what democratic participation in AI governance could look like.",
  },
  {
    title: "Human Compatible",
    author: "Stuart Russell",
    description:
      "A foundational argument that we should design AI systems explicitly around uncertainty about human preferences rather than fixed objectives.",
  },
  {
    title: "Genius Makers",
    author: "Cade Metz",
    description:
      "A reported history of the deep learning boom, tracing the people, companies, and rivalries that shaped today’s AI landscape.",
  },
  {
    title: "Chip War",
    author: "Chris Miller",
    description:
      "Explains how semiconductor supply chains became a new terrain for geopolitics and why compute has turned into a strategic resource.",
  },
  {
    title: "The Age of Surveillance Capitalism",
    author: "Shoshana Zuboff",
    description:
      "A long, forceful argument that data extraction and behavioral prediction have quietly reshaped capitalism and our sense of agency.",
  },
  {
    title: "The Worlds I See",
    author: "Fei‑Fei Li",
    description:
      "A memoir‑meets‑history of computer vision and AI, grounding technical progress in the life of one of the field’s key figures.",
  },
]

const topTenBooks = [
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    description:
      "A sprawling, funny, brutal novel that uses one family to stage arguments about God, freedom, and what it means to be responsible for others.",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    description:
      "Desert ecology, messianic politics, and imperial resource extraction wrapped in operatic sci‑fi that still feels uncomfortably current.",
  },
  {
    title: "The Alignment Problem",
    author: "Brian Christian",
    description:
      "Probably the single best narrative overview of how modern AI actually works and why value alignment is such a knotty problem.",
  },
  {
    title: "The Coming Wave",
    author: "Mustafa Suleyman with Michael Bhaskar",
    description:
      "Frames AI and synthetic biology as a coupled wave of capability and risk, and pushes you to think institutionally, not just individually.",
  },
  {
    title: "Human Compatible",
    author: "Stuart Russell",
    description:
      "A clear, technical yet accessible case for redesigning AI objectives around human preferences and corrigibility.",
  },
  {
    title: "The Overstory",
    author: "Richard Powers",
    description:
      "Interleaves human lives with the timescale of trees, making questions about attention, stewardship, and interdependence feel newly urgent.",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description:
      "A sweeping, opinionated history of our species that’s useful as a backdrop when thinking about where AI might fit in the longer story.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description:
      "The classic map of our own cognitive glitches, indispensable if you’re going to lean on systems trained on human behavior.",
  },
  {
    title: "The Dispossessed",
    author: "Ursula K. Le Guin",
    description:
      "An anarchist physics novel that quietly asks what a non‑capitalist, non‑hierarchical technological society could look like.",
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    description:
      "A cold, careful exploration of gender, loyalty, and misunderstanding on an alien world that makes our own categories feel provisional.",
  },
]

const otherBooks = [
  {
    title: "Stranger in a Strange Land",
    author: "Robert A. Heinlein",
    description:
      "Countercultural, messy, and very much of its time, but still a provocative look at what counts as normal when you’re raised elsewhere.",
  },
  {
    title: "1984",
    author: "George Orwell",
    description:
      "The go‑to reference for surveillance and language as control; still useful shorthand when thinking about data and power.",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    description:
      "Melancholic, atmospheric realism from Murakami about memory, depression, and the version of ourselves that lives only in stories.",
  },
  {
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    description:
      "A warm, meticulously structured novel about constraint, dignity, and finding a full life within very fixed walls.",
  },
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu, trans. Ken Liu",
    description:
      "Hard sci‑fi that starts with Cultural Revolution physics and ends with first contact, information theory, and existential risk.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A short, sharp look at aspiration, performance, and the stories we tell about success and failure.",
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    description:
      "Flat, unsettling prose about alienation and meaning that still reads like a glitch in the social code.",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel with Blake Masters",
    description:
      "Polarizing but concise notes on startups and monopoly‑driven thinking, useful as a primary source for a certain Silicon Valley worldview.",
  },
  {
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    description:
      "A lively biography of Einstein that doubles as a tour through the intellectual culture around early 20th‑century physics.",
  },
  {
    title: "Rules of Civility",
    author: "Amor Towles",
    description:
      "Elegant historical fiction about class, reinvention, and how a single night can reroute an entire life.",
  },
]