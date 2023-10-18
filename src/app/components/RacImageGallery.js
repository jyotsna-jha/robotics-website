// src/app/components/RacImageGallery.js
"use client"
import React, { useState } from 'react';
import styles from '@app/styles/racgallery.module.css'

const images = [
  {
    id: 1,
    src: 'rac3.jpg', 
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'rac4.jpg', 
    alt: 'Image 2',
  },
  {
    id:3,
    src:'rac5.jpg',
    alt:'Image 3',

  },

  {
    id:4,
    src:'rac6.jpg',
    alt:'Image 4',

  },
  {
    id:5,
    src:'rac7.jpg',
    alt:'Image 5',

  },

  {
    id:6,
    src:'rac8.png',
    alt:'Image 6',

  },

  {
    id:7,
    src:'rac9.jpg',
    alt:'Image 7',

  },
  {
    id:8,
    src:'rac10.jpg',
    alt:'Image 8',

  },

  {
    id:9,
    src:'rac11.jpg',
    alt:'Image 3',

  },

  {
    id:10,
    src:'rac12.jpg',
    alt:'Image 3',

  },
  {
    id:11,
    src:'rac13.jpg',
    alt:'Image 3',

  },
  {
    id:12,
    src:'rac14.jpg',
    alt:'Image 3',

  },
  {
    id:13,
    src:'rac15.jpg',
    alt:'Image 3',

  },
  {
    id:14,
    src:'rac16.jpg',
    alt:'Image 3',

  },
  {
    id:15,
    src:'rac17.jpg',
    alt:'Image 3',

  },
  {
    id:16,
    src:'rac18.jpg',
    alt:'Image 3',

  },
  {
    id:17,
    src:'rac19.jpg',
    alt:'Image 3',

  },
  {
    id:18,
    src:'rac20.jpg',
    alt:'Image 3',

  },
  {
    id:19,
    src:'rac21.jpg',
    alt:'Image 3',

  },
  {
    id:20,
    src:'rac22.jpg',
    alt:'Image 3',

  },
  {
    id:21,
    src:'rac23.jpg',
    alt:'Image 3',

  },

  {
    id:22,
    src:'rac24.jpg',
    alt:'Image 3',

  },
  {
    id:23,
    src:'rac25.jpg',
    alt:'Image 3',

  },
  {
    id:24,
    src:'rac26.jpg',
    alt:'Image 3',

  },
  {
    id:25,
    src:'rac27.jpg',
    alt:'Image 3',

  },
  
  

];

const RacImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageInNewTab = (src) => {
    window.open(src, '_blank');
  };


  return (
    <>
    <h1 className={styles.headingimage}>Our Visual Collection</h1>
    <div className={styles.gallery}>
      {images.map((image) => (
        <div key={image.id} className={styles.imageContainer}>
          <img
            src={image.src}
            alt={image.alt}
            className={styles.image}
            onClick={() => openImageInNewTab(image.src)}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default RacImageGallery;
