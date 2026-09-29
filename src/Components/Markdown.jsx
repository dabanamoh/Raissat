import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const styles =
  "[&_p+p]:mt-4 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mt-3 [&_ol]:space-y-2 " +
  "[&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-3 [&_ul]:space-y-2 " +
  "[&_h2]:font-semibold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3 " +
  "[&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-midnight-green " +
  "[&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-indian-yellow " +
  "[&_blockquote]:border-l-4 [&_blockquote]:border-indian-yellow [&_blockquote]:pl-4 [&_blockquote]:italic " +
  "[&_img]:rounded-lg [&_img]:my-4";

/**
 * Renders CMS content. Built-in content arrives as a markdown string; live
 * content from Tina Cloud arrives as Tina's rich-text tree. Raw HTML is
 * ignored in both cases, so content is safe.
 */
const Markdown = ({ children, className = "" }) => {
  if (!children) return null;
  const isTree = typeof children === "object";
  if (isTree && !(children.children?.length > 0)) return null;
  return (
    <div className={`${styles} ${className}`}>
      {isTree ? (
        <TinaMarkdown content={children} />
      ) : (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
      )}
    </div>
  );
};

export default Markdown;
