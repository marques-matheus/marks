import Link from "next/link";
export default function NavLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-marks-500 hover:text-marks-100  hover:border-b-2 hover:border-marks-100 transition-all px-3 py-2 text-lg lg:text-md mx-2 fontsemi-bold lg:font-medium"
      >
        {text}
      </Link>
    </li>
  );
}
