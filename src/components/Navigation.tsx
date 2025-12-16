import { useEffect, useState, type MouseEvent } from "react";
import logo from "../assets/logo.png";
import { BgAnimateButton } from "@/components/ui/bg-animate-button";

type NavLink = {
  label: string;
  href: string;
  offset?: number;
};

const navLinks: NavLink[] = [
  { label: "Meet Elara", href: "#meet-elara", offset: -0.05 },
  { label: "Product", href: "#product", offset: -0.2 },
  { label: "Solutions", href: "#solutions", offset: -0.15 },
  { label: "Pricing", href: "#pricing", offset: -0.1 },
  { label: "FAQ", href: "#faq", offset: -0.1 },
];

export type NavigationProps = {
  showHalo?: boolean;
};

export function Navigation({ showHalo = true }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollToLink = (link: NavLink) => {
    if (typeof document === "undefined" || typeof window === "undefined") return;
    const target = document.querySelector(link.href);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const base = window.pageYOffset + rect.top;
    const extra = (link.offset ?? 0) * window.innerHeight;
    const finalPosition = base + extra;

    window.scrollTo({
      top: finalPosition,
      behavior: "smooth",
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToLink(link);
  };

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const originalOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showHalo && (
        <div
          aria-hidden="true"
          className={`pointer-events-none fixed left-1/2 -top-10 flex w-[260vw] -translate-x-1/2 items-start justify-center -z-10 sm:-top-12 sm:w-[200vw] transition-all duration-500 ${
            isAtTop ? "opacity-80 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div
            className={`nav-aurora-halo h-[420px] w-[240vw] max-w-none rounded-none bg-gradient-to-r from-[#5ec6ff] via-[#c880ff] to-[#5c5bff] blur-[130px] sm:h-[460px] sm:blur-[150px] ${
              isAtTop ? "" : "nav-aurora-halo--paused"
            }`}
            style={{
              transform: "translateY(-50px)",
              opacity: 0.85,
              maskImage: "linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)",
              WebkitMaskImage:
                "linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)",
            }}
          />
        </div>
      )}
      <header className="fixed inset-x-0 top-3 z-50 bg-transparent sm:top-4">
        <div className="relative mx-auto w-full max-w-7xl px-3 py-3 sm:px-4">
          <div className="relative z-10">
            <div
              className="flex w-full items-center justify-between gap-2 rounded-[999px] px-3 py-2 sm:gap-5 sm:px-6 sm:py-3 md:gap-6 md:px-7"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#aee4ff,#f0c7ff,#efb5ff,#d8a9ff,#bac1ff)",
              }}
            >
              <a href="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 rounded-full p-1 -m-1">
                <img src={logo} alt="nrtureAI logo" className="h-8 w-auto sm:h-10 md:h-12" />
              </a>

              <nav className="relative hidden items-center gap-5 text-sm font-semibold text-white xl:flex xl:flex-1 xl:justify-center xl:text-base">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-white transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    onClick={(event) => handleNavClick(event, link)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 sm:gap-3 sm:text-sm">
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white/70 text-neutral-900 transition hover:border-neutral-500 hover:text-neutral-700 xl:hidden"
                  onClick={toggleMobileMenu}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-nav"
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M5 4h4a1 1 0 0 1 1 1v4H6a1 1 0 0 1-1-1V4Z" />
                    <path d="M11 4h4a1 1 0 0 1 1 1v4h-4a1 1 0 0 1-1-1V4Z" />
                    <path d="M5 11h4a1 1 0 0 1 1 1v4H6a1 1 0 0 1-1-1v-4Z" />
                    <path d="M11 11h4a1 1 0 0 1 1 1v4h-4a1 1 0 0 1-1-1v-4Z" />
                  </svg>
                </button>
                <BgAnimateButton
                  href="https://calendly.com/sushanta-kumar-das/nrtureai-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  gradient="navbar"
                  animation="spin-slow"
                  shadow="flat"
                  size="nav"
                  rounded="full"
                  className="hidden sm:inline-flex"
                >
                  Book a demo
                </BgAnimateButton>
                <a
                  href="https://elara.nrture.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 px-4 py-1.5 text-white shadow-sm transition hover:bg-neutral-700 sm:px-5 sm:py-2"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div
              id="mobile-nav"
              className="mt-3 h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)] overscroll-contain rounded-[32px] border border-neutral-200 bg-white px-4 py-5 text-neutral-900 xl:hidden overflow-hidden"
            >
              <div className="h-full space-y-5 overflow-y-auto pr-2">
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex w-full items-center justify-between rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
                      onClick={(event) => handleNavClick(event, link)}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-neutral-400">›</span>
                    </a>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="https://calendly.com/sushanta-kumar-das/nrtureai-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-center text-sm font-semibold text-neutral-900 transition hover:border-neutral-500 hover:bg-neutral-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request a demo
                  </a>
                  <a
                    href="https://elara.nrture.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-neutral-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
