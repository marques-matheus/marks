import Link from "next/link";
export default function NavLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="text-gray-800 hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {text}
    </Link>
  );
}
