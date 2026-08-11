"use client";

import { useState } from "react";

const features = [
  {
    icon: "🔐",
    title: "Secure Authentication",
    description:
      "Protect your applications with a reliable authentication system built for modern software.",
  },
  {
    icon: "🔑",
    title: "License Management",
    description:
      "Create, manage and validate software licenses from one powerful dashboard.",
  },
  {
    icon: "💻",
    title: "HWID Protection",
    description:
      "Control which devices are allowed to access your applications.",
  },
  {
    icon: "📊",
    title: "Live Analytics",
    description:
      "Monitor users, licenses and authentication activity in real time.",
  },
  {
    icon: "⚡",
    title: "Developer API",
    description:
      "Connect your software to LabAuth using a simple and powerful API.",
  },
  {
    icon: "🛡️",
    title: "Security Controls",
    description:
      "Manage access, sessions, devices and application security from one place.",
  },
];

const faqs = [
  {
    question: "What is LabAuth?",
    answer:
      "LabAuth is an authentication and licensing platform that helps developers protect their software and manage access.",
  },
  {
    question: "Can I use LabAuth for my own software?",
    answer:
      "Yes. Your applications will be able to communicate with LabAuth through its API.",
  },
  {
    question: "Does LabAuth support HWID protection?",
    answer:
      "Yes. Applications can use hardware identification to restrict licenses to authorized devices.",
  },
  {
    question: "Will LabAuth have an API?",
    answer:
      "Yes. The platform is being designed around an API so developers can integrate authentication and licensing directly into their applications.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-black text-black">
              L
            </div>

            <span className="text-lg font-bold">
              LabAuth
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>

            <a href="#security" className="hover:text-white">
              Security
            </a>

            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>

            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white"
            >
              Login
            </a>

            <a
              href="#pricing"
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-black hover:bg-white/85"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/[0.06] bg-black px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-sm text-white/60">

              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </a>

              <a
                href="#security"
                onClick={() => setMenuOpen(false)}
              >
                Security
              </a>

              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </a>

              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </a>

              <a href="#" className="text-white">
                Login
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative px-5 pb-24 pt-40 sm:pt-48">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl text-center">

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Authentication infrastructure for developers
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
            Protect your software.
            <br />

            <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
              Simplify your access.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
            LabAuth gives developers authentication, licensing,
            HWID protection, analytics and APIs in one powerful
            platform.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="#pricing"
              className="rounded-xl bg-white px-7 py-4 text-sm font-bold text-black hover:bg-white/85"
            >
              Get Started →
            </a>

            <a
              href="#features"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/70 hover:bg-white/[0.07] hover:text-white"
            >
              Explore Features
            </a>

          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="relative mx-auto mt-20 max-w-5xl">

          <div className="absolute inset-x-20 bottom-0 h-40 rounded-full bg-purple-600/10 blur-[100px]" />

          <div className="relative
