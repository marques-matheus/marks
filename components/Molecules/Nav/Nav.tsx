import NavLink from "components/Atoms/NavLink/NavLink";

const data = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "https://www.google.com",
    text: "Google",
  },
];

export default function Nav() {
  return (
    <nav>
      {data.map((link, index) => (
        <NavLink key={index} href={link.link} text={link.text} />
      ))}
    </nav>
  );
}
