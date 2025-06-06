"use client"
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      title: "Graduation Day Ceremony",
      description: "Our memorable graduation ceremony with all classmates",
      category: "graduation",
      date: "2022-12-15",
      photographer: "Ahmed Hassan",
      event: "Annual Graduation",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Annual Sports Day",
      description: "Exciting sports competitions and team spirit",
      category: "sports",
      date: "2022-11-20",
      photographer: "Fatima Rahman",
      event: "Inter-School Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Cultural Program Performance",
      description: "Traditional dance and music performances",
      category: "cultural",
      date: "2022-10-10",
      photographer: "Nasir Ahmed",
      event: "Cultural Festival",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
    },
    {
      id: 4,
      title: "Classroom Memories",
      description: "Fun moments during our regular classes",
      category: "classroom",
      date: "2022-09-05",
      photographer: "Sara Khan",
      event: "Regular Classes",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Science Fair Exhibition",
      description: "Innovative projects and experiments showcase",
      category: "events",
      date: "2022-08-15",
      photographer: "Karim Uddin",
      event: "Science Exhibition",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=500&fit=crop",
    },
    {
      id: 6,
      title: "Study Tour to Dhaka",
      description: "Educational trip to the capital city",
      category: "trips",
      date: "2022-07-20",
      photographer: "Rahul Islam",
      event: "Educational Tour",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    },
  ];

  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentView, setCurrentView] = useState('grid-3');
  const [displayedItems, setDisplayedItems] = useState(6);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([...galleryData]);

  // Memoize navigation functions to prevent useEffect dependency issues
  const showPrevImage = useCallback(() => {
    setCurrentLightboxIndex(prev => 
      (prev - 1 + filteredData.length) % filteredData.length
    );
  }, [filteredData.length]);

  const showNextImage = useCallback(() => {
    setCurrentLightboxIndex(prev => 
      (prev + 1) % filteredData.length
    );
  }, [filteredData.length]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  useEffect(() => {
    const filtered = currentFilter === 'all' 
      ? [...galleryData] 
      : galleryData.filter(item => item.category === currentFilter);
    setFilteredData(filtered);
    setDisplayedItems(6);
  }, [currentFilter]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'ArrowLeft') showPrevImage();
      else if (e.key === 'ArrowRight') showNextImage();
      else if (e.key === 'Escape') closeLightbox();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, showPrevImage, showNextImage, closeLightbox]);

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  const handleViewClick = (view) => {
    setCurrentView(view);
  };

  const loadMoreItems = () => {
    setDisplayedItems(prev => prev + 3);
  };

  const openLightbox = (index) => {
    setCurrentLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const itemsToShow = filteredData.slice(0, displayedItems);
  const currentLightboxItem = filteredData[currentLightboxIndex];

  const categories = ['all', 'graduation', 'sports', 'cultural', 'classroom', 'events', 'trips'];

  return (
    <div className={styles.container}>
      <div className={styles.galleryGrid}>
        {itemsToShow.map((item, index) => (
          <div
            key={item.id}
            className={styles.galleryItem}
            onClick={() => openLightbox(index)}
          >
            <Image
              width={300}
              height={200}
              src={item?.image} 
              alt={item?.title} 
              className={styles.galleryImage}
            />
            <div className={styles.photoInfo}>
              <div className={styles.photoDate}>
                {new Date(item.date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </div>
              <div className={styles.photoEvent}>{item.event}</div>
              <div className={styles.photoPhotographer}>📸 {item.photographer}</div>
            </div>
          </div>
        ))}
      </div>

      {displayedItems < filteredData.length && (
        <div className={styles.loadMoreSection}>
          <button className={styles.loadMoreBtn} onClick={loadMoreItems}>
            Load More
          </button>
        </div>
      )}

      {isLightboxOpen && (
        <div className={`${styles.lightbox} ${isLightboxOpen ? styles.active : ''}`}>
          <div className={styles.lightboxContent}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              ×
            </button>
            <Image
              width={800}
              height={600}
              className={styles.lightboxImage} 
              src={currentLightboxItem?.image} 
              alt={currentLightboxItem?.title} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;