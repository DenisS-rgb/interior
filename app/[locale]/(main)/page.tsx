'use client';
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("");
  return (
    <div className="">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      className="bg-red-500">
        {t('test')}
      </motion.div>
      Home Page
    </div>
  );
}
