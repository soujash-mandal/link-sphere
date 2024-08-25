import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import CollectionInfo from '../components/CollectionDetail/CollectionInfo';
import sampleUrls from '../data/sampleUrls.json'
import CollectionUrl from '../components/CollectionDetail/CollectionUrl';




const CollectionDetail: React.FC = () => {
    // const { id } = useParams<{ id: string }>();
    const [urls] = useState(sampleUrls.urls);

    // In a real app, you'd fetch collection details based on the ID
    // const collection = sampleCollection;



    return (
        <div className="flex flex-col lg:flex-row gap-6 mt-4">
            {/* Left side: Collection Info */}
            <CollectionInfo/>

            {/* Right side: List of Collection URLs */}
            <div className="lg:w-2/3">
                <h2 className="text-xl font-semibold mb-4">Collection URLs</h2>
                <ul className="space-y-4">
                    {urls.map((urlItem, index) => (
                        <CollectionUrl urlItem={urlItem} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CollectionDetail;
