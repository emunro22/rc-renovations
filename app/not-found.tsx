import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="container-site">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-mist">
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
