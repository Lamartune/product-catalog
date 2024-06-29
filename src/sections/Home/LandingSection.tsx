import React from "react";
import ProductList from "../../components/ProductList";

interface LandingSectionProps {
  searchTerm: string;
}

const LandingSection: React.FC<LandingSectionProps> = ({ searchTerm }) => {
  return (
    <section>
      <ProductList searchTerm={searchTerm} />
    </section>
  );
};

export default LandingSection;
