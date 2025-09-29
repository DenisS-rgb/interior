"use client"

import Image from "next/image"
import LanguageSwitcher from "./LanguageSwitcher"
import { useState } from "react"
import { Link } from "@/i18n/navigation"
import { useTranslations } from 'next-intl'
import FormComponent from "./FormComponent"

const Header = () => {
  const t = useTranslations('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="bg-transparent text-white relative">
      {/* Desktop Header */}
      <div className="hidden lg:flex flex-row justify-evenly items-center p-4">
        <div className="font-kanit font-bold text-base tracking-widest">
          {t('brand')}
        </div>

        <div className="flex flex-row gap-4 text-base font-nunito items-center">
          <ul className="flex flex-row gap-4">
            <li className="hover:text-gray-300 cursor-pointer transition-colors">
              <Link href="#about">{t('nav.about')}</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">
              <Link href="#team">{t('nav.team')}</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">
              <Link href="#services">{t('nav.services')}</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">
              <Link href="#portfolio">{t('nav.portfolio')}</Link>
            </li>
          </ul>
          <div className="flex flex-row gap-2 items-center">
            <Link href="tel:+404012013012310" className="flex flex-row gap-2 items-center hover:text-gray-300 cursor-pointer transition-colors">
              <Image src="/svg/phone.svg" alt={t('phoneIconAlt')} width={25} height={25} />
              <p className="hidden xl:block">{t('phone')}</p>
            </Link>
          </div>
          <div onClick={() => setIsFormOpen(true)} className="font-kanit tracking-widest border-2 border-[#6D7D7D] rounded-4xl px-4 py-2 hover:bg-white hover:text-black cursor-pointer transition-colors">
            {t('ctaButton')}
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden justify-between items-center p-4">
        <div className="font-kanit font-bold text-base tracking-widest">
          {t('brand')}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label={t('menuToggle')}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm z-50">
          <div className="flex flex-col p-6 space-y-6">
            {/* Navigation Links */}
            <ul className="flex flex-col space-y-4 font-nunito text-lg">
              <li className="hover:text-gray-300 cursor-pointer transition-colors border-b border-gray-700 pb-2">
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</Link>
              </li>
              <li className="hover:text-gray-300 cursor-pointer transition-colors border-b border-gray-700 pb-2">
                <Link href="#team" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.team')}</Link>
              </li>
              <li className="hover:text-gray-300 cursor-pointer transition-colors border-b border-gray-700 pb-2">
                <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.services')}</Link>
              </li>
              <li className="hover:text-gray-300 cursor-pointer transition-colors border-b border-gray-700 pb-2">
                <Link href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.portfolio')}</Link>
              </li>
            </ul>

            {/* Phone Number */}
            <div className="flex flex-row gap-3 items-center font-nunito">
              <Link href="tel:+404012013012310" className="flex flex-row gap-2 items-center hover:text-gray-300 cursor-pointer transition-colors">
                <Image src="/svg/phone.svg" alt={t('phoneIconAlt')} width={25} height={25} />
                <p className="text-sm sm:text-base">{t('phone')}</p>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="font-kanit tracking-widest border-2 border-[#6D7D7D] rounded-4xl px-6 py-3 hover:bg-white hover:text-black cursor-pointer transition-colors text-center text-sm">
              {t('ctaButton')}
            </div>
          </div>
        </div>
      )}
            {isFormOpen && <FormComponent setIsFormOpen={setIsFormOpen} />}
    </div>
  )
}

export default Header