import React from 'react';
import '../styles/Container.css'; // Arquivo de estilos para o container

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;
