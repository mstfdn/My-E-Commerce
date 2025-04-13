import React from 'react';
import ContactDetail from '../layout/ContactDetail';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ContactDetail />
      </main>
    </div>
  );
};

export default Contact;