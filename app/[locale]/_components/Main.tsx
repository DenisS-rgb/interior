import Image from "next/image"
import { useTranslations } from 'next-intl'

const Main = () => {
    const t = useTranslations('main');

    return (
        <div id="main" className="relative h-screen w-full">
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/image/4.jpg"
                    alt={t('heroImageAlt')}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden">
                <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
                    <div className="mb-8">
                        <h2 className="font-kanit text-2xl sm:text-3xl md:text-4xl text-white mb-4 pt-32">
                            {t('title')}
                        </h2>
                        <p className="font-nunito text-sm sm:text-base text-white/70 max-w-md">
                            {t('description')}
                        </p>
                    </div>
                    <div className="mt-auto mb-12">
                        <p className="font-kanit text-lg text-white tracking-widest animate-bounce">
                            {t('swipeDown')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2">
                <div className="flex flex-col items-start justify-start mt-[50px] xl:mt-[150px] pl-8 xl:pl-12">
                    <h2 className="font-kanit text-3xl xl:text-[40px] text-black mb-4">
                        {t('title')}
                    </h2>
                    <p className="font-nunito text-base text-black max-w-lg">
                        {t('description')}
                    </p>
                </div>
                <div className="flex flex-col items-end justify-center h-screen mr-12 xl:mr-40 mt-20 xl:mt-40">
                    <p className="font-kanit text-xl [writing-mode:vertical-lr] [text-orientation:down] transform rotate-180 text-black tracking-widest animate-bounce">
                        {t('swipeDown')}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main