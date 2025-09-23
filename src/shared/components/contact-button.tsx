import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { env } from "@/lib/env";

interface Props {
  label: string;
  size: "default" | "lg";
}

export default function ContactButton({ label, size }: Props) {
  return (
    <Link href={`mailto:${env.contactEmail}`}>
      <Button
        variant="outline"
        size={size}
        className=" flex items-center gap-2"
      >
        <span>{label}</span>
      </Button>
    </Link>
  );
}
