"use client"
import AuthWrapper from "@/components/AuthGuard/AuthGuard"
import { useRouter } from "next/router"

export default function Home() {
  return (
    <AuthWrapper>
      <p>Home page</p>
    </AuthWrapper>
  )
}
