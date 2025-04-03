import { Separator } from '@/components/ui/separator';


export default function Footer() {
    return (
        <footer className="flex justify-center items-center">
            <div className="container px-4 py-12">
                <Separator className="my-8" />
                {/* Copyright */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} InterviewAI. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
                        <a href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}