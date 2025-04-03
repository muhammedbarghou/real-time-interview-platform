import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/home/app-sidebar";
import { ReactNode } from "react";
import Link from "next/link";
import { Brain } from "lucide-react";
import * as React from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <nav className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <Link
                href="/home"
                className="flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Preap-Now
                </span>
              </Link>
            </div>
          </nav>
          <section className="flex-1 p-6">{children}</section>
        </main>
      </div>
    </SidebarProvider>
  );
}
