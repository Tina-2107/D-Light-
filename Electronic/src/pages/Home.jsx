import React from "react";
import Layout from "../components/common/Layout";

import HeroBanner from "../components/homepage/HeroBanner";
import CategoryGrid from "../components/homepage/CategoryGrid";
import FeaturedProducts from "../components/homepage/FeaturedProducts";
import BrandSlider from "../components/homepage/BrandSlider";
import OffersSection from "../components/homepage/OffersSection";
import SafetyHighlights from "../components/homepage/SafetyHighlights";

const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <BrandSlider />
      <CategoryGrid />
      <OffersSection />
      <FeaturedProducts />
      <SafetyHighlights />
    </Layout>
  );
};

export default Home;
