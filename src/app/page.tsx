"use client";

import {
  CTASection,
  FeaturesSection,
  HeroSection,
  ProductsSection,
  WhatsAppFloatingButton,
} from "@/components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Products Section */}
      <ProductsSection />

      {/* CTA Section */}
      <CTASection />

      {/* WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
