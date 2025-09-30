"use client"

import FormElement from "./FormElement"
import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';

export default function FormComponent({ setIsFormOpen }: { setIsFormOpen: (isOpen: boolean) => void }) {
  const t = useTranslations('contactForm');
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsFormOpen(false);
    }
  };

  const backdropVariants: Variants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const modalVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1], // Custom ease for smooth spring-like effect
        delay: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const closeButtonVariants: Variants = {
    hidden: { 
      opacity: 0,
      rotate: -90
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };
  
  return (
    <motion.div 
      className="fixed top-0 bottom-0 left-0 right-0 no-doc-scroll backdrop-blur-lg flex justify-center items-start z-50 overflow-y-auto py-8"
      onClick={handleBackdropClick}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
    >
      <motion.div 
        className="max-w-2xl w-full mx-auto p-8 bg-white relative"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          onClick={() => setIsFormOpen(false)}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close form"
          variants={closeButtonVariants}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </motion.button>
        
        <motion.div 
          className="text-center mb-12 pt-12"
          variants={headerVariants}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-2 font-bricolage">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 font-bricolage">
            {t('subtitle')}
          </p>
        </motion.div>
        
        <div className="mt-8">
          <FormElement />
        </div>
      </motion.div>
    </motion.div>
  )
}