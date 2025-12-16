import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navigation showHalo={false} />
      <main className="mx-auto mt-[15vh] w-full max-w-4xl px-6 pb-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-display font-semibold leading-tight text-ink sm:text-5xl">
              Privacy Policy
            </h1>
            <div className="space-y-2 text-sm text-neutral-600">
              <p className="font-semibold">tRetail Labs Oceania Pty Limited</p>
              <p>600 Sneydes Road, Werribee VIC 3030 Australia</p>
            </div>
          </div>

          <div className="prose prose-neutral max-w-none space-y-6 text-base leading-relaxed text-neutral-700">
            <p>
              This Privacy Policy explains how tRetail Labs Oceania Pty Limited collects, uses and protects personal information. By using our website, platform or mobile applications you consent to the practices described in this policy. This Privacy Policy is governed by the laws of Victoria, Australia.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Information We Collect</h2>
              <p>
                We may collect personal information that you provide directly to us including your name, contact details, business details, preferences and any information you submit while using our website or app. We may also collect usage data, device information and technical data that supports the functioning of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">How We Use Your Information</h2>
              <p>
                We use your information to operate our services, improve user experience, provide customer support, communicate with you, manage subscriptions and meet legal obligations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Sharing of Information</h2>
              <p>
                We do not sell personal information. We may share information with trusted service providers who assist in operating our platform or providing services to you. These providers are required to protect your information. We may also disclose information if required by law or to protect our legal rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Data Storage and Security</h2>
              <p>
                Your information is stored securely and we take reasonable steps to protect it from unauthorised access, modification or disclosure. While we use appropriate safeguards, no method of electronic storage can be guaranteed to be fully secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Access and Correction</h2>
              <p>
                You may request access to the personal information we hold about you and may ask us to correct or update it. Requests can be made by contacting us through our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Children</h2>
              <p>
                Our services are not intended for individuals under the age of eighteen. We do not knowingly collect data from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">International Transfers</h2>
              <p>
                If your information is processed outside Australia, we ensure that appropriate safeguards are in place to protect your information in accordance with Victorian privacy laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time and the updated version will be posted on our website. Continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy or the way we handle personal information please contact us through our website contact form.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
