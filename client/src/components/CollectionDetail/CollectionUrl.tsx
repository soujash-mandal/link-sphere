import React, { useState } from 'react'
import CopyButton from '../../assets/icons/CopyButton';
import { Alert } from '@mui/material';

const CollectionUrl = ({ urlItem }: { urlItem: any }) => {


    // Fallback image in case the provided image URL is broken
    const defaultImage = "https://picsum.photos/100/100?random=placeholder";

    // Custom hook to handle broken image URLs
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = defaultImage;
    };

    const [showCopyNotification, setShowCopyNotification] = useState(false);
    const handleCopy = (url: string) => {
        navigator.clipboard.writeText(url);
        setShowCopyNotification(true);
        setTimeout(() => {
            setShowCopyNotification(false);
        }, 2000); // Hide notification after 2 seconds
    };


    return (
        <li className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm" >
            {/* URL Preview Image */}
            <img
                src={urlItem.previewImage}
                alt={urlItem.title}
                className="w-16 h-16 rounded-lg mr-4"
                onError={handleImageError} // Fallback to default image if the preview image fails to load
            />

            <div className="flex-grow">
                {/* URL Title */}
                <a href={urlItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-semibold">
                    {urlItem.title}
                </a>
                {/* URL Description */}
                <p className="text-sm text-gray-600">{urlItem.description}</p>
            </div>

            {/* Copy Button */}

            {showCopyNotification ? <Alert severity="success">Copied</Alert> : <button
                onClick={() => handleCopy(urlItem.url)}
                className="  bg-gray-300 text-white px-3 py-2 rounded-lg hover:bg-gray-400 transition"
            >
                <CopyButton height={20} />
            </button>}

        </li>
    )
}

export default CollectionUrl