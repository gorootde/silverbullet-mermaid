export function widget(
  bodyText: string,
): { html: string; script: string } {
  return {
    html: `<pre class="mermaid">${bodyText.replaceAll("<", "&lt;")}</pre>`,
    script: `
    loadJsByUrl("https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid-5a5980d4.js","sha256-feIQo9AMz/XK1KtInGZo+YIK98Z8TSE0igq1SsEWmhY=").then(() => {
      mermaid.init().then(updateHeight);
    });
    document.addEventListener("click", () => {
      api({type: "blur"});
    });
    `,
  };
}
