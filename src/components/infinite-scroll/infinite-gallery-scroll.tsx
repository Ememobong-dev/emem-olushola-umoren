import React from 'react';
import Image from 'next/image';

const InfiniteScrollGallery = ({ images }: { images: string[] }) => {
  // Duplicate the images to create a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-infinite-scroll">
        {duplicatedImages.map((src, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 rounded-2xl bg-gray-300 h-[350px] w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] overflow-hidden mx-4"
          >
            <Image
              src={src}
              width={800}
              height={350}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full rounded-2xl"
              quality={90}
              priority={index < 5} // Only prioritize first few images
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollGallery;