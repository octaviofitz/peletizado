import React from 'react';

// Isotipo de Aglupel Eco (dos chevrones) como SVG para usar de recurso gráfico
function Isotipo({ className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      viewBox="200 310 460 440"
      fill={color}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M214 468 L322 345 Q331 334 342 333 L490 326 Q506 327 518 337 L645 449 L600 500 L449 369 Q420 352 392 371 L267 515 Z" />
      <path d="M226 615 L269 568 L410 696 Q445 711 460 693 L584 561 L633 606 L527 720 Q519 730 512 731 L367 735 Q355 734 345 726 Z" />
    </svg>
  );
}

export default Isotipo;
