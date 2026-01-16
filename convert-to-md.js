import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the HTML file
const htmlFile = path.join(__dirname, 'ai/macrospec/original-context/themitch about me original.html');
const htmlContent = fs.readFileSync(htmlFile, 'utf-8');

// Split into lines and get lines 713-720 (0-indexed, so 712-719)
const lines = htmlContent.split('\n');
const extractedLines = lines.slice(712, 720).join('\n');

// Parse HTML divs more intelligently
const markdown = convertHtmlToMarkdown(extractedLines);

// Write to output file
const outputFile = path.join(__dirname, 'ai/macrospec/original-context/aboutme.md');
fs.writeFileSync(outputFile, markdown, 'utf-8');

console.log(`✓ Converted to markdown: ${outputFile}`);

function convertHtmlToMarkdown(html) {
  let text = html;

  // Convert bold tags to markdown
  text = text.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
  text = text.replace(/<b>(.*?)<\/b>/g, '**$1**');

  // Convert italic tags to markdown
  text = text.replace(/<em>(.*?)<\/em>/g, '*$1*');
  text = text.replace(/<i>(.*?)<\/i>/g, '*$1*');

  // Remove other HTML tags but keep content
  text = text.replace(/<[^>]*>/g, '');

  // Decode HTML entities
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");

  // Split by paragraph markers and process each section
  const paragraphs = text.split(/\n/).filter(line => line.trim().length > 0);

  let markdown = [];

  for (const para of paragraphs) {
    const trimmed = para.trim();

    if (trimmed.length === 0) continue;

    // Detect if this is likely a heading (short, capitalized, no ending punctuation or ends with colon)
    const isHeading = trimmed.length < 80 &&
                     (trimmed.match(/^[A-Z][^.!?]*$/) ||
                      trimmed.match(/^[A-Z][^.!?]*:$/) ||
                      trimmed.endsWith('Strategy') ||
                      trimmed.endsWith('Management') ||
                      trimmed.endsWith('Experience') ||
                      trimmed.endsWith('Balance') ||
                      trimmed.endsWith('Focus') ||
                      trimmed.endsWith('Market') ||
                      trimmed.endsWith('learning'));

    if (isHeading) {
      // Add heading with appropriate level
      if (markdown.length > 0 && markdown[markdown.length - 1] !== '') {
        markdown.push('');
      }
      markdown.push(`## ${trimmed}`);
      markdown.push('');
    } else {
      markdown.push(trimmed);
      markdown.push('');
    }
  }

  return markdown.join('\n').trim();
}
