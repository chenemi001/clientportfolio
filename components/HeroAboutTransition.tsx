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
   * MOVEMENT PROGRESS
   *
   * 0 = HERO
   * 1 = ABOUT
   * =========================================================
   */

  const movementProgress = useMotionValue(0);

  /*
   * =========================================================
   * VISIBILITY
   *
   * Visible through Hero + About.
   * Hidden once About ends.
   * =========================================================
   */

  const visibilityProgress = useMotionValue(1);

  /*
   * =========================================================
   * CALCULATE POSITION
   * =========================================================
   */

  useEffect(() => {
    const updateProgress = () => {
      const about = document.getElementById("about");

      if (!about) return;

      const aboutTop =
        about.getBoundingClientRect().top + window.scrollY;

      const aboutBottom =
        aboutTop + about.offsetHeight;

      /*
       * Start moving before About enters the viewport.
       */

      const startMove = Math.max(
        0,
        aboutTop - window.innerHeight * 0.8
      );

      const currentScroll = window.scrollY;

      let movement = 0;
      let visibility = 1;

      /*
       * =====================================================
       * BEFORE HERO → ABOUT
       * =====================================================
       */

      if (currentScroll <= startMove) {
        movement = 0;
      }

      /*
       * =====================================================
       * HERO → ABOUT
       * =====================================================
       */

      else if (currentScroll < aboutTop) {
        movement =
          (currentScroll - startMove) /
          (aboutTop - startMove);

        movement = Math.min(
          1,
          Math.max(0, movement)
        );
      }

      /*
       * =====================================================
       * INSIDE ABOUT
       *
       * Stay completely still at the About position.
       * =====================================================
       */

      else if (currentScroll <= aboutBottom) {
        movement = 1;
      }

      /*
       * =====================================================
       * AFTER ABOUT
       *
       * Do not move to Projects.
       * Hide the portrait.
       * =====================================================
       */

      else {
        movement = 1;
        visibility = 0;
      }

      movementProgress.set(movement);
      visibilityProgress.set(visibility);
    };

    updateProgress();

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("resize", updateProgress);
    };
  }, [movementProgress, visibilityProgress]);

  /*
   * =========================================================
   * UPDATE ON SCROLL
   * =========================================================
   */

  useMotionValueEvent(scrollY, "change", () => {
    const about = document.getElementById("about");

    if (!about) return;

    const aboutTop =
      about.getBoundingClientRect().top + window.scrollY;

    const aboutBottom =
      aboutTop + about.offsetHeight;

    /*
     * Start movement before About.
     */

    const startMove = Math.max(
      0,
      aboutTop - window.innerHeight * 0.8
    );

    const currentScroll = scrollY.get();

    let movement = 0;
    let visibility = 1;

    /*
     * =====================================================
     * HERO
     * =====================================================
     */

    if (currentScroll <= startMove) {
      movement = 0;
      visibility = 1;
    }

    /*
     * =====================================================
     * HERO → ABOUT
     * =====================================================
     */

    else if (currentScroll < aboutTop) {
      movement =
        (currentScroll - startMove) /
        (aboutTop - startMove);

      movement = Math.min(
        1,
        Math.max(0, movement)
      );

      visibility = 1;
    }

    /*
     * =====================================================
     * ABOUT
     *
     * LOCKED HERE.
     * =====================================================
     */

    else if (currentScroll <= aboutBottom) {
      movement = 1;
      visibility = 1;
    }

    /*
     * =====================================================
     * AFTER ABOUT
     *
     * Hide it completely.
     * =====================================================
     */

    else {
      movement = 1;
      visibility = 0;
    }

    movementProgress.set(movement);
    visibilityProgress.set(visibility);
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
   * SMOOTH VISIBILITY
   * =========================================================
   */

  const opacity = useSpring(visibilityProgress, {
    stiffness: 100,
    damping: 25,
  });

  /*
   * =========================================================
   * PORTRAIT POSITION
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
   * HELLO BUBBLE MOVEMENT
   * =========================================================
   */

  const helloY = useTransform(
    progress,
    [0, 0.62],
    [0, -8]
  );

  const helloScale = useTransform(
    progress,
    [0, 0.62],
    [1, 0.9]
  );

  /*
   * =========================================================
   * 3D FLIP
   *
   * Front and back occupy the exact same rectangle.
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
   * HI → HAND
   * Changes every 8 seconds
   * =========================================================
   */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShowHand((current) => !current);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {/* =================================================
          IMAGE
      ================================================== */}

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
          top-[48%]
          z-30
          h-[430px]
          w-[260px]
          -translate-x-1/2
          [perspective:1600px]
          sm:top-[16%]
          sm:h-[500px]
          sm:w-[340px]
          lg:h-[525px]
          lg:w-[355px]
        "
      >
        <div
          className="
            relative
            h-full
            w-full
            [transform-style:preserve-3d]
          "
        >
          {/* =================================================
              FRONT IMAGE
          ================================================== */}

          <motion.div
            style={{
              rotateY: frontRotate,
            }}
            className="
              absolute
              left-1/2
              top-[12%]
              h-[330px]
              w-[220px]
              -translate-x-1/2
              overflow-hidden
              rounded-[17px]
              [backface-visibility:hidden]
              sm:inset-0
              sm:h-auto
              sm:w-auto
              sm:translate-x-0
            "
          >
            <Image
              src="/images/new.png"
              alt="Abegnego Audu"
              fill
              priority
              sizes="
                (max-width: 640px) 220px,
                (max-width: 768px) 280px,
                (max-width: 1024px) 320px,
                355px
              "
              className="object-cover object-center"
            />
          </motion.div>

          {/* =================================================
              BACK IMAGE
          ================================================== */}

          <motion.div
            style={{
              rotateY: backRotate,
            }}
            className="
              absolute
              left-1/2
              top-[12%]
              h-[330px]
              w-[220px]
              -translate-x-1/2
              overflow-hidden
              rounded-[17px]
              [backface-visibility:hidden]
              sm:inset-0
              sm:h-auto
              sm:w-auto
              sm:translate-x-0
            "
          >
            <Image
              src="/images/second.jpg"
              alt="Abegnego Audu"
              fill
              sizes="
                (max-width: 640px) 220px,
                (max-width: 768px) 280px,
                (max-width: 1024px) 320px,
                355px
              "
              className="object-cover object-center"
            />
          </motion.div>

          {/* =================================================
              HI / WHITE HAND
              
              Attached permanently to portrait on mobile.
          ================================================== */}

          <motion.div
            style={{
              y: helloY,
              scale: helloScale,
              opacity,
            }}
            className="
              pointer-events-none
              absolute
              left-[calc(50%-130px)]
              top-[340px]
              z-[100]
              flex
              h-[80px]
              w-[80px]
              items-center
              justify-center
              rounded-full
              sm:left-[-32px]
              sm:top-auto
              sm:bottom-0
              sm:h-[95px]
              sm:w-[95px]
              md:h-[105px]
              md:w-[105px]
              lg:h-[115px]
              lg:w-[115px]
            "
            animate={{
              backgroundColor: "#625DE2",
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
                  text-[38px]
                  leading-none
                  grayscale
                  brightness-0
                  invert
                  sm:text-[43px]
                  md:text-[48px]
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
                  text-[29px]
                  font-medium
                  tracking-[-0.07em]
                  text-white
                  sm:text-[33px]
                  md:text-[37px]
                "
              >
                Hi
              </motion.span>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}