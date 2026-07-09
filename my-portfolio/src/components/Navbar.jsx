import { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-ink/70 border-b border-line"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display font-bold text-lg text-fog">
          Iftekhar<span className="text-signal">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-mist">
          {links.map((link, i) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-signal transition-colors">
                <span className="text-signal">0{i + 1}.</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block border border-signal text-signal px-4 py-2 rounded-full text-sm font-mono hover:bg-signal hover:text-ink transition-colors"
        >
          Let's Talk
        </a>

        <button className="md:hidden text-fog" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm text-mist"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="hover:text-signal">
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  )
}