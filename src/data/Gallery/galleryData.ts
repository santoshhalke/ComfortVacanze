const galleryData = [
  {
    service: "GIT",
    displayName: "Group International Tours",
    cover: "/images/git/git1.jpg",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/gallery/git/git_${i + 1}.jpg`,
      orientation: i % 2 === 0 ? "landscape" : "portrait",
      alt: `GIT Tour ${i + 1}`,
    })),
  },
  {
    service: "FIT",
    displayName: "Free Independent Traveler",
    cover: "/images/fit/fit-banner.png",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/gallery/fit/fit_${i + 1}.jpg`,
      orientation: i % 2 === 0 ? "portrait" : "landscape",
      alt: `FIT Tour ${i + 1}`,
    })),
  },
  {
    service: "Corporate",
    displayName: "Corporate Tours",
    cover: "/images/CorporateTours/corporate-tour-banner.png",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/gallery/corporate/corporate_${i + 1}.jpg`,
      orientation: i % 3 === 0 ? "portrait" : "landscape",
      alt: `Corporate Event ${i + 1}`,
    })),
  },
  {
    service: "Education",
    displayName: "Education Tours",
    cover: "/images/EducationalTours/education-tour-banner.png",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/gallery/education/education_${i + 1}.jpg`,
      orientation: i % 2 === 0 ? "landscape" : "portrait",
      alt: `Education Tour ${i + 1}`,
    })),
  },
  {
    service: "MICE",
    displayName: "MICE",
    cover: "/images/Mice/mice-banner.png",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/gallery/mice/mice_${i + 1}.jpg`,
      orientation: i % 4 === 0 ? "portrait" : "landscape",
      alt: `MICE Event ${i + 1}`,
    })),
  },
];

export default galleryData;
