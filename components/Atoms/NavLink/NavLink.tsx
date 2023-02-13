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
      className="text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all px-3 py-2  text-sm font-medium"
    >
      {text}
    </Link>
  );
}
