import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t-2 border-sky-400 bg-white text-ink" id="contact">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4 sm:text-left">
            <img src={logo} alt="nrtureAI logo" className="h-8 w-auto sm:h-10" />
            <p className="text-sm text-neutral-600">
              © 2025 tRetail Labs Oceania Pty Ltd. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:items-end sm:text-right">
            <a
              href="/talktous"
              className="inline-flex items-center justify-center rounded-full border border-sky-400 px-5 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-50"
            >
              Contact Us
            </a>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600 sm:justify-end">
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition hover:text-ink hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition hover:text-ink hover:underline"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200" />
      </div>
    </footer>
  );
}
