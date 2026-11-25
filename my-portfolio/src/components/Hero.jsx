
import { useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.to(".code-card", {
      y: -14,
      duration: 3.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, { scope });

  const name = "Iftekhar Mahmood";

  return (
    <section
      id="hero"
      ref={scope}
      className="relative mt-5 md:mt-0 min-h-screen flex items-center justify-center overflow-hidden grid-fade"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT: info */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-signal text-sm mt-12 md:mt-0  mb-4 md:mb-0">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-extrabold text-5xl md:text-6xl leading-tight text-fog mb-2"
          >
            {name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="font-display font-semibold text-3xl md:text-4xl text-mist mb-6"
          >
            I build things for the <span className="text-gradient">web</span>.
          </motion.h2>

          <motion.p variants={item} className="text-mist max-w-md mb-8 leading-relaxed">
            I'm a frontend developer specializing in building exceptional, fast,
            and accessible digital experiences with React, modern tooling, and
            thoughtful animation.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="bg-signal text-ink font-mono text-sm font-semibold px-6 py-3 rounded-full hover:bg-signal-dim transition-colors"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-line text-fog font-mono text-sm px-6 py-3 rounded-full hover:border-signal hover:text-signal transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-5 text-mist">
            <a href="https://github.com/princemahmood117" className="hover:text-signal transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/iftekhar-mahmood117/" className="hover:text-signal transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-signal transition-colors">
              <FaXTwitter size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: animated code mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="code-card w-full md:max-w-xl max-w-md bg-panel border border-line rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-ink-soft">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-mist">developer.jsx</span>
            </div>
            <TypingCode />
          </div>

          <div className="absolute -z-10 w-72 h-72 bg-signal/20 rounded-full blur-3xl -top-10 -right-10" />
          <div className="absolute -z-10 w-72 h-72 bg-violet/20 rounded-full blur-3xl -bottom-10 -left-10" />
        </motion.div>
      </div>

      <a
        href="#education"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

function TypingCode() {
  const lines = [
  { text: "const developer = {", color: "text-fog" },
  { text: "  name: 'Iftekhar Mahmood',", color: "text-signal" },
  { text: "  role: 'Frontend Developer',", color: "text-signal" },
  { text: "  stack: ['React', 'Express.js',", color: "text-violet" },
  { text: "          'MongoDB', 'Node.js',", color: "text-violet" },
  { text: "          'TypeScript', 'PostgreSQL',", color: "text-violet" },
  { text: "          'Next.js', 'Prisma', 'Vercel'", color: "text-violet" },
  { text: "  ],", color: "text-violet" },
  { text: "  passion: true,", color: "text-fog" },
  { text: "};", color: "text-fog" },
];

  return (
    <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto w-full">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.25, duration: 0.4 }}
          className={line.color}
        >
          {line.text}
        </motion.div>
      ))}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-2 h-4 bg-signal ml-1 align-middle"
      />
    </pre>
  );
}