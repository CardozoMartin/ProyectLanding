// src/Component/Gallery.js

import "./galleryStyle.css"; // Importa estilos para la galería

const images = [
  { src: "https://acdn.mitiendanube.com/stores/001/749/890/products/whatsapp-image-2024-05-07-at-17-56-43-0bcf99637649fd568817151154345431-1024-1024.jpeg", alt: "Image 1" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJD9q4Q2Vzd-Ywx2lR8tVjAd9vovE5OAeJkSc37RrI8Pvzcp4rNpjH_bzG541fDsWx4Kw&usqp=CAU", alt: "Image 2" },
  { src: "https://static.ftshp.digital/img/p/1/0/7/1/8/9/107189.jpg", alt: "Image 3" },
  { src: "https://static.ftshp.digital/img/p/6/7/1/6/7/67167-full_product.jpg", alt: "Image 4" },
  { src: "https://static.ftshp.digital/img/p/6/7/1/6/7/67167-full_product.jpg", alt: "Image 5" },
  { src: "https://static.ftshp.digital/img/p/6/7/1/6/7/67167-full_product.jpg", alt: "Image 6" },
  {  },

];

const Gallery = () => {
  return (
    <section className="containerGallery">

    <div className="gallery">
    {images.map((image, index) => (
      <div className="gallery-item" key={index}>
        <img src={image.src} alt={image.alt} />
      </div>
    ))}
  </div>
    </section>

  );
};

export default Gallery;
