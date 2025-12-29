"use client"
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "@/components/contact/form";


export default function Contact() {
    return (
        <>
            <Image priority sizes="100vw" src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

            <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
                <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
                    <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                        Summon the wizard
                    </h1>
                    <p className="text-center font-light text-sm xs:text-base">
                        Enter this arcane space and let your message travel beyond the space. 
                        Whether you wish to forge new alliances, explore ideas, or simply reach out, every word you send carries meaning. 
                        Use the form below to transmit your message across this digital realm, and expect a response guided by curiosity and intention.
                    </p>
                </div>
                <Form />
            </article>
        </>
    );
}
