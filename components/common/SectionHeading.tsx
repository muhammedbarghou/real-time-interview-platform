interface SectionHeadingProps {
    subheading: string;
    heading: string;
    description: string;
    center?: boolean;
}

export default function SectionHeading({
                                           subheading,
                                           heading,
                                           description,
                                           center = false
                                       }: SectionHeadingProps) {
    return (
        <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
            <h2 className="text-base font-semibold leading-7 text-primary">
                {subheading}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {heading}
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {description}
            </p>
        </div>
    );
}