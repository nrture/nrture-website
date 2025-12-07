import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import WorldMap from "../components/ui/world-map";

const routes = [
  {
    start: { lat: 64.2008, lng: -149.4937 },
    end: { lat: 34.0522, lng: -118.2437 },
  },
  {
    start: { lat: 34.0522, lng: -118.2437 },
    end: { lat: -1.2921, lng: 36.8219 },
  },
  {
    start: { lat: -1.2921, lng: 36.8219 },
    end: { lat: 28.6139, lng: 77.209 },
  },
  {
    start: { lat: 51.5074, lng: -0.1278 },
    end: { lat: 28.6139, lng: 77.209 },
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: 43.1332, lng: 131.9113 },
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: -1.2921, lng: 36.8219 },
  },
];

export function WorldMapSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end 30%"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.4, 1], [90, 10, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.4, 1], [64, 16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.52, 0.1]);
  const shadowScale = useTransform(scrollYProgress, [0, 1], [0.52, 1]);

  return (
    <section className="relative -mt-12 bg-white py-0 overflow-hidden">
      <div className="relative left-1/2 flex w-screen -translate-x-1/2 flex-col gap-2 px-0">
        <div ref={containerRef} className="relative flex justify-center overflow-hidden [perspective:1400px]">
          <motion.div
            style={{
              rotateX,
              y: translateY,
              scale,
              transformStyle: "preserve-3d",
              transformOrigin: "center",
            }}
            className="relative w-screen max-w-none"
          >
            <motion.div
              className="pointer-events-none absolute inset-x-[-12vw] bottom-[-20px] h-20 rounded-full bg-neutral-900/30 blur-3xl sm:inset-x-[-6vw] lg:inset-x-[-4vw]"
              style={{ opacity: shadowOpacity, scale: shadowScale }}
            />
            <WorldMap dots={routes} lineColor="#38bdf8" className="w-screen max-w-none aspect-[4/3] sm:aspect-[8/3] lg:aspect-[3/1]" />
          </motion.div>
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 border-t border-neutral-200 px-4 pt-3 text-center text-sm text-neutral-500 sm:px-6">
          <span className="font-display text-base text-neutral-900">nrtureAI</span>
          <p>© 2025 nrtureAI by tRetail Labs. All rights reserved.</p>
          <a
            href="mailto:hello@nrture.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition hover:text-neutral-900"
          >
            hello@nrture.ai
          </a>
        </div>
      </div>
    </section>
  );
}
