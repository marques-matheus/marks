import NavLink from "@/components/Atoms/Navlink/NavLink";

const links = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "https://www.google.com",
    text: "Serviços",
  },
  {
    link: "https://www.google.com",
    text: "Sobre",
  },
  {
    link: "https://www.google.com",
    text: "Contato",
  },
  {
    link: "https://www.google.com",
    text: "Parceiros",
  }

];

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
