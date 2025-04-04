import { ReactNode } from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

async function AuthLayout({ children }: { children: ReactNode }) {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/home");
  return <div>{children}</div>;
}

export default AuthLayout;
