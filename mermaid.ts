export function widget(
  bodyText: string,
): { html: string; script: string } {
  return {
    html: `<pre class="mermaid">${bodyText.replaceAll("<", "&lt;")}</pre>`,
    script: `
    loadJsByUrl("https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.3/mermaid.min.js","sha512-HvxxeyPSnbU7/x0g15v3OMxTFeADyCUnCN3iCam3BDTxgFPKxa+ujRCbFuwjE8PASDwOH5LpzFfGGNWks7tuJQ==").then(() => {
      mermaid.init().then(updateHeight);
    });
    document.addEventListener("click", () => {
      api({type: "blur"});
    });
    `,
  };
}
