'use client'

import EmailButton from "./copy_email_btn";

export function Footer(){
    return(
        <footer className="flex flex-col pt-28 gap-12">
            <div className="flex gap-4 items-center">
                <p className="text-4xl font-light">Wanna take a <span className="font-bold text-verdeSage">coffee meeting?</span></p>
                <EmailButton />
            </div>
            <span className="text-sm text-grisOs font-light">&copy;  2025 Frederick A. Marte Pimentel - All rights reserved.</span>
        </footer>
    )
}