"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'

const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
}

const formatDate = (date, lang) => {
    const [year, month, day] = date.split("-");
    return new Date(year, month - 1, day).toLocaleDateString(
        lang === "en" ? "en-US" : "es-ES",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    )
}

const NavLink = motion(Link)

const ProjectLayout = ({ name, nameEs, description, descriptionEs, date, demoLink, tags }) => {
    const { lang } = useLanguage()

    return (
        <NavLink
            variants={item}

            href={demoLink}
            target={"_blank"}
            className='text-sm md:text-base flex flex-col gap-y-4 justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>

            {/* <div className='flex items-center justify-center space-x-2'>
                <h2 className='text-foreground'>{lang === "en" ? name : nameEs}</h2>
                <p className='text-muted hidden sm:inline-block'>{lang === "en" ? description : descriptionEs}</p>
            </div>

            <div className='self-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted' />
            <p className='text-muted sm:text-foreground'>
                {formatDate(date, lang)}
            </p> */}

            <div className='flex items-center justify-between w-full'>
                <h2 className='text-foreground'>{lang === "en" ? name : nameEs}</h2>
                <div className='self-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted' />
                <p className='text-muted sm:text-foreground '>
                {formatDate(date, lang)}
                </p>   
            </div>

            <p className='text-muted sm:inline-block'>{lang === "en" ? description : descriptionEs}</p>

            <div className='flex items-center justify-start w-full gap-10'>
                {tags.map((tag) => (
                    <span key={tag} className='text-xs px-2 py-1 rounded-md text-fadeaccent2 border border-accent2 bg-accent2/90'>{tag}</span>
                ))}
            </div>

        </NavLink>
    )
}

export default ProjectLayout