import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2>Oops... Page Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link href="/" className="btn btn-primary my-5 ">
        Return Home
      </Link>
    </div>
  );
}
