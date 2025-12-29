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

                className='fixed top-4 right-20 w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg'
                aria-label={"language"}
                name={"language"}
            >
                {
                    lang === "en" ?
                        <span className='w-full h-full text-foreground group-hover:text-accent'>EN</span>
                        :
                        <span className='w-full h-full text-foreground group-hover:text-accent'>ES</span>
                }
            </motion.button>


    )
}