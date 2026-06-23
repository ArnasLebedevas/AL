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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-primary focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </HexagonLoader>
  );
}
