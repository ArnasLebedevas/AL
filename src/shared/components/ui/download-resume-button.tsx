import { IoMdDownload } from "react-icons/io";
import { Button } from "@/shared/components/ui/button";

interface Props {
  label: string;
}

export default function DownloadResumeButton({ label }: Props) {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume in a new tab"
    >
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>{label}</span>
        <IoMdDownload className="text-xl" />
      </Button>
    </a>
  );
}
