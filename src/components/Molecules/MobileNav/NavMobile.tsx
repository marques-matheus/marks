import NavLink from "../../Atoms/Navlink";
import links from '../../../Mocks/links'

type NavMobileProps = {
  isOpen: boolean;
};


export default function NavMobile({ isOpen }: NavMobileProps) {
  return (
    <nav className={`box-border 
    absolute  left-0 w-full h-fit py-10 bg-white z-10
    ease-in-out duration-500
    ${isOpen ? "top-20" : "-top-20"}
    ${isOpen ? "opacity-100" : "opacity-0"}
    ${isOpen ? "flex" : "hidden"}
    lg:hidden flex flex-col justify-end text-right items-end`}>
      <ul className="box-content flex flex-col">
        {links.map((link, index) => (
          <NavLink key={index} href={link.link} text={link.text} />
        ))}
      </ul>
    </nav>
  );
}
