import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">
                Powered by Next.js 16 + Bun
              </span>
            </div>

            {/* Title */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 tracking-tight leading-tight">
              Snapt
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 font-light mb-12 leading-relaxed">
              Transform your GitHub repos into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                stunning visuals
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#examples"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg font-semibold rounded-2xl shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/70"
              >
                See Examples
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="https://github.com/sylphxltd/snapt"
                target="_blank"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🎨',
                title: 'Social Banners',
                desc: 'Beautiful 1280×640 images with live GitHub stats',
                gradient: 'from-blue-500/20 to-cyan-500/20',
              },
              {
                icon: '📊',
                title: 'Star History',
                desc: 'Elegant charts showing your repo growth',
                gradient: 'from-purple-500/20 to-pink-500/20',
              },
              {
                icon: '🌈',
                title: 'Language Stats',
                desc: 'Visual breakdown of your codebase',
                gradient: 'from-pink-500/20 to-orange-500/20',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group p-8 bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
              Live Examples
            </h2>

            <div className="space-y-12">
              {/* Banner Example */}
              <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Social Banner</h3>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-mono rounded-lg">
                    /api/banner
                  </span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 overflow-hidden">
                  <img
                    src="/api/banner?title=Snapt&tagline=Transform your GitHub repos into stunning visuals&features=Beautiful,Fast,Easy,Free&gradient=667eea,764ba2&icon=✨&theme=modern"
                    alt="Banner example"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-4 p-4 bg-black/30 rounded-xl overflow-x-auto">
                  <code className="text-sm text-green-400 font-mono">
                    /api/banner?title=Snapt&tagline=...&features=Beautiful,Fast,Easy,Free&icon=✨
                  </code>
                </div>
              </div>

              {/* Star History Example */}
              <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Star History</h3>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm font-mono rounded-lg">
                    /api/star-history
                  </span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 overflow-hidden">
                  <img
                    src="/api/star-history?repo=sylphxltd/snapt"
                    alt="Star history example"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-4 p-4 bg-black/30 rounded-xl overflow-x-auto">
                  <code className="text-sm text-green-400 font-mono">
                    /api/star-history?repo=owner/repo
                  </code>
                </div>
              </div>

              {/* Language Stats Example */}
              <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Language Stats</h3>
                  <span className="px-4 py-2 bg-pink-500/20 text-pink-300 text-sm font-mono rounded-lg">
                    /api/languages
                  </span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 overflow-hidden">
                  <img
                    src="/api/languages?repo=sylphxltd/snapt"
                    alt="Language stats example"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-4 p-4 bg-black/30 rounded-xl overflow-x-auto">
                  <code className="text-sm text-green-400 font-mono">
                    /api/languages?repo=owner/repo
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Generate stunning images for your GitHub repositories in seconds
            </p>
            <Link
              href="https://github.com/sylphxltd/snapt"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg font-semibold rounded-2xl shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Documentation
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/60 text-lg">
              Made with ❤️ by{' '}
              <a
                href="https://github.com/sylphxltd"
                className="text-white/90 hover:text-white font-semibold transition-colors"
              >
                SylphX
              </a>
            </p>
            <p className="text-white/40 mt-2">Open source • MIT License</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
