import Link from "next/link";
export default function NavLink({
  href,
  text,
  external
}: {
  href: string;
  text: string;
  external: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        target={external ? "_blank" : ""}
        className="text-marks-700  hover:border-b-2 hover:border-marks-100 hover:text-marks-100 hover:bg-gradient-to-r hover:from-teal-50 hover:to-white transition-all px-3 py-2 text-md mx-1 font-normal uppercase"
      >
        {text}
      </Link>
    </li>
  );
}
