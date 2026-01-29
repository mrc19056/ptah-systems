import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-primary">
          PTAH SYSTEMS
        </div>
        <nav className="flex gap-4">
          <Link href="/admin" className="text-muted-foreground hover:text-primary transition-colors">
            Admin Panel
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-background to-blue-50/20 dark:from-background dark:to-blue-950/20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          Building the <span className="text-primary">Digital Future</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          Advanced web solutions, corporate systems, and next-generation digital experiences.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-blue-500/20">
            Explore Solutions
          </button>
          <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        &copy; {new Date().getFullYear()} Ptah Systems. All rights reserved.
      </footer>
    </div>
  );
}
