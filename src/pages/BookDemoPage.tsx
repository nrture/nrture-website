import { useEffect } from "react";
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

export function BookDemoPage() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const initializeCalendly = () => {
      const container = document.getElementById("calendly-inline-widget");
      const calendly = window.Calendly;

      if (!calendly || !container) {
        return false;
      }

      if (container.getAttribute("data-calendly-initialized") === "true") {
        return true;
      }

      calendly.initInlineWidget({
        url: "https://calendly.com/sushanta-kumar-das/nrtureai-demo",
        parentElement: container,
      });

      container.setAttribute("data-calendly-initialized", "true");

      return true;
    };

    if (initializeCalendly()) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (initializeCalendly()) {
        window.clearInterval(intervalId);
      }
    }, 300);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen meet-elara-section text-ink">
      <Navigation showHalo={false} />
      <main className="mx-auto mt-[18vh] sm:mt-[16vh] md:mt-[14vh] lg:mt-[14vh] xl:mt-[13vh] 2xl:mt-[12vh] w-full max-w-[1400px] px-4 sm:px-6 pb-8">
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-[2.5rem] sm:text-[2.9rem] font-display font-semibold leading-tight text-ink">
              Want to learn more?
            </h1>
            <p className="text-[1.35rem] text-neutral-600">
              Schedule time with our team now.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              id="calendly-inline-widget"
              className="calendly-inline-widget"
              data-url="https://calendly.com/sushanta-kumar-das/nrtureai-demo"
              data-auto-load="false"
              data-resize="true"
              style={{ width: "1100px", maxWidth: "100%", height: "780px" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
