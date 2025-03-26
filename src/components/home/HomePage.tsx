import React from 'react';
import Layout from '../layout/Layout';
import HeroSlider from './HeroSlider';
import CategoryTiles from './CategoryTiles';
import FeaturedProducts from './FeaturedProducts';
import CompanyValues from './CompanyValues';
import TestimonialSlider from './TestimonialSlider';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSlider />
      <CategoryTiles />
      <FeaturedProducts />
      <TestimonialSlider />
      <CompanyValues />
    </Layout>
  );
};

export default HomePage;
