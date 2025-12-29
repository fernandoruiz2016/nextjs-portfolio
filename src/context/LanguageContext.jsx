"use client"
import { createContext, useContext, useState } from 'react'
import { translations } from '@/i18n/translations'

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    const t = (key) => translations[lang][key]

    const changeLanguage = (language) => {
        if (lang === "en") {
            setLang("es")
        } else {
            setLang("en")
        }
    }

    return (
        <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}
export const useLanguage = () => useContext(LanguageContext)