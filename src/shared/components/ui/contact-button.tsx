import { FaEnvelope } from "react-icons/fa";
import { Button } from "@/shared/components/ui/button";
import { env } from "@/lib/env";
import Link from "next/link";

interface Props {
  label: string;
}

export default function ContactButton({ label }: Props) {
  return (
    <Link href={`mailto:${env.contactEmail}`}>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>{label}</span>
        <FaEnvelope className="text-xl" />
      </Button>
    </Link>
  );
}
