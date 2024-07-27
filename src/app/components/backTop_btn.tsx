'use client'

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopButton() {
    return (
        <button className="p-4 border rounded-lg hover:border-verdeSage hover:bg-verdeSage hover:text-blanco transition-all" onClick={scrollToTop}>
            Volver arriba
        </button>
    );
}