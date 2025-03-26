/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            src: '/vendor_carousel_1.jpg',
            tag: '📢 Expand Your Reach, Grow Your Sales!',
            text: 'Tap into a vast customer base and showcase your products to a wider audience. Join our thriving multi-vendor marketplace and take your business to new heights',
        },
        {
            src: '/vendor_carousel_2.jpg',
            tag: '📦 Simplified Order Management, Maximum Efficiency!',
            text: 'Easily track, process, and fulfill orders in real time with our seamless dashboard. Spend less time on logistics and more time growing your brand.',
        },
        {
            src: '/vendor_carousel_3.jpg',
            tag: '🛒 A Marketplace Built for Success!',
            text: 'Gain visibility alongside top vendors and build a loyal customer base. Our platform provides the tools and support you need to thrive in the competitive e-commerce world.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full overflow-hidden hidden lg:block">
            <div className="relative h-full w-full overflow-hidden">
                {images.map((image, index) =>
                    index === currentIndex ? (
                        <div
                            key={index}
                            className="absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-cover bg-center text-white"
                            style={{
                                backgroundImage: `url(${image.src})`,
                            }}
                        >
                            {/* Fade-in effect for text */}
                            <div className="mb-10 ml-5 w-full max-w-md rounded-md bg-black/50 p-5 text-sm backdrop-blur-sm">
                                <h2 className="mb-2 text-xl font-bold">
                                    {image.tag}
                                </h2>
                                <p>{image.text}</p>
                            </div>
                        </div>
                    ) : null,
                )}
            </div>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 focus:ring-1 focus:ring-white ${
                            index === currentIndex
                                ? 'scale-125 bg-primary'
                                : 'bg-gray-400 hover:bg-gray-600 hover:ring-1 hover:ring-primary'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
