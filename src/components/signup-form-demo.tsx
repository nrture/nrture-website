"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
type SignupFormDemoProps = {
  className?: string;
};

export default function SignupFormDemo({ className }: SignupFormDemoProps) {
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const apiBase = import.meta.env.DEV
      ? "/api"
      : "https://elara.nrture.ai";

    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        body.append(key, value);
      }
    });

    try {
      const res = await fetch(`${apiBase}/contact-us/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      let data: { success?: boolean; message?: string } | null = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (data && data.success) {
        setSuccess(true);
        form.reset();
        return;
      }

      if (!res.ok) {
        setError(data?.message || "Something went wrong. Please try again.");
        return;
      }

      setError("Something went wrong. Please try again.");
    } catch (err) {
      setError("Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className={cn("shadow-input mx-auto w-full rounded-3xl border border-neutral-200 bg-white/95 p-4 sm:p-6 lg:p-7", className)}>
      <h2 className="text-2xl font-display font-semibold text-neutral-900">
        Talk to the nrtureAI team
      </h2>
      <p className="mt-2 text-sm text-neutral-600">
        Share a few details and we&apos;ll send you a personalized walkthrough within one business day.
      </p>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 sm:flex-row">
          <LabelInputContainer className="flex-1">
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="first_name" placeholder="Jordan" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer className="flex-1">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="last_name" placeholder="Lee" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="work_email" placeholder="you@company.com" type="email" required />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="message">Tell us about your guest experience goals</Label>
          <textarea
            id="message"
            rows={3}
            name="message"
            className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            placeholder="Give us a quick brief so we can tailor the walkthrough."
            required
          />
        </LabelInputContainer>
        <button
          className="group/btn relative block h-11 w-full rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-sm font-semibold uppercase tracking-wider text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send request →"}
          <BottomGradient />
        </button>
        {success && (
          <p className="text-sm text-green-600">
            Thank you — your request has been sent.
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}
      </form>
      <p className="mt-4 text-center text-xs text-neutral-500">
        By submitting, you agree to hear from nrtureAI regarding product updates and research. You can opt out at any time.
      </p>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
