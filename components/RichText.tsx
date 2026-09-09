import { Fragment } from "react";
import Link from "next/link";

/**
 * Renders a paragraph of body copy that may contain markdown-style links,
 * e.g. "see our [kitchen fitting](/services/kitchen-renovations) page".
 *
 * Internal hrefs (starting with "/") render as next/link so they are prefetched
 * and crawled as first-party internal links; anything else renders as a plain
 * anchor opening in a new tab.
 */

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // exec against a fresh regex so the shared lastIndex is never carried between renders
  const pattern = new RegExp(LINK_PATTERN.source, "g");

  while ((match = pattern.exec(text)) !== null) {
    const [full, label, href] = match;

    if (match.index > lastIndex) {
      nodes.push(<Fragment key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</Fragment>);
    }

    if (href.startsWith("/")) {
      nodes.push(
        <Link
          key={`l-${match.index}`}
          href={href}
          className="font-medium text-bright underline decoration-bright/40 underline-offset-2 hover:decoration-bright"
        >
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={`l-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-bright underline decoration-bright/40 underline-offset-2 hover:decoration-bright"
        >
          {label}
        </a>
      );
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`t-${lastIndex}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{nodes}</>;
}

/** Strips link markup, for places that need the plain sentence (meta, schema). */
export function plainText(text: string) {
  return text.replace(LINK_PATTERN, "$1");
}
