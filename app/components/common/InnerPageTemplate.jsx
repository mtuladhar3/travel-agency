import Link from "next/link";

export default function InnerPageTemplate({
  eyebrow = "Explore",
  title,
  description,
  links = [],
}) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1200px] px-4 pb-24 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4E25]">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
          {description}
        </p>

        {links.length > 0 && (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#FF4E25] hover:text-[#FF4E25]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
