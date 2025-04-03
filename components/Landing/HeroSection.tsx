import { Check } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden mt-10" id="hero">
            <div className="container px-4 mx-auto py-12 md:py-16 lg:py-20">
                    <div className="flex flex-col space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                            <span className="block">Ace your interviews with</span>
                            <span className="block text-primary mt-2">AI-powered practice</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl">
                            Practice makes perfect. Preap-now provides realistic interview scenarios using
                            advanced AI to help you prepare for your next job interview. Get real-time feedback
                            and improve with every session.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Check className={'h-4 w-4 text-primary'}/>
                                </div>
                                <span className="text-sm">AI-Powered Questions</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Check className={'h-4 w-4 text-primary'}/>
                                </div>
                                <span className="text-sm">Real-time Feedback</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Check className={'h-4 w-4 text-primary'}/>
                                </div>
                                <span className="text-sm">Voice Interaction</span>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}