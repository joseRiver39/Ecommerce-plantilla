import { LoginForm } from "@/components/admin/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login",
}

export default function LoginPage() {
  return <LoginForm />
}
