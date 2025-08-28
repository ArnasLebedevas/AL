"use client";

import { Button } from "@/shared/components/ui/button";
import { content } from "@/shared/constants/content";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-7xl xl:text-9xl font-bold text-accent mb-3">
        {content.notFound.title}
      </h1>
      <p className="text-white/80 mb-3">{content.notFound.description}</p>
      <Button
        variant="outline"
        size="lg"
        onClick={() => router.push(content.navigation.home.path)}
      >
        <span>{content.notFound.button.label}</span>
      </Button>
    </div>
  );
}
