import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatViews } from '../../utils/formatViews'
import ViewsAndDate from './CollectionInfo/ViewsAndDate';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import CommentSection from './CollectionInfo/CommentSection';

const CollectionInfo = () => {
  // Example collection data with URLs that have preview images, titles, and descriptions

  const collection = {
    "id": 1,
    "title": "Nature Wonders",
    "description": "Explore breathtaking nature landscapes and immerse yourself in the beauty that our planet has to offer. From towering mountains and expansive forests to serene lakes and vast deserts, Nature Wonders captures some of the most awe-inspiring views on Earth. This collection features stunning photographs taken by adventurers and nature enthusiasts from around the globe. Each image tells a story of the power and tranquility found in the wild. Whether it’s the vibrant hues of a sunset over the Grand Canyon, the misty mornings of the Amazon rainforest, or the icy peaks of the Himalayas, this collection brings you closer to nature’s majesty. Join us as we journey through these landscapes, celebrating the beauty, diversity, and resilience of the natural world. Discover new destinations, find peace in the solitude of the wilderness, and gain a deeper appreciation for the environment. Perfect for travel lovers, photographers, or anyone looking to escape the urban jungle and reconnect with nature.",
    "imageUrl": "https://picsum.photos/300/200?random=1",
    "user": "User1",
    "views": 20000,
    "addedOn": "2024-08-01T12:00:00Z"
  }



  let user = {
    profile_pic: 'https://picsum.photos/id/237/100/100',
    subscribers: 200000,
  }



  return (
    <div className="lg:w-2/3 flex flex-col space-y-6">
      {/* Collection Image */}
      <img
        src={collection.imageUrl}
        alt={collection.title}
        className="w-full rounded-lg shadow-lg"
      />

      {/* Collection Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        {collection.title}
      </h1>

      {/* User Info and Action Buttons */}
      <div className="flex items-center justify-between w-full">
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          {/* User Profile Image */}
          <img
            src={user.profile_pic} // Replace with actual profile image URL
            alt={collection.user}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium text-gray-700">{collection.user}</span>
            <span className="text-sm text-gray-500">{formatViews(user.subscribers)} subscribers</span>
          </div>
          {/* Follow Button */}
          <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full">
            Follow
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">


          {/* Like Button */}
          <button className="text-gray-500 hover:text-green-600">
           
            <FontAwesomeIcon icon={faThumbsUp} size='2x'/>
          </button>

          {/* Dislike Button */}
          <button className="text-gray-500 hover:text-red-600">
            <FontAwesomeIcon icon={faThumbsDown} size='2x' />
          </button>

          {/* Share Button */}
          <button className="text-gray-500 hover:text-blue-600 border py-2 px-4 rounded-full">
          <FontAwesomeIcon icon={faShare} size='1x' /> 
          <span className='text-xl py-auto'> Share</span>
          </button>
        </div>
      </div>

      {/* Collection Description Box */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <ViewsAndDate addedOn={collection.addedOn} views={collection.views} />
        <p className="text-gray-600 mt-3">
          {collection.description}
        </p>
      </div>
      <CommentSection/>
    </div>
  );
};

export default CollectionInfo;
