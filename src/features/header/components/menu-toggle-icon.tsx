import clsx from "clsx";
import { CiMenuFries } from "react-icons/ci";
import { FiX } from "react-icons/fi";

interface Props {
  isOpen: boolean;
}

const baseIconClasses =
  "absolute text-[30px] text-accent transition-all duration-300 ease-out";

const openState = "rotate-0 scale-100 opacity-100";
const closedState = "-rotate-90 scale-0 opacity-0";

export function MenuToggleIcon({ isOpen }: Props) {
  return (
    <>
      <CiMenuFries
        className={clsx(baseIconClasses, isOpen ? closedState : openState)}
      />
      <FiX
        className={clsx(baseIconClasses, isOpen ? openState : closedState)}
      />
    </>
  );
}
