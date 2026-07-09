import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/portfolioData'
import { SectionHeading } from './Education'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-bar-fill').forEach((bar) => {
        gsap.to(bar, {
          width: bar.dataset.level + '%',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
          },
        })
      })

      gsap.from('.skill-item', {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading eyebrow="Toolbox" title="Skills" />

      <div ref={ref} className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="flex justify-between mb-2">
              <span className="font-mono text-sm text-fog">{skill.name}</span>
              <span className="font-mono text-sm text-signal">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-ink-soft rounded-full overflow-hidden border border-line">
              <div
                className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-signal to-violet"
                style={{ width: 0 }}
                data-level={skill.level}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}