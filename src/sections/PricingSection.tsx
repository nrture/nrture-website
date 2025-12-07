type PricingPlan = {
  key: string;
  name: string;
  description: string;
  price: string;
  highlight?: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
};

const plans: PricingPlan[] = [
  {
    key: "lite",
    name: "Lite",
    description: "Ideal for single-outlet owners taking their first confident step into visitor intelligence.",
    price: "$59",
    benefits: [
      "Elara — AI Social Reputation Manager",
    ],
    ctaLabel: "Start Lite",
    ctaHref: "https://nrture.ai/choose-plan/",
  },
  {
    key: "litePlus",
    name: "Lite+",
    highlight: "Recommended",
    description: "Perfect for operators ready to see beyond their own walls.",
    price: "$149",
    benefits: [
      "Everything in Lite",
      "Emotion-to-Spend Intelligence Report",
      "Peer Benchmarking Report",
    ],
    ctaLabel: "Upgrade to Lite+",
    ctaHref: "https://nrture.ai/choose-plan/",
  },
  {
    key: "pro",
    name: "Pro",
    description: "For operators who want deeper insight and answers that guide improvement.",
    price: "$249",
    benefits: [
      "Everything in Lite+",
      "Social Reputation Dashboard",
      "Conversational AI — Ask Elara Anything",
      "Real-time Survey Integration",
    ],
    ctaLabel: "Choose Pro",
    ctaHref: "https://nrture.ai/choose-plan/",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    description: "For networks that need unified intelligence and the capacity to raise standards at scale.",
    price: "Custom",
    benefits: [
      "Everything in Pro",
      "Strategic + Enterprise Intelligence",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "https://nrture.ai/choose-plan/",
  },
];

export function PricingSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0a4bff] via-[#5d6bff] to-[#a85fff] py-20 text-white sm:py-24"
      id="pricing"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-6 flex justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Pricing</p>
        </div>

        <div className="mx-auto space-y-4 text-center">
          <h2 className="mx-auto max-w-6xl text-[clamp(2.4rem,4vw,3.4rem)] font-display font-semibold leading-tight">
            For operators of all sizes, nrtureAI is built to match your pace and your ambition.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/85">
            Whether you run one outlet or an entire destination, our pricing scales clearly with your footprint and the visitor
            experiences you want to elevate.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const isContactLink = plan.ctaLabel.toLowerCase().includes("contact");
            return (
              <div
                key={plan.key}
                className="flex h-full flex-col rounded-[28px] border border-white/15 bg-white/95 p-6 text-ink shadow-[0_25px_65px_rgba(15,23,42,0.18)] backdrop-blur"
              >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xl font-display font-semibold">{plan.name}</p>
                {plan.highlight && (
                  <span className="rounded-full bg-[#fbd7f3] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#6b1b6f]">
                    {plan.highlight}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 md:min-h-[150px]">
                <p className="text-sm leading-relaxed text-neutral-600 md:min-h-[60px]">{plan.description}</p>

                <div className="flex min-h-[52px] items-end gap-2 text-4xl font-display font-semibold md:mt-auto md:min-h-[56px]">
                  <span>
                    {plan.price}
                    {plan.price !== "Custom" && <span className="ml-2 text-base font-semibold text-neutral-500">/month</span>}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-700 md:mt-8">
                {plan.benefits.map((benefit, index) => (
                  <li key={`${plan.key}-benefit-${index}`} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#5b62ff]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

                <a
                  href={plan.ctaHref}
                  target={isContactLink ? undefined : "_blank"}
                  rel={isContactLink ? undefined : "noopener noreferrer"}
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#101828] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#101828]"
                >
                  {plan.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
