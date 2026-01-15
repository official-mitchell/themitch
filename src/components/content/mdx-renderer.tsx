import React from 'react';

interface MDXRenderProps {
  content: string;
}

export function MDXRenderer({ content }: MDXRenderProps) {
  // Simple markdown to HTML renderer for blog content
  // Splits content into paragraphs and lists
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentText: string[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushText = () => {
    if (currentText.length > 0) {
      const text = currentText.join('\n').trim();
      if (text) {
        elements.push(
          <p key={elements.length} className="text-gray-300 leading-relaxed mb-4">
            {text.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      }
      currentText = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="list-disc list-inside space-y-2 mb-4 text-gray-300 ml-4">
          {listItems.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item.replace(/^[-*]\s*/, '')}
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    // Handle headings
    if (trimmed.startsWith('###')) {
      flushText();
      flushList();
      const heading = trimmed.replace(/^#{1,3}\s*/, '');
      elements.push(
        <h3 key={elements.length} className="text-2xl font-bold text-white mt-8 mb-4">
          {heading}
        </h3>
      );
    } else if (trimmed.startsWith('##')) {
      flushText();
      flushList();
      const heading = trimmed.replace(/^##\s*/, '');
      elements.push(
        <h2 key={elements.length} className="text-3xl font-bold text-white mt-10 mb-6">
          {heading}
        </h2>
      );
    } else if (trimmed.startsWith('#')) {
      flushText();
      flushList();
      const heading = trimmed.replace(/^#\s*/, '');
      elements.push(
        <h1 key={elements.length} className="text-4xl font-bold text-white mt-12 mb-8">
          {heading}
        </h1>
      );
    } else if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
      if (!inList) {
        flushText();
        inList = true;
      }
      listItems.push(trimmed);
    } else if (trimmed === '') {
      if (inList) {
        flushList();
      } else {
        flushText();
      }
    } else {
      if (inList) {
        flushList();
      }
      currentText.push(line);
    }
  });

  flushText();
  flushList();

  return (
    <div className="prose prose-invert max-w-none">
      {elements}
    </div>
  );
}
