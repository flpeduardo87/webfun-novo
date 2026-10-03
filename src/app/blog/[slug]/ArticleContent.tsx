'use client';

function parseMarkdown(md: string): string {
  let html = md
    // Escape HTML
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // Tables: convert | --- | --- | rows
    .replace(/^\|(.+)\|\s*$/gm, (_, row: string) => `<tr>${row.split('|').map((c: string) => `<td>${c.trim()}</td>`).join('')}</tr>`)
    .replace(/^\|[-: |]+\|\s*$/gm, '')
    // Wrap consecutive <tr> in <table>
    .replace(/((?:<tr>.*<\/tr>\n?)+)/g, (match) => {
      const rows = match.trim().split('\n');
      const header = rows[0].replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
      const body = rows.slice(1).join('\n');
      return `<div style="overflow-x:auto"><table class=""><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    })
    // Headings
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    // Paragraphs: lines not starting with < and not empty
    .replace(/^(?!<)(.+)$/gm, '<p>$1</p>')
    // Clean double-wrapped paragraphs
    .replace(/<p>(<[hul])/g, '$1')
    .replace(/(<\/[hul][^>]*>)<\/p>/g, '$1')
    .replace(/<p>(<div)/g, '$1')
    .replace(/(<\/div>)<\/p>/g, '$1')
    // Remove empty <p></p>
    .replace(/<p>\s*<\/p>/g, '');

  return html;
}

export default function ArticleContent({ content }: { content: string }) {
  const html = parseMarkdown(content);
  return (
    <div
      className="art-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
