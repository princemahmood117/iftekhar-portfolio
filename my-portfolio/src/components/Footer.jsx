export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-4 font-mono text-xs text-mist">
        <p>© {new Date().getFullYear()} Iftekhar Mahmood. All rights reserved.</p>
        
      </div>
    </footer>
  )
}