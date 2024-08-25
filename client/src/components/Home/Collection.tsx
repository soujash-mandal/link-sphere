import React from 'react';
import moment from 'moment';
import { CollectionProps } from '../types/collectionTypes'; 
import { formatViews } from '../../utils/formatViews'; // Assuming the function is stored in a utils folder
import { useNavigate } from 'react-router-dom';

const Collection: React.FC<CollectionProps> = ({id, title, description, imageUrl, user, views, addedOn }) => {
  const timeAgo = moment(addedOn).fromNow();
  const formattedViews = formatViews(views);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/collection/${id}`);
  };

  return (
    <div className="collection-item bg-white rounded-lg shadow-md p-4 mb-6 cursor-pointer" onClick={handleClick} >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-1">{description}</p>
      <p className="text-gray-500 text-sm mt-2">By: {user}</p>
      <div className="flex justify-between text-gray-400 text-xs mt-4">
        <span>{formattedViews} views</span>
        <span>{timeAgo}</span>
      </div>
    </div>
  );
};

export default Collection;
