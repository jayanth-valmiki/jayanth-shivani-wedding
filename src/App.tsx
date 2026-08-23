import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Splash from "./components/Splash";
import Hero from "./components/Hero";
import Events from "./components/Events";
import ExploreNav from "./components/ExploreNav";
import InvitationCards from "./components/InvitationCards";
import EngagementTeaser from "./components/EngagementTeaser";
import Story from "./components/Story";
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import ShareActions from "./components/ShareActions";
import QRSection from "./components/QRSection";
import MusicControl from "./components/MusicControl";
import Blessings from "./components/Blessings";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);

  // =====================================================
  // AUDIO REFERENCES
  // =====================================================

  const openingAudioRef =
    useRef<HTMLAudioElement | null>(null);

  const mainAudioRef =
    useRef<HTMLAudioElement | null>(null);

  // =====================================================
  // OPENING MUSIC
  // =====================================================

  useEffect(() => {
    const audio = openingAudioRef.current;

    if (!audio) return;

    // Always 50%
    audio.volume = 0.5;

    // Try autoplay.
    // Browsers may reject this.
    const tryAutoplay = async () => {
      try {
        await audio.play();
        console.log("Opening music started automatically");
      } catch {
        console.log(
          "Autoplay blocked. Waiting for user interaction."
        );
      }
    };

    tryAutoplay();

    // =================================================
    // FALLBACK:
    // First user interaction starts opening music
    // =================================================

    const startMusic = () => {
      if (!audio.paused) {
        removeListeners();
        return;
      }

      audio.volume = 0.5;

      audio
        .play()
        .then(() => {
          console.log("Opening music started after interaction");
        })
        .catch((error) => {
          console.log(
            "Opening music failed:",
            error
          );
        });

      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener(
        "click",
        startMusic
      );

      window.removeEventListener(
        "touchstart",
        startMusic
      );

      window.removeEventListener(
        "pointerdown",
        startMusic
      );

      window.removeEventListener(
        "keydown",
        startMusic
      );
    };

    window.addEventListener(
      "click",
      startMusic
    );

    window.addEventListener(
      "touchstart",
      startMusic,
      { passive: true }
    );

    window.addEventListener(
      "pointerdown",
      startMusic
    );

    window.addEventListener(
      "keydown",
      startMusic
    );

    return () => {
      removeListeners();
    };
  }, []);

  // =====================================================
  // OPEN INVITATION
  // =====================================================

  const handleOpenInvitation = () => {
    // ---------------------------------------------
    // Stop opening music
    // ---------------------------------------------

    if (openingAudioRef.current) {
      openingAudioRef.current.pause();
      openingAudioRef.current.currentTime = 0;
    }

    // ---------------------------------------------
    // Start main music
    // ---------------------------------------------

    if (mainAudioRef.current) {
      mainAudioRef.current.volume = 0.5;

      mainAudioRef.current
        .play()
        .then(() => setMusicPlaying(true))
        .catch((error) => {
          console.log(
            "Main music could not play:",
            error
          );
        });
    }

    // ---------------------------------------------
    // Open main website
    // ---------------------------------------------

    setOpened(true);
  };

  return (
    <>
      {/* =================================================
          OPENING MUSIC
          ================================================= */}

      <audio
        ref={openingAudioRef}
        src="/opening.mp3"
        preload="auto"
        playsInline
      />

      {/* =================================================
          MAIN WEBSITE MUSIC
          ================================================= */}

      <audio
        ref={mainAudioRef}
        src="/main.mp3"
        preload="auto"
        loop
        playsInline
      />

      {/* =================================================
          PAGE
          ================================================= */}

      <AnimatePresence mode="wait">

        {!opened ? (
          <motion.div
            key="splash"
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.03,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Splash
              onOpen={handleOpenInvitation}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="min-h-screen"
          >
            <Hero />

            <ExploreNav />

            <InvitationCards />

            <Events />

            <EngagementTeaser />

            <Story
              mainAudioRef={mainAudioRef}
            />

            <Venue />

            <ShareActions />
            <QRSection />
            <Blessings />
            <Footer />

            <MusicControl
              playing={musicPlaying}
              muted={musicMuted}
              onToggle={() => {
                const audio = mainAudioRef.current;
                if (!audio) return;
                if (audio.paused) {
                  audio.play().then(() => setMusicPlaying(true)).catch(() => undefined);
                } else {
                  audio.pause();
                  setMusicPlaying(false);
                }
              }}
              onMute={() => {
                const audio = mainAudioRef.current;
                if (!audio) return;
                const next = !audio.muted;
                audio.muted = next;
                setMusicMuted(next);
              }}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}