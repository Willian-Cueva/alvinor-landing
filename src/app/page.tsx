"use client";

import {
  CTASection,
  FeaturesSection,
  HeroSection,
  ProductsSection,
  TopMenu,
} from "@/components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
