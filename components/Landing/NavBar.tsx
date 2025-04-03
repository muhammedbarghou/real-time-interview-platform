"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet';
import { Brain, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
                    : "bg-background"
            )}
            aria-label="Main navigation"
        >

            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                        <Brain className="h-8 w-8 text-primary" />
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                          Preap-Now
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/sign-in">Log in</Link>
                            </Button>
                            <Button size="sm" asChild>
                                <Link href="/sign-up">Get Started</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-2">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Menu">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full sm:w-[350px]">
                                <div className="flex flex-col gap-4 mt-8">
                                    <div className="flex flex-col gap-2 mt-4">
                                        <SheetClose asChild>
                                            <Button variant="outline" className="w-full" asChild>
                                                <Link href="/sign-in">Log in</Link>
                                            </Button>
                                        </SheetClose>
                                        <SheetClose asChild>
                                            <Button className="w-full" asChild>
                                                <Link href="/sign-up">Get Started</Link>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}