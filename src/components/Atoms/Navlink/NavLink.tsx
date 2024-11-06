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
        className="text-marks-700 hover:border-r-2 lg:hover:border-b-2 lg:hover:border-r-0 hover:border-marks-100 hover:text-marks-100 lg:hover:bg-gradient-to-r lg:hover:from-teal-50 lg:hover:to-white transition-all px-3 py-2 text-md mx-1 font-light my-5 md:font-normal uppercase"
      >
        {text}
      </Link>
    </li>
  );
}
