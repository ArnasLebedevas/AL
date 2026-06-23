import HexagonLoader from "@/features/transitions/components/hexagon-loader";
import Header from "@/features/header";
import { Footer } from "@/features/footer";
import { ScrollToTop } from "@/shared/components/scroll-to-top";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <HexagonLoader>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </HexagonLoader>
  );
}
