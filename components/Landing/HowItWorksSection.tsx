import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function HowItWorksSection() {
    const steps = [
        {
            number: 1,
            title: "Create your profile",
            description: "Select your industry, target roles, and experience level to customize your interview experience."
        },
        {
            number: 2,
            title: "Practice interviews",
            description: "Choose from different interview types: behavioral, technical, case studies, and more. Practice as many times as you like."
        },
        {
            number: 3,
            title: "Review and improve",
            description: "Analyze your performance with AI-generated feedback and specific suggestions for improvement."
        }
    ];

    return (
        <section className="py-24  flex justify-center items-center">
            <div className="container px-4 md:px-6">
                <SectionHeading
                    subheading="How It Works"
                    heading="Simple steps to interview success"
                    description="Get started with InterviewAI in three easy steps and begin your journey to interview mastery."
                    center={true}
                />

                <div className="mt-16 relative">
                    {/* Connection Lines */}
                    <div className="absolute hidden md:block top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative group">
                                {/* Arrow for non-last items */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-primary/30 group-hover:text-primary/60 transition-colors duration-300" />
                                    </div>
                                )}

                                <Card className={cn(
                                    "relative overflow-hidden transition-all duration-500",
                                    "group-hover:shadow-lg group-hover:-translate-y-1",
                                    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
                                    "group-hover:before:opacity-100"
                                )}>
                                    <CardContent className="p-6 text-center">
                                        {/* Step Number */}
                                        <div className="relative mx-auto mb-6">
                                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                                            <div className="relative flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-primary text-primary-foreground font-bold text-lg transition-transform duration-500 group-hover:scale-110">
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold tracking-tight text-foreground">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}