import React from 'react'
import ItemLayout from './ItemLayout'

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                        Architect of Enchantment
                    </h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>
                        I am an adventurer and developer mage, mastering both frontend and backend arts.
                        JavaScript and Python are my core spells, channeled through powerful frameworks like React and Next.js.
                        My grimoires include database management, where I work with SQL Server and SQL Developer to store and protect knowledge.
                        Every project is an enchantment in progress, blending performance, clean architecture, and visual design to create captivating digital experiences.
                        Join me as I continue to explore new spells and technologies to shape the future of the web.
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        25+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        4+ <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats-beige-iota-81.vercel.app/api/top-langs?username=fernandoruiz2016&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
                        alt="Fernando" loading="lazy" />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats-beige-iota-81.vercel.app/api?username=fernandoruiz2016&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
                        alt="Fernando" loading="lazy" />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-full'}>
                    <img className='w-full h-auto' src="https://skillicons.dev/icons?i=bootstrap,css,figma,git,github,html,js,nextjs,postgres,pycharm,py,react,ts,vercel,vite,vscode"
                        alt="Fernando" loading="lazy" />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=fernandoruiz2016&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="Fernando" loading='lazy' />
                </ItemLayout>

                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats-beige-iota-81.vercel.app/api/pin/?username=fernandoruiz2016&repo=nextjs-portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
                        alt="Fernando" loading="lazy" />
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails