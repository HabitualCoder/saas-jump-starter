export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">What Developers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <blockquote className="italic mb-2">“The best SaaS starter I’ve used. Saved me weeks!”</blockquote>
            <div className="font-semibold text-primary">Alex P.</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <blockquote className="italic mb-2">“Beautiful UI and super easy to customize.”</blockquote>
            <div className="font-semibold text-secondary">Jamie L.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
