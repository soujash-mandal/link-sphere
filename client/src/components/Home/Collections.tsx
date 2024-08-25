import React, { useState } from 'react';
import Collection from './Collection';
import sampleCollections from '../../data/sampleCollections.json'

const Collections: React.FC = () => {
  const [collections] = useState(sampleCollections.collections);

  return (
    <div className="collections-container py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((collection, index) => (
          <Collection key={index} {...collection} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
