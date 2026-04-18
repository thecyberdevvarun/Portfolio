"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus((prev) => ({ ...prev, submitting: true }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus({
        submitting: false,
        info: {
          error: false,
          msg: "Thanks — message received. Wire this form to your API or email service next.",
        },
      });
    } catch {
      setFormStatus({
        submitting: false,
        info: {
          error: true,
          msg: "Something went wrong. Try again.",
        },
      });
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pb-12"
    >
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description={
          "Have a project in mind or want to collaborate? I'm always open to discussing new opportunities."
        }
        icon={FaEnvelope}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="surface-card p-6 sm:p-8"
        >
          <h2 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
            Direct lines
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Prefer email or socials — form is a frontend placeholder until you
            connect a backend.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Email
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  Reach out via LinkedIn or GitHub for now
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Availability
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  Business hours (IST-friendly)
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Location
                </p>
                <p className="mt-1 text-sm text-zinc-300">Uttar Pradesh, India</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="surface-card p-6 sm:p-8"
        >
          <h2 className="flex items-center gap-2 font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
            <FaPaperPlane className="text-cyan-400" />
            Send a message
          </h2>

          <div className="mt-6 space-y-4">
            {[
              { name: "name", label: "Name", type: "text", ph: "Your name" },
              {
                name: "email",
                label: "Email",
                type: "email",
                ph: "you@example.com",
              },
              {
                name: "subject",
                label: "Subject",
                type: "text",
                ph: "Project / opportunity",
              },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="mb-1.5 block text-xs font-medium text-zinc-400"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.ph}
                  className={inputClass}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-zinc-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What are we building?"
                className={`${inputClass} resize-y min-h-[120px]`}
              />
            </div>

            {formStatus.info.msg && (
              <div
                className={`rounded-xl px-4 py-3 text-center text-sm ${
                  formStatus.info.error
                    ? "bg-red-500/10 text-red-300 ring-1 ring-red-500/30"
                    : "bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/25"
                }`}
              >
                {formStatus.info.msg}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus.submitting}
              className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
                formStatus.submitting
                  ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
                  : "bg-cyan-500 text-zinc-950 hover:bg-cyan-400"
              }`}
            >
              {formStatus.submitting ? (
                "Sending…"
              ) : (
                <>
                  <FaPaperPlane />
                  Send
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}
