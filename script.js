document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".wave-divider-bottom");
  const waveHeight = window.innerHeight / 16;

  sections.forEach((section) => {
    const width = section.offsetWidth;
    const height = section.offsetHeight;

    // Calcul de la vague du HAUT
    let topPath = `M0 ${waveHeight / 2} `;
    for (let x = 0; x <= width; x++) {
      const y = (waveHeight / 2) + (waveHeight / 2) * Math.sin((x / width) * ((width * 2) / height) * Math.PI);
      topPath += `L${x} ${y} `;
    }

    // Calcul de la vague du BAS
    let bottomPath = "";
    for (let x = width; x >= 0; x--) {
      const y = height - ((waveHeight / 2) + (waveHeight / 2) * Math.sin((x / width) * ((width * 2) / height) * Math.PI));
      bottomPath += `L${x} ${y} `;
    }

    // Fusion des deux tracés pour fermer la forme
    const fullPath = `${topPath} L${width} ${height} ${bottomPath} Z`;
    section.style.clipPath = `path('${fullPath}')`;
  });
});

window.addEventListener("resize", () => {
  document.dispatchEvent(new Event("DOMContentLoaded"));
});
