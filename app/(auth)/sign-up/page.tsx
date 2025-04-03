import React from "react";
import { SignUpForm } from "@/components/Auth/SignUpForm";
import { Brain } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Preap-Now
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        {/*<Image*/}
        {/*  src="/placeholder.svg"*/}
        {/*  alt="Image"*/}
        {/*  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default Page;
