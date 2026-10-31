/* ============================================================
   app.js — Lógica compartida de Amigo Invisible El Descontrol
   ============================================================ */

'use strict';

/* ── Copos de nieve ── */
function crearCopos(n) {
  const contenedor = document.body;
  for (let i = 0; i < n; i++) {
    const copo = document.createElement('div');
    copo.className = 'copo';

    const tamanio   = Math.random() * 5 + 3;        // 3–8 px
    const izquierda = Math.random() * 100;           // 0–100 vw
    const duracion  = Math.random() * 8 + 6;        // 6–14 s
    const retraso   = Math.random() * 10;            // 0–10 s
    const opacidad  = Math.random() * 0.5 + 0.4;    // 0.4–0.9

    copo.style.cssText = `
      width: ${tamanio}px;
      height: ${tamanio}px;
      left: ${izquierda}vw;
      opacity: ${opacidad};
      animation-duration: ${duracion}s;
      animation-delay: -${retraso}s;
    `;

    contenedor.appendChild(copo);
  }
}

/* ── Sesión ── */
function limpiarSesion() {
  sessionStorage.removeItem('amigoInvisible_usuario');
  sessionStorage.removeItem('amigoInvisible_revelado');
}

/* ── Inicialización común ── */
document.addEventListener('DOMContentLoaded', () => {
  crearCopos(30);
});

