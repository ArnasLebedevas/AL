"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { ExperienceItemView } from "./experience-item";
import { ExperienceItem } from "@/shared/constants/experience";

interface Props {
  items: ExperienceItem[];
}

export function ExperienceTabs({ items }: Props) {
  return (
    <Tabs
      defaultValue={items[0].company}
      className="flex flex-col md:flex-row gap-8 md:gap-10"
    >
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.company} value={item.company}>
            {item.company}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex-1 md:min-h-[300px]">
        {items.map((item) => (
          <TabsContent key={item.company} value={item.company}>
            <ExperienceItemView experience={item} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
