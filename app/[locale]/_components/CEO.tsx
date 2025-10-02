'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CEO() {
    const t = useTranslations('ceo');
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = rootRef.current!;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!root || reduced) return;

        // Заголовок секции (только внутри CEO)
        const h2 = root.querySelector('h2');
        if (h2) {
            gsap.from(h2, {
                opacity: 0, y: 24, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: h2, start: "top 80%", once: true }
            });
        }

        // Фото (моб и десктоп — сработает только у видимого из-за скрывающих классов)
        const photos = root.querySelectorAll<HTMLImageElement>('img');
        photos.forEach((img) => {
            gsap.from(img, {
                opacity: 0, y: 20, scale: 0.98, duration: 0.9, ease: "power3.out",
                scrollTrigger: { trigger: img, start: "top 78%", once: true }
            });
        });

        // Текст: позиция → имя → абзацы (строго в пределах секции)
        const posTitles = root.querySelectorAll<HTMLElement>('h3.font-bricolage');
        const names     = root.querySelectorAll<HTMLElement>('p.font-dancing');
        const bios      = root.querySelectorAll<HTMLElement>('.leading-relaxed p');

        if (posTitles.length) {
            gsap.from(posTitles, {
                opacity: 0, y: 18, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: root, start: "top 70%", once: true }
            });
        }
        if (names.length) {
            gsap.from(names, {
                opacity: 0, y: 18, duration: 0.6, ease: "power3.out", delay: 0.1,
                scrollTrigger: { trigger: root, start: "top 70%", once: true }
            });
        }
        if (bios.length) {
            gsap.from(bios, {
                opacity: 0, y: 14, duration: 0.5, ease: "power3.out", stagger: 0.08, delay: 0.18,
                scrollTrigger: { trigger: root, start: "top 70%", once: true }
            });
        }

        return () => ScrollTrigger.getAll().forEach(s => s.kill());
    }, []);

    return (
        <div id="team" ref={rootRef} className="pt-26 md:pt-32 lg:pt-48 bg-[#131616] px-4 md:px-8 lg:px-16">
            {/* Header */}
            <h2 className="text-center font-bricolage font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight">
                {t('header.line1')}<br />
                {t('header.line2')}
            </h2>

            {/* Main Content */}
            <div className="mt-12 md:mt-20 max-w-7xl mx-auto">
                {/* Mobile Layout - Stacked */}
                <div className="block lg:hidden">
                    <div className="relative mb-8 flex justify-center pr-[10%]">
                        <Image
                            src="/ceo.png"
                            width={800}
                            height={800}
                            alt={t('imageAlt')}
                            className="grayscale w-full h-auto max-w-md"
                            priority
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="font-bricolage font-bold text-2xl md:text-3xl mb-2">
                                {t('position.line1')}<br />
                                {t('position.line2')}
                            </h3>
                            <p className="font-dancing text-xl md:text-2xl text-gray-300">
                                {t('name')}
                            </p>
                        </div>

                        <div className="text-sm md:text-base leading-relaxed text-gray-200">
                            <p className="mb-4">{t('bio.paragraph1')}</p>
                            <p className="mb-4">{t('bio.paragraph2')}</p>
                            <p>{t('bio.paragraph3')}</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Side by side with overlay */}
                <div className="hidden lg:block relative">
                    <div className="flex justify-center mr-[200px]">
                        <Image
                            src="/ceo.png"
                            width={1000}
                            height={1000}
                            alt={t('imageAlt')}
                            className="grayscale"
                            priority
                        />
                    </div>

                    <div className="absolute top-[50px] left-0 right-0 flex justify-between px-8 xl:px-16">
                        <div className="w-80 xl:w-96">
                            <h3 className="font-bricolage font-bold text-3xl xl:text-4xl mb-3 leading-tight">
                                {t('position.line1')}<br />
                                {t('position.line2')}
                            </h3>
                            <p className="font-dancing text-xl xl:text-2xl text-gray-300">
                                {t('name')}
                            </p>
                        </div>

                        <div className="w-80 xl:w-96 text-sm xl:text-base leading-relaxed text-gray-200">
                            <p className="mb-4">{t('bio.paragraph1')}</p>
                            <p className="mb-4">{t('bio.paragraph2')}</p>
                            <p>{t('bio.paragraph3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
