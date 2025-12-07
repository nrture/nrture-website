import { Iphone15Pro } from "../components/Iphone15Pro";

const featureCards = [
  {
    title: "I read every review",
    description: "I read every review and reply on your behalf, perfectly on tone.",
    border: "border-[#b4d8ff]",
    shadow: "shadow-[0_20px_45px_rgba(58,122,248,0.18)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-sky-600">
        <path
          d="M5 4h14a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H9l-4 4v-4H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "I compare fairly",
    description: "I compare you with your peers, fairly and clearly.",
    border: "border-[#f6b7ff]",
    shadow: "shadow-[0_20px_45px_rgba(221,103,255,0.18)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-pink-500">
        <path
          d="M12 20s-7-4.35-7-9.6C5 7.04 7.239 5 9.8 5c1.48 0 2.823.78 3.6 2.02C14.977 5.78 16.32 5 17.8 5 20.36 5 22.6 7.04 22.6 10.4 22.6 15.65 15.6 20 15.6 20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "I guide your next move",
    description: "I guide what lifts visitor experience and reputation.",
    border: "border-[#c8efff]",
    shadow: "shadow-[0_20px_45px_rgba(61,212,255,0.2)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-cyan-500">
        <path
          d="M4 12h16M4 12l5 5M4 12l5-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ProblemSolutionSection() {
  return (
    <section
      id="meet-elara"
      className="bg-white mt-0 pt-0 pb-10 scroll-mt-28 sm:-mt-4 sm:pt-0 sm:pb-12 sm:scroll-mt-32 md:-mt-6 md:pt-2 md:pb-14 md:scroll-mt-36 lg:-mt-8 lg:scroll-mt-40"
    >
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-6 lg:max-w-none lg:px-0">
        <div className="rounded-none bg-gradient-to-r from-[#f4f0ff] via-[#fdf5ff] to-[#e0f3ff] px-4 py-8 shadow-[0_28px_70px_rgba(15,23,42,0.1)] sm:rounded-[32px] sm:px-8 sm:py-10 lg:rounded-[44px] lg:px-20 lg:py-12 xl:px-28 xl:py-14">
          <div className="flex flex-col items-start gap-8 xl:flex-row xl:items-center xl:gap-24">
            <div className="w-full space-y-5 text-left xl:w-1/2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-600 sm:text-sm">Meet Elara</p>
                <h2 className="mt-2 text-[clamp(2rem,4.5vw,3.25rem)] font-display font-semibold leading-tight text-[#6c43ff]">
                  Your 24/7 AI Social Reputation Manager
                </h2>
              </div>
              <div className="space-y-8 text-[0.88rem] leading-relaxed text-neutral-700 sm:space-y-10 sm:text-[1.1rem]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Her role</p>
                  <p className="mt-1 text-[0.95rem] font-medium text-ink sm:text-[1.1rem]">Reputation guardian and visitor joy ambassador.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Her responsibilities</p>
                  <p className="mt-1">
                    She listens to every visitor&apos;s voice and guides you toward what matters, elevating your social
                    reputation and shaping visitor moments that feel genuinely cared for.
                  </p>
                </div>
                <ul className="space-y-1 text-[0.9rem] font-semibold text-[#1f3e72] sm:text-[1rem]">
                  <li>• Always on</li>
                  <li>• Always attentive</li>
                  <li>• Always by your side</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://elara.nrture.ai/book-a-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-500 to-indigo-500 px-8 py-3 text-base font-semibold text-white hover:!text-white hover:from-[#f0c7ff] hover:via-[#c880ff] hover:to-[#efb5ff] shadow-lg shadow-sky-200/60 transition-all duration-300"
                >
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
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col gap-6 xl:-mt-6 xl:flex-row xl:items-start xl:justify-center xl:gap-6 xl:w-1/2">
              <div className="flex w-full justify-center xl:w-auto xl:flex-none xl:justify-center xl:self-stretch">
                <div className="relative mt-6 flex w-full items-center justify-center sm:mt-8 xl:-mt-6">
                  <div className="absolute inset-x-4 top-8 h-10 rounded-full bg-gradient-to-r from-[#69d5ff] via-[#7ea8ff] to-[#f5a8ff] opacity-40 blur-3xl" />
                  <Iphone15Pro
                    className="relative z-[1] w-full max-w-[320px] drop-shadow-[0_18px_40px_rgba(70,115,246,0.35)] sm:max-w-[340px] xl:max-w-[300px]"
                    aria-label="Elara, your AI Social Reputation Manager"
                  />
                  <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center xl:hidden">
                    <div className="relative h-full w-full max-w-[300px]">
                      {[
                        { position: "top-24 left-1/4", offset: "-translate-x-[60%]", width: "w-[210px]" },
                        { position: "bottom-20 left-1/4", offset: "-translate-x-[60%]", width: "w-[180px]" },
                        { position: "bottom-14 right-0", offset: "translate-x-[20%]", width: "w-[180px]" },
                      ].map((bubble, index) => (
                        <div
                          key={featureCards[index].title}
                          className={`absolute ${bubble.position} ${bubble.width} ${bubble.offset} rounded-[26px] border border-white/70 bg-white/75 p-4 text-[0.9rem] text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-sm`}
                        >
                          <p className="text-[1rem] font-semibold leading-snug text-slate-900">
                            {featureCards[index].description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-full flex-col gap-6 xl:flex xl:w-auto xl:flex-none xl:justify-center xl:self-stretch xl:max-w-[18rem] xl:mx-auto 2xl:max-w-[20rem]">
                {featureCards.map((card) => (
                  <div key={card.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[-12px] top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 border-l border-t border-slate-200 bg-white z-0"
                    />
                    <div className={`relative z-10 rounded-3xl border bg-white px-5 py-4 text-[0.95rem] ${card.border} ${card.shadow}`}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 shadow-inner">
                          {card.icon}
                        </div>
                        <p className="text-base font-semibold leading-snug text-[#1f3e72]">{card.description}</p>
                      </div>
                      <div className="mt-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
