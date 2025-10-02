'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
    id: string;
    title: string;
    description: string;
}

const Services: React.FC = () => {
    const t = useTranslations('services');
    const rootRef = useRef<HTMLDivElement>(null);

    const services: Service[] = Array.from({ length: 3 }).map((_, i) => ({
        id: t(`list.${i}.id`),
        title: t(`list.${i}.title`),
        description: t(`list.${i}.description`)
    }));

    useEffect(() => {
        const root = rootRef.current!;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!root || reduced) return;

        // Только внутри Services
        root.querySelectorAll<HTMLElement>('[data-service-row]').forEach((row) => {
            const title = row.querySelector<HTMLElement>('[data-service-title]');
            const desc  = row.querySelector<HTMLElement>('[data-service-desc]');
            const line  = row.nextElementSibling?.querySelector<HTMLElement>('[data-service-line]') || null;

            gsap.set(title, { opacity: 0, x: -24 });
            gsap.set(desc,  { opacity: 0, y: 16 });
            if (line) gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });

            gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: 'top 75%',         // запускаем, когда строка уже в поле
                    toggleActions: 'play none none none',
                    once: true
                },
                defaults: { ease: 'power3.out' }
            })
                .to(title, { opacity: 1, x: 0, duration: 0.6 })
                .to(desc,  { opacity: 1, y: 0, duration: 0.55 }, '-=0.35')
                .to(line,  { scaleX: 1, duration: 0.6 }, '-=0.45');
        });

        return () => ScrollTrigger.getAll().forEach(s => s.kill());
    }, []);

    return (
        <section
            id="services"
            ref={rootRef}
            className="bg-[#191D1D] text-white py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div key={service.id}>
                        <div
                            data-service-row
                            className={`flex flex-col lg:flex-row lg:items-start justify-center gap-8 lg:gap-16 ${
                                index === 0 ? 'pb-16 md:pb-20' : 'py-16 md:py-20'
                            }`}
                        >
                            {/* Service Number and Title */}
                            <div className="flex-1 lg:max-w-md">
                                <h2
                                    data-service-title
                                    className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white font-kanit"
                                >
                                    {service.id}. {service.title}
                                </h2>
                            </div>

                            {/* Service Description */}
                            <div className="flex-1 lg:max-w-md">
                                <p
                                    data-service-desc
                                    className="text-[#6D7D7D] text-lg sm:text-xl leading-relaxed font-light font-nunito-sans"
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        {/* Разделительная линия (анимируем рост) */}
                        {index < services.length - 1 && (
                            <div className="flex justify-center">
                <span
                    data-service-line
                    className="block h-px w-full max-w-6xl bg-gray-800"
                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
