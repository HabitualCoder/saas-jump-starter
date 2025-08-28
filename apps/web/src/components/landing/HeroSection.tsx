export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary to-secondary pt-32 pb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Launch Your SaaS Fast</h1>
      <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">A modern, full-stack SaaS boilerplate with everything you need to build, launch, and scale your next big idea.</p>
      <a href="/signup" className="bg-white text-primary font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-primary hover:text-white transition text-lg">Get Started Free</a>
    </section>
  );
}
