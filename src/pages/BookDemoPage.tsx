import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_WIDGET_URL = "https://calendly.com/sushanta-kumar-das/nrtureai-demo";
const CALENDLY_SCRIPT_URL = "https://assets.calendly.com/assets/external/widget.js";

export function BookDemoPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasLoadedScriptRef = useRef(false);
  const [hasTriggeredLoad, setHasTriggeredLoad] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const initializeCalendly = useCallback(() => {
    const container = containerRef.current;
    const calendly = window.Calendly;

    if (!calendly || !container) {
      return false;
    }

    if (container.getAttribute("data-calendly-initialized") === "true") {
      return true;
    }

    calendly.initInlineWidget({
      url: CALENDLY_WIDGET_URL,
      parentElement: container,
    });

    container.setAttribute("data-calendly-initialized", "true");
    setHasInitialized(true);

    return true;
  }, []);

  const triggerLoad = useCallback(() => {
    setHasTriggeredLoad(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || hasTriggeredLoad || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          triggerLoad();
        }
      },
      { rootMargin: "400px" },
    );

    observer.observe(containerRef.current);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [hasTriggeredLoad, triggerLoad]);

  useEffect(() => {
    if (!hasTriggeredLoad || hasInitialized) {
      return;
    }

    if (typeof document === "undefined") {
      return;
    }

    if (window.Calendly && initializeCalendly()) {
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_URL}"]`,
    );

    if (existingScript) {
      const onLoad = () => {
        if (initializeCalendly()) {
          existingScript.removeEventListener("load", onLoad);
        }
      };
      existingScript.addEventListener("load", onLoad);
      return () => {
        existingScript.removeEventListener("load", onLoad);
      };
    }

    if (hasLoadedScriptRef.current) {
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    const handleScriptLoad = () => {
      initializeCalendly();
    };
    script.addEventListener("load", handleScriptLoad);
    document.body.appendChild(script);
    hasLoadedScriptRef.current = true;

    return () => {
      script.removeEventListener("load", handleScriptLoad);
    };
  }, [hasTriggeredLoad, initializeCalendly, hasInitialized]);

  const overlayContent = useMemo(() => {
    if (hasInitialized) {
      return null;
    }

    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-200 bg-white/80 text-center text-sm text-neutral-600">
        <p>Calendly will load once this section becomes visible.</p>
        <button
          type="button"
          onClick={triggerLoad}
          className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 transition hover:bg-neutral-100"
        >
          Load scheduler now
        </button>
      </div>
    );
  }, [hasInitialized, triggerLoad]);

  return (
    <div className="min-h-screen meet-elara-section text-ink">
      <Navigation showHalo={false} />
      <main className="mx-auto mt-[18vh] sm:mt-[16vh] md:mt-[14vh] lg:mt-[14vh] xl:mt-[13vh] 2xl:mt-[12vh] w-full max-w-[1400px] px-4 sm:px-6 pb-8">
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-[2.5rem] sm:text-[2.9rem] font-display font-semibold leading-tight text-ink">
              Want to learn more?
            </h1>
            <p className="text-[1.35rem] text-neutral-600">Schedule time with our team now.</p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[1100px] px-2">
              <div
                ref={containerRef}
                id="calendly-inline-widget"
                className="calendly-inline-widget"
                data-url={CALENDLY_WIDGET_URL}
                data-auto-load="false"
                data-resize="true"
                style={{ width: "100%", height: "780px" }}
              />
              {overlayContent}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
