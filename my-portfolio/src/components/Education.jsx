import { useGsapFade } from '../hooks/useGsapFade'
import { education } from '../data/portfolioData'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const ref = useGsapFade()

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading eyebrow="Background" title="Education" />

      <div ref={ref} className="mt-14 space-y-6">
        {education.map((item) => (
          <div
            key={item.degree}
            className="group flex flex-col md:flex-row gap-6 md:items-center border border-line rounded-2xl p-6 bg-panel/40 hover:border-signal/50 transition-colors"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center text-signal">
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs text-signal mb-1">{item.year}</p>
              <h3 className="font-display font-semibold text-xl text-fog">{item.degree}</h3>
              <p className="text-mist text-sm mt-1">{item.school}</p>
              <p className="text-mist text-sm mt-2 leading-relaxed">{item.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="font-mono text-signal text-sm mb-2">// {eyebrow}</p>
      <h2 className="font-display font-bold text-4xl text-fog">{title}</h2>
    </div>
  )
}