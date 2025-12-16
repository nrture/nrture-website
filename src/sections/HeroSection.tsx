import { BgAnimateButton } from "@/components/ui/bg-animate-button";

const GAP_STATS = [
  {
    value: "93%",
    description: "of visitors decide by reading reviews.",
  },
  {
    value: "80%",
    description: "of businesses don’t even read their own reviews.",
  },
] as const;

export function HeroSection() {
  return (
    <>
      <section
        className="hero-landscape relative mt-0 box-border flex min-h-screen w-full items-center justify-center overflow-visible text-ink"
        id="solution"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 justify-center">
            <div className="h-72 w-[min(1100px,95vw)] bg-gradient-to-r from-violet-200/60 via-pink-200/60 to-sky-200/60 blur-3xl" />
          </div>
        </div>
        <div className="hero-content mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 pt-6 pb-12 text-center sm:px-6 sm:pt-12 sm:pb-16 md:gap-8 md:pt-16">
          <div className="relative z-20 flex flex-col items-center gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-600 sm:flex-row sm:gap-4">
            <div className="relative inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 text-[0.75rem] font-semibold text-neutral-900 shadow-[0_12px_32px_rgba(15,23,42,0.18)]">
              <span className="inline-flex items-center gap-2">
                Published research on visitor behavior
              </span>
            </div>
            <div className="relative inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 text-[0.75rem] font-semibold text-neutral-900 shadow-[0_12px_32px_rgba(15,23,42,0.18)]">
              <span className="inline-flex items-center gap-2">
                Trained on 150M+ data points. 
              </span>
            </div>
          </div>
          <h1
            className="bg-clip-text text-[clamp(1.7rem,7.7vw,8.15rem)] font-display font-semibold leading-tight tracking-tight text-transparent -mt-3 sm:-mt-4"
            style={{
              backgroundImage:
                "linear-gradient(92deg,var(--color-1) 0%, var(--color-2) 48%, var(--color-5) 100%)",
            }}
          >
            <a
              href="#product"
              className="contents text-transparent decoration-none hover:text-transparent focus-visible:text-transparent"
              aria-label="Jump to the product section"
            >
              <span className="block whitespace-nowrap">The Visitor Experience</span>
              <span className="block whitespace-nowrap">Intelligence Layer</span>
            </a>
          </h1>
          <p className="max-w-3xl text-lg text-neutral-700 sm:text-xl md:text-2xl">
            <strong>
              nrtureAI unifies real visitor voice and reputation signals across destinations and operators in a single clear
              view.
            </strong>
          </p>
          <div className="mt-6 flex w-full justify-center">
            <BgAnimateButton
              href="https://calendly.com/sushanta-kumar-das/nrtureai-demo"
              target="_blank"
              rel="noopener noreferrer"
              gradient="navbar"
              animation="spin-slow"
              size="lg"
              rounded="2xl"
              shadow="flat"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={3} y={5} width={18} height={16} rx={2} />
                  <path d="M16 3v4M8 3v4M3 11h18M8 15h2m4 0h2M8 19h2m4 0h2" />
                </svg>
                <span>Book a Demo</span>
              </span>
            </BgAnimateButton>
          </div>
        </div>
      </section>
      <section
        className="relative mt-2 w-full scroll-mt-28 bg-gradient-to-r from-[#0f0f0f] via-[#1f1f1f] to-[#060606] py-14 text-white shadow-[0_25px_65px_rgba(5,5,5,0.55)] sm:mt-4 md:mt-6 md:py-16 lg:scroll-mt-40"
        id="elara"
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-24">
          <div className="grid w-full gap-10 sm:grid-cols-2 lg:flex-1">
            {GAP_STATS.map((stat) => (
              <div key={stat.value} className="space-y-3">
                <p className="text-[3.5rem] font-semibold leading-none sm:text-[4.5rem]">{stat.value}</p>
                <p className="text-lg text-white/85">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full space-y-4 lg:flex-1">
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-tight text-white">
              The Silent Revenue Leak
            </h2>
            <p className="text-lg text-white/85">
              The gap quietly erodes trust, spend and repeat visits of your customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
