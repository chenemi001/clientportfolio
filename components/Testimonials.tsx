"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ufedo brought a strong platform engineering mindset to our infrastructure work. He consistently focused on creating reliable systems that made it easier for engineering teams to ship and operate services.",
    name: "Engineering Leader",
    role: "Platform & Infrastructure",
  },
  {
    quote:
      "His work around internal developer platforms and golden paths helped turn complex infrastructure workflows into much simpler self-service experiences for engineering teams.",
    name: "Technology Leader",
    role: "Engineering & Cloud",
  },
  {
    quote:
      "Ufedo combines cloud infrastructure, Kubernetes, automation, and observability with a clear focus on developer experience. His approach helped improve both reliability and operational efficiency.",
    name: "Senior Engineering Manager",
    role: "Cloud & SRE",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-black/10 dark:border-white/10"
      style={{
        background: "var(--section-bg)",
        color: "var(--section-fg)",
      }}
    >
      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background: "var(--section-accent)",
          opacity: 0.06,
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--section-accent)" }}
            >
              What People Say
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Testimonials<span style={{ color: "var(--section-accent)" }}>.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--section-muted)" }}
          >
            A few perspectives on platform engineering, developer
            experience, infrastructure automation, and building reliable
            systems at scale.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden border p-7 transition-all duration-300 sm:p-8"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center border"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--section-accent)",
                  }}
                >
                  <Quote size={19} strokeWidth={1.8} />
                </div>

                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--section-muted)" }}
                >
                  0{index + 1}
                </span>
              </div>

              {/* Quote */}
              <div className="py-10">
                <p className="text-lg leading-8 tracking-[-0.015em] sm:text-xl">
                  “{testimonial.quote}”
                </p>
              </div>

              {/* Person */}
              <div
                className="flex items-end justify-between border-t pt-6"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div>
                  <p className="font-medium">{testimonial.name}</p>

                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--section-muted)" }}
                  >
                    {testimonial.role}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: "var(--section-accent)" }}
                />
              </div>

              {/* Hover Accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: "var(--section-accent)" }}
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--card-border)" }}
        >
          <p
            className="max-w-2xl text-sm leading-6"
            style={{ color: "var(--section-muted)" }}
          >
            Building infrastructure that developers can trust, understand,
            and use without unnecessary operational friction.
          </p>

          <div
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]"
            style={{ color: "var(--section-accent)" }}
          >
            Platform Engineering
            <span className="h-px w-10" style={{ background: "currentColor" }} />
          </div>
        </motion.div>
      </div>

      {/* Theme Variables */}
      <style jsx>{`
        section {
          --section-bg: #ffffff;
          --section-fg: #292929;
          --section-muted: #666666;
          --section-accent: #625de2;
          --card-bg: #f7f7f4;
          --card-border: rgba(0, 0, 0, 0.1);
        }

        :global(html.dark) section {
          --section-bg: #080b09;
          --section-fg: #f2f4ef;
          --section-muted: #a4ada4;
          --section-accent: #b7ff3c;
          --card-bg: #0d110f;
          --card-border: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}