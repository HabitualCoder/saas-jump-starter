export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow text-center border-2 border-primary">
            <h3 className="text-xl font-bold mb-2">Free Tier</h3>
            <p className="mb-4">All core features for hobby projects and MVPs.</p>
            <div className="text-4xl font-extrabold mb-4">$0</div>
            <ul className="mb-6 space-y-2 text-gray-600">
              <li>Unlimited users</li>
              <li>Basic support</li>
              <li>Open source</li>
            </ul>
            <a href="/signup" className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:bg-primary/90 transition">Get Started</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow text-center border-2 border-secondary">
            <h3 className="text-xl font-bold mb-2">Pro Tier</h3>
            <p className="mb-4">Advanced features for growing SaaS businesses.</p>
            <div className="text-4xl font-extrabold mb-4">$29<span className="text-lg font-normal">/mo</span></div>
            <ul className="mb-6 space-y-2 text-gray-600">
              <li>Everything in Free</li>
              <li>Priority support</li>
              <li>Pro components</li>
            </ul>
            <a href="/signup" className="bg-secondary text-secondary-foreground px-6 py-2 rounded font-semibold hover:bg-secondary/90 transition">Start Pro</a>
          </div>
        </div>
      </div>
    </section>
  );
}
