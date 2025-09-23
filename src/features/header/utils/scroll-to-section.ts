export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  
  scrollElementIntoView(element);
  updateUrlHash(id);
};

const updateUrlHash = (id: string): void => {
  if (history.pushState) {
    history.pushState(null, "", `#${id}`);
  } else {
    window.location.hash = id;
  }
};

const scrollElementIntoView = (element: HTMLElement | null): void => {
  element?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
