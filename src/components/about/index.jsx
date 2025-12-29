import React from 'react'
import ItemLayout from './ItemLayout'
import { useLanguage } from '@/context/LanguageContext'

const AboutDetails = () => {
    const {t} = useLanguage();

    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={'col-span-full row-span-2 flex-col items-start'}>
                    <h2 className='text-xl md:text-2xl text-center w-full capitalize text-accent'>
                        {t("AboutSubtitle")}
                    </h2>
                    <p className='text-center font-light text-xs sm:text-sm md:text-base'>
                        {t("AboutText")}
                    </p>
                </ItemLayout>

                {/* <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        25+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        4+ <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout> */}

                <ItemLayout className={'col-span-full row-span-1 flex-col items-start md:col-span-6'}>
                    {/* <img className='w-full h-auto' src="https://github-readme-stats-beige-iota-81.vercel.app/api/top-langs?username=fernandoruiz2016&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
                        alt="Fernando" loading="lazy" /> */}

                    <h2 className='text-xl md:text-2xl text-center w-full capitalize text-accent'>
                        {t("AboutSpells")}
                    </h2>
                    <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2">
                        <li className="flex gap-5 items-center w-full">
                            <img className='size-12 shrink-0 object-contain' src="https://skillicons.dev/icons?i=py"
                                alt="Python" loading="lazy" />
                            <span >Python</span>
                        </li>
                        <li className="flex gap-5 items-center w-full">
                            <img className='size-12 shrink-0 object-contain' src="https://skillicons.dev/icons?i=js"
                                alt="JavaScript" loading="lazy" />
                            <span>JavaScript</span>
                        </li>
                        <li className="flex gap-5 items-center w-full">
                            <img className='size-12 shrink-0 object-contain' src="https://skillicons.dev/icons?i=ts"
                                alt="JavaScript" loading="lazy" />
                            <span>TypeScript</span>
                        </li>
                        <li className="flex gap-5 items-center w-full">
                            <img className='size-12 shrink-0 object-contain' src="https://skillicons.dev/icons?i=css"
                                alt="CSS" loading="lazy" />
                            <span>CSS</span>
                        </li>
                        <li className="flex gap-5 items-center w-full">
                            <img className='size-12 shrink-0 object-contain' src="https://skillicons.dev/icons?i=html"
                                alt="HTML" loading="lazy" />
                            <span>HTML</span>
                        </li>
                    </ul>
                </ItemLayout>
                <ItemLayout className={'col-span-full row-span-1 flex-col items-start md:col-span-6'}>
                    {/* <img className='w-full h-auto' src="https://github-readme-stats-beige-iota-81.vercel.app/api?username=fernandoruiz2016&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
                        alt="Fernando" loading="lazy" /> */}

                    <h2 className='text-xl md:text-2xl text-center w-full capitalize text-accent'>
                        {t("AboutGrimoires")}
                    </h2>
                    <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2">
                        <li className="flex gap-5 items-center">
                            <img className="size-12 shrink-0 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                                alt="SQL Server" loading="lazy" />
                            <span >SQL Server</span>
                        </li>
                        <li className="flex gap-5 items-center w-full">
                            <img className='size-12 shrink-0 object-contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-plain.svg"
                                alt="SQL Developer" loading="lazy" />
                            <span>SQL Developer</span>
                        </li>
                        <li className="flex gap-5 items-center w-full">
                            <img className='size-12 shrink-0 object-contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                                alt="PostgreSQL" loading="lazy" />
                            <span>PostgreSQL</span>
                        </li>
                    </ul>
                </ItemLayout>

                <ItemLayout className={'col-span-full row-span-1 flex-col items-start'}>
                    <h2 className='text-xl md:text-2xl text-center w-full capitalize text-accent'>
                        Extra Skills
                    </h2>
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {[
                            'bootstrap', 'figma', 'git', 'github', 'nextjs', 'nodejs',
                            'pycharm', 'qt', 'tailwind', 'threejs', 'react', 'vercel', 'vite', 'vscode'
                        ].map(icon => (
                            <li key={icon} className="flex items-center">
                                <img
                                    src={`https://skillicons.dev/icons?i=${icon}`}
                                    className="size-12 shrink-0 object-contain sm:size-16"
                                    alt={icon}
                                    loading='lazy'
                                />
                            </li>
                        ))}
                    </ul>
                </ItemLayout>

                {/* <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=fernandoruiz2016&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="Fernando" loading='lazy' />
                </ItemLayout> */}

                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats-beige-iota-81.vercel.app/api/pin/?username=fernandoruiz2016&repo=nextjs-portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
                        alt="Fernando" loading="lazy" />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats-beige-iota-81.vercel.app/api/pin/?username=fernandoruiz2016&repo=Chaskys&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
                        alt="Fernando" loading="lazy" />
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails