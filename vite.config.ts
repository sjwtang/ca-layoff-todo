import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { SECTIONS, type ChecklistSection } from './src/data/checklist.ts'

function escapeHtml(text: string) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function buildStaticHomeHtml(sections: ChecklistSection[]) {
  const sectionsHtml = sections
    .map((section) => {
      const items = section.items
        .map((item) => {
          const sources =
            item.sources.length > 0
              ? `<p>Official source${item.sources.length > 1 ? 's' : ''}: ${item.sources
                  .map(
                    (s) =>
                      `<a href="${escapeHtml(s.url)}">${escapeHtml(s.label)}</a>`,
                  )
                  .join(' · ')}</p>`
              : ''
          const note = item.note
            ? `<p><strong>Shirley's note:</strong> ${escapeHtml(item.note)}</p>`
            : ''
          return `<article id="${escapeHtml(item.id)}"><h3>${escapeHtml(item.title)}</h3>${item.body}${sources}${note}</article>`
        })
        .join('\n')

      return `<section aria-labelledby="static-${escapeHtml(section.id)}"><h2 id="static-${escapeHtml(section.id)}">${escapeHtml(section.title)}</h2>${items}</section>`
    })
    .join('\n')

  return `<article class="static-home">
  <h1>I just got laid off, now what?</h1>
  <p>Laid Off To-do List — a short checklist of what to do after a layoff in California, ordered by urgency.</p>
  <section aria-labelledby="static-todo-heading">
    <h2 id="static-todo-heading">To-do list</h2>
    <p>This checklist is designed for individuals navigating layoffs in California. If you're in another state, check your state's official government websites for location-specific guidance.</p>
    ${sectionsHtml}
  </section>
  <p>Ease back into the job search when you're ready and it feels right.</p>
  <p>This website has been created for informational purposes only and is not offered, nor should be construed, as legal advice. Made by <a href="https://www.linkedin.com/in/shirleyjtang/">Shirley</a> (your fellow laid off buddy).</p>
</article>`
}

function injectStaticHome(): Plugin {
  return {
    name: 'inject-static-home',
    transformIndexHtml(html) {
      const staticHtml = buildStaticHomeHtml(SECTIONS)
      return html.replace(
        '<div id="root"></div>',
        `<div id="root">${staticHtml}</div>`,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), injectStaticHome()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
})
