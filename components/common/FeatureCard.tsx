import { Card, CardContent } from '@/components/ui/card';
import { JSX } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon: JSX.Element;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureCard({
                                        icon,
                                        title,
                                        description,
                                        className
                                    }: FeatureCardProps) {
    return (
        <Card className={cn(
            "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
            className
        )}>
            <CardContent className="p-6">
                <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-light-100 text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-110">
                            {icon}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}