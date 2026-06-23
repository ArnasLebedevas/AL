import { LinkButton } from "@/shared/components/link-button";

interface Props {
  label: string;
}

export default function ResumeButton({ label }: Props) {
  return (
    <LinkButton
      href="/resume.pdf"
      label={label}
      external
      download
    />
  );
}
