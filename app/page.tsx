import { ArrowUpRight, ExternalLink, Mail } from 'lucide-react'

const projects = [
  { name: 'Vellum', type: 'AI / Productivity', year: '2025', description: 'A quieter way to think with AI. Vellum turns scattered ideas into clear, editable thinking.', accent: 'bg-[#eef1ff]', mark: 'V' },
  { name: 'Showerling', type: 'AI / Daily life', year: '2024', description: 'Small prompts for the in-between moments — made to help you notice what you already know.', accent: 'bg-[#e8f5f2]', mark: 'S' },
  { name: 'Foodstylist', type: 'AI / Food', year: '2024', description: 'A visual food companion that helps home cooks make beautiful, delicious choices.', accent: 'bg-[#fff1e8]', mark: 'F' },
]

const notes = [
  { date: '08.12.25', title: 'Building small AI products with a long shelf life', tag: 'Making' },
  { date: '06.24.25', title: 'What manufacturing taught me about software', tag: 'Work' },
  { date: '04.03.25', title: 'The case for slower interfaces', tag: 'Thinking' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8" aria-label="Main navigation">
        <a href="#top" className="text-sm font-semibold tracking-[-0.02em]">Jiuxueqian <span className="text-muted-foreground">Lab</span></a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
          <a className="transition-colors hover:text-foreground" href="#projects">Projects</a>
          <a className="transition-colors hover:text-foreground" href="#notes">Notes</a>
        </div>
        <a href="mailto:hello@jiuxueqian.com" className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60">Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} /></a>
      </nav>

      <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pb-36 md:pt-32">
        <p className="mb-7 text-sm font-medium text-muted-foreground">engineer · builder</p>
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.065em] md:text-8xl">Things for curious people.</h1>
        <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 md:mt-14 md:flex-row md:items-end">
          <p className="max-w-md text-pretty text-lg leading-8 text-muted-foreground">At Jiuxueqian（旧学前）. I bring the discipline of manufacturing into the messiness of building AI products — with care, clarity, and a bias toward shipping.</p>
          <a href="#projects" className="group flex w-fit items-center gap-2 text-sm font-medium">See selected work <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} /></a>
        </div>
      </section>

      <section id="about" className="border-t border-border px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          <p className="text-sm font-medium text-muted-foreground">01 / About me</p>
          <div className="max-w-2xl"><h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">A quality mindset for an uncertain medium.</h2><p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">My day job is about making complex systems reliable. My after-hours work is about making new systems feel human. At Jiuxueqian Lab, I explore the space between those two worlds — building calm, opinionated tools with AI.</p></div>
        </div>
      </section>

      <section id="projects" className="border-t border-border px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl"><div className="mb-12 flex items-end justify-between"><p className="text-sm font-medium text-muted-foreground">02 / Selected projects</p><span className="hidden text-sm text-muted-foreground md:block">A few things I&apos;ve made</span></div>
          <div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <article key={project.name} className="group flex min-h-[390px] flex-col justify-between rounded-[2rem] bg-secondary p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7"><div><div className={`mb-8 flex h-28 w-28 items-center justify-center rounded-full ${project.accent} text-4xl font-semibold tracking-[-0.08em]`}>{project.mark}</div><p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{project.type}</p><h3 className="text-3xl font-semibold tracking-[-0.05em]">{project.name}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{project.description}</p></div><div className="flex items-center justify-between border-t border-border/70 pt-5 text-sm"><span className="text-muted-foreground">{project.year}</span><a href="#contact" aria-label={`Learn more about ${project.name}`} className="flex items-center gap-1 font-medium opacity-0 transition-opacity group-hover:opacity-100">Explore <ExternalLink size={14} /></a></div></article>)}</div>
        </div>
      </section>

      <section id="notes" className="border-t border-border px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr] md:gap-20"><p className="text-sm font-medium text-muted-foreground">03 / Notes</p><div><div className="mb-2 flex items-center justify-between"><h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Thinking out loud.</h2><span className="text-sm text-muted-foreground">2025</span></div><div className="mt-8">{notes.map((note) => <a href="#contact" key={note.title} className="group grid grid-cols-[72px_1fr_auto] items-center gap-3 border-t border-border py-5 text-sm transition-colors hover:text-muted-foreground md:grid-cols-[90px_1fr_90px]"><span className="font-mono text-xs text-muted-foreground">{note.date}</span><span className="font-medium">{note.title}</span><span className="hidden text-right text-xs text-muted-foreground md:block">{note.tag} <ArrowUpRight className="ml-1 inline transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={13} /></span></a>)}</div></div></div></section>

      <footer id="contact" className="border-t border-border px-6 pb-8 pt-20 md:px-10 md:pt-28"><div className="mx-auto max-w-6xl"><h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">Have a good problem?<br /><span className="text-muted-foreground">Let&apos;s work on it.</span></h2><div className="mt-16 flex flex-col justify-between gap-8 border-t border-border pt-6 text-sm md:flex-row md:items-center"><p className="text-muted-foreground">© 2025 Jiuxueqian Lab</p><div className="flex items-center gap-5"><a href="mailto:hello@jiuxueqian.com" aria-label="Email" className="transition-opacity hover:opacity-50"><Mail size={18} strokeWidth={1.7} /></a><a href="#contact" aria-label="GitHub" className="transition-opacity hover:opacity-50"><ExternalLink size={18} strokeWidth={1.7} /></a><a href="#contact" aria-label="LinkedIn" className="transition-opacity hover:opacity-50"><ExternalLink size={18} strokeWidth={1.7} /></a></div></div></div></footer>
    </main>
  )
}
