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
    title: "Stranger in a Strange Land",
    author: "Robert A. Heinlein",
    description: "A science fiction classic about a human raised by Martians.",
  },
  {
    title: "The E-myth Revisited",
    author: "Michael E. Gerber",
    description: "A guide to small business success.",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    description: "A nostalgic story of loss and sexuality.",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    description: "A philosophical novel about faith, doubt, and reason.",
  },
]

const topTenBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A tragic story of Jay Gatsby and his unrequited love.",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    description: "A science fiction epic set on the desert planet Arrakis.",
  },
  {
    title: "American Gods",
    author: "Neil Gaiman",
    description: "A blend of Americana, fantasy, and mythology.",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description: "A novel about vanity and moral corruption.",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel, Blake Masters",
    description: "Notes on startups and building the future.",
  },
  {
    title: "The Overstory",
    author: "Richard Powers",
    description: "A novel about trees and the people who love them.",
  },
  {
    title: "The Corrections",
    author: "Jonathan Franzen",
    description: "A family drama set in the late 20th century.",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy adventure about Bilbo Baggins.",
  },
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy trilogy.",
  },
]

const otherBooks = [
  {
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    description: "A biography of Albert Einstein.",
  },
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu, Ken Liu",
    description: "A science fiction novel about first contact with aliens.",
  },
  {
    title: "Rules of Civility",
    author: "Amor Towles",
    description: "A novel set in 1930s New York.",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "A history of the human species.",
  },
  {
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    description: "A novel about a man under house arrest in a hotel.",
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism.",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    description: "A series about a young wizard.",
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    description: "A satirical novel about World War II.",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    description: "A political allegory about a farm animal rebellion.",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    description: "A novel about boys stranded on an island.",
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    description: "A novel about existentialism and absurdism.",
  },
]