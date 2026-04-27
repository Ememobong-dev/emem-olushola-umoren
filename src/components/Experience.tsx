"use client";

import { Award, Star } from "lucide-react";
import { motion } from "motion/react";


const experience = [
  {
    year: "07/2025 - 04/2026",
    role: "Frontend Engineer",
    company: "Sapphire Virtual Network Limited",
    description:
      "Driving frontend development for business-critical fintech platforms, including recovery operations, device financing, customer onboarding, KYC workflows, and role-based dashboards across the company’s unified 3.0 platform.",
    achievements: [
      "Built Recovery Portal for field agents",
      "Developed role-based dashboards",
      "Improved onboarding and KYC flows"
    ]
  },
  {
    year: "2025",
    role: "Frontend Engineer",
    company: "ShotByPortable",
    description:
      "Built a responsive photography portfolio platform with a polished customer-facing experience and a custom admin dashboard for managing galleries, pricing packages, and booking-related content.",
    achievements: [
      "Built responsive portfolio website",
      "Created custom admin dashboard",
      "Improved brand presentation"
    ]
  },
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "Siryoung Technologies",
    description:
      "Developed and deployed a modern company platform using Next.js, TypeScript, and Tailwind CSS, translating Figma designs into reusable, pixel-perfect components optimized for performance, SEO, and responsiveness.",
    achievements: [
      "Built platform with Next.js",
      "Implemented SEO and Open Graph",
      "Created reusable UI components"
    ]
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "AyoCPA",
    description:
      "Developed a professional website and client-facing portal for a Canadian accounting firm, helping users access tax filing services and financial resources through a responsive, consistent, and user-friendly interface.",
    achievements: [
      "Built Client Portal interface",
      "Translated UX designs to UI",
      "Ensured mobile responsiveness"
    ]
  },
  {
    year: "2020 - 2022",
    role: "Frontend Developer",
    company: "Reed-Tech",
    description:
      "Built responsive websites and client-facing web applications for businesses and organizations across multiple industries, including restaurant, renewable energy, and nonprofit sectors, while working within a tech services environment.",
    achievements: [
      "Built Nahedris restaurant website",
      "Developed Asbol solar company website",
      "Delivered NGO and business websites",
      "Developed WHyNotNow travel agency website"
    ]
  }
];


export const Experience = () => {
  return (
    <section className="sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 dark:from-purple-400 dark:to-pink-400 light:from-purple-600 light:to-pink-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-white/60 dark:text-white/60 light:text-slate-600 text-lg">
            My professional journey in frontend development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 light:from-cyan-600 light:to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/30 light:shadow-cyan-600/30">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {index < experience.length - 1 && (
                    <div className="w-0.5 flex-1 bg-linear-to-b from-purple-500/50 to-transparent dark:from-purple-500/50 dark:to-transparent light:from-purple-400/50 light:to-transparent mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="bg-linear-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 light:from-white light:to-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 rounded-2xl p-6 hover:border-white/20 dark:hover:border-white/20 light:hover:border-slate-300 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
                      <div>
                        <h3 className="sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-1">{exp.role}</h3>
                        <p className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="mt-3 sm:mt-0 px-4 py-1.5 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-300 rounded-full text-sm text-purple-300 dark:text-purple-300 light:text-purple-700 font-medium">
                        {exp.year}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-white/60 dark:text-white/60 light:text-slate-600 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 rounded-full text-xs text-white/70 dark:text-white/70 light:text-slate-700"
                        >
                          <Star className="hidden sm:block w-3 h-3 text-yellow-400 dark:text-yellow-400 light:text-yellow-600" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
