import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const phones = [
  {
    id: 1,
    phone: "(21) 97962-1864",
  },
  {
    id: 2,
    phone: "(21) 99379-4043",
  }
];

const email = [
  {
    id: 1,
    email: "comercial@marksit.info",
  },
  {
    id: 2,
    email: "contato@marksit.info",
  },
  {
    id: 3,
    email: "marketing@marksit.info",
  },
];

const socials = [
  {
    id: 2,
    social: "https://www.linkedin.com/in/marks-it-consulting-e-services",
    icon: <FaLinkedin size={24} className="hover:text-marks-300 transition-all ease-out"/>,
  },
  {
    id: 3,
    social: "https://www.instagram.com/marks.it/",
    icon: <FaInstagram size={24} className="hover:text-marks-300 transition-all ease-out"/>,
  },
  {
    id: 4,
    social: "https://twitter.com/it_marks",
    icon: <FaTwitter size={24} className="hover:text-marks-300 transition-all ease-out"/>,
  }
];

export { phones, email, socials };
