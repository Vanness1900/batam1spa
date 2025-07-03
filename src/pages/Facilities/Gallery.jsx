import { useState } from 'react'
import { Link } from 'react-router-dom'

import CardGallery from "../../components/cards/CardGallery.jsx";
import MasonryGrid from "../../components/grids/MasonryGrid.jsx";
import Carousel from "../../components/grids/Carousel.jsx";

import GallerySquare from "../../assets/GallerySquare.jpg";
import GalleryVertical from "../../assets/GalleryVertical.jpg";

const Images = [
    // Page 1 images
    {src: GallerySquare,
        alt: "Image of Candle Therapy",
        title: "Candle Therapy",
        category: "Therapy"
    },
    {src: GalleryVertical,
        alt: "Image of Morning Venue",
        title: "Morning Venue",
        category: "Venue"
    },
    {src: GalleryVertical,
        alt: "Image of Evening Ambiance",
        title: "Evening Ambiance",
        category: "Venue"
    },
    {src: GallerySquare,
        alt: "Image of Aromatherapy Session",
        title: "Aromatherapy Session",
        category: "Therapy"
    },
    {src: GallerySquare,
        alt: "Image of Meditation Corner",
        title: "Meditation Corner",
        category: "Therapy"
    },
    {src: GalleryVertical,
        alt: "Image of Sunset Lounge",
        title: "Sunset Lounge",
        category: "Venue"
    },
    {src: GalleryVertical,
        alt: "Image of Garden View",
        title: "Garden View",
        category: "Venue"
    },
    {src: GallerySquare,
        alt: "Image of Wellness Retreat",
        title: "Wellness Retreat",
        category: "Therapy"
    },
    
    // Page 2 images
    {src: GalleryVertical,
        alt: "Image of Private Suite",
        title: "Private Suite",
        category: "Venue"
    },
    {src: GallerySquare,
        alt: "Image of Hot Stone Therapy",
        title: "Hot Stone Therapy",
        category: "Therapy"
    },
    {src: GallerySquare,
        alt: "Image of Relaxation Pod",
        title: "Relaxation Pod",
        category: "Therapy"
    },
    {src: GalleryVertical,
        alt: "Image of Rooftop Terrace",
        title: "Rooftop Terrace",
        category: "Venue"
    },
    {src: GalleryVertical,
        alt: "Image of Infinity Pool Area",
        title: "Infinity Pool Area",
        category: "Venue"
    },
    {src: GallerySquare,
        alt: "Image of Sound Bath Session",
        title: "Sound Bath Session",
        category: "Therapy"
    },
    {src: GallerySquare,
        alt: "Image of Crystal Healing",
        title: "Crystal Healing",
        category: "Therapy"
    },
    {src: GalleryVertical,
        alt: "Image of Moonlight Pavilion",
        title: "Moonlight Pavilion",
        category: "Venue"
    }
]

// Pagination component
function Pagination({ currentPage, totalPages, onPageChange }) {
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center space-x-2 py-8 lg:pb-12 xl:pb-18">
            {/* Previous button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`
                    px-3 py-2 rounded-sm border transition-all duration-300
                    ${currentPage === 1 
                        ? 'opacity-50 cursor-not-allowed border-gray-300 text-gray-400' 
                        : 'border-c-gold-1 text-c-gold-1 hover:bg-c-gold-1 hover:text-white'
                    }
                `}
            >
                Previous
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`
                        px-3 py-2 rounded-sm border transition-all duration-300 min-w-[40px]
                        ${currentPage === pageNum
                            ? 'bg-c-gold-1 text-white border-c-gold-1'
                            : 'border-c-gold-1 text-c-gold-1 hover:bg-c-gold-1 hover:text-white'
                        }
                    `}
                >
                    {pageNum}
                </button>
            ))}

            {/* Next button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`
                    px-3 py-2 rounded-sm border transition-all duration-300
                    ${currentPage === totalPages 
                        ? 'opacity-50 cursor-not-allowed border-gray-300 text-gray-400' 
                        : 'border-c-gold-1 text-c-gold-1 hover:bg-c-gold-1 hover:text-white'
                    }
                `}
            >
                Next
            </button>
        </div>
    );
}

function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 10;
    
    // Calculate pagination
    const totalPages = Math.ceil(Images.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = Images.slice(startIndex, endIndex);
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to top of gallery when page changes
        document.getElementById('FeaturedImages')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    };

    return(
        <div    
                className="
                        py-8 lg:py-12 xl:py-18 lg:pb-0 xl:pb-0
                        ">
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h6 id="Gallery"  className="uppercase">Gallery</h6>
                        <div className="flex justify-between items-end">
                            <h2 className="uppercase text-c-gold-1">Step Into Our World</h2>
                            <div className="hidden lg:block text-sm text-gray-600">
                                Page {currentPage} of {totalPages} ({Images.length} images total)
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-c-gold-1" />
                </div>

                <div className="hidden lg:block">
                    <MasonryGrid sections={currentImages} />
                </div>

                <div className="lg:hidden">
                    <Carousel sections={Images} />
                </div>

                {/* Pagination - Desktop Only */}
                <div className="hidden lg:block">
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery