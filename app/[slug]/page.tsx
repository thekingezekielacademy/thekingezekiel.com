import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { DynamicTemplate } from '../../components/renderer/DynamicTemplate';
import { VisionFooter } from '../../components/portfolio/VisionFooter';
import { Navbar } from '../../components/portfolio/Navbar';

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

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Protect against path traversal just in case
  if (slug.includes('..') || slug.includes('/')) {
    notFound();
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
        
        {/* Global Navigation */}
        <Navbar />

        {/* Dynamic Content Body */}
        <div className="flex-1 px-6 md:px-12 py-12">
          <DynamicTemplate blocks={pageData.blocks} />
        </div>

        {/* Global Footer */}
        <VisionFooter />
        
      </div>
    </main>
  );
}
