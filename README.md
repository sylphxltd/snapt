<div align="center">

# Snapt ✨

**Instant visual identity for your GitHub projects**

[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/SylphxAI/snapt/blob/main/LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Bun](https://img.shields.io/badge/Bun-1.0+-orange?style=flat-square&logo=bun)](https://bun.sh)

**Social banners** • **Star history charts** • **Language distributions** • **Edge runtime**

[Demo](https://snapt.sylphx.com) • [API Docs](#-api-usage) • [Examples](#-examples)

</div>

---

## 🚀 Overview

Snapt generates stunning visual assets for your GitHub repositories with zero configuration. Just use URL parameters to create beautiful social banners, star history charts, and language distributions.

**The Problem:**
```
Creating visual assets for GitHub projects:
- Manual design tools (slow)
- Static images (outdated data)
- Inconsistent branding
- No automation
```

**The Solution:**
```
Snapt - URL-based image generation:
- Dynamic GitHub stats ⚡
- Zero configuration 🎯
- Edge runtime (fast) 🚀
- Beautiful defaults 🎨
```

**Result: Professional visual identity in seconds.**

---

## ⚡ Features

### Image Types

- **🎨 Social Banners** - Stunning 1280×640px banners with live GitHub stats
- **📊 Star History** - Elegant charts showing repository growth over time
- **🌈 Language Stats** - Visual breakdown of your codebase languages
- **📈 Live Data** - Real-time GitHub API integration

### Performance & DX

- **⚡ Lightning Fast** - Edge runtime with smart caching
- **🔧 Zero Config** - Just URL parameters, no setup needed
- **🎯 Fully Customizable** - Colors, themes, content via URL
- **🌐 Edge Network** - Global CDN for instant delivery

---

## 📖 API Usage

### Social Banner

Generate a stunning social preview banner:

```
GET /api/banner?title=MyProject&tagline=Amazing description&features=Fast,Secure,Simple,Elegant&gradient=667eea,764ba2&icon=🚀&repo=owner/repo
```

**Parameters:**

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `title` | string | Project name | **Required** |
| `tagline` | string | One-line description | **Required** |
| `features` | string | Comma-separated features (max 4) | **Required** |
| `gradient` | string | Two hex colors without # | **Required** |
| `icon` | string | Emoji icon | **Required** |
| `theme` | string | `modern` or `dark` | `modern` |
| `repo` | string | `owner/repo` for live GitHub stats | - |
| `showStats` | boolean | Show stats badges | `true` |

### Star History Chart

Visualize your repository's star growth:

```
GET /api/star-history?repo=owner/repo
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `repo` | string | Repository in format `owner/repo` (**Required**) |

### Language Distribution

Show language breakdown as a donut chart:

```
GET /api/languages?repo=owner/repo
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `repo` | string | Repository in format `owner/repo` (**Required**) |

---

## 🎯 Examples

### Banner for Silk

```
/api/banner?title=Silk&tagline=Zero-runtime CSS-in-TS with 92% smaller bundles&features=Type-safe styling,Zero runtime overhead,Full TypeScript support,92% smaller&gradient=667eea,764ba2&icon=🎨&theme=modern&repo=SylphxAI/silk
```

### Star History for Zen

```
/api/star-history?repo=SylphxAI/zen
```

### Languages for Benchmark

```
/api/languages?repo=SylphxAI/benchmark
```

---

## 💫 Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/SylphxAI/snapt.git
cd snapt

# Install dependencies
bun install

# Run development server
bun dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
# Build
bun run build

# Start production server
bun start
```

---

## ⚙️ Configuration

### GitHub Token (Optional but Recommended)

Add a GitHub Personal Access Token for higher API rate limits:

1. Create token at https://github.com/settings/tokens
2. Required scope: `public_repo`
3. Add to `.env.local`:

```env
GITHUB_TOKEN=your_token_here
```

**Rate Limits:**
- **Without token**: 60 requests/hour
- **With token**: 5,000 requests/hour

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
bun install -g vercel

# Deploy
vercel
```

Or click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SylphxAI/snapt)

### Environment Variables

Set `GITHUB_TOKEN` in Vercel dashboard:
1. Go to Project Settings
2. Add Environment Variable
3. Name: `GITHUB_TOKEN`
4. Value: Your GitHub token

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Runtime** | Bun |
| **Image Gen** | @vercel/og |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS |
| **Linter** | Biome (50x faster) |
| **API** | GitHub REST API |

---

## 📦 Use Cases

### GitHub Social Previews
Upload generated banners to repo settings for beautiful social cards:
- Twitter/X link previews
- LinkedIn shares
- Discord embeds

### README Headers
Embed dynamic images in your documentation:
```markdown
![Banner](https://snapt.sylphx.com/api/banner?title=Project&...)
```

### Social Media
Share beautiful repo cards:
- Visual portfolios
- Project showcases
- Release announcements

### Dashboard
Create visual dashboards of your projects:
- Star growth tracking
- Language distributions
- Activity visualization

---

## 🎨 Customization

All images are fully customizable via URL parameters:

**Colors**:
- Any hex gradient combination
- Predefined theme presets

**Themes**:
- `modern` - Glassmorphism with vibrant gradients
- `dark` - Premium dark mode with subtle accents

**Content**:
- Title, tagline, features
- Emoji icons
- Custom branding

**Stats**:
- Automatic GitHub data
- Live star counts
- Fork counts
- Issue/PR stats

---

## 🗺️ Roadmap

**✅ Completed**
- [x] Social banner generation
- [x] Star history charts
- [x] Language distributions
- [x] Edge runtime deployment
- [x] GitHub API integration

**🚀 Next**
- [ ] Contributor avatars
- [ ] Activity heatmaps
- [ ] Custom themes API
- [ ] Batch generation
- [ ] Premium templates

---

## 🤝 Support

[![GitHub Issues](https://img.shields.io/github/issues/SylphxAI/snapt?style=flat-square)](https://github.com/SylphxAI/snapt/issues)

- 🐛 [Bug Reports](https://github.com/SylphxAI/snapt/issues)
- 💬 [Discussions](https://github.com/SylphxAI/snapt/discussions)
- 📧 [Email](mailto:hi@sylphx.com)

**Show Your Support:**
⭐ Star • 👀 Watch • 🐛 Report bugs • 💡 Suggest features • 🔀 Contribute

---

## 📄 License

MIT © [Sylphx](https://sylphx.com)

---

## 🙏 Credits

Built with:
- [@vercel/og](https://vercel.com/docs/functions/og-image-generation) - Image generation
- [GitHub REST API](https://docs.github.com/en/rest) - Repository data
- [Next.js](https://nextjs.org) - React framework

Special thanks to the open source community ❤️

---

<p align="center">
  <strong>Instant visual identity. Zero configuration. Beautiful defaults.</strong>
  <br>
  <sub>The GitHub image generator that actually makes sense</sub>
  <br><br>
  <a href="https://sylphx.com">sylphx.com</a> •
  <a href="https://x.com/SylphxAI">@SylphxAI</a> •
  <a href="mailto:hi@sylphx.com">hi@sylphx.com</a>
</p>
