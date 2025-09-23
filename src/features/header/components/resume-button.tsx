import { Button } from "@/shared/components/ui/button";

interface Props {
  label: string;
}

export default function ResumeButton({ label }: Props) {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume in a new tab"
    >
      <Button variant="outline">{label}</Button>
    </a>
  );
}
