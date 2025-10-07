'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from "react";
import FormComponent from "./FormComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const t = useTranslations('about');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tlHead = gsap.timeline({ defaults: { ease: "power3.out" } });
    tlHead
        .from(root.querySelector('[data-animate="eyebrow"]'), { opacity: 0, y: 10, duration: .4 })
        .from(root.querySelector('[data-animate="title"]'), { opacity: 0, y: 18, duration: .6 }, "-=0.1")
        .from(root.querySelectorAll('[data-animate="para"]'), { opacity: 0, y: 16, duration: .5, stagger: .08 }, "-=0.2");

    gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".reveal")).forEach((wrap) => {
      wrap.style.overflow = "hidden";
      const img = wrap.querySelector("img, picture, video") as HTMLElement | null;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrap, start: "top 80%", toggleActions: "play none none reverse" }
      });
      tl.fromTo(wrap, { clipPath: "inset(0 100% 0 0 round 16px)" },
          { clipPath: "inset(0 0% 0 0 round 16px)", duration: 1, ease: "power3.out" })
          .from(img, { scale: 1.06, duration: 1.1, ease: "power3.out" }, 0);
    });

    root.querySelectorAll('[data-animate="stats"]').forEach((stats) => {
      ScrollTrigger.create({
        trigger: stats,
        start: "top 80%",
        once: true,
        onEnter: () => {
          stats.querySelectorAll<HTMLElement>(".count").forEach((el) => {
            const end = Number(el.dataset.count || "0");
            gsap.fromTo(el, { innerText: 0 }, {
              innerText: end, duration: 1.2, ease: "power1.out", snap: { innerText: 1 }
            });
          });
        }
      });
    });

    if (!reduced) {
      const banner = root.querySelector('[data-animate="banner"]');
      const box = banner?.querySelector('.banner-box') as HTMLElement | null;
      const title = banner?.querySelector('[data-banner-title]') as HTMLElement | null;
      const cta = banner?.querySelector('[data-banner-cta]') as HTMLElement | null;

      if (banner && box && title && cta) {
        gsap.set(box, { clipPath: "inset(0 100% 0 0 round 70px)" });
        gsap.set([title, cta], { opacity: 0, y: 20 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: banner,
            start: "top 75%",
            end: "top 30%",
            scrub: false,
            toggleActions: "play none none none",
            once: true
          }
        });

        tl.to(box, {
          clipPath: "inset(0 0% 0 0 round 70px)",
          duration: 1.0,
          ease: "power3.out"
        })
            .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
            .to(cta, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
      }
    }

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
      <div id="about" ref={rootRef} className="bg-[#1A1D1D] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[300px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-12 flex flex-col gap-2 sm:gap-3 lg:gap-6">
            <h2 data-animate="eyebrow" className="text-[#6D7D7D] font-kanit tracking-[0.2em] sm:tracking-[0.3em] text-xs font-light uppercase">
              {t('header')}
            </h2>
            <h3 data-animate="title" className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-[400] leading-tight max-w-4xl font-kanit">
              {t('title')}
            </h3>
            <div className="max-w-2xl font-[400] text-sm sm:text-base leading-relaxed font-nunito text-white/60 space-y-3 sm:space-y-4">
              <p data-animate="para">{t('description.paragraph1')}</p>
              <p data-animate="para" className="hidden sm:block">{t('description.paragraph2Full')}</p>
              <p data-animate="para" className="block sm:hidden">{t('description.paragraph2Short')}</p>
              <p data-animate="para">{t('description.paragraph3')}</p>
            </div>
          </div>

          <div className="block xl:hidden space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="sm:col-span-2 reveal">
                <Image src="/image/about1.png" alt={t('images.project1')} width={400} height={300}
                       className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg object-center" priority />
              </div>
              <div className="order-2 sm:order-none reveal">
                <Image src="/image/about2.png" alt={t('images.project2')} width={400} height={300}
                       className="w-full h-48 sm:h-56 md:h-72 object-cover rounded-lg object-center" />
              </div>
              <div className="order-1 sm:order-none reveal">
                <Image src="/image/about3.png" alt={t('images.project3')} width={400} height={200}
                       className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-lg object-center" />
              </div>
            </div>

            <div className="flex justify-center font-kanit py-6 sm:py-8" data-animate="stats">
              <div className="flex space-x-8 sm:space-x-12 md:space-x-16">
                <div className="text-center">
                  <h3 className="text-[#6D7D7D] text-2xl sm:text-3xl md:text-4xl font-light">
                    <span className="count" data-count="120">0</span><span>+</span>
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-base tracking-wider uppercase mt-1">
                    {t('stats.projects.label')}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#6D7D7D] text-2xl sm:text-3xl md:text-4xl font-light">
                    <span className="count" data-count="18">0</span>
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-base tracking-wider uppercase mt-1">
                    {t('stats.clients.label')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:grid xl:grid-cols-6 gap-4 2xl:gap-6">
            <div className="col-span-2 h-full reveal">
              <Image src="/image/about1.png" alt={t('images.project1')} width={400} height={400}
                     className="w-full h-full object-cover rounded-lg" priority />
            </div>
            <div className="col-span-2 h-full reveal">
              <Image src="/image/about2.png" alt={t('images.project2')} width={400} height={400}
                     className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 h-full flex flex-col gap-4 2xl:gap-6">
              <div className="flex-1 reveal">
                <Image src="/image/about3.png" alt={t('images.project3')} width={300} height={180}
                       className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="flex-1 flex items-center justify-center font-kanit bg-[#1A1D1D]/50 rounded-lg" data-animate="stats">
                <div className="flex space-x-6 2xl:space-x-12">
                  <div className="text-left">
                    <h3 className="text-[#6D7D7D] text-3xl 2xl:text-[40px] font-light">
                      <span className="count" data-count="120">0</span><span>+</span>
                    </h3>
                    <p className="text-white text-sm 2xl:text-base tracking-widest uppercase">
                      {t('stats.projects.label')}
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#6D7D7D] text-3xl 2xl:text-[40px] font-light">
                      <span className="count" data-count="18">0</span>
                    </h3>
                    <p className="text-white text-sm 2xl:text-base tracking-widest uppercase">
                      {t('stats.clients.label')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative translate-y-1/2" data-animate="banner">
            <div className="banner-box relative overflow-hidden rounded-[70px]">
              <Image src="/image/about4.png" alt={t('images.bottomBackground')} width={1920} height={200}
                     className="w-full h-auto object-cover" />
              <div className={cn("absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:pl-[450px] md:pl-[300px] lg:justify-center", "max-xl:pl-32 max-xl:justify-center max-sm:pl-0")}>
                <div className={cn("text-center lg:text-start font-kanit max-w-[600px]", "max-lg:max-w-[400px] max-md:text-center")}>
                  <h1 data-banner-title className={cn("text-white max-2xl:text-2xl text-4xl font-normal leading-tight mb-2 lg:mb-6", "max-xl:text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm")}>
                    {t('bottom.title')}
                  </h1>
                  <div className="inline-block">
                    <div
                        data-banner-cta
                        onClick={() => setIsFormOpen(true)}
                        className="text-[10px] sm:text-base text-white border border-[#6D7D7D] rounded-full px-2 sm:px-6 py-1 sm:py-3 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer tracking-widest"
                    >
                      {t('bottom.button')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {isFormOpen && <FormComponent setIsFormOpen={setIsFormOpen} />}
      </div>
  );
};

export default About;
