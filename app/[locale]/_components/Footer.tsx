"use client"

import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion, Variants } from 'framer-motion'

const Footer = () => {
    const t = useTranslations('footer');

    // Контейнер теперь НЕ гасит opacity — он только раздаёт stagger детям
    const containerVariants: Variants = {
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const navItemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const socialVariants: Variants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: { type: "spring", stiffness: 260, damping: 20 }
        }
    };
    return (
        // ВНЕШНЯЯ ОБЁРТКА НЕ АНИМИРУЕТСЯ: фон всегда непрозрачный
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] py-8 sm:py-12 lg:py-[50px] bg-[#131616] text-white font-nunito text-sm sm:text-base">
            {/* ВСЁ НИЖЕ — АНИМИРУЕМЫЙ КОНТЕНТ */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // триггер чуть позже, когда футер уже в кадре
                variants={containerVariants}
            >
                <motion.div
                    className="flex flex-col-reverse lg:flex-row items-start lg:items-center pt-8 lg:pt-16 justify-between border-b-2 pb-8 lg:pb-14 border-[#212828] gap-6 lg:gap-0"
                    variants={itemVariants}
                >
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
                        <motion.ul
                            className="flex flex-col sm:flex-row gap-3 sm:gap-6 order-2 sm:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            {['about', 'team', 'services', 'portfolio'].map((item) => (
                                <motion.li
                                    key={item}
                                    className="hover:text-gray-300 cursor-pointer transition-colors"
                                    variants={navItemVariants}
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                >
                                    <Link href={`#${item}`}>{t(`nav.${item}`)}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div variants={itemVariants}>
                            <Link href="tel:+47 911 97 560" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                                <p className="text-sm sm:text-base order-1 sm:order-2 font-medium">{t('phone')}</p>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex justify-start lg:justify-end w-full lg:w-auto"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                        <Image src="/svg/logo.svg" alt={t('logoAlt')} width={80} height={40} className="sm:w-[100px] sm:h-[50px]" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 my-12 lg:my-20 gap-8 lg:gap-0"
                    variants={itemVariants}
                >
                    <motion.div
                        className="flex flex-row gap-4 sm:gap-6 justify-start lg:border-r-2 lg:border-[#212828] lg:pr-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={socialVariants} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                            <Link href="https://www.facebook.com/share/16gY4dso1g/?mibextid=wwXIfr" target='_blank' rel='noopener noreferrer'>
                                <Image
                                    src="/svg/facebook.svg"
                                    alt={t('socialAlt.facebook')}
                                    width={40}
                                    height={40}
                                    className="sm:w-[50px] sm:h-[50px] hover:opacity-80 cursor-pointer transition-opacity"
                                />
                            </Link>
                        </motion.div>

                        <motion.div variants={socialVariants} whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                            <Link href="https://www.instagram.com/alfrichardbjerkoen/#" target='_blank' rel='noopener noreferrer'>
                                <Image
                                    src="/svg/instagram.svg"
                                    alt={t('socialAlt.instagram')}
                                    width={40}
                                    height={40}
                                    className="sm:w-[50px] sm:h-[50px] hover:opacity-80 cursor-pointer transition-opacity"
                                />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        className="flex items-start lg:items-center justify-start lg:justify-end text-sm sm:text-base lg:pl-8"
                        variants={itemVariants}
                    >
                        {t('tagline')}
                    </motion.p>
                </motion.div>

                <motion.p
                    className="text-xs sm:text-sm text-gray-400 text-center lg:text-left"
                    variants={itemVariants}
                >
                    {t('copyright')}
                </motion.p>
            </motion.div>
        </div>
    )
}

export default Footer
