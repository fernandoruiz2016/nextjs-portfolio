"use client"
import { motion } from 'framer-motion';
const { useLanguage } = require("@/context/LanguageContext");

export default function LanguageButton() {
    const { lang, changeLanguage } = useLanguage()

    return (
        <motion.button

            onClick={changeLanguage}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}

            className='fixed top-4 right-16 sm:right-20 w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg'
            aria-label={"language"}
            name={"language"}
        >
            {
                lang === "en" ?
                    <span className='w-full h-full text-foreground group-hover:text-accent text-center flex items-center justify-center'>EN</span>
                    :
                    <span className='w-full h-full text-foreground group-hover:text-accent text-center flex items-center justify-center'>ES</span>
            }

                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
                <span className='absolute hidden lg:peer-hover:block px-2 py-1 left-[-150%] mx-2 top-1/2 -translate-y-1/2
                                    bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap ' >
                    {lang === "en" ? "English" : "Español"}
                </span>

        </motion.button>


    )
}