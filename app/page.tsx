"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Github,
  KeyRound,
  LayoutDashboard,
  Lock,
  Menu,
  X,
  BarChart3,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "Give your applications a reliable authentication layer with secure sessions and access controls.",
  },
  {
    icon: KeyRound,
    title: "License Management",
    description:
      "Create, validate, expire and manage licenses from one centralized platform.",
  },
  {
    icon: Cpu,
    title: "HWID Protection",
    description:
      "Bind licenses to authorized hardware and control device access whenever you need.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description:
      "Monitor applications, users, licenses and authentication activity from your dashboard.",
  },
  {
    icon: Code2,
    title: "Developer API",
    description:
      "Integrate LabAuth into your software using a simple and powerful API.",
  },
  {
    icon: Zap,
    title: "Fast Infrastructure",
    description:
      "Built for fast authentication requests and reliable application communication.",
  },
];

const faqs = [
  {
    question: "What is LabAuth?",
    answer:
      "LabAuth is an authentication and licensing platform for developers. It gives you the tools to protect applications, manage licenses, control HWIDs and monitor activity.",
  },
  {
    question: "Can I use LabAuth for my own software?",
    answer:
      "Yes. LabAuth is designed to integrate with your applications through its API and authentication system.",
  },
  {
    question: "Can I manage HWIDs?",
    answer:
      "Yes. Licenses can be associated with hardware identifiers, allowing you to control authorized devices and reset HWIDs when necessary.",
  },
  {
    question: "Will there be an API?",
    answer:
      "Yes. LabAuth will provide developer endpoints for authentication, licensing, users, HWID management and application data.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For testing and small projects.",
    features: [
      "1 application",
      "100 licenses",
      "Basic analytics",
      "API access",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For serious developers.",
    popular: true,
    features: [
      "10 applications",
      "10,000 licenses",
      "Advanced analytics",
      "HWID protection",
      "Webhooks",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For businesses and teams.",
    features: [
      "Unlimited applications",
      "Unlimited licenses",
      "Advanced security",
      "Custom API limits",
      "Dedicated support",
      "Custom integrations",
    ],
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-[-300px] left-[-150px] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-black text-black shadow-lg shadow-white/10">
              L
            </div>

            <span className="text-lg font-bold tracking-tight">
              LabAuth
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#security" className="transition hover:text-white">
              Security
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Login
            </a>

            <a
              href="#pricing"
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/[0.06] bg-black md:hidden"
            >
              <div className="flex flex-col gap-5 px-6 py-6 text-sm text-white/60">
                <a href="#features" onClick={() => setMobileOpen(false)}>
                  Features
                </a>
                <a href="#security" onClick={() => setMobileOpen(false)}>
                  Security
                </a>
                <a href="#pricing" onClick={() => setMobileOpen(false)}>
                  Pricing
                </a>
                <a href="#faq" onClick={() => setMobileOpen(false)}>
                  FAQ
                </a>
                <a href="#" className="text-white">
                  Login
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative px-5 pb-24 pt-36 sm:px-6 sm:pt-44">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Authentication infrastructure for developers
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Protect your software.
              <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                Simplify your access.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              LabAuth gives developers authentication, licensing, HWID
              protection, analytics and APIs in one powerful platform.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white/85"
              >
                Get Started
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                Explore Features
              </a>
            </div>
          </motion.div>

          {/* PRODUCT PREVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative mx-auto mt-20 max-w-5xl"
          >
            <div className="absolute inset-x-10 bottom-0 h-32 rounded-full bg-violet-600/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] text-left shadow-2xl shadow-black">
              {/* Browser bar */}
              <div className="flex items-center border-b border-white/[0.07] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>

                <div className="mx-auto rounded-lg border border-white/5 bg-white/[0.025] px-16 py-1.5 text-[10px] text-white/20 sm:px-32">
                  app.labauth
                </div>
              </div>

              <div className="flex min-h-[360px]">
                {/* Sidebar */}
                <aside className="hidden w-48 border-r border-white/[0.07] p-4 sm:block">
                  <div className="mb-8 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-black text-black">
                      L
                    </div>
                    <span className="text-xs font-bold">LabAuth</span>
                  </div>

                  <div className="space-y-1">
                    {[
                      ["Overview", LayoutDashboard],
                      ["Applications", Code2],
                      ["Licenses", KeyRound],
                      ["Users", Users],
                    ].map(([name, Icon]) => {
                      const IconComponent = Icon as typeof LayoutDashboard;

                      return (
                        <div
                          key={name as string}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] ${
                            name === "Overview"
                              ? "bg-white/[0.07] text-white"
                              : "text-white/30"
                          }`}
                        >
                          <IconComponent size={13} />
                          {name as string}
                        </div>
                      );
                    })}
                  </div>
                </aside>

                {/* Dashboard */}
                <div className="flex-1 p-5 sm:p-7">
                  <div className="flex items-center justify-between
