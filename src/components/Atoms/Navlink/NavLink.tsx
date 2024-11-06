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
        className="text-marks-500 hover:text-marks-100  hover:border-b-2 hover:border-marks-100 transition-all px-3 py-2 text-md mx-1 font-light uppercase"
      >
        {text}
      </Link>
    </li>
  );
}
