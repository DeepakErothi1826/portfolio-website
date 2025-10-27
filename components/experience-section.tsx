// Renders three groups with clean spacing, left logo, center text, right-aligned dates.
// Mobile stacks date under title; desktop keeps right alignment.

type Item = {
  logoAlt: string
  logoSrc?: string
  title: string
  subtitle: string
  dates: string
}

function Row({ item }: { item: Item }) {
  return (
    <div className="grid grid-cols-[48px_1fr_auto] items-center gap-4 py-4 border-b border-white/5 last:border-b-0 md:py-5">
      <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
        {item.logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logoSrc || "/placeholder.svg"}
            alt={item.logoAlt}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        ) : (
          <span className="sr-only">{item.logoAlt}</span>
        )}
      </div>
      <div className="min-w-0">
        <div className="font-semibold text-foreground text-pretty font-mono text-lg">{item.title}</div>
        <div className="text-muted-foreground font-mono text-base">{item.subtitle}</div>
        <div className="mt-1 text-sm text-muted-foreground md:hidden">{item.dates}</div>
      </div>
      <div className="hidden md:block text-muted-foreground whitespace-nowrap font-semibold font-sans text-base">{item.dates}</div>
    </div>
  )
}

function Group({
  title,
  items,
}: {
  title: string
  items: Item[]
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-foreground font-mono font-extrabold text-2xl">{title}</h3>
      <div className="rounded-xl bg-white/5 p-3 md:p-4">
        {items.map((it, i) => (
          <Row key={i} item={it} />
        ))}
      </div>
    </section>
  )
}

export default function ExperienceSection() {
  const building: Item[] = [
    {
      logoAlt: "Prepwise logo",
      logoSrc: "/prepwise.png",
      title: "Prepwise",
      subtitle: "AI Voice Agents for Interview Preparation",
      dates: "July 2025 - Present",
    },
    {
      logoAlt: "HackTracker logo",
      logoSrc: "/hacktracker.png",
      title: "HackTracker",
      subtitle: "Track Hackathons for Efficient Participation",
      dates: "June 2025 - Present",
    },
  ]

  const work: Item[] = [
     {
      logoAlt: "Ericson Insurance TPA Pvt. Ltd.",
      logoSrc: "/Ericson.png",
      title: "Ericson Insurance TPA Pvt. Ltd.",
      subtitle: "Mobile Application Developer",
      dates: "  Aug 2025 - Sep 2025",
    },
    {
      logoAlt: "Shunayaverse",
      logoSrc: "/Shunayaverse.png",
      title: "Shunayaverse",
      subtitle: "Full-Stack Developer",
      dates: "  Jun 2024 - May 2025",
    },
  {
      logoAlt: "Meeraai Tech Solutions",
      logoSrc: "/Meeraai.png",
      title: "Meeraai Tech Solutions",
      subtitle: "Full-Stack Developer Internship",
      dates: "Nov 2023 - Apr 2024",
    },
    {
      logoAlt: "Oil and Natural Gas Corporation logo",
      logoSrc: "/CodeSoft.jpg",
      title: "Codesoft",
      subtitle: "UI/UX Designer Internship",
      dates: "Aug 2023 - Nov 2023",
    },
  ]

  const education: Item[] = [
    {
      logoAlt: "Vidyalankar School Of Information Technology",
      logoSrc: "/VSIT.png",
      title: "Vidyalankar School Of Information Technology",
      subtitle: "Bachelor of Information Technology",
      dates: "July 2021 - Oct 2024",
    },
     {
      logoAlt: "Vishaka Dairy Jr.Collage",
      logoSrc: "/allen.png",
      title: "Vishaka Dairy Jr.Collage",
      subtitle: "Xl to Xll ",
      dates: "July 2019 - July 2021",
    },
    {
      logoAlt: " The Andhra Education Socity High School",
      logoSrc: "/Andhra.png",
      title: "Andhara Education Socity High School",
      subtitle: "High School ",
      dates: "July 2007 - July 2018",
    },
  ]

  return (
    <div className="space-y-8 md:space-y-10">
      <Group title={"I'm Currently Building"} items={building} />
      <Group title="Work Experiences" items={work} />
      <Group title="Education" items={education} />
    </div>
  )
}
