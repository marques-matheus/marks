import NavLink from "../../Atoms/Navlink";
import links from '../../../Mocks/links'

type NavMobileProps = {
  isOpen: boolean;
};


export default function NavMobile({ isOpen }: NavMobileProps) {
  return (
    <nav className={`box-border 
    absolute  left-0 w-full h-fit py-10 bg-white z-2 pa
    ease-in-out duration-500
    ${isOpen ? "top-20" : "-top-80 opacity-0"}
    lg:hidden flex flex-col justify-end text-right items-end transition-all ease-in-out duration-500`}>
      <ul className="box-content flex flex-col">
        {links.map((link, index) => (
          <NavLink key={index} href={link.link} text={link.text} external={link.external}/>
        ))}
      </ul>
    </nav>
  );
}
