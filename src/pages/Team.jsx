import React from 'react';
import TeamDetail from '../layout/TeamDetail';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <TeamDetail />
      </main>
    </div>
  );
};

export default Team;