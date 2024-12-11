import React, { useRef, useEffect } from "react";
import "./Instagram.scss";

function Instagram() {
  const images = [
    require("../assets/images/hitomi1.png"),
    require("../assets/images/hitomi2.png"),
    require("../assets/images/hitomi3.png"),
    require("../assets/images/hitomi4.png"),
    require("../assets/images/hitomi5.png"),
    require("../assets/images/hitomi6.png"),
  ];

  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const totalScrollWidth = gallery.scrollWidth; // Largeur totale du conteneur
    const visibleWidth = gallery.offsetWidth; // Largeur visible
    let scrollPosition = 0;

    const scrollInterval = setInterval(() => {
      scrollPosition += 3; // Ajustez cette valeur pour la vitesse

      if (scrollPosition >= totalScrollWidth / 2) {
        // Réinitialisez le défilement à la moitié pour donner l'illusion d'un défilement infini
        scrollPosition = 0;
      }

      gallery.scrollLeft = scrollPosition;
    }, 45); // Intervalle en millisecondes

    return () => clearInterval(scrollInterval); // Nettoyez l'intervalle à la fin
  }, []);

  // Dupliquez les images pour un effet de défilement infini
  const duplicatedImages = [...images, ...images];

  return (
    <div className="horizontal-gallery" ref={galleryRef}>
      <a
        className="link_gallery"
        href="https://www.instagram.com/yaknowme_hitomi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Image ${index}`} className="gallery-image" />
          </div>
        ))}
      </a>
    </div>
  );
}

export default Instagram;
