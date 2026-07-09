import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { SectionHeading } from './Education'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    formData.append('access_key', 'ad832021-ebbb-478c-bbda-0b03c5f233cb')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()

      if (result.success) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading eyebrow="Let's Talk" title="Get In Touch" />

      <div className="mt-14 grid md:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-6"
        >
          <p className="text-mist leading-relaxed">
            I'm currently open to new opportunities. Whether you have a
            question, a project in mind, or just want to say hi - my inbox
            is always open.
          </p>

          <a href="mailto:princemahmood117@gmail.com" className="flex items-center gap-4 group">
            <span className="w-11 h-11 rounded-xl bg-signal/10 flex items-center justify-center text-signal">
              <Mail size={18} />
            </span>
            <span className="text-fog group-hover:text-signal transition-colors text-sm">
              princemahmood117@gmail.com
            </span>
          </a>

          <a href="tel:+8801000000000" className="flex items-center gap-4 group">
            <span className="w-11 h-11 rounded-xl bg-signal/10 flex items-center justify-center text-signal">
              <Phone size={18} />
            </span>
            <span className="text-fog group-hover:text-signal transition-colors text-sm">
              +880 1540767042
            </span>
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5 bg-panel border border-line rounded-2xl p-8"
        >
          <input type="hidden" name="subject" value="New message from your portfolio" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-mono text-xs text-mist block mb-2">Name</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-ink-soft border border-line rounded-lg px-4 py-3 text-sm text-fog outline-none focus:border-signal transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-mist block mb-2">Email</label>
              <input
                required
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full bg-ink-soft border border-line rounded-lg px-4 py-3 text-sm text-fog outline-none focus:border-signal transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-xs text-mist block mb-2">Phone (optional)</label>
            <input
              name="phone"
              type="tel"
              placeholder="+880 100***0000"
              className="w-full bg-ink-soft border border-line rounded-lg px-4 py-3 text-sm text-fog outline-none focus:border-signal transition-colors"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-mist block mb-2">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me what you're thinking..."
              className="w-full bg-ink-soft border border-line rounded-lg px-4 py-3 text-sm text-fog outline-none focus:border-signal transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 bg-signal text-ink font-mono text-sm font-semibold px-6 py-3 rounded-lg hover:bg-signal-dim transition-colors disabled:opacity-60 cursor-pointer"
          >
            {status === 'sending' ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
          </button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm text-signal">
              <CheckCircle size={16} /> Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle size={16} /> Something went wrong. Try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}