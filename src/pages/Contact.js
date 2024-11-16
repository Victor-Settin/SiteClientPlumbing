import React, { useState } from 'react';
import Container from '../components/Container'; // Importando o Container
import '../styles/Contact.css'; // Certifique-se de que o caminho e nome estão corretos

function Contact() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      // Lógica de envio do formulário
      alert("Formulário enviado com sucesso!");
    } else {
      alert("Você deve aceitar os termos e condições.");
    }
  };

  return (
    <Container> {/* Envolvendo o conteúdo com o Container */}
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Contact Us</h2>
            <p>We're here to help! Please fill in the form to get in touch.</p>

            {/* Adicionando o mapa abaixo do texto */}
            <div className="map-container">
              <iframe
                title="San Bruno Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103105.22634958607!2d-122.409215!3d37.632611!3m2!1i1024!2i768!4f13.1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              First Name *
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Last Name *
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Phone *
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please enter your message here."
                rows="4"
              />
            </label>

            <div className="terms-checkbox-container">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
                id="terms-checkbox"
              />
              <label htmlFor="terms-checkbox">
                I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
              </label>
            </div>

            <button type="submit" disabled={!termsAccepted}>Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
