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
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-white/30">
                        Dashboard
                      </p>
                      <h3 className="mt-1 text-lg font-bold">
                        Welcome back.
                      </h3>
                    </div>

                    <div className="hidden rounded-lg border border-white/10 px-3 py-2 text-[10px] text-white/40 sm:block">
                      Last 30 days
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ["Applications", "12", "+18%"],
                      ["Active Licenses", "8,421", "+24%"],
                      ["Authenticated Users", "3,842", "+12%"],
                    ].map(([title, value, growth]) => (
                      <div
                        key={title}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                      >
                        <p className="text-[10px] text-white/30">
                          {title}
                        </p>

                        <div className="mt-2 flex items-end justify-between">
                          <span className="text-xl font-bold">
                            {value}
                          </span>

                          <span className="text-[9px] text-emerald-400">
                            {growth}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 lg:grid-cols-5">
                    <div className="rounded-xl border border-white/[0.07] p-5 lg:col-span-3">
                      <p className="text-[10px] text-white/30">
                        Authentication activity
                      </p>

                      <div className="mt-8 flex h-28 items-end gap-1">
                        {[35, 48, 40, 65, 52, 74, 58, 82, 69, 91, 78, 96, 85, 100].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-sm bg-white/10"
                              style={{ height: `${height}%` }}
                            />
                          ),
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] p-5 lg:col-span-2">
                      <p className="text-[10px] text-white/30">
                        System status
                      </p>

                      <div className="mt-5 space-y-4">
                        {[
                          ["API", "Operational"],
                          ["Authentication", "Operational"],
                          ["Database", "Operational"],
                        ].map(([name, status]) => (
                          <div
                            key={name}
                            className="flex items-center justify-between"
                          >
                            <span className="text-xs text-white/50">
                              {name}
                            </span>

                            <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.06] sm:grid-cols-4">
          {[
            ["99.9%", "Platform uptime"],
            ["<100ms", "API response"],
            ["24/7", "Monitoring"],
            ["Secure", "Infrastructure"],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-8 text-center">
              <p className="text-xl font-bold sm:text-2xl">{value}</p>
              <p className="mt-1 text-[11px] text-white/30">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-5 py-28 sm:px-6 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              Powerful infrastructure
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Everything you need to protect your applications.
            </h2>

            <p className="mt-5 leading-7 text-white/40">
              Build, secure and manage your software without building an
              authentication infrastructure from scratch.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.035]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition group-hover:bg-white group-hover:text-black">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/35">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="px-5 py-28 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              Security first
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Your application.
              <br />
              Your rules.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/40">
              LabAuth gives you control over authentication, licenses,
              devices and application access from a single platform.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "License-based access control",
                "Hardware identification",
                "Application-level permissions",
                "Authentication activity logs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <Check size={13} />
                  </div>

                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-violet-600/10 blur-[100px]" />

            <div className="relative rounded-3xl border border-white/10 bg-[#080808] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
                    <Lock size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">Security Monitor</p>
                    <p className="text-xs text-white/30">
                      Real-time protection
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-400">
                  Protected
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["API Authentication", "Active"],
                  ["License Validation", "Active"],
                  ["HWID Protection", "Active"],
                  ["Activity Monitoring", "Active"],
                ].map(([name, status]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <span className="text-sm text-white/50">{name}</span>

                    <span className="flex items-center gap-2 text-xs text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-28 sm:px-6 sm:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              Pricing
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Start free. Scale when you need.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/40">
              Simple plans designed for developers and growing software
              projects.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 ${
                  plan.popular
                    ? "border-white/25 bg-white/[0.06]"
                    : "border-white/[0.08] bg-[#080808]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-black">
                    POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold">{plan.name}</h3>

                <p className="mt-2 text-sm text-white/35">
                  {plan.description}
                </p>

                <div className="mt-8">
                  <span className="text-4xl font-black">{plan.price}</span>

                  {plan.price !== "Custom" && (
                    <span className="ml-1 text-sm text-white/30">
                      / month
                    </span>
                  )}
                </div>

                <a
                  href="#"
                  className={`mt-7 flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold transition ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/85"
                      : "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  }`}
                >
                  Get Started
                </a>

                <div className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/50"
                    >
                      <Check size={15} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-28 sm:px-6 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-white/40 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="px-6 pb-6 text-sm leading-6 text-white/40">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-28 sm:px-6 sm:pb-36">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-16 text-center sm:px-12">
          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Ready to build with LabAuth?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/40">
              Give your applications the authentication infrastructure they
              deserve.
            </p>

            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white/85"
            >
              Get Started
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-black text-black">
                L
              </div>

              <span className="font-bold">LabAuth</span>
            </div>

            <p className="mt-3 text-xs text-white/25">
              Authentication, licensing and security infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/30">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.05] pt-6 text-xs text-white/20">
          © 2026 LabAuth. All rights reserved.
        </div>
      </footer>
    </main>
  );
      }
