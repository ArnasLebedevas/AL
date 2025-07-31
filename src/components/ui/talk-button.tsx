import { GiTalk } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import Link from "next/link";

interface Props {
  label: string;
}

export default function TalkButton({ label }: Props) {
  return (
    <Link href={`mailto:${env.contactEmail}`}>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>{label}</span>
        <GiTalk className="text-xl" />
      </Button>
    </Link>
  );
}
