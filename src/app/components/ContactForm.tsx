"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", project: "", message: "" });

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Replace with Formspree or backend endpoint
    setSent(true);
  }

  if (sent) {
    return (
      <p
        className="font-serif text-2xl italic"
        style={{ color: "var(--muted)" }}
      >
        Thank you. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-10">
      <div>
        <label htmlFor="name" className="label block mb-3">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handle}
          placeholder="Your name"
          className="field"
        />
      </div>

      <div>
        <label htmlFor="project" className="label block mb-3">
          Project
        </label>
        <input
          id="project"
          name="project"
          type="text"
          value={form.project}
          onChange={handle}
          placeholder="Brief description of your project"
          className="field"
        />
      </div>

      <div>
        <label htmlFor="message" className="label block mb-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handle}
          placeholder="Tell us more"
          className="field"
          rows={4}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
        <button
          type="submit"
          className="label tracking-widest transition-opacity hover:opacity-60 cursor-pointer"
          style={{ color: "var(--ink)", letterSpacing: "0.2em" }}
        >
          Send Message →
        </button>
        <span style={{ color: "var(--line)" }} className="hidden sm:block">
          |
        </span>
        <a
          href="https://wa.me/521XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="label tracking-widest transition-opacity hover:opacity-60"
          style={{ color: "var(--muted)" }}
        >
          WhatsApp →
        </a>
      </div>
    </form>
  );
}
