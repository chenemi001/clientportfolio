
'use client'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });

    const unsubscribe = count.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, count, value, suffix]);

  return (
    <motion.span
      ref={ref}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        block
        font-[var(--font-display)]
        text-[clamp(3.5rem,5vw,5rem)]
        leading-[0.8]
        tracking-[-0.035em]
        text-[#625DE2]
        dark:text-[#B7FF3C]
      "
    >
      0{suffix}
    </motion.span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        px-5
        py-24
        text-[#292929]
        dark:bg-[#080B09]
        dark:text-[#F2F4EF]
        sm:px-8
        sm:py-28
        lg:px-[8%]
        lg:py-32
      "
    >
      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
        "
      >
        {/* ===================================================
            ABOUT HEADING
        =================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-[var(--font-display)]
            text-[clamp(4rem,6vw,6rem)]
            font-normal
            uppercase
            leading-[0.8]
            tracking-[-0.035em]
          "
        >
          About Me
        </motion.h2>

        {/* ===================================================
            INTRO
        =================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            mt-5
            max-w-[590px]
            font-[var(--font-sans)]
            text-[16px]
            leading-[1.55]
            text-[#555]
            dark:text-[#A4ADA4]
            sm:text-[18px]
          "
        >
          Hi, I&apos;m Ufedo — a Senior Platform Engineer and AI Agent &
          IDP Specialist passionate about building reliable infrastructure,
          intelligent automation and developer platforms that make complex
          systems easier to use.
        </motion.p>

        {/* ===================================================
            STATS
        =================================================== */}

        <div
          className="
            mt-14
            grid
            max-w-[760px]
            grid-cols-3
            gap-6
            sm:mt-16
            sm:gap-12
          "
        >
          {/* 7 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Counter value={7} />

            <p
              className="
                mt-2
                font-[var(--font-sans)]
                text-[12px]
                font-semibold
                leading-[1.25]
              "
            >
              Years of
              <br />
              Experience
            </p>
          </motion.div>

          {/* 270 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
          >
            <Counter value={270} />

            <p
              className="
                mt-2
                font-[var(--font-sans)]
                text-[12px]
                font-semibold
                leading-[1.25]
              "
            >
              Completed
              <br />
              Projects
            </p>
          </motion.div>

          {/* 50+ */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.24,
            }}
          >
            <Counter value={50} suffix="+" />

            <p
              className="
                mt-2
                font-[var(--font-sans)]
                text-[12px]
                font-semibold
                leading-[1.25]
              "
            >
              Clients
              <br />
              Worldwide
            </p>
          </motion.div>
        </div>

        {/* ===================================================
            CONTACT DETAILS
        =================================================== */}

        <div
          className="
            mt-14
            grid
            max-w-[700px]
            grid-cols-1
            gap-8
            sm:grid-cols-2
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                font-[var(--font-sans)]
                text-[14px]
                font-semibold
              "
            >
              Call Today:
            </p>

            <a
              href="tel:+447467273100"
              className="
                mt-1
                block
                font-[var(--font-sans)]
                text-[14px]
                text-[#666]
                transition-colors
                hover:text-[#625DE2]
                dark:text-[#A4ADA4]
                dark:hover:text-[#B7FF3C]
              "
            >
              +44 7467 273100
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            <p
              className="
                font-[var(--font-sans)]
                text-[14px]
                font-semibold
              "
            >
              Email:
            </p>

            <a
              href="mailto:ufedoaudu15@gmail.com"
              className="
                mt-1
                block
                font-[var(--font-sans)]
                text-[14px]
                text-[#666]
                transition-colors
                hover:text-[#625DE2]
                dark:text-[#A4ADA4]
                dark:hover:text-[#B7FF3C]
              "
            >
              ufedoaudu15@gmail.com
            </a>
          </motion.div>
        </div>

        {/* ===================================================
            SOCIAL LINKS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            items-center
            gap-5
          "
        >
          <a
            href="#"
            aria-label="LinkedIn"
            className="
              font-[var(--font-sans)]
              text-[12px]
              font-semibold
              transition-colors
              hover:text-[#625DE2]
              dark:hover:text-[#B7FF3C]
            "
          >
            LinkedIn
          </a>

          <a
            href="#"
            aria-label="GitHub"
            className="
              font-[var(--font-sans)]
              text-[12px]
              font-semibold
              transition-colors
              hover:text-[#625DE2]
              dark:hover:text-[#B7FF3C]
            "
          >
            GitHub
          </a>

          <a
            href="#"
            aria-label="X"
            className="
              font-[var(--font-sans)]
              text-[12px]
              font-semibold
              transition-colors
              hover:text-[#625DE2]
              dark:hover:text-[#B7FF3C]
            "
          >
            X
          </a>
        </motion.div>

        {/* ===================================================
            DOWNLOAD CV
        =================================================== */}

        <motion.a
          href="/cv/UFEDO-AUDU-CV.pdf"
          download="Ufedo-Audu-CV.pdf"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-[#625DE2]
            px-7
            py-3
            font-[var(--font-display)]
            text-[20px]
            uppercase
            leading-none
            tracking-[-0.01em]
            text-[#625DE2]
            transition-colors
            hover:bg-[#625DE2]
            hover:text-white
            dark:border-[#B7FF3C]
            dark:text-[#B7FF3C]
            dark:hover:bg-[#B7FF3C]
            dark:hover:text-[#080B09]
          "
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
}