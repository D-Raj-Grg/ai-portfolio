"use client";

import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { Ripple } from "./magicui/ripple";
import { GradientText } from "./magicui/animated-text";

export function IntroVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "9bdd545eebde424d8e835f92c0f55f95";
  const thumbnailUrl = `https://cdn.loom.com/sessions/thumbnails/${videoId}-with-play.gif`;

  return (
    <section id="intro-video" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Watch My Introduction</GradientText>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Get to know me better through this quick video introduction where I share my journey, passion, and what drives me.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Ripple Background */}
          <div className="absolute inset-0 -z-10">
            <Ripple
              mainCircleSize={150}
              mainCircleOpacity={0.2}
              numCircles={6}
              className="opacity-40"
            />
          </div>

          {/* Glow Effect Container */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Inner Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-50 blur-lg group-hover:opacity-75 transition duration-1000"></div>

            {/* Video Content */}
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {!isPlaying ? (
                // Thumbnail with Play Button
                <div className="relative aspect-video cursor-pointer" onClick={() => setIsPlaying(true)}>
                  {/* Thumbnail Image */}
                  <img
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center group/play">
                    {/* Play Button */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Play Button Glow */}
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-60 group-hover/play:opacity-100 transition-opacity"></div>

                      {/* Play Button */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 group-hover/play:border-white/40 transition-all">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </motion.div>

                    {/* Watch Now Text */}
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <p className="text-white text-lg font-semibold drop-shadow-lg">
                        Click to Watch
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Loom Embed
                <div className="relative aspect-video">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm border border-white/20"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Loom Iframe */}
                  <iframe
                    src={`https://www.loom.com/embed/${videoId}?autoplay=1&hideEmbedTopBar=true`}
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay"
                  ></iframe>
                </div>
              )}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-slate-400 text-sm">
            Duration: 2-3 minutes • Learn about my skills, experience, and passion for building amazing digital products
          </p>
        </motion.div>
      </div>
    </section>
  );
}
