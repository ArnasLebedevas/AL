import Socials from "@/components/layout/socials";
import { PERSONAL_SOCIALS } from "@/constants/socials";

export default function PersonalSocials() {
  return (
    <div className="mb-10 xl:mb-0">
      <Socials data={PERSONAL_SOCIALS} />
    </div>
  );
}
