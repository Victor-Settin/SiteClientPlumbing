import React from 'react';
import Container from '../components/Container'; // Importa o componente
import HeroSection from '../components/HeroSection';
import Location from '../components/Location';
import photoPlumbing from '../images/logo-1.png';

function Home() {
  return (
    <Container>
      <HeroSection
        title="About Us"
        subtitle="Optimal Plumbing Solutions for Your Needs"
        description="Welcome to East Bay Plumbing Service, where dedication and hard work converge to provide the best plumbing services for your home and business."
        buttonText="Learn More"
        imageUrl={photoPlumbing}
        reverse={false}
      />
      <HeroSection
        title="Why Choose Us?"
        subtitle="Experience and Reliability You Can Trust"
        description="With years of expertise in the plumbing industry, we bring you a team that ensures efficiency, quality, and a job well done."
        buttonText="Get in Touch"
        imageUrl={photoPlumbing}
        reverse={true}
      />
      <HeroSection
        title="Our Commitment"
        subtitle="Dedicated to Excellence in Plumbing"
        description="At East Bay Plumbing, we guarantee top-quality services and customer satisfaction. Your needs are our priority."
        buttonText="Explore Our Services"
        imageUrl={photoPlumbing}
        reverse={false}
      />
      <Location />
    </Container>
  );
}

export default Home;
