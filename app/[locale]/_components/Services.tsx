import React from 'react';
import { useTranslations } from 'next-intl';

interface Service {
    id: string;
    title: string;
    description: string;
}

const Services: React.FC = () => {
    const t = useTranslations('services');

    // Create services array from translations
    const services: Service[] = Array.from({ length: 3 }).map((_, i) => ({
        id: t(`list.${i}.id`),
        title: t(`list.${i}.title`),
        description: t(`list.${i}.description`)
    }));

    return (
        <section id='services' className="bg-[#191D1D] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="divide-y divide-gray-800">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row lg:items-start justify-center gap-8 lg:gap-16 ${index === 0 ? 'pb-16 md:pb-20' : 'py-16 md:py-20'
                                }`}
                        >
                            {/* Service Number and Title */}
                            <div className="flex-1 lg:max-w-md">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white font-kanit">
                                    {service.id}.{' '}{service.title}
                                </h2>
                            </div>

                            {/* Service Description */}
                            <div className="flex-1 lg:max-w-md">
                                <p className="text-[#6D7D7D] text-lg sm:text-xl leading-relaxed font-light font-nunito-sans">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;