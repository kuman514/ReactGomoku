import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import App from '^/App';

import './index.css';

(() => {
  const domNode = document.getElementById('root');
  if (domNode) {
    const root = createRoot(domNode);
    root.render(
      <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>,
    );
  }
})();
