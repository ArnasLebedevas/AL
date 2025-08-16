import HexagonLoader from "@/features/transitions/components/hexagon-loader";
import Header from "@/features/header";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <HexagonLoader>
      <Header />
      {children}
    </HexagonLoader>
  );
}
