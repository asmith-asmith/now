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
    title:
      "Generative agents will change our society in weird, wonderful and worrying ways. Can philosophy help us get a grip on them?",
    source: "Aeon",
    url: "https://aeon.co/essays/can-philosophy-help-us-get-a-grip-on-the-consequences-of-ai",
    description:
      "Seth Lazar maps how generative AI agents might reshape social life, then argues that philosophy is one of the few tools we have to reason about those shifts in advance.",
  },
  {
    title: "Why ‘open’ AI systems are actually closed, and why this matters",
    source: "Nature",
    url: "https://www.nature.com/articles/s41586-024-08141-1",
    description:
      "Unpacks how big tech has ‘open‑washed’ AI, showing that openness alone doesn’t fix power concentration or give real leverage to researchers and the public.",
  },
  {
    title: "Artificial Intelligence and the limits of reason: a framework for responsible use in public and private sectors",
    source: "Nature Humanities & Social Sciences Communications",
    url: "https://www.nature.com/articles/s41599-025-05749-0",
    description:
      "Argues that today’s systems lack key human reasoning capacities and proposes a pragmatic framework for deciding where AI belongs—and doesn’t—in public and private decision‑making.",
  },
    {
    title: "We need a new ethics for a world of AI agents",
    source: "Nature",
    url: "https://www.nature.com/articles/d41586-025-02454-5",
    description:
      "Sketches what an ethics tailored to long‑lived, semi‑autonomous AI agents might look like, focusing on relationships, accountability, and coordination.",
  },
  {
    title: "AI is transforming the economy — understanding its impact requires both data and imagination",
    source: "Nature",
    url: "https://www.nature.com/articles/d41586-025-04053-w",
    description:
      "Daniel Björkegren surveys wildly divergent GDP forecasts for AI and makes the case that economists need both better data and more imaginative models.",
  },
  {
    title: "Datacenter Industry Model",
    source: "SemiAnalysis",
    url: "https://www.semianalysis.com/p/datacenter-model",
    description:
      "A deep, model‑driven breakdown of how AI data centers actually make money, from GPUs and power to utilization and hyperscaler capex.",
  },
  {
    title: "The $600 Billion Silicon Supercycle: How AI Infrastructure is Powering the 2026 Market Surge",
    source: "MarketMinute / Wedbush Securities",
    url: "https://investor.wedbush.com/wedbush/article/marketminute-2026-1-2-the-600-billion-silicon-supercycle-how-ai-infrastructure-is-powering-the-2026-market-surge",
    description:
      "Connects the headline $600B hyperscaler capex number to a broader thesis about AI infrastructure as the engine of current equity markets.",
  },
  {
    title: "We need accountability in human–AI agent relationships",
    source: "Nature AI Ethics",
    url: "https://www.nature.com/articles/s44387-025-00041-7",
    description:
      "Zooms in on what responsibility and accountability should look like when people form ongoing relationships with AI agents.",
  },
  {
    title: "If AIs can feel pain, what is our responsibility towards them?",
    source: "Aeon",
    url: "https://aeon.co/essays/if-ais-can-feel-pain-what-is-our-responsibility-towards-them",
    description:
      "Pushes on the unsettling question of artificial suffering and what moral status increasingly complex AI systems might deserve.",
  },
  {
    title: "Open source AI isn’t truly open — here’s how researchers can reclaim the term",
    source: "Nature",
    url: "https://www.nature.com/articles/d41586-025-00930-6",
    description:
      "Pairs well with the ‘open‑washing’ critique, offering a concrete taxonomy and arguing for a stricter, more useful definition of open AI.",
  },
]

