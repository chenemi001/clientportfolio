"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  /* =========================================================
     THEME
  ========================================================= */

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("ufedo-theme");
    const isDark = savedTheme === "dark";

    setDarkMode(isDark);

    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark
      ? "dark"
      : "light";

    document.body.style.backgroundColor = isDark
      ? "#080B09"
      : "#FFFFFF";
  }, []);

 const toggleTheme = () => {
  const next = !darkMode;

  window.localStorage.setItem(
    "ufedo-theme",
    next ? "dark" : "light"
  );

  if (next) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
    document.body.style.backgroundColor = "#080B09";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
    document.body.style.backgroundColor = "#FFFFFF";
  }

  setDarkMode(next);

  window.location.reload();
};

  const ThemeSwitch = ({
    className = "",
  }: {
    className?: string;
  }) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={darkMode}
      className={`flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {darkMode ? (
          <motion.span
            key="sun"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.7,
            }}
            transition={{
              duration: 0.25,
            }}
            className="text-[#B7FF3C]"
          >
            <Sun
              size={18}
              strokeWidth={1.7}
            />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.7,
            }}
            transition={{
              duration: 0.25,
            }}
            className="text-[#625DE2]"
          >
            <Moon
              size={18}
              strokeWidth={1.7}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP NAVBAR
      ========================================================== */}

      <div className="fixed left-1/2 top-5 z-[100] hidden -translate-x-1/2 md:block">
        <AnimatePresence mode="wait">
          {!isScrolled ? (
            <motion.nav
              key="default-navbar"
              initial={{
                opacity: 0,
                y: -18,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex h-[56px] items-center rounded-full border p-[5px] shadow-[0_8px_35px_rgba(0,0,0,0.05)] backdrop-blur-[5px] ${
                darkMode
                  ? "border-[#252A26] bg-[#080B09]/95"
                  : "border-[#dadada] bg-white/80"
              }`}
            >
              {/* Avatar */}
              <a
                href="#home"
                aria-label="Back to home"
                className="relative h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full"
              >
                <Image
                  src="/images/new.png"
                  alt="Ufedo Audu"
                  fill
                  priority
                  sizes="46px"
                  className="object-cover"
                />
              </a>

              {/* Navigation links */}
              <div className="flex h-full items-center px-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative flex h-full items-center px-[13px] text-[12px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                      darkMode
                        ? "text-[#F2F4EF] hover:text-[#B7FF3C]"
                        : "text-[#292929] hover:text-[#625DE2]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-[8px] left-1/2 h-[1px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-[calc(100%-26px)] ${
                        darkMode
                          ? "bg-[#B7FF3C]"
                          : "bg-[#625DE2]"
                      }`}
                    />
                  </a>
                ))}
              </div>

              {/* Contact button */}
              <a
                href="#contact"
                className={`group flex h-[46px] items-center gap-1.5 rounded-full px-[20px] text-[12px] font-medium transition-all duration-300 hover:scale-[0.97] ${
                  darkMode
                    ? "bg-[#F2F4EF] text-[#080B09] hover:bg-[#B7FF3C]"
                    : "bg-[#292929] text-white hover:bg-[#625DE2]"
                }`}
              >
                Contact

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* Theme icon AFTER Contact */}
              <ThemeSwitch className="ml-2" />
            </motion.nav>
          ) : (
            /* =====================================================
               SCROLLED STATE
            ====================================================== */

            <motion.nav
              key="availability-navbar"
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.94,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex h-[58px] items-center rounded-full border p-[5px] pr-5 shadow-[0_8px_35px_rgba(0,0,0,0.06)] backdrop-blur-[5px] ${
                darkMode
                  ? "border-[#252A26] bg-[#080B09]/95"
                  : "border-[#dadada] bg-white/80"
              }`}
            >
              {/* Avatar */}
              <a
                href="#home"
                aria-label="Back to home"
                className="relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full"
              >
                <Image
                  src="/images/new.png"
                  alt="Ufedo Audu"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </a>

              {/* Availability */}
              <div className="ml-3 flex items-center gap-3">
                <span
                  className={`whitespace-nowrap text-[12px] font-medium tracking-[-0.01em] ${
                    darkMode
                      ? "text-[#A4ADA4]"
                      : "text-[#303030]/70"
                  }`}
                >
                  Available for work
                </span>

                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#4bd487] opacity-50" />

                  <span className="relative h-[7px] w-[7px] rounded-full bg-[#4bd487]" />
                </span>
              </div>

              {/* Theme icon */}
              <ThemeSwitch className="ml-4" />
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================
          MOBILE NAVBAR
      ========================================================== */}

      <div className="fixed left-4 right-4 top-4 z-[100] md:hidden">
        <motion.nav
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`flex h-[58px] items-center justify-between rounded-full border p-[5px] shadow-[0_8px_35px_rgba(0,0,0,0.05)] backdrop-blur-[5px] ${
            darkMode
              ? "border-[#252A26] bg-[#080B09]/95"
              : "border-[#dadada] bg-white/80"
          }`}
        >
          {/* Avatar */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Back to home"
            className="relative h-[48px] w-[48px] overflow-hidden rounded-full"
          >
            <Image
              src="/images/new.png"
              alt="Ufedo Audu"
              fill
              priority
              sizes="48px"
              className="object-cover"
            />
          </a>

          {/* Mobile availability */}
          <AnimatePresence mode="wait">
            {isScrolled ? (
              <motion.div
                key="mobile-available"
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                }}
                className="mr-auto ml-3 flex items-center gap-2"
              >
                <span
                  className={`text-[11px] font-medium ${
                    darkMode
                      ? "text-[#A4ADA4]"
                      : "text-[#303030]/70"
                  }`}
                >
                  Available for work
                </span>

                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#4bd487] opacity-50" />

                  <span className="relative h-[7px] w-[7px] rounded-full bg-[#4bd487]" />
                </span>
              </motion.div>
            ) : (
              <motion.span
                key="mobile-name"
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 10,
                }}
                className={`mr-auto ml-3 text-[12px] font-medium ${
                  darkMode
                    ? "text-[#F2F4EF]"
                    : "text-[#292929]"
                }`}
              >
                Ufedo Audu
              </motion.span>
            )}
          </AnimatePresence>

          {/* Theme icon */}
          <ThemeSwitch className="mr-2" />

          {/* Menu button */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((open) => !open)
            }
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isMenuOpen}
            className={`flex h-[46px] w-[46px] items-center justify-center rounded-full transition-transform duration-300 active:scale-95 ${
              darkMode
                ? "bg-[#F2F4EF] text-[#080B09]"
                : "bg-[#292929] text-white"
            }`}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <X
                    size={20}
                    strokeWidth={1.7}
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Menu
                    size={20}
                    strokeWidth={1.7}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.nav>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mt-2 flex flex-col overflow-hidden rounded-[24px] border p-2 shadow-[0_8px_35px_rgba(0,0,0,0.08)] backdrop-blur-[5px] ${
                darkMode
                  ? "border-[#252A26] bg-[#080B09]/95"
                  : "border-[#dadada] bg-white/95"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-full px-4 py-3 text-[14px] font-medium transition-colors duration-200 ${
                    darkMode
                      ? "text-[#F2F4EF] hover:bg-[#141914]"
                      : "text-[#292929] hover:bg-[#f4f4f4]"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className={`mt-1 flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-[14px] font-medium ${
                  darkMode
                    ? "bg-[#F2F4EF] text-[#080B09]"
                    : "bg-[#292929] text-white"
                }`}
              >
                Contact

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}