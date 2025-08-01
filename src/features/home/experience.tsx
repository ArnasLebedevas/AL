import Statistics from "@/components/layout/statistics";
import { EXPERIENCES } from "@/constants/experience";

export default function Experience() {
  return (
    <div className="xl:mb-24 mb-10">
      <Statistics data={EXPERIENCES} />
    </div>
  );
}
