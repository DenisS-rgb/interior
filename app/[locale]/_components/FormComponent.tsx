import FormElement from "./FormElement"
import { useTranslations } from 'next-intl';

export default function FormComponent({ setIsFormOpen }: { setIsFormOpen: (isOpen: boolean) => void }) {
  const t = useTranslations('contactForm');
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsFormOpen(false);
    }
  };
  
  return (
    <div 
      className="fixed top-0 bottom-0 left-0 right-0 no-doc-scroll backdrop-blur-lg flex justify-center items-start z-50 overflow-y-auto py-8"
      onClick={handleBackdropClick}
    >
      <div className="max-w-2xl w-full mx-auto p-8 bg-white relative">
        <button
          onClick={() => setIsFormOpen(false)}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close form"
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
        </button>
        
        <div className="text-center mb-12 pt-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 font-bricolage">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 font-bricolage">
            {t('subtitle')}
          </p>
          <br /><br /><br />
          <FormElement />
        </div>
      </div>
    </div>
  )
}