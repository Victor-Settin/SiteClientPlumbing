import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../styles/Gallery.css';

const imagesContext = require.context('../images', false, /\.(jpg|jpeg|png|gif)$/);
const imageFiles = imagesContext.keys().map(imagesContext);

function Gallery() {
  const { serviceName } = useParams();

  const serviceImages = {
    service1: [
      {
        beforeImage: 'logo-1',
        duringImage: 'logo-mascot',
        afterImage: 'logo',
        local: 'São Paulo, SP',
        tipoServico: 'Reparo Hidráulico',
        tempo: '4 horas',
        ano: '2023'
      },
      {
        beforeImage: 'logo-1',
        duringImage: 'logo-mascot',
        afterImage: 'logo',
        local: 'São Paulo, SP',
        tipoServico: 'Reparo Hidráulico',
        tempo: '4 horas',
        ano: '2023'
      },
      {
        beforeImage: 'logo-1',
        duringImage: 'logo-mascot',
        afterImage: 'logo',
        local: 'São Paulo, SP',
        tipoServico: 'Reparo Hidráulico',
        tempo: '4 horas',
        ano: '2023'
      },{
        beforeImage: 'logo-1',
        duringImage: 'logo-mascot',
        afterImage: 'logo',
        local: 'São Paulo, SP',
        tipoServico: 'Reparo Hidráulico',
        tempo: '4 horas',
        ano: '2023'
      },{
        beforeImage: 'logo-1',
        duringImage: 'logo-mascot',
        afterImage: 'logo',
        local: 'São Paulo, SP',
        tipoServico: 'Reparo Hidráulico',
        tempo: '4 horas',
        ano: '2023'
      },
      // Adicione outros serviços aqui
    ]
  };

  const images = serviceImages[serviceName] || [];

  return (
    <div className="gallery">
      <h1>Galeria de {serviceName}</h1>

      <div className="gallery-images">
        {images.length > 0 ? (
          images.map((image, index) => {
            const beforeImageFile = imageFiles.find(img => img.includes(image.beforeImage));
            const duringImageFile = imageFiles.find(img => img.includes(image.duringImage));
            const afterImageFile = imageFiles.find(img => img.includes(image.afterImage));

            return (
              <div key={index} className="image-card">
                <Swiper
                  modules={[Navigation]}
                  navigation={true}
                  spaceBetween={30}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <div className="carousel-image">
                      <img src={beforeImageFile} alt={`Antes do serviço ${serviceName}`} className="gallery-image" />
                      <p><strong>Antes</strong></p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="carousel-image">
                      <img src={duringImageFile} alt={`Durante o serviço ${serviceName}`} className="gallery-image" />
                      <p><strong>Durante</strong></p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="carousel-image">
                      <img src={afterImageFile} alt={`Depois do serviço ${serviceName}`} className="gallery-image" />
                      <p><strong>Depois</strong></p>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="image-description">
                  <p><strong>Local:</strong> {image.local}</p>
                  <p><strong>Tipo de Serviço:</strong> {image.tipoServico}</p>
                  <p><strong>Tempo:</strong> {image.tempo}</p>
                  <p><strong>Ano:</strong> {image.ano}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Não há fotos disponíveis para este serviço.</p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
