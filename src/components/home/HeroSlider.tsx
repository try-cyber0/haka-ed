import React, { useState, useEffect } from 'react';
import hero1 from '../../assets/hero-1.jpg';
import hero2 from '../../assets/hero-2.jpg';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: hero1,
    title: 'Für glasklare Sauberkeit',
    subtitle: 'Lass den Frühling rein',
    buttonText: 'JETZT SHOPPEN',
    buttonLink: '/pages/fruehjahrsputz',
  },
  {
    image: hero2,
    title: 'Sofort-Effekt für trockene Haut',
    subtitle: 'Care + Repair Creme',
    buttonText: 'JETZT ENTDECKEN',
    buttonLink: '/collections/euterpflege-creme',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden h-96 md:h-[500px]">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <div className="bg-white bg-opacity-80 p-6 md:p-8 max-w-md rounded">
                <h2 className="text-xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-2xl mb-4">{slide.subtitle}</p>
                <a
                  href={slide.buttonLink}
                  className="inline-block bg-haka-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-haka-primary' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;
