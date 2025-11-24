import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { categories } from "@/app/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bgMain text-textMain">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Explore Categories
            </h1>
            <p className="text-textMuted text-lg max-w-2xl">
              Browse our directory of developer tools organized by ecosystem.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`} // We haven't built this specific page yet, but the link is ready
                className="group p-6 bg-bgCard border border-borderMain rounded-2xl hover:border-accent/50 transition-all hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background Glow on Hover */}
                <div
                  className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${cat.bg} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                ></div>

                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center`}
                  >
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-textMuted group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {cat.name}
                </h3>
                <p className="text-textMuted mb-4">{cat.desc}</p>

                <div className="flex items-center gap-2 text-xs font-mono text-textMuted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  12 Tools tracked
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
