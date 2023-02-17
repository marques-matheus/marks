import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const phones = [
  {
    id: 1,
    phone: "(21)987654321",
  },
  {
    id: 2,
    phone: "(21)987654321",
  },
  {
    id: 3,
    phone: "(21)987654321",
  },
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
    id: 1,
    social: "Facebook.com",
    icon: <FaFacebook size={24} className="hover:text-marks-300 transition-all ease-out"/>,
  },
  {
    id: 2,
    social: "LinkedIn.com",
    icon: <FaLinkedin size={24} className="hover:text-marks-300 transition-all ease-out"/>,
  },
  {
    id: 3,
    social: "Instagram.com",
    icon: <FaInstagram size={24} className="hover:text-marks-300 transition-all ease-out"/>,
  },
];

export { phones, email, socials };
