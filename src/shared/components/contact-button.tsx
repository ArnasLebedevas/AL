import { LinkButton } from "@/shared/components/link-button";
import { env } from "@/lib/env";

interface Props {
  label: string;
  size: "default" | "lg";
}

export default function ContactButton({ label, size }: Props) {
  return (
    <LinkButton
      href={`mailto:${env.contactEmail}`}
      label={label}
      size={size}
    />
  );
}
