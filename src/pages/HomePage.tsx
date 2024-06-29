import React from "react";
import LandingSection from "../sections/Home/LandingSection";

interface HomePageProps {
  searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  return (
    <>
      <section className="my-8">
        <LandingSection searchTerm={searchTerm} />
      </section>
    </>
  );
};

export default HomePage;
