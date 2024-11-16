import React from 'react';
import Container from '../components/Container'; // Importando o Container
import '../styles/About.css'; // Importando o CSS atualizado

function About() {
  return (
    <Container> {/* Envolvendo todo o conteúdo com o Container */}
      <div className="about-page">
        <header className="about-header">
          <h1>About East Bay Plumbing Service</h1>
          <p>Your Trusted Plumbing Experts in the Bay Area</p>
        </header>
        <section className="about-content">
          <p>
            At East Bay Plumbing Service, we are committed to delivering high-quality plumbing solutions to our clients. 
            With years of experience in the industry, we’ve built a reputation based on reliability, professionalism, and excellence. 
            We understand the importance of having a trusted plumbing partner for both residential and commercial needs, and we aim to provide just that.
          </p>
          <p>
            As a family-owned and operated business, we treat our clients like family. Our team of licensed and skilled plumbers is dedicated to ensuring 
            your satisfaction through top-notch services and exceptional customer care. We take pride in our work and strive to exceed expectations, 
            regardless of the complexity of the project.
          </p>
          <p>
            From small repairs to large installations, we have the expertise and tools to handle all your plumbing needs. Our mission is to provide 
            dependable, affordable, and efficient plumbing services to every client. Trust East Bay Plumbing Service for any of your plumbing requirements, 
            and experience the difference of working with true professionals.
          </p>
        </section>
      </div>
    </Container>
  );
}

export default About;
