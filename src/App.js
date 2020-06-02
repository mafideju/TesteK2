import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import background from './images/background.jpg';


const App = () => {
  console.log('background', background)
  return (
    <AppContent>
      <Container>
        <Header />
        <MainContent />
        <Footer />
      </Container>
    </AppContent>
  );
}

const AppContent = styled.div`
    background: url(${background});
`;

const Container = styled.section`
    margin: 0 auto;
    width: 75rem;
`;

export default App;
