"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [showHand, setShowHand] = useState(false);

  /* =========================================================
     THEME
  ========================================================= */

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("abegnego-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, []);

  /* =========================================================
     HI → HAND
     Changes every 8 seconds
  ========================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShowHand((current) => !current);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  /* =========================================================
     CURSOR FOLLOWER
  ========================================================= */

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.25,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.25,
  });

  const handlePointerMove = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  const handlePointerLeave = () => {
    mouseX.set(-100);
    mouseY.set(-100);
  };

  /* =========================================================
     SCROLL
  ========================================================= */

  const { scrollYProgress } = useScroll();

  const imageScale = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.62],
    [1, 0.97, 1]
  );

  /* =========================================================
     HERO TEXT
  ========================================================= */

  const platformX = useTransform(
    scrollYProgress,
    [0, 0.62],
    [0, -45]
  );

  const engineerX = useTransform(
    scrollYProgress,
    [0, 0.62],
    [0, 45]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.48, 0.68],
    [1, 1, 0]
  );

  /* =========================================================
     DESCRIPTION
  ========================================================= */

  const descriptionY = useTransform(
    scrollYProgress,
    [0, 0.62],
    [0, -30]
  );

  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.68],
    [1, 1, 0]
  );

  /* =========================================================
     WHAT I CAN DO FOR YOU
  ========================================================= */

  const servicesOpacity = useTransform(
    scrollYProgress,
    [0.52, 0.72],
    [0, 1]
  );

  const servicesY = useTransform(
    scrollYProgress,
    [0.52, 0.72],
    [60, 0]
  );

  /* =========================================================
     HELLO BUBBLE
  ========================================================= */

  const helloY = useTransform(
    scrollYProgress,
    [0, 0.62],
    [0, -8]
  );

  const helloScale = useTransform(
    scrollYProgress,
    [0, 0.62],
    [1, 0.9]
  );

  /* =========================================================
     COLORS
  ========================================================= */

  const background = darkMode ? "#080B09" : "#FFFFFF";

  const foreground = darkMode ? "#F2F4EF" : "#292929";

  const muted = darkMode ? "#A4ADA4" : "#666666";

  const accent = darkMode ? "#B7FF3C" : "#625DE2";

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative h-[200vh] overflow-hidden"
      style={{
        backgroundColor: background,
        color: foreground,
        transition:
          "background-color 700ms ease, color 700ms ease",
      }}
    >
      {/* =====================================================
          CURSOR FOLLOWING BLUE/PURPLE DOT
      ====================================================== */}

      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-[8px]
          w-[8px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          md:block
        "
        animate={{
          backgroundColor: darkMode ? "#B7FF3C" : "#625DE2",
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* =====================================================
          STICKY HERO
      ====================================================== */}

      <div className="sticky top-0 h-screen min-h-[650px] overflow-hidden">
        <div
          className="
            relative
            mx-auto
            h-full
            max-w-[1500px]
            px-5
            sm:px-8
            lg:px-10
          "
        >
          {/* =================================================
              ABEGNEGO AUDU
          ================================================== */}

          <motion.div
            style={{
              opacity: titleOpacity,
            }}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[1%]
              top-[35%]
              z-40
              sm:left-[4%]
              lg:left-[3.5%]
            "
          >
            <span
              className="
                block
                whitespace-nowrap
                font-[var(--font-display)]
                text-[80px]
                font-normal
                uppercase
                leading-[0.8]
                tracking-[0]
                sm:text-[27px]
                lg:text-[30px]
              "
            >
              ABEGNEGO AUDU
            </span>
          </motion.div>

          {/* =================================================
              PLATFORM

              IMPORTANT:
              Right edge is deliberately kept away from image.
          ================================================== */}

          <motion.div
            style={{
              x: platformX,
              opacity: titleOpacity,
            }}
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[1%]
              top-[43%]
              z-10
              w-[calc(50%-190px)]
              sm:left-[3%]
              lg:left-[3%]
            "
          >
            <h1
              className="
                whitespace-nowrap
                font-[var(--font-display)]
                text-[clamp(5.2rem,7vw,7.6rem)]
                font-normal
                uppercase
                leading-[0.78]
                tracking-[-0.012em]
              "
            >
              PLATFORM
            </h1>
          </motion.div>

          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-[12%]
              z-30
              h-[475px]
              w-[320px]
              -translate-x-1/2
              sm:h-[500px]
              sm:w-[340px]
              lg:h-[525px]
              lg:w-[355px]
            "
          >
            <motion.div
              style={{
                scale: imageScale,
              }}
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[17px]
              "
            >
              <Image
                src="/images/new.png"
                alt="Abegnego Audu"
                fill
                priority
                sizes="
                  (max-width: 640px) 320px,
                  (max-width: 1024px) 340px,
                  355px
                "
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* =================================================
              ENGINEER

              Deliberately starts immediately after image.
          ================================================== */}

          <motion.div
            style={{
              x: engineerX,
              opacity: titleOpacity,
            }}
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[calc(50%+125px)]
              top-[43%]
              z-10
              sm:left-[calc(50%+135px)]
              lg:left-[calc(50%+160px)]
            "
          >
            <h2
              className="
                whitespace-nowrap
                font-[var(--font-display)]
                text-[clamp(5.2rem,7vw,7.6rem)]
                font-normal
                uppercase
                leading-[0.78]
                tracking-[-0.012em]
              "
            >
              ENGINEER
            </h2>
          </motion.div>

          {/* =================================================
              ONE SENTENCE
          ================================================== */}

          <motion.p
            style={{
              y: descriptionY,
              opacity: descriptionOpacity,
              color: muted,
            }}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
           className="
  absolute
  left-[calc(50%+180px)]
  top-[58%]
  z-40
  w-[420px]
  font-[var(--font-sans)]
  text-[18px]
  leading-[1.45]
  sm:left-[calc(50%+190px)]
  sm:w-[440px]
  lg:left-[calc(50%+200px)]
  lg:w-[460px]
"
          >
           I am a UK based Senior Platform Engineer and
  <br />
  AI Agent & IDP Specialist
          </motion.p>

          {/* =================================================
              WHAT I CAN DO FOR YOU
          ================================================== */}

          <motion.div
            style={{
              opacity: servicesOpacity,
              y: servicesY,
            }}
            className="
              absolute
              left-[8%]
              top-[56%]
              z-40
              w-[360px]
              sm:left-[10%]
              lg:left-[11%]
            "
          >
            <p
              className="
                mb-4
                font-[var(--font-sans)]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
              "
              style={{
                color: accent,
              }}
            >
              WHAT I CAN DO FOR YOU
            </p>

            <h3
              className="
                font-[var(--font-display)]
                text-[clamp(3rem,4vw,4.5rem)]
                font-normal
                uppercase
                leading-[0.82]
                tracking-[-0.005em]
              "
            >
              BUILD.
              <br />
              AUTOMATE.
              <br />
              SCALE.
            </h3>
          </motion.div>

          {/* =================================================
              HI / WHITE HAND
          ================================================== */}

          <motion.div
            style={{
              y: helloY,
              scale: helloScale,
            }}
            className="
              absolute
              left-[28%]
              top-[76%]
              z-[100]
              flex
              h-[105px]
              w-[105px]
              items-center
              justify-center
              rounded-full
              sm:h-[115px]
              sm:w-[115px]
              lg:left-[31%]
            "
            animate={{
              backgroundColor: accent,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {showHand ? (
              <motion.span
                key="hand"
                initial={{
                  opacity: 0,
                  scale: 0.65,
                  rotate: -12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  select-none
                  text-[48px]
                  leading-none
                  grayscale
                  brightness-0
                  invert
                "
              >
                👋
              </motion.span>
            ) : (
              <motion.span
                key="hi"
                initial={{
                  opacity: 0,
                  scale: 0.65,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  font-[var(--font-sans)]
                  text-[37px]
                  font-medium
                  tracking-[-0.07em]
                  text-white
                "
              >
                Hi
              </motion.span>
            )}
          </motion.div>

          {/* =================================================
              SCROLL INDICATOR
          ================================================== */}

          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.15],
                [1, 0]
              ),
            }}
            className="
              absolute
              bottom-[5%]
              left-1/2
              z-50
              -translate-x-1/2
            "
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="
                  font-[var(--font-sans)]
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                "
                style={{
                  color: muted,
                }}
              >
                Scroll to explore
              </span>

              <span
                className="h-[24px] w-px"
                style={{
                  backgroundColor: accent,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}