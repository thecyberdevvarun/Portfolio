"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function isExternalHref(href) {
  if (!href || typeof href !== "string") return false;
  return /^https?:\/\//i.test(href) || href.startsWith("//");
}

export default function MarkdownBody({ content }) {
  return (
    <div className="md-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children, ...props }) {
            const external = isExternalHref(href);
            return (
              <a
                href={href}
                {...props}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
