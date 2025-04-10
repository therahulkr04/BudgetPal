'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthComponent from "@/components/AuthComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to BudgetPal</h1>
      <p className="text-lg mb-8">Your personal finance tracker.</p>
      <AuthComponent />
    </div>
  );
}
