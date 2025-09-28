import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] py-8 sm:py-12 lg:py-[50px] bg-[#131616] text-white font-nunito text-sm sm:text-base">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center pt-8 lg:pt-16 justify-between border-b-2 pb-8 lg:pb-14 border-[#212828] gap-6 lg:gap-0">
            <div className="flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
                <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 order-2 sm:order-1">
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
                <Link href="tel:+404012013012310" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                    <p className="text-sm sm:text-base order-1 sm:order-2 font-medium">{t('phone')}</p>
                </Link>
            </div>
            <div className="flex justify-start lg:justify-end w-full lg:w-auto">
                <Image src="/svg/logo.svg" alt={t('logoAlt')} width={80} height={40} className="sm:w-[100px] sm:h-[50px]" />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 my-12 lg:my-20 gap-8 lg:gap-0">
            <div className="flex flex-row gap-4 sm:gap-6 justify-start lg:border-r-2 lg:border-[#212828] lg:pr-8">
                <Image 
                    src="/svg/facebook.svg" 
                    alt={t('socialAlt.facebook')}
                    width={40} 
                    height={40} 
                    className="sm:w-[50px] sm:h-[50px] hover:opacity-80 cursor-pointer transition-opacity" 
                />
                <Image 
                    src="/svg/instagram.svg" 
                    alt={t('socialAlt.instagram')}
                    width={40} 
                    height={40} 
                    className="sm:w-[50px] sm:h-[50px] hover:opacity-80 cursor-pointer transition-opacity" 
                />
            </div>
            <p className="flex items-start lg:items-center justify-start lg:justify-end text-sm sm:text-base lg:pl-8">
                {t('tagline')}
            </p>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 text-center lg:text-left">
            {t('copyright')}
        </p>
    </div>
  )
}

export default Footer