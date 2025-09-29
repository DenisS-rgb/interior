'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Projects() {
    const t = useTranslations('projects');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const intervalRef = useRef<number | null>(null);

    
    // Create projects array from translations
    const projects = Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        title: t(`items.${i}.title`),
        image: `/carouselImages/${i + 1}.jpg`,
        alt: t(`items.${i}.alt`)
    }));

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoScrollPaused) {
            intervalRef.current = window.setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % projects.length);
            }, 2000); // 2 seconds
        }

        return () => {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
            }
        };
    }, [isAutoScrollPaused, projects.length]);

    // Pause autoscroll when user interacts
    const pauseAutoScroll = () => {
        setIsAutoScrollPaused(true);
        setTimeout(() => setIsAutoScrollPaused(false), 5000); // Resume after 5 seconds
    };

    const nextSlide = () => {
        pauseAutoScroll();
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        pauseAutoScroll();
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        pauseAutoScroll();
        setCurrentSlide(index);
    };

    return (
        <section className="w-full py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16 bg-[#191D1D]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
                    <div className="mb-4 sm:mb-6 md:mb-0">
                        <p className="text-sm sm:text-base text-black mb-2 font-semibold font-bricolage px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-white text-center w-fit rounded-xl">
                            {t('badge')}
                        </p>
                        <h2 className="font-kanit text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xs sm:max-w-lg lg:max-w-xl">
                            {t('title')}
                        </h2>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-4">
                        {/* Navigation Arrows */}
                        <div className="flex gap-2 sm:gap-4 font-bricolage items-center justify-center">
                            <button
                                onClick={prevSlide}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 cursor-pointer flex items-center justify-center hover:border-gray-400 hover:bg-white transition-all duration-200"
                                aria-label={t('navigation.previous')}
                            >
                                <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M10 12L6 8L10 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {/* Slide Counter */}
                            <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-600">
                                <span className="font-medium">
                                    {String(currentSlide + 1).padStart(2)}
                                </span>
                                <span>/</span>
                                <span>{String(projects.length).padStart(2)}</span>
                            </div>
                            <button
                                onClick={nextSlide}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 cursor-pointer border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-white transition-all duration-200"
                                aria-label={t('navigation.next')}
                            >
                                <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M6 4L10 8L6 12"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsAutoScrollPaused(true)}
                    onMouseLeave={() => setIsAutoScrollPaused(false)}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {projects.map((project, index) => (
                            <div key={project.id} className="w-full flex-shrink-0">
                                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 sm:gap-6">
                                    {/* First Card - Always visible */}
                                    <div className="group relative">
                                        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl">
                                            <Image
                                                src={project.image}
                                                alt={project.alt}
                                                fill
                                                className="object-cover object-[50%_70%] group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Second Card - Next project preview - Hidden on mobile */}
                                    <div className="group relative hidden lg:block">
                                        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl">
                                            <Image
                                                src={projects[(index + 1) % projects.length].image}
                                                alt={projects[(index + 1) % projects.length].alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-6 sm:mt-8 gap-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                index === currentSlide
                                    ? 'bg-white w-4 sm:w-6'
                                    : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'
                            }`}
                            aria-label={t('navigation.goToSlide', { slide: index + 1 })}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}