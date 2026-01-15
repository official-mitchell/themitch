#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../content/blogs');
const blogsOutputDir = path.join(__dirname, '../content/blogs');

// Blog metadata
const blogMappings = {
  '11-essential-domains': {
    htmlFile: 'The 11 Essential Domains for Product Management in/The 11 Essential Domains for Product Management in 122c21834a1d80abbe37f1834909f765.html',
    title: 'The 11 Essential Domains for Product Management in Startups',
    description: 'A comprehensive guide to the core competencies every product manager needs to master, from user research to metrics and analytics.',
    date: '2024-01-05',
    tags: ['product management', 'startups', 'strategy', 'leadership'],
    featured: true,
  },
  'scrum-to-pmp': {
    htmlDir: 'scrum to pmp',
    htmlPattern: 'Scrum to PMP',
    title: 'Scrum to PMP: A Founder\'s Guide to Project Management Certifications',
    description: 'Picking the right project management certification can feel overwhelming, and they aren\'t just for big enterprises anymore. More and more startups are turning to formalized project management frameworks.',
    date: '2024-01-10',
    tags: ['project management', 'startups', 'certifications', 'scrum', 'pmp'],
    featured: true,
  },
  'chaos-to-clarity': {
    htmlFile: 'chaos to clarity/Chaos to Clarity A Founder\'s Guide to Project Management.html',
    title: 'Chaos to Clarity: A Founder\'s Guide to Project Management for Startups',
    description: 'Project management terminology is a buzzword soup. But whether your startup is at the MVP stage or pushing multiple complex products, balancing flexibility and control is crucial.',
    date: '2024-01-15',
    tags: ['startups', 'project management', 'product management', 'agile', 'scrum', 'entrepreneurship'],
    featured: true,
  },
};

function extractBodyContent(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;

  // Find the article body
  const article = doc.querySelector('article');
  if (!article) return '';

  // Extract all content divs
  const contentDivs = article.querySelectorAll('div[style*="display:contents"]');

  let content = '';
  const seenTexts = new Set();

  contentDivs.forEach(el => {
    const p = el.querySelector('p');
    const ul = el.querySelector('ul');
    const h1 = el.querySelector('h1');
    const h3 = el.querySelector('h3');

    if (h1) {
      const text = h1.textContent.trim();
      if (text && !text.match(/^themitch|^Pages|^Compositions|^Contact|^Terms|^Privacy/i) && !seenTexts.has(text)) {
        content += `## ${text}\n\n`;
        seenTexts.add(text);
      }
    } else if (h3) {
      const text = h3.textContent.trim();
      if (text && !seenTexts.has(text)) {
        content += `### ${text}\n\n`;
        seenTexts.add(text);
      }
    } else if (p) {
      const text = p.textContent.trim();
      if (text && text.length > 0 && !text.match(/^themitch|©|Terms|Privacy|Pages|Compositions|Contact/i) && !seenTexts.has(text)) {
        content += `${text}\n\n`;
        seenTexts.add(text);
      }
    } else if (ul) {
      const items = ul.querySelectorAll('li');
      items.forEach(li => {
        const liText = li.textContent.trim();
        if (liText && !seenTexts.has(liText)) {
          content += `- ${liText}\n`;
          seenTexts.add(liText);
        }
      });
      if (items.length > 0) {
        content += '\n';
      }
    }
  });

  return content.trim();
}

function createMdxFile(slug, metadata, bodyContent = '') {
  const frontmatter = `---
title: "${metadata.title}"
description: "${metadata.description}"
date: "${metadata.date}"
tags: [${metadata.tags.map(t => `"${t}"`).join(', ')}]
featured: ${metadata.featured}
---

`;

  const fullContent = frontmatter + (bodyContent || metadata.description);

  const outputPath = path.join(blogsOutputDir, `${slug}.mdx`);
  fs.writeFileSync(outputPath, fullContent, 'utf8');
  console.log(`✓ Created: ${slug}.mdx (${(fullContent.length / 1024).toFixed(2)} KB)`);
}

function findHtmlFile(dir, pattern) {
  const files = fs.readdirSync(dir);
  return files.find(file => file.includes(pattern) && file.endsWith('.html'));
}

function main() {
  console.log('Converting HTML blog files to MDX...\n');

  Object.entries(blogMappings).forEach(([slug, metadata]) => {
    let htmlPath;

    if (metadata.htmlFile) {
      htmlPath = path.join(contentDir, metadata.htmlFile);
    } else if (metadata.htmlDir && metadata.htmlPattern) {
      const dirPath = path.join(contentDir, metadata.htmlDir);
      const fileName = findHtmlFile(dirPath, metadata.htmlPattern);
      if (!fileName) {
        console.log(`✗ No matching file found in ${metadata.htmlDir} for pattern: ${metadata.htmlPattern}`);
        return;
      }
      htmlPath = path.join(dirPath, fileName);
    } else {
      console.log(`✗ No htmlFile or htmlDir/htmlPattern specified for ${slug}`);
      return;
    }

    if (!fs.existsSync(htmlPath)) {
      console.log(`✗ File not found: ${htmlPath}`);
      return;
    }

    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const bodyContent = extractBodyContent(htmlContent);

    if (!bodyContent || bodyContent.length < 100) {
      console.log(`⚠ Limited content found for ${slug}`);
      createMdxFile(slug, metadata, metadata.description);
    } else {
      createMdxFile(slug, metadata, bodyContent);
    }
  });

  console.log('\n✓ All blog files converted successfully!');
}

main();
