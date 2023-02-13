import NavLink from "components/Atoms/NavLink/NavLink";
import { type } from "os";

type props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const links = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "https://www.google.com",
    text: "Google",
  },
];

export default function Nav({ open, setOpen }: props) {
  return (
    <nav
    
      {...(open ? { className: "flex flex-col" } : { className: "hidden lg:flex lg:flex-row" })}
    >
      {links.map((link, index) => (
        <NavLink  key={index} href={link.link} text={link.text} />
      ))}
    </nav>
  );
}
