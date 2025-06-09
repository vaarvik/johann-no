import { Coffee, Copyright, Github, Heart, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Meow_Script']">
              Johann Vårvik
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Fullstack Developer & IT Manager passionate about creating innovative digital solutions
              and leading technical teams to success.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 w-10 h-10 transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 w-10 h-10 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800 w-10 h-10 transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Experience", "Skills", "Portfolio", "Contact", "How this site was made"].map(item => (
                <li key={item}>
                  <button className="text-slate-400 hover:text-white transition-colors duration-200 text-sm" type="button">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "System Architecture", "Team Leadership", "Technical Consulting", "Design"].map(item => (
                <li key={item}>
                  <span className="text-slate-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Copyright className="h-4 w-4" />
            <span className="text-sm">
              2025 Johann Vårvik. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> and <Coffee className="h-4 w-4 text-yellow-600" />
            </span>
            <Separator orientation="vertical" className="h-4 bg-slate-700" />
            <span>Built with Next.js, React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
