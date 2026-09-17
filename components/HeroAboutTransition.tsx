"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroAboutTransition() {
  const [showHand, setShowHand] = useState(false);

  const { scrollY } = useScroll();

  /*
   * =========================================================
   * ACTUAL ABOUT SECTION POSITION
   * =========================================================
   */

  const movementProgress = useMotionValue(0);

  useEffect(() => {
    const updateProgress = () => {
      const about = document.getElementById("about");

      if (!about) return;

      const aboutTop =
        about.getBoundingClientRect().top + window.scrollY;

      const aboutHeight = about.offsetHeight;
      const aboutBottom = aboutTop + aboutHeight;

      const startMove = Math.max(
        0,
        aboutTop - window.innerHeight * 0.8
      );

      /*
       * Portrait reaches its About position shortly after
       * entering the About section.
       */
      const pauseStart =
        aboutTop + window.innerHeight * 0.05;

      /*
       * Hold the portrait in About Me.
       */
      const pauseEnd =
        aboutTop + window.innerHeight * 0.45;

      /*
       * Return/flip back BEFORE leaving About.
       */
      const returnEnd =
        aboutTop + window.innerHeight * 0.75;

      const currentScroll = window.scrollY;

      let value = 0;

      /*
       * HERO
       */
      if (currentScroll <= startMove) {
        value = 0;
      }

      /*
       * HERO → ABOUT
       */
      else if (currentScroll < pauseStart) {
        value =
          (currentScroll - startMove) /
          (pauseStart - startMove);

        value = Math.min(1, Math.max(0, value));
      }

      /*
       * ABOUT HOLD
       */
      else if (currentScroll <= pauseEnd) {
        value = 1;
      }

      /*
       * RETURN INSIDE ABOUT
       */
      else if (currentScroll < returnEnd) {
        value =
          1 -
          (currentScroll - pauseEnd) /
            (returnEnd - pauseEnd);

        value = Math.min(1, Math.max(0, value));
      }

      /*
       * AFTER ABOUT
       */
      else {
        value = 0;
      }

      movementProgress.set(value);
    };

    updateProgress();

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("resize", updateProgress);
    };
  }, [movementProgress]);

  /*
   * =========================================================
   * RECALCULATE ON SCROLL
   * =========================================================
   */

  useMotionValueEvent(scrollY, "change", () => {
    const about = document.getElementById("about");

    if (!about) return;

    const aboutTop =
      about.getBoundingClientRect().top + window.scrollY;

    const aboutHeight = about.offsetHeight;
    const aboutBottom = aboutTop + aboutHeight;

    const startMove = Math.max(
      0,
      aboutTop - window.innerHeight * 0.8
    );

    const pauseStart =
      aboutTop + window.innerHeight * 0.05;

    /*
     * Portrait pauses here beside About Me.
     */
    const pauseEnd =
      aboutTop + window.innerHeight * 0.45;

    /*
     * Portrait flips back and leaves the transition
     * while still inside About.
     */
    const returnEnd =
      aboutTop + window.innerHeight * 0.75;

    const currentScroll = scrollY.get();

    let value = 0;

    /*
     * HERO
     */
    if (currentScroll <= startMove) {
      value = 0;
    }

    /*
     * HERO → ABOUT
     */
    else if (currentScroll < pauseStart) {
      value =
        (currentScroll - startMove) /
        (pauseStart - startMove);

      value = Math.min(1, Math.max(0, value));
    }

    /*
     * ABOUT
     *
     * HOLD
     */
    else if (currentScroll <= pauseEnd) {
      value = 1;
    }

    /*
     * FLIP BACK + RETURN
     *
     * This happens BEFORE Projects.
     */
    else if (currentScroll < returnEnd) {
      value =
        1 -
        (currentScroll - pauseEnd) /
          (returnEnd - pauseEnd);

      value = Math.min(1, Math.max(0, value));
    }

    /*
     * COMPLETELY GONE
     */
    else {
      value = 0;
    }

    movementProgress.set(value);
  });

  /*
   * =========================================================
   * SMOOTH MOVEMENT
   * =========================================================
   */

  const progress = useSpring(movementProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.45,
  });

  /*
   * =========================================================
   * PORTRAIT POSITION
   *
   * 0 = HERO
   * 1 = ABOUT ME
   * =========================================================
   */

  const x = useTransform(
    progress,
    [0, 0.35, 0.75, 1],
    ["0vw", "8vw", "20vw", "29vw"]
  );

  const y = useTransform(
    progress,
    [0, 0.4, 0.75, 1],
    ["0vh", "1vh", "3vh", "5vh"]
  );

  const scale = useTransform(
    progress,
    [0, 0.35, 0.75, 1],
    [1, 0.96, 0.9, 0.82]
  );

  /*
   * =========================================================
   * 3D FLIP
   *
   * The portrait flips TO THE BACK while entering About.
   *
   * Then flips BACK while leaving About.
   *
   * Because movementProgress goes:
   *
   * 0 → 1 → 0
   *
   * the flip automatically reverses.
   * =========================================================
   */

  const frontRotate = useTransform(
    progress,
    [0.25, 0.65],
    [0, 180]
  );

  const backRotate = useTransform(
    progress,
    [0.25, 0.65],
    [180, 360]
  );

  /*
   * =========================================================
   * VISIBILITY
   *
   * Completely gone before Projects.
   * =========================================================
   */

  const opacity = useTransform(
    progress,
    [0, 0.04, 0.12, 0.9, 1],
    [0, 1, 1, 1, 0]
  );

  /*
   * =========================================================
   * HI / HAND
   * =========================================================
   */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShowHand((current) => !current);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        opacity,
      }}
      className="
        pointer-events-none
        fixed
        left-1/2
        top-[12%]
        z-[100]
        h-[475px]
        w-[320px]
        -translate-x-1/2
        [perspective:1600px]
        sm:h-[500px]
        sm:w-[340px]
        lg:h-[525px]
        lg:w-[355px]
      "
    >
      {/* =====================================================
          3D IMAGE OBJECT
      ===================================================== */}

      <div
        className="
          relative
          h-full
          w-full
          [transform-style:preserve-3d]
        "
      >
        {/* ===================================================
            FRONT
        =================================================== */}

        <motion.div
          style={{
            rotateY: frontRotate,
          }}
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[17px]
            [backface-visibility:hidden]
          "
        >
          <Image
            src="/images/new.png"
            alt="Abegnego Audu"
            fill
            priority
            sizes="355px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* ===================================================
            BACK
        =================================================== */}

        <motion.div
          style={{
            rotateY: backRotate,
          }}
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[17px]
            [backface-visibility:hidden]
          "
        >
          <Image
            src="/images/second.jpg"
            alt="Abegnego Audu"
            fill
            sizes="355px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* ===================================================
            HI BUBBLE
        =================================================== */}

        <motion.div
          className="
            absolute
            -right-[48px]
            top-[31%]
            z-[50]
            flex
            h-[100px]
            w-[100px]
            items-center
            justify-center
            rounded-full
            bg-[#625DE2]
            text-white
            shadow-[0_15px_40px_rgba(0,0,0,0.14)]
            dark:bg-[#B7FF3C]
            dark:text-[#080B09]
            sm:-right-[55px]
            sm:h-[112px]
            sm:w-[112px]
          "
        >
          <motion.div
            key={showHand ? "hand" : "hi"}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {showHand ? (
              <span
                role="img"
                aria-label="waving hand"
                className="
                  select-none
                  text-[42px]
                  grayscale
                  brightness-0
                  invert
                "
              >
                👋
              </span>
            ) : (
              <span
                className="
                  font-[var(--font-sans)]
                  text-[35px]
                  font-medium
                  tracking-[-0.06em]
                  text-white
                  dark:text-[#080B09]
                "
              >
                Hi
              </span>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}