import { BgAnimateButton } from "@/components/ui/bg-animate-button";

export function ClosingCTASection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-[clamp(2rem,4vw,3.15rem)] max-[657px]:text-[min(3.75vw,1.55rem)] font-display font-semibold leading-tight text-transparent whitespace-nowrap">
          Your marketing efforts help visitors find you.
        </p>
        <p className="mt-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-[clamp(2rem,4vw,3.15rem)] max-[657px]:text-[min(4.25vw,2rem)] font-display font-semibold leading-tight text-transparent">
          nrtureAI™ helps visitors choose you.
        </p>
        <div className="mt-9 flex justify-center">
          <BgAnimateButton
            href="https://calendly.com/sushanta-kumar-das/nrtureai-demo"
            target="_blank"
            rel="noopener noreferrer"
            gradient="navbar"
            animation="spin-slow"
            shadow="flat"
            size="lg"
            rounded="2xl"
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
  );
}
