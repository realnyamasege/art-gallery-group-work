import React from 'react';
function ArtCard(props) {
    const { currentArt } = props;

    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="relative overflow-hidden h-56 rounded-lg">
                <img
                    src={currentArt.imageUrl}
                    alt={currentArt.title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{currentArt.title}</h2>
                <p className="text-gray-600">{currentArt.artist}</p>
               
               
                <hr className="my-4 border-t border-gray-300" />
               
            </div>
        </div>
    );
}

export default ArtCard;