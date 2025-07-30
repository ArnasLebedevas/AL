import Header from "@/components/layout/header/header";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
