document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  // waveHeight définit l'amplitude de la courbe
  const waveHeight = window.innerHeight / 16;

  sections.forEach((section, index) => {
    const width = section.offsetWidth;
    const height = section.offsetHeight;
    const nextSection = section.nextElementSibling;

    section.style.zIndex = sections.length - index;

    // Gère la superposition des sections
    if (nextSection?.tagName === "SECTION") {
      nextSection.style.marginTop = `-${waveHeight}px`;
    }

    // N'applique la vague que si la classe est présente
    if (!section.classList.contains("wave-divider-bottom")) return;

    let wavePathData = "M0 " + (height - waveHeight / 2) + " ";
    for (let x = 0; x <= width; x++) {
      const y =
        waveHeight / 2 +
        (waveHeight / 2) *
          Math.sin((x / width) * ((width * 2) / height) * Math.PI);
      wavePathData += `L${x} ${height - y} `;
    }
    wavePathData += `L${width} 0 L0 0 Z`;

    // Applique la découpe dynamique
    section.style.clipPath = `path('${wavePathData}')`;
  });
});

// Relance le calcul si on change la taille de la fenêtre
window.addEventListener("resize", function () {
  document.dispatchEvent(new Event("DOMContentLoaded"));
});
