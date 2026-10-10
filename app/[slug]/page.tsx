import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CourseLandingPage from '../../components/course/CourseLandingPage';
import AdBuildCommunityLandingPage from '../../components/course/AdBuildCommunityLandingPage';
import FiveWaysToEarnOnlineKePage from '../../components/course/FiveWaysToEarnOnlineKePage';
import WaSalesMachineLandingPage from '../../components/course/WaSalesMachineLandingPage';
import { DynamicTemplate } from '../../components/renderer/DynamicTemplate';
import { VisionFooter } from '../../components/portfolio/VisionFooter';
import { Navbar } from '../../components/portfolio/Navbar';

const hiddenSlug = 'full-package-ai-business-automation-monetization';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (slug === hiddenSlug) {
    return {
      title: 'AI Business Automation & Monetization',
      description: 'AI business automation, WhatsApp automation, Telegram bots, AI assistants, Instagram and Facebook automation, prompt engineering, vibecoding and freelancing.',
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    };
  }

  if (slug === '5-ways-to-earn-online-ke') {
    return {
      title: '5 Ways to Earn Online | King Ezekiel',
      description: 'Master Information Marketing, Ebooks, Freelancing, YouTube Monetization, AI Animation, Importation, and choose your specialized skill to start earning online.',
    };
  }

  if (slug === 'for-ad-wa-sales-machine') {
    return {
      title: 'WA Sales Machine — WhatsApp Automation + Facebook Ads | King Ezekiel',
      description: 'Turn your WhatsApp into a 24/7 sales machine. Automate replies, voice notes, and follow-ups. Run profitable Facebook Ads. Never miss a lead again.',
    };
  }

  if (slug === 'ad-build-community') {
    return {
      title: '5 Ways Nigerians Monetize Their Skills to Earn N1M to N3M Monthly | King Ezekiel',
      description: 'Learn the 5 ways Nigerians monetize their skills to earn ₦1M to ₦3M monthly.',
    };
  }

  return {};
}

// Use standard App Router Next.js 13+ generateStaticParams
export async function generateStaticParams() {
  const pagesDirectory = path.join(process.cwd(), 'data/pages');

  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(pagesDirectory);

  return filenames
    .filter((filename) => filename.endsWith('.json') && filename !== 'home.json' && filename !== 'home-elementor-demo.json')
    .map((filename) => ({
      slug: filename.replace(/\.json$/, ''),
    }));
}

function HiddenCourseBundlePage() {
  const courseItems = [
    {
      title: 'WHATSAPP AUTOMATION + PRO FACEBOOK ADS',
      subtitle: 'Automate replies, messages, comments and customer interactions.',
      href: 'https://www.youtube.com/playlist?list=PLSQqShcvhT5Y',
    },
    {
      title: 'AI PERSONAL & BUSINESS ASSISTANT',
      subtitle: 'Create bots that can answer questions, assist customers and handle repetitive tasks.',
      href: 'https://www.youtube.com/playlist?list=PLNwPfqrAot40',
    },
    {
      title: 'INSTAGRAM & FACEBOOK AUTOMATION',
      subtitle: 'Reduce repetitive work and stay on top of your leads and customers.',
      href: 'https://www.youtube.com/playlist?list=PLe69uTmcMbyA',
    },
    {
      title: 'PROMPT ENGINEERING MASTERCLASS',
      subtitle: 'Learn how to give AI the right instructions and get more useful outputs.',
      href: 'https://www.youtube.com/playlist?list=PLJgVUrDMslzXfWVUjZW0-XpQK3IO8oDUa',
    },
    {
      title: 'VIBECODING - FULL-STACK WEB DEVELOPMENT WITH AI',
      subtitle: 'Use AI to create functional websites and full-stack applications without starting everything from scratch.',
      href: 'https://www.youtube.com/playlist?list=PLJgVUrDMslzVRr_hfwyxpvqUpt22yzojT',
    },
    {
      title: 'AI VIDEO AUTO CLIPPING, EDITING & POSTING(SCHEDULING)',
      subtitle: 'Turn long videos into engaging short-form content faster.',
      href: 'https://www.youtube.com/playlist?list=PLBkgEpssuZ8s',
    },
    {
      title: 'FREELANCING - THE $50M UNTAPPED MARKET',
      subtitle: 'Learn how to use these skills to offer services and create new income opportunities.',
      href: 'https://www.youtube.com/playlist?list=PLJgVUrDMslzWwEOvif3DALhmY2oqnf48P',
    },
  ];

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans">
      <div className="mx-auto max-w-[1200px] border-x border-portfolio-border bg-portfolio-bg px-4 py-10 sm:px-6 md:px-10 lg:px-12">
        <header className="mb-10 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            FULL ACCESS
          </p>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            PRACTICAL AI + AUTOMATION COURSE
          </p>
          <h1 className="text-3xl font-bold leading-none tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
            AI BUSINESS AUTOMATION &amp; MONETIZATION
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
            Want to use AI to automate your business, save time, create faster, or even build a new source of income?
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-portfolio-fg sm:text-xl">
            Build it. Automate it. Monetize it — all made super easy. No coding. No story. No stress.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {courseItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6"
            >
              <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-portfolio-gold sm:text-xl">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-portfolio-muted sm:text-base">
                {item.subtitle}
              </p>

              <div className="mt-6">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
                >
                  WATCH THIS COURSE
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Protect against path traversal just in case
  if (slug.includes('..') || slug.includes('/')) {
    notFound();
  }

  if (slug === 'for-ad-ai-business-automation-monetization') {
    return <CourseLandingPage />;
  }

  if (slug === 'ad-build-community') {
    return <AdBuildCommunityLandingPage />;
  }

  if (slug === '5-ways-to-earn-online-ke') {
    return <FiveWaysToEarnOnlineKePage />;
  }

  if (slug === 'for-ad-wa-sales-machine') {
    return <WaSalesMachineLandingPage />;
  }

  if (slug === hiddenSlug) {
    return <HiddenCourseBundlePage />;
  }

  const filePath = path.join(process.cwd(), `data/pages/${slug}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const pageData = JSON.parse(fileContents);

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans">
      <div className="max-w-[1400px] mx-auto border-x border-portfolio-border shadow-2xl bg-portfolio-bg relative flex flex-col min-h-screen">

        {pageData.notification && (
          <aside aria-label="Announcement" className="w-full bg-gradient-to-r from-portfolio-gold/20 via-portfolio-gold to-portfolio-gold/20 text-black py-2.5 px-4 text-center font-bold text-xs md:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border-b border-portfolio-gold/40">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" aria-hidden="true"></span>
            <span>{pageData.notification}</span>
          </aside>
        )}

        <Navbar />

        <div className="flex-1 px-6 md:px-12 py-12">
          <DynamicTemplate blocks={pageData.blocks} />
        </div>

        <VisionFooter />
      </div>
    </main>
  );
}
