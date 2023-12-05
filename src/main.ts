import "./style.css";

function cambiarFotoPrincipal(idMiniatura: string): void {
  const fotoPrincipal = document.getElementById("foto-principal");
  const miniatura = document.getElementById(idMiniatura);
  if (fotoPrincipal !== null && fotoPrincipal !== undefined && miniatura !== null && miniatura !== undefined) {
    if (fotoPrincipal instanceof HTMLImageElement && miniatura instanceof HTMLImageElement) {
      fotoPrincipal.src = miniatura.src;
    };
  };
 };

const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");

if (miniatura1 !== null && miniatura1 !== undefined) {
  miniatura1.addEventListener("click", function() { cambiarFotoPrincipal("miniatura1")});
};

if (miniatura2 !== null && miniatura2 !== undefined) {
  miniatura2.addEventListener("click", function() { cambiarFotoPrincipal("miniatura2")});
};

if (miniatura3 !== null && miniatura3 !== undefined) {
  miniatura3.addEventListener("click", function() { cambiarFotoPrincipal("miniatura3")});
};
