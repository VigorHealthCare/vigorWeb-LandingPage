import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Free Care",
    badge: "Trial",
    badgeClass: "trial-badge",
    diaspora: "Free",
    naira: "Free",
    features: [
      "1 User",
      "1 Basic Consult / Month",
      "Limited EHR Dashboard",
      { text: "No Video Consultation", icon: "fa-xmark", muted: true },
      { text: "No E-Prescription", icon: "fa-xmark", muted: true },
    ],
    outOfPocket: { diaspora: "Out-of-pocket: $9.99", naira: "Out-of-pocket: ₦13,499" },
    btnText: "Get Started Free",
    btnClass: "btn-outline",
  },
  {
    name: "Basic Care",
    diaspora: "$9.99",
    naira: "₦13,499",
    features: [
      "1 User",
      "1 Basic Consult / Month",
      "1 Monthly Checkup",
      "E-Pharma (Limited Alerts)",
      "Appointment Reminders",
    ],
    btnText: "Select Plan",
    btnClass: "btn-outline",
  },
  {
    name: "Standard Care",
    featured: true,
    diaspora: "$18.99",
    naira: "₦25,499",
    features: [
      "2 Users",
      "2 Consults / Month",
      "1 Checkup / User / Month",
      "Specialist Referral",
      "HMO Integration",
      "E-Pharma + Alerts",
    ],
    btnText: "Select Plan",
    btnClass: "btn-primary",
  },
  {
    name: "Care Plus",
    diaspora: "$38.99",
    naira: "₦53,499",
    features: [
      "4 Users",
      "4 Consults / Month",
      "2 Checkups / Month",
      "EMR Access + Prescriptions",
      "Mental Health Support",
      "Chronic Care Plans",
    ],
    btnText: "Select Plan",
    btnClass: "btn-outline",
  },
  {
    name: "Ultra Care",
    diaspora: "$58.99",
    naira: "₦80,499",
    features: [
      "6 Users",
      "6 Consults / Month",
      "Weekly Checkups",
      "Mental Health + Chronic Care",
      "All Care Plus Features",
    ],
    btnText: "Select Plan",
    btnClass: "btn-outline",
  },
  {
    name: "Flexi Care",
    badge: "Custom",
    badgeClass: "flexi-badge",
    flexi: true,
    diaspora: "$78.99+",
    naira: "₦107,499+",
    features: [
      "Bespoke Package",
      "Priority Scheduling",
      "All Features Included",
      "Dedicated Account Manager",
      "Custom User Count",
    ],
    btnText: "Contact Us",
    btnClass: "btn-outline",
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState("diaspora");

  return (
    <section className="pricing section-light" id="pricing">
      <div className="container">
        <div className="section-header center fade-in">
          <h2>Membership Tiers</h2>
          <p>
            Choose a plan that fits your family&apos;s needs. No hidden fees,
            just peace of mind.
          </p>
        </div>

        <div className="currency-toggle-wrapper fade-in">
          <button
            className={`currency-btn ${currency === "diaspora" ? "active" : ""}`}
            onClick={() => setCurrency("diaspora")}
          >
            <i className="fa-solid fa-globe"></i> Diaspora (USD)
          </button>
          <button
            className={`currency-btn ${currency === "naira" ? "active" : ""}`}
            onClick={() => setCurrency("naira")}
          >
            <i className="fa-solid fa-naira-sign"></i> Local (NGN)
          </button>
        </div>

        <div className="pricing-grid-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`price-card fade-in ${plan.featured ? "featured" : ""} ${plan.flexi ? "flexi" : ""}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {plan.featured && <div className="recommend">Most Popular</div>}
              {plan.badge && (
                <div className={`plan-badge ${plan.badgeClass}`}>
                  {plan.badge}
                </div>
              )}
              <h3>{plan.name}</h3>
              <div className="price">{currency === "naira" ? plan.naira : plan.diaspora}</div>
              <div className="price-sub">per month</div>
              <ul className="price-features">
                {plan.features.map((f) =>
                  typeof f === "string" ? (
                    <li key={f}>
                      <i className="fa-solid fa-check"></i> {f}
                    </li>
                  ) : (
                    <li key={f.text}>
                      <i className={`fa-solid ${f.icon} ${f.muted ? "text-muted-icon" : ""}`}></i>{" "}
                      {f.text}
                    </li>
                  )
                )}
              </ul>
              {plan.outOfPocket && (
                <div className="pocket-note">
                  <i className="fa-solid fa-info-circle"></i>{" "}
                  <span className="pocket-text">
                    {currency === "naira"
                      ? plan.outOfPocket.naira
                      : plan.outOfPocket.diaspora}
                  </span>
                </div>
              )}
              <Link href="#waitlist" className={`btn ${plan.btnClass} w-100`}>
                {plan.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
