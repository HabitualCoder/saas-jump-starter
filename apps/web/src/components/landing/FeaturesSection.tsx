export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Authentication</h3>
            <p>Supabase Auth with email, OAuth, and magic links out of the box.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Modern UI</h3>
            <p>Beautiful, customizable components with shadcn/ui and TailwindCSS.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">API Ready</h3>
            <p>REST API with Express, Prisma ORM, and Supabase PostgreSQL.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
