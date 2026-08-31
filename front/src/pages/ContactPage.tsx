const contactDetails = [
  { label: 'Email', value: 'hello@leadandfang.com', href: 'mailto:hello@leadandfang.com' },
  { label: 'Phone', value: '+1 (415) 555-0189', href: 'tel:+14155550189' },
  { label: 'Instagram', value: '@leadandfang', href: 'https://instagram.com' },
  { label: 'Location', value: 'San Francisco, CA', href: '#' },
]

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
      <section className="grid overflow-hidden rounded-[32px] border border-white/10 bg-[#121111] shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.05fr_1.4fr]">
        <aside className="border-b border-white/10 bg-[#171616] p-8 lg:border-b-0 lg:border-r">
          <p className="mb-6 text-xs uppercase tracking-[0.24em] text-[#F0EEE6]/70">Contact</p>

          <h1
            className="max-w-sm text-4xl leading-none text-[#F0EEE6] sm:text-5xl"
            style={{ fontFamily: '"DRUKCYR", sans-serif' }}
          >
            Tell us what needs a bite.
          </h1>

          <p className="mt-5 max-w-md text-base text-[#D8D5D0]/75">
            Let’s build a brand that looks sharp, sounds clear, and makes the right people stop scrolling.
          </p>

          <div className="mt-10 space-y-4">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-left transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                <span className="text-sm uppercase tracking-[0.18em] text-[#F0EEE6]/60">{item.label}</span>
                <span className="text-sm text-[#F0EEE6]">{item.value}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className="p-8 sm:p-10">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-left text-sm text-[#F0EEE6]/80">
                <span className="mb-2 block uppercase tracking-[0.14em] text-[#F0EEE6]/60">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#1d1c1b] px-4 py-3 text-base text-[#F0EEE6] outline-none transition focus:border-[#C084FC]"
                />
              </label>

              <label className="block text-left text-sm text-[#F0EEE6]/80">
                <span className="mb-2 block uppercase tracking-[0.14em] text-[#F0EEE6]/60">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#1d1c1b] px-4 py-3 text-base text-[#F0EEE6] outline-none transition focus:border-[#C084FC]"
                />
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-left text-sm text-[#F0EEE6]/80">
                <span className="mb-2 block uppercase tracking-[0.14em] text-[#F0EEE6]/60">Company</span>
                <input
                  type="text"
                  placeholder="Brand or studio"
                  className="w-full rounded-2xl border border-white/10 bg-[#1d1c1b] px-4 py-3 text-base text-[#F0EEE6] outline-none transition focus:border-[#C084FC]"
                />
              </label>

              <label className="block text-left text-sm text-[#F0EEE6]/80">
                <span className="mb-2 block uppercase tracking-[0.14em] text-[#F0EEE6]/60">Budget</span>
                <select className="w-full rounded-2xl border border-white/10 bg-[#1d1c1b] px-4 py-3 text-base text-[#F0EEE6] outline-none transition focus:border-[#C084FC]">
                  <option className="bg-[#1d1c1b]">$2k - $5k</option>
                  <option className="bg-[#1d1c1b]">$5k - $10k</option>
                  <option className="bg-[#1d1c1b]">$10k - $25k</option>
                  <option className="bg-[#1d1c1b]">$25k+</option>
                </select>
              </label>
            </div>

            <label className="block text-left text-sm text-[#F0EEE6]/80">
              <span className="mb-2 block uppercase tracking-[0.14em] text-[#F0EEE6]/60">Project</span>
              <textarea
                rows={6}
                placeholder="Tell us about your brand, goals, timing, and what you're trying to fix."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#1d1c1b] px-4 py-3 text-base text-[#F0EEE6] outline-none transition focus:border-[#C084FC]"
              />
            </label>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#F0EEE6]/60">Typically replies within 24 hours.</p>

              <button
                type="submit"
                className="rounded-2xl bg-[#C084FC] px-6 py-3 text-sm font-medium text-[#100f11] transition hover:bg-[#D7A9FF]"
              >
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
