import NavLink from "@/components/Atoms/Navlink/NavLink";
import links from '../../../Mocks/links'



export default function Nav() {
  return (
    <nav className="box lg:flex flex-col justify-center items-center hidden">
      <ul className="box-content flex flex-row">
        {links.map((link, index) => (
          <NavLink key={index} href={link.link} text={link.text} />
        ))}
      </ul>
    </nav>
  );
}
