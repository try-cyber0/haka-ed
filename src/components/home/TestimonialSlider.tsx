import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  product: string;
  rating: number;
  comment: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sabine',
    product: 'Neutralseife Liquid Bergfrische 1L',
    rating: 5,
    comment: 'Ergiebig und sehr vielseitig einsetzbar',
    date: 'vor einem Tag'
  },
  {
    name: 'Rosemarie',
    product: 'EUTERPFLEGE Care + Repair Creme 2x200ml',
    rating: 5,
    comment: 'Alles super!',
    date: 'vor einem Tag'
  },
  {
    name: 'Günter',
    product: 'Hautbalsam 200ml',
    rating: 5,
    comment: 'Ein Produkt der besonderen Klasse für die Haut',
    date: 'vor einem Tag'
  },
  {
    name: 'Ingrid',
    product: 'Colorwaschmittel 3kg, 77WL',
    rating: 4,
    comment: 'Seit einigen Monaten löst sich das Pulver im Feinwaschgang bei 30°C nicht richtig auf. Man muss einen zusätzlichen Spülgang einschalten, um das Pulver auszuwaschen. Das Waschergebnis selbst ist sehr gut.',
    date: 'vor einem Tag'
  },
  {
    name: 'Thomas',
    product: 'Neutralseife Original 5kg Eimer',
    rating: 5,
    comment: 'Ich benutze Sie schon seid Jahren für alle Arten der Reinigung. Sehr gutes Produkt mit sehr guter Reinigungsleistung und angenehmem Geruch und Hautfreundlich.',
    date: 'vor 2 Tagen'
  },
  {
    name: 'Verena',
    product: 'VitaminIntensiv Serum 30ml',
    rating: 5,
    comment: 'Super',
    date: 'vor 2 Tagen'
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Set items per page based on screen size
  useEffect(() => {
    const getItemsPerPage = () => {
      if (typeof window !== 'undefined') {
        return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      }
      return 3; // Default for SSR
    };

    setItemsPerPage(getItemsPerPage());

    // Auto-advance testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (testimonials.length - itemsPerPage + 1)
      );
    }, 5000);

    // Responsive handling
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex, testimonials.length - newItemsPerPage)
      );
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      clearInterval(interval);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [itemsPerPage]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      Math.max(0, prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, testimonials.length - itemsPerPage)
    );
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Kundenrezensionen</h2>
          <div className="text-haka-primary font-bold">
            <span className="text-2xl">4.8</span> <span className="text-lg">★</span>
            <div className="text-sm text-gray-500 font-normal">68.373 Bewertungen</div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                >
                  <div className="bg-gray-50 rounded-lg p-6 h-full">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.date}</div>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">{testimonial.product}</div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600">{testimonial.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
