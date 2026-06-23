import { MarkerListItem } from "@/shared/components/marker-list-item";

interface Props {
  name: string;
}

export function TechnologyItem({ name }: Props) {
  return (
    <MarkerListItem className="body-md basis-1/2 items-center">
      {name}
    </MarkerListItem>
  );
}
