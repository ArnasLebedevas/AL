import { GiTalk } from "react-icons/gi";
import { Button } from "@/components/ui/button";

interface Props {
  label: string;
}

export default function TalkButton({ label }: Props) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
    >
      <span>{label}</span>
      <GiTalk className="text-xl" />
    </Button>
  );
}
