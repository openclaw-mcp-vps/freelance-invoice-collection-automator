export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Small Businesses
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Chasing Invoices.<br />
          <span className="text-[#58a6ff]">Get Paid Automatically.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          InvoiceFlow sends smart payment reminders, escalates overdue invoices, and gives you legal next-step templates — so you can focus on your work, not your inbox.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Start Collecting — $13/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Automated Reminders", desc: "Multi-step email sequences fire automatically on your schedule." },
            { icon: "📈", title: "Escalation Workflows", desc: "Overdue invoices trigger escalating notices and legal templates." },
            { icon: "📋", title: "Collection Templates", desc: "Professional demand letters and legal next-step guides included." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$13<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to get paid</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices & clients",
              "Automated reminder sequences",
              "Overdue escalation workflows",
              "Legal demand letter templates",
              "Invoice status dashboard",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the automated reminder system work?",
              a: "You set a reminder schedule (e.g., 3, 7, 14 days after due date). InvoiceFlow automatically sends professional emails to your clients at each interval, escalating in tone as the invoice ages."
            },
            {
              q: "What happens when an invoice becomes seriously overdue?",
              a: "InvoiceFlow escalates to a formal demand letter template and provides step-by-step guidance on legal next steps — including small claims court and collections agency referrals."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. There are no contracts or commitments. Cancel anytime from your account settings and you won't be charged again."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} InvoiceFlow. All rights reserved.
      </footer>
    </main>
  );
}
