import {
  useEffect,
  useRef,
  useState,
} from "react";

import type { RefObject } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { X } from "lucide-react";

import { story } from "../data";

type StoryItem = {
  year: string;
  title: string;
  text: string;
  icon?: string;
};

type StoryProps = {
  mainAudioRef: RefObject<HTMLAudioElement | null>;
};

// =====================================================
// STORY IMAGES
// =====================================================

const STORY_IMAGES = [
  "/our-story-1.jpg",
  "/our-story-2.jpg",
  "/our-story-3.jpg",
];

// =====================================================
// STORY SONGS
// =====================================================

const STORY_SONGS = [
  "/music/song-1.mp3",
  "/music/song-2.mp3",
  "/music/song-3.mp3",
];

// =====================================================
// BACKGROUND
// =====================================================

function StoryBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('/our-story-1.jpg')",
          backgroundPosition: "center 20%",
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('/our-story-2.jpg')",
          backgroundPosition: "center 40%",
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('/our-story-3.jpg')",
          backgroundPosition: "center 20%",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(46,12,20,0.88) 0%, rgba(46,12,20,0.82) 50%, rgba(46,12,20,0.92) 100%)",
        }}
      />

      <motion.div
        className="absolute w-[360px] h-[360px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.4), transparent 70%)",
          top: "-8%",
          left: "-5%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(232,212,139,0.3), transparent 70%)",
          bottom: "5%",
          right: "-5%",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// =====================================================
// STORY MODAL
// =====================================================

function StoryModal({
  item,
  image,
  onClose,
}: {
  item: StoryItem;
  image: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      style={{
        background: "rgba(20, 8, 12, 0.85)",
        backdropFilter: "blur(10px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.88,
          y: 24,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 12,
        }}
        transition={{
          type: "spring",
          damping: 22,
          stiffness: 260,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gold/40 shadow-2xl"
        style={{
          background: "#2e0c14",
        }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-cream/95 text-maroon flex items-center justify-center border border-gold/40 shadow"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative h-52 sm:h-60 overflow-hidden">
          <img
            src={image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(46,12,20,0.95) 0%, rgba(46,12,20,0.2) 55%, transparent 100%)",
            }}
          />

          <div className="absolute bottom-4 left-5 right-5">
            <p className="font-script text-2xl text-gold-soft">
              {item.year}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 text-center">
          {item.icon && (
            <span className="text-2xl mb-2 block">
              {item.icon}
            </span>
          )}

          <h3
            className="font-serif text-2xl sm:text-3xl text-cream mb-3"
            style={{
              letterSpacing: "0.02em",
            }}
          >
            {item.title}
          </h3>

          <div className="ornament-line w-14 mx-auto mb-4 opacity-70" />

          <p
            className="text-[15px] leading-relaxed text-cream/85"
            style={{
              fontFamily:
                "Georgia, 'Cormorant Garamond', serif",
            }}
          >
            {item.text}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// =====================================================
// STORY CARD
// =====================================================

function StoryCard({
  item,
  onOpen,
}: {
  item: StoryItem;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="w-full text-left rounded-2xl border border-gold/25 bg-black/25 backdrop-blur-md px-5 py-5 sm:px-6 sm:py-6 shadow-lg hover:border-gold/50 hover:bg-black/35 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-2 mb-2">
        {item.icon && (
          <span className="text-base">
            {item.icon}
          </span>
        )}

        <p
          className="text-gold-soft"
          style={{
            fontFamily: "'Allura', cursive",
            fontSize: "1.65rem",
            lineHeight: 1.2,
          }}
        >
          {item.year}
        </p>
      </div>

      <h3
        className="text-cream mb-2"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.35rem",
          fontWeight: 500,
          letterSpacing: "0.03em",
        }}
      >
        {item.title}
      </h3>

      <p
        className="text-cream/70 leading-relaxed line-clamp-4"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.95rem",
          fontWeight: 400,
        }}
      >
        {item.text}
      </p>

      <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-gold/80">
        Tap to open →
      </p>
    </motion.button>
  );
}

// =====================================================
// STORY
// =====================================================

export default function Story({
  mainAudioRef,
}: StoryProps) {
  const [active, setActive] = useState<
    number | null
  >(null);

  const storyAudioRef =
    useRef<HTMLAudioElement | null>(null);

  // ===================================================
  // PLAY STORY MUSIC WHEN ACTIVE CHANGES
  // ===================================================

  useEffect(() => {
    // No story selected
    if (active === null) {
      return;
    }

    const audio = storyAudioRef.current;

    if (!audio) {
      return;
    }

    // Set selected song
    audio.src = STORY_SONGS[active];

    audio.currentTime = 0;

    audio.volume = 0.4;

    // Play selected story song
    audio.play().catch((error) => {
      console.log(
        "Story music could not play:",
        error
      );
    });

    // Cleanup when switching stories/unmounting
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [active]);

  // ===================================================
  // OPEN STORY
  // ===================================================

  const openStory = (index: number) => {
    // FIRST pause main music
    if (mainAudioRef.current) {
      mainAudioRef.current.pause();
    }

    // IMPORTANT:
    // Open the modal independently of audio.
    setActive(index);
  };

  // ===================================================
  // CLOSE STORY
  // ===================================================

  const closeStory = () => {
    // Stop story music
    if (storyAudioRef.current) {
      storyAudioRef.current.pause();
      storyAudioRef.current.currentTime = 0;
    }

    // Close modal
    setActive(null);

    // Resume main music
    if (mainAudioRef.current) {
      mainAudioRef.current.volume = 0.30;

      mainAudioRef.current
        .play()
        .catch((error) => {
          console.log(
            "Main music could not resume:",
            error
          );
        });
    }
  };

  return (
    <section
      id="story"
      className="section-pad text-cream relative overflow-hidden"
    >
      <StoryBackground />

      {/* Story audio */}
      <audio
        ref={storyAudioRef}
        preload="auto"
      />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold-soft mb-3">
            Our journey
          </p>

          <h2
            className="text-4xl sm:text-5xl text-cream"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Our Story
          </h2>

          <div className="ornament-line w-20 mx-auto mt-5 opacity-60" />
        </div>

        {/* Timeline */}
        <div className="relative">

          <div className="absolute left-6 sm:left-1/2 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14">

            {story.map((item, i) => {
              const left = i % 2 === 0;

              return (
                <motion.article
                  key={item.year}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                  }}
                  className="relative grid sm:grid-cols-2 gap-4 sm:gap-8 items-start"
                >

                  {/* Timeline dot */}
                  <div className="absolute left-6 sm:left-1/2 top-5 w-3.5 h-3.5 rounded-full bg-gold border-2 border-maroon-deep -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(201,162,39,0.5)]" />

                  {left ? (
                    <>
                      <div className="pl-14 sm:pl-0 sm:pr-10">
                        <StoryCard
                          item={item}
                          onOpen={() =>
                            openStory(i)
                          }
                        />
                      </div>

                      <div className="hidden sm:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden sm:block" />

                      <div className="pl-14 sm:pl-10">
                        <StoryCard
                          item={item}
                          onOpen={() =>
                            openStory(i)
                          }
                        />
                      </div>
                    </>
                  )}

                </motion.article>
              );
            })}

          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active !== null && (
          <StoryModal
            item={story[active]}
            image={
              STORY_IMAGES[active] ||
              STORY_IMAGES[0]
            }
            onClose={closeStory}
          />
        )}
      </AnimatePresence>
    </section>
  );
}