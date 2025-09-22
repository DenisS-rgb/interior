import { LazyMotion, domAnimation } from "framer-motion"
import { NextIntlClientProvider } from "next-intl";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </LazyMotion>
    </div>
  )
}

export default Wrapper