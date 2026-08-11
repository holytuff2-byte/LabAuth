"use client";

import { useState } from "react";

const features = [
  ["🔐", "Secure Authentication", "Protect your applications with a reliable authentication system."],
  ["🔑", "License Management", "Create, manage and validate software licenses from one dashboard."],
  ["💻", "HWID Protection", "Control which devices are allowed to access your applications."],
  ["📊", "Live Analytics", "Monitor users, licenses and authentication activity."],
  ["⚡", "Developer API", "Connect your software to LabAuth through a simple API."],
  ["🛡️", "Security Controls", "Manage sessions, devices and application access."],
];

const faqs = [
  ["What is LabAuth?", "LabAuth is an authentication and licensing platform designed to help developers protect their software."],
  ["Can I use LabAuth for my own software?", "Yes. Your applications will be able to communicate with LabAuth through its API."],
  ["Does LabAuth support HWID protection?", "Yes. Licenses can be associated with authorized hardware."],
  ["Will LabAuth have an API?", "Yes. The platform is designed around an API for authentication and licensing."],
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For testing and small projects.",
    features: ["1 application", "100 licenses", "Basic analytics", "API access", "Community support"],
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For serious developers.",
    popular: true,
    features: ["10 applications", "10,000 licenses", "Advanced analytics", "HWID protection", "Webhooks", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For businesses and teams.",
    features: ["Unlimited applications", "Unlimited licenses", "Advanced security", "Custom API limits", "Dedicated support", "Custom integrations"],
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
            <span className="text-lg font-bold">LabAuth</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#security" className="hover:text-white">Security</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href="#" className="text-sm text-white/60 hover:text-white">
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

        {menuOpen && (
          <div className="border-t border-white/[0.06] bg-black px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-sm text-white/60">
              <a href="#features" onClick={() => setMenuOpen(false)}>
  Features
</a>

<a href="#security" onClick={() => setMenuOpen(false)}>
  Security
</a>

<a href="#pricing" onClick={() => setMenuOpen(false)}>
  Pricing
</a>

<a href="#faq" onClick={() => setMenuOpen(false)}>
  FAQ
</a>
