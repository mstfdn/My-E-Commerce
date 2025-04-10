import React from 'react';
import PageContent from '../layout/PageContent';
import Footer from '../layout/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <PageContent />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;