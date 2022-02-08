import React from 'react';

const LoginButton = () => {
  return (
    <div data-login-container>
      <div data-login-content>
        <p>Ingresa a tu cuenta para ver tus compras, pedidos, listas y más.</p>
        <p>Elige una de las opciones para confirmar tu identidad.</p>
      </div>
      <div data-login-buttons>
        <button>Recibe la clave de acceso</button>
        <button>Ingresa con email y contraseña</button>
        <button>G Entrar con Google</button>
        <button>F Entrar con Facebook</button>
      </div>
    </div>
  );
};

export default LoginButton;
