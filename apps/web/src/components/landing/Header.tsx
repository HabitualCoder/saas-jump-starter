export default function Header() {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-white/80 shadow-md fixed top-0 left-0 z-50">
      <div className="font-bold text-xl text-primary">SaaS Starter Pro</div>
      <nav className="space-x-6">
        <a href="#features" className="text-gray-700 hover:text-primary font-medium">Features</a>
        <a href="#pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</a>
        <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</a>
        <a href="/signup" className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold hover:bg-primary/90 transition">Sign Up</a>
      </nav>
    </header>
  );
}
