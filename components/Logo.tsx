import Image from "next/image";

/**
 * The source file (public/logo.png) is a circular badge on a black square
 * canvas — the badge sits inset from the canvas edges. Clipping to a circle
 * alone still leaves a thin black ring, so the image is scaled up slightly
 * inside an overflow-hidden circle to crop that margin out completely.
 */
export default function Logo({
  size = 44,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="RC Renovations logo"
        fill
        sizes={`${size}px`}
        priority={priority}
        className="scale-[1.16] object-cover"
      />
    </span>
  );
}
