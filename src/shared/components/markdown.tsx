import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

export function Markdown({ text }: Props) {
  return (
    <ReactMarkdown
      components={{
        strong: ({ children }) => (
          <span className="text-accent">{children}</span>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
