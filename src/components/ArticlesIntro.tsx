"use client";
import { TrendingUp } from "lucide-react";


import React from 'react'
import { motion } from 'motion/react';

export const ArticlesIntro = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400">Technical Writing</span>
            </div>

            <h1 className="md:text-6xl leading-relaxed font-bold mb-6 bg-linear-to-r from-white to-white/60 dark:from-white dark:to-white/60 light:from-slate-900 light:to-slate-600 bg-clip-text text-transparent">
                Articles & Insights
            </h1>
            <p className="md:text-xl text-white/60 dark:text-white/60 light:text-slate-600 max-w-3xl">
                Thoughts on frontend development, performance, architecture, and everything in between.
            </p>
        </motion.div>
    )
}
