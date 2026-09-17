"use client";

import { ArrowUpRight, Mail } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.67.79.55A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: GithubIcon,
  },
  {
    label: "Email",
    href: "mailto:ufedoaudu15@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: "var(--footer-bg)",
        color: "var(--footer-fg)",
        borderColor: "var(--footer-border)",
      }}
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr_0.8fr] lg:py-20">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-3xl font-semibold tracking-[-0.05em]"
            >
              ABEGNEGO
              <span style={{ color: "var(--footer-accent)" }}>.</span>
            </a>

            <p
              className="mt-5 max-w-md text-sm leading-7"
              style={{ color: "var(--footer-muted)" }}
            >
              Senior Platform Engineer specializing in internal developer
              platforms, cloud infrastructure, Kubernetes, automation, and
              reliable engineering systems.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center border transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderColor: "var(--footer-border)",
                      color: "var(--footer-muted)",
                    }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--footer-accent)" }}
            >
              Navigation
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "var(--footer-muted)" }}
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    style={{ color: "var(--footer-accent)" }}
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--footer-accent)" }}
            >
              Contact
            </p>

            <a
              href="mailto:ufedoaudu15@gmail.com"
              className="group flex w-fit items-center gap-2 text-sm"
              style={{ color: "var(--footer-fg)" }}
            >
              ufedoaudu15@gmail.com

              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: "var(--footer-accent)" }}
              />
            </a>

            <p
              className="mt-5 text-sm leading-6"
              style={{ color: "var(--footer-muted)" }}
            >
              Available for platform engineering, cloud infrastructure, and
              developer experience opportunities.
            </p>
          </div>
        </div>

        {/* Large Name */}
        <div
          className="overflow-hidden border-t pt-8"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <p
            className="select-none whitespace-nowrap text-[16vw] font-semibold leading-[0.75] tracking-[-0.09em] opacity-[0.04] dark:opacity-[0.06]"
            aria-hidden="true"
          >
            ABEGNEGO
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col gap-4 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "var(--footer-border)",
            color: "var(--footer-muted)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Abegnego Audu. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>London, UK</span>

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--footer-accent)" }}
            />

            <span className="font-mono">
              Platform Engineering
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          --footer-bg: #ffffff;
          --footer-fg: #292929;
          --footer-muted: #666666;
          --footer-accent: #625de2;
          --footer-border: rgba(0, 0, 0, 0.1);
        }

        :global(html.dark) footer {
          --footer-bg: #080b09;
          --footer-fg: #f2f4ef;
          --footer-muted: #a4ada4;
          --footer-accent: #b7ff3c;
          --footer-border: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </footer>
  );
}