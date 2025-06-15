"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../ui/button"

export default function HomeContact() {
  return (
    <section className="py-32 bg-slate-800 relative overflow-hidden border-t border-slate-700" id="contact">
      <div className="absolute inset-0 opacity-20">
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
            <Link href="mailto:contact@johann.com">
              <Button variant="primary" size="lg" icon="send">
                Send Message
              </Button>
            </Link>
            <Link href="/how-it-was-made">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {}}
                icon="zap"
              >
                See how this site was made
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
