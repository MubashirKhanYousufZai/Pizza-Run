"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "./components/hero/page";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/components/profile"); // Redirect to login if not authenticated
    }
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}
