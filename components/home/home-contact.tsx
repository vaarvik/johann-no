"use client"

import { motion } from "framer-motion"
import { Send, Zap } from "lucide-react"
import { Button } from "../ui/button"

export default function HomeContact() {
  return (
    <section className="py-32 bg-slate-800 relative overflow-hidden border-t border-slate-700">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </p>

          <div className="flex gap-4 justify-center">
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 text-base font-medium transition-all duration-300 flex items-center gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
            <Button
              variant="outline"
              onClick={() => {}}
              className="border-slate-600 text-slate-200 bg-slate-700 hover:bg-slate-600 hover:text-white px-6 py-3 text-base font-medium flex items-center gap-2"
            >
              <Zap className="h-4 w-4" />
              See how this site was made
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
