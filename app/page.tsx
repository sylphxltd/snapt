'use client';

import { Button, Container, Flex, Heading, Text, Badge, Card, Box, Section } from '@radix-ui/themes';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <main className="relative">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-60 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-60 animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6), transparent)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 animate-pulse-slow"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.3), transparent 50%)',
          }}
        />

        <Container size="4" className="relative z-10">
          <Flex direction="column" align="center" gap="6">
            {/* Status Badge */}
            <Badge size="3" radius="full" variant="surface" className="shadow-lg shadow-purple-500/20">
              <Flex align="center" gap="2">
                <Icon icon="ph:lightning-fill" className="text-amber-400" />
                <Text>Powered by Next.js 16 + Bun + Radix UI</Text>
              </Flex>
            </Badge>

            {/* Title */}
            <Heading
              size="9"
              align="center"
              className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent font-black"
            >
              Snapt
            </Heading>

            {/* Subtitle */}
            <Text size="6" align="center" color="gray" className="max-w-[700px]">
              Transform your GitHub repositories into{' '}
              <Text weight="bold" className="text-purple-400">
                stunning visual assets
              </Text>{' '}
              with dynamic image generation
            </Text>

            {/* CTA Buttons */}
            <Flex gap="4" wrap="wrap" justify="center" mt="4">
              <Button size="4" variant="solid" className="shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all" asChild>
                <a href="#examples" className="flex items-center gap-2">
                  <Icon icon="ph:sparkle-fill" />
                  See Examples
                  <Icon icon="ph:arrow-right-bold" />
                </a>
              </Button>
              <Button size="4" variant="outline" className="hover:bg-white/10 transition-all" asChild>
                <a href="https://github.com/sylphxltd/snapt" target="_blank" className="flex items-center gap-2">
                  <Icon icon="ph:github-logo-fill" />
                  View on GitHub
                </a>
              </Button>
            </Flex>

            {/* Quick Stats */}
            <Flex gap="6" mt="6" wrap="wrap" justify="center">
              <Flex direction="column" align="center" gap="1">
                <Text size="7" weight="bold" className="bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  500B
                </Text>
                <Text size="2" color="gray">
                  Ultra-light
                </Text>
              </Flex>
              <Flex direction="column" align="center" gap="1">
                <Text size="7" weight="bold" className="bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  1280×640
                </Text>
                <Text size="2" color="gray">
                  Perfect size
                </Text>
              </Flex>
              <Flex direction="column" align="center" gap="1">
                <Icon icon="ph:infinity-bold" className="text-5xl bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent" />
                <Text size="2" color="gray">
                  Free forever
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </section>

      {/* Features Section */}
      <Section size="3" className="relative">
        <Container size="4">
          <Flex direction="column" gap="6" mb="8">
            <Heading size="8" align="center" className="flex items-center justify-center gap-3">
              <Icon icon="ph:magic-wand-fill" />
              Powerful Features
            </Heading>
            <Text size="4" align="center" color="gray" className="max-w-[600px] mx-auto">
              Everything you need to create professional GitHub assets
            </Text>
          </Flex>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'ph:image-fill',
                title: 'Social Banners',
                desc: 'Beautiful 1280×640px banners with live GitHub stats, perfect for social media sharing',
                color: 'text-blue-400',
              },
              {
                icon: 'ph:chart-line-up-fill',
                title: 'Star History',
                desc: 'Elegant charts showing your repository growth over time with smooth gradients',
                color: 'text-purple-400',
              },
              {
                icon: 'ph:code-fill',
                title: 'Language Stats',
                desc: 'Visual breakdown of your codebase languages with beautiful donut charts',
                color: 'text-pink-400',
              },
              {
                icon: 'ph:lightning-fill',
                title: 'Edge Runtime',
                desc: 'Lightning-fast image generation using Vercel Edge Functions and Satori',
                color: 'text-amber-400',
              },
              {
                icon: 'ph:lock-key-fill',
                title: 'Type Safe',
                desc: 'Built with TypeScript for complete type safety and developer experience',
                color: 'text-emerald-400',
              },
              {
                icon: 'ph:rocket-launch-fill',
                title: 'Zero Config',
                desc: 'Just pass URL parameters and get stunning images instantly, no setup required',
                color: 'text-cyan-400',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-500/30"
              >
                <Icon icon={feature.icon} className={`text-6xl mb-4 transition-transform group-hover:scale-110 ${feature.color}`} />
                <Heading size="5" mb="2">
                  {feature.title}
                </Heading>
                <Text color="gray">{feature.desc}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Examples Section */}
      <Section id="examples" size="3" className="relative">
        <Container size="4">
          <Flex direction="column" gap="6" mb="8">
            <Heading size="8" align="center" className="flex items-center justify-center gap-3">
              <Icon icon="ph:images-fill" />
              Live Examples
            </Heading>
            <Text size="4" align="center" color="gray">
              See what you can create with Snapt
            </Text>
          </Flex>

          <Flex direction="column" gap="8">
            {/* Banner Example */}
            <Card size="4" className="bg-white/[0.02] backdrop-blur-xl">
              <Flex direction="column" gap="4">
                <Flex justify="between" align="center" wrap="wrap" gap="2">
                  <Heading size="5" className="flex items-center gap-2">
                    <Icon icon="ph:image-fill" />
                    Social Banner
                  </Heading>
                  <Badge color="blue" className="flex items-center gap-1">
                    <Icon icon="ph:code-simple-fill" />
                    /api/banner
                  </Badge>
                </Flex>

                <Box className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/api/banner?title=Snapt&tagline=Transform your GitHub repos into stunning visuals&features=Beautiful,Fast,Easy,Free&gradient=667eea,764ba2&icon=✨&theme=modern"
                    alt="Banner example"
                    className="w-full"
                  />
                </Box>

                <div className="p-4 bg-black/40 rounded-xl border border-white/10 overflow-x-auto">
                  <code className="text-sm text-cyan-300 font-mono">
                    /api/banner?title=Snapt&tagline=...&features=Beautiful,Fast,Easy,Free&icon=✨
                  </code>
                </div>
              </Flex>
            </Card>

            {/* Star History Example */}
            <Card size="4" className="bg-white/[0.02] backdrop-blur-xl">
              <Flex direction="column" gap="4">
                <Flex justify="between" align="center" wrap="wrap" gap="2">
                  <Heading size="5" className="flex items-center gap-2">
                    <Icon icon="ph:chart-line-up-fill" />
                    Star History
                  </Heading>
                  <Badge color="purple" className="flex items-center gap-1">
                    <Icon icon="ph:code-simple-fill" />
                    /api/star-history
                  </Badge>
                </Flex>

                <Box className="rounded-xl overflow-hidden border border-white/10">
                  <img src="/api/star-history?repo=sylphxltd/snapt" alt="Star history example" className="w-full" />
                </Box>

                <div className="p-4 bg-black/40 rounded-xl border border-white/10 overflow-x-auto">
                  <code className="text-sm text-cyan-300 font-mono">/api/star-history?repo=sylphxltd/snapt</code>
                </div>
              </Flex>
            </Card>

            {/* Language Stats Example */}
            <Card size="4" className="bg-white/[0.02] backdrop-blur-xl">
              <Flex direction="column" gap="4">
                <Flex justify="between" align="center" wrap="wrap" gap="2">
                  <Heading size="5" className="flex items-center gap-2">
                    <Icon icon="ph:code-fill" />
                    Language Distribution
                  </Heading>
                  <Badge color="pink" className="flex items-center gap-1">
                    <Icon icon="ph:code-simple-fill" />
                    /api/languages
                  </Badge>
                </Flex>

                <Box className="rounded-xl overflow-hidden border border-white/10">
                  <img src="/api/languages?repo=sylphxltd/snapt" alt="Language stats example" className="w-full" />
                </Box>

                <div className="p-4 bg-black/40 rounded-xl border border-white/10 overflow-x-auto">
                  <code className="text-sm text-cyan-300 font-mono">/api/languages?repo=sylphxltd/snapt</code>
                </div>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section size="3" className="relative">
        <Container size="3">
          <Card
            size="4"
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border-purple-500/30"
          >
            <Flex direction="column" align="center" gap="4" p="6">
              <Icon icon="ph:rocket-launch-fill" className="text-7xl text-purple-400" />
              <Heading size="7" align="center">
                Ready to elevate your repositories?
              </Heading>
              <Text size="4" align="center" color="gray">
                Start generating beautiful images in seconds
              </Text>
              <Flex gap="4" mt="4">
                <Button size="4" variant="solid" className="shadow-lg shadow-purple-500/30" asChild>
                  <a href="https://github.com/sylphxltd/snapt" target="_blank" className="flex items-center gap-2">
                    <Icon icon="ph:github-logo-fill" />
                    View Documentation
                  </a>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </Section>

      {/* Footer */}
      <Section size="2" className="relative">
        <Container size="4">
          <Flex direction="column" align="center" gap="3" className="border-t border-white/10 pt-8">
            <Flex align="center" gap="2">
              <Text color="gray">Made with</Text>
              <Icon icon="ph:heart-fill" className="text-pink-500" />
              <Text color="gray">by</Text>
              <Text weight="bold">
                <a href="https://github.com/sylphxltd" className="text-purple-400 hover:text-purple-300 transition-colors">
                  SylphX
                </a>
              </Text>
            </Flex>
            <Text size="2" color="gray">
              Open source • MIT License • Built with Radix UI & Iconify
            </Text>
          </Flex>
        </Container>
      </Section>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        body {
          background: linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #16001e 100%);
          min-height: 100vh;
        }
      `}</style>
    </main>
  );
}
