import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'; //import `ChakraProvider` component
import App from './App';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

ReactDOM.render(
  <React.StrictMode>
  <DndProvider backend={HTML5Backend}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


