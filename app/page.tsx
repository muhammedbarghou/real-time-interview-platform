'use client'

import {useEffect} from 'react';
import Navbar from "@/components/Landing/NavBar";
import HeroSection from "@/components/Landing/HeroSection";
import FeaturesSection from "@/components/Landing/FeaturesSecion";
import HowItWorksSection from "@/components/Landing/HowItWorksSection";
import Footer from "@/components/Landing/Footer";

function Page() {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
                e.preventDefault();

                const targetElement = document.querySelector(anchor.hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // 80px offset for the navbar
                        behavior: 'smooth'
                    });

                    // Update URL without causing page jump
                    window.history.pushState(null, '', anchor.hash);
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
            </main>
            <Footer />
        </div>
    );
}

export default Page;