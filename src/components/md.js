import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Md({ children, ...props }) {
  return (
    <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]} {...props}>
      {children}
    </ReactMarkdown>
  );
}
