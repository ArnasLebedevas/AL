import Statistics from "@/components/layout/statistics";
import { EXPERIENCES } from "@/constants/experience";

export default function Experience() {
  return (
    <div className="xl:pb-24">
      <Statistics data={EXPERIENCES} />
    </div>
  );
}
