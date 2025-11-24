import { categories } from "@/app/lib/data";
import Link from "next/link";

export function Categories() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-accent rounded-full"></span>
          Browse Categories
        </h2>
        <Link
          href="/categories"
          className="text-sm text-accent hover:text-white transition-colors"
        >
          View all -&gt;
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="group p-4 bg-bgCard border border-borderMain rounded-xl hover:border-accent/50 transition-all hover:-translate-y-1"
          >
            <div
              className={`w-10 h-10 rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <cat.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white mb-1">{cat.name}</h3>
            <p className="text-xs text-textMuted">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
