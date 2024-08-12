'use client'

import EmailButton from "./copy_email_btn";

export function Footer(){
    return(
        <div className="flex flex-col gap-12 mt-16">
            <div className="hidden gap-4 items-baseline">
                <p className="font-bold text-xl">Compartamos un Café y charlemos :)</p>
                <EmailButton />
            </div>
            <span className="text-base text-grisOs font-light">&copy;  2024 Frederick Marte Pimentel - Todos los derechos reservados.</span>
        </div>
    )
}