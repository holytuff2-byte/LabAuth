"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  KeyRound,
  Cpu,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Protect your applications with a modern authentication system built for security.",
  },
  {
    icon: KeyRound,
    title: "License Management",
    description:
      "Create, manage and validate licenses from one powerful dashboard.",
  },
  {
    icon: Cpu,
    title: "HWID Protection",
    description:
      "Bind licenses to hardware and control device access with ease.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Monitor users, licenses and application activity in real time.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-black">
              L
            </div>

            <span className="text-xl font-bold tracking-tight">
              LabAuth
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
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
              Documentation
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden text-sm text-white/70 hover:text-white sm:block">
              Login
            </button>

            <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/80">
              Get Started
            </button>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="relative overflow-hidden pt-40">

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Authentication infrastructure for developers
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
              Authentication,
              <br />

              <span className="text-white/40">
                redefined.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
              Protect your software with powerful authentication,
              licensing, HWID management and analytics — all from one
              beautiful platform.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <button className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/80">
                Get Started

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white/80 transition hover:bg-white/[0.07]">
                View Documentation
              </button>

            </div>

          </motion.div>


          {/* DASHBOARD PREVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-20 max-w-4xl"
          >

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl">

              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                <div className="h-3 w-3 rounded-full bg-white/20" />
                <div className="h-3 w-3 rounded-full bg-white/20" />
                <div className="h-3 w-3 rounded-full bg-white/20" />

                <span className="ml-3 text-xs text-white/30">
                  dashboard.labauth
                </span>

              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-3">

                {[
                  ["Applications", "12"],
                  ["Active Licenses", "847"],
                  ["Users", "531"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left"
                  >
                    <p className="text-sm text-white/40">
                      {title}
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                      {value}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-32">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Everything you need
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built for modern software.
          </h2>

          <p className="mt-4 text-white/50">
            One platform for authentication, licensing, security and
            application management.
          </p>

        </div>


        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:bg-white/[0.05]"
              >

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Icon size={21} />
                </div>

                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {feature.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </section>


      {/* PRICING */}
      <section id="pricing" className="border-y border-white/10 bg-white/[0.015] px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-widest text-white/40">
              Pricing
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Simple pricing.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-white/40">
              Start free and upgrade when your application grows.
            </p>

          </div>


          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">

            {[
              {
                name: "Free",
                price: "$0",
                description: "For testing and small projects.",
                features: [
                  "1 Application",
                  "100 Licenses",
                  "Basic Analytics",
                  "Community Support",
                ],
              },
              {
                name: "Pro",
                price: "$9.99",
                description: "For serious developers.",
                features: [
                  "10 Applications",
                  "10,000 Licenses",
                  "Advanced Analytics",
                  "HWID Protection",
                  "Priority Support",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For teams and businesses.",
                features: [
                  "Unlimited Applications",
                  "Unlimited Licenses",
                  "Advanced Security",
                  "Custom API",
                  "Dedicated Support",
                ],
              },
            ].map((plan) => (

              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-[#080808] p-7"
              >

                <h3 className="text-xl font-bold">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-white/40">
                  {plan.description}
                </p>

                <div className="mt-7 text-4xl font-black">
                  {plan.price}

                  {plan.price !== "Custom" && (
                    <span className="text-sm font-normal text-white/30">
                      /month
                    </span>
                  )}

                </div>

                <button className="mt-7 w-full rounded-xl bg-white py-3 font-semibold text-black">
                  Get Started
                </button>

                <div className="mt-7 space-y-3">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <Check size={16} />
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
      <section id="faq" className="mx-auto max-w-4xl px-6 py-32">

        <div className="text-center">

          <p className="text-sm uppercase tracking-widest text-white/40">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Frequently asked questions.
          </h2>

        </div>


        <div className="mt-12 space-y-4">

          {[
            [
              "What is LabAuth?",
              "LabAuth is an authentication and licensing platform designed for developers who need secure application access and license management.",
            ],
            [
              "Can I manage HWIDs?",
              "Yes. Applications can use LabAuth to bind licenses to hardware and manage authorized devices.",
            ],
            [
              "Does LabAuth provide an API?",
              "Yes. The platform will provide APIs that applications can use for authentication, licensing and user management.",
            ],
          ].map(([question, answer]) => (

            <div
              key={question}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >

              <h3 className="font-semibold">
                {question}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {answer}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-white/40 sm:flex-row">

          <p>
            © 2026 LabAuth. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Documentation
            </a>
          </div>

        </div>

      </footer>

    </main>
  );
      }
