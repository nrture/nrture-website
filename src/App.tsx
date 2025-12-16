import { Suspense, lazy, useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./sections/HeroSection";

const LazyProblemSolutionSection = lazy(
  () =>
    import("./sections/ProblemSolutionSection").then((module) => ({
      default: module.ProblemSolutionSection,
    })),
);

const LazyMeetElaraSection = lazy(
  () =>
    import("./sections/MeetElaraSection").then((module) => ({
      default: module.MeetElaraSection,
    })),
);

const LazySolutionsSection = lazy(
  () =>
    import("./sections/SolutionsSection").then((module) => ({
      default: module.SolutionsSection,
    })),
);

const LazyPricingSection = lazy(
  () =>
    import("./sections/PricingSection").then((module) => ({
      default: module.PricingSection,
    })),
);

const LazyFAQSection = lazy(
  () =>
    import("./sections/FAQSection").then((module) => ({
      default: module.FAQSection,
    })),
);

const LazyClosingCTASection = lazy(
  () =>
    import("./sections/ClosingCTASection").then((module) => ({
      default: module.ClosingCTASection,
    })),
);

const LazyFooter = lazy(
  () =>
    import("./components/Footer").then((module) => ({
      default: module.Footer,
    })),
);

const LazyTalkToUsPage = lazy(
  () =>
    import("./pages/TalkToUsPage").then((module) => ({
      default: module.TalkToUsPage,
    })),
);

const LazyBookDemoPage = lazy(
  () =>
    import("./pages/BookDemoPage").then((module) => ({
      default: module.BookDemoPage,
    })),
);

const LazyPrivacyPolicyPage = lazy(
  () =>
    import("./pages/PrivacyPolicyPage").then((module) => ({
      default: module.PrivacyPolicyPage,
    })),
);

function App() {
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/",
  );
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const anyWindow = window as typeof window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (anyWindow.requestIdleCallback) {
      const idleId = anyWindow.requestIdleCallback(() => {
        setShowBelowFold(true);
      });
      return () => {
        if (anyWindow.cancelIdleCallback) {
          anyWindow.cancelIdleCallback(idleId);
        }
      };
    }

    const timeoutId = setTimeout(() => {
      setShowBelowFold(true);
    }, 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (path.startsWith("/talktous")) {
    return (
      <Suspense fallback={null}>
        <LazyTalkToUsPage />
      </Suspense>
    );
  }

  if (path.startsWith("/book-a-demo")) {
    return (
      <Suspense fallback={null}>
        <LazyBookDemoPage />
      </Suspense>
    );
  }

  if (path.startsWith("/privacy-policy")) {
    return (
      <Suspense fallback={null}>
        <LazyPrivacyPolicyPage />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-white">
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navigation />
        <main className="w-full overflow-x-hidden">
          <HeroSection />
          {showBelowFold && (
            <Suspense fallback={null}>
              <LazyProblemSolutionSection />
              <LazyMeetElaraSection />
              <LazySolutionsSection />
              <LazyPricingSection />
              <LazyFAQSection />
              <LazyClosingCTASection />
            </Suspense>
          )}
        </main>
        {showBelowFold && (
          <Suspense fallback={null}>
            <LazyFooter />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
