import Link from "next/link"

export default function Page() {
  return (
    <section className="space-y-16">
      <div className="border-t border-b border-gray-200 py-16">
        <h1 className="text-4xl font-medium">/now</h1>
      </div>

      <div className="space-y-2">
        <p className="font-medium">Dr. Seuss</p>
        <p className="text-gray-600">A person's a person, no matter how small</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">About Me</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            I'm currently a Software Engineer at a large bank. Previously, I worked in the healthcare space in the lab
            automation space as well as the drug research space.
          </p>
          <p>
            I'm interested in things. Here are my current favorite{" "}
            <Link href="/movies" className="text-gray-900 underline underline-offset-4">
              movies
            </Link>
            ,{" "}
            <Link href="/books" className="text-gray-900 underline underline-offset-4">
              books
            </Link>
            ,{" "}
            <Link href="/articles" className="text-gray-900 underline underline-offset-4">
              articles
            </Link>
            , and some{" "}
            <Link href="/music" className="text-gray-900 underline underline-offset-4">
              music
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

