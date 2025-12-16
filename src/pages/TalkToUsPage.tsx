import { Navigation } from "../components/Navigation";
import SignupFormDemo from "../components/signup-form-demo";
import { Footer } from "../components/Footer";

export function TalkToUsPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navigation showHalo={false} />
      <main className="mx-auto mt-[24vh] sm:mt-[22vh] md:mt-[20vh] lg:mt-[18vh] xl:mt-[18vh] 2xl:mt-[15vh] flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-display font-semibold leading-tight text-ink sm:text-[2.5rem]">
            See how nrtureAI protects every visitor moment
          </h1>
          <p className="text-base text-neutral-600">
            Tell us about your venues, destinations, or portfolios and we&apos;ll assemble a walkthrough that shows how Elara turns reviews into intervention-ready intelligence.
          </p>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex items-start gap-2">• 24/7 reputation triage across reviews, socials, and CX apps</li>
            <li className="flex items-start gap-2">• Emotion-to-spend intelligence tailored to your channels</li>
            <li className="flex items-start gap-2">• Regional benchmarking for airports, attractions, and destinations</li>
          </ul>
        </div>
        <div className="flex-1">
          <SignupFormDemo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
