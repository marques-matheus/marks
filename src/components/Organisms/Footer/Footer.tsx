import Image from "next/image";
import Links from "../../../Mocks/links";
import { phones, email, socials } from "../../../Mocks/contact";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="py-4 px-10 bg-white sm:py-6 dark:bg-marks-500">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Image
            src="/logo-dark.svg"
            alt="Marks Logo"
            width={150}
            height={57}
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  ">
          <div>
            
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Entre em contato
            </h2>
            <ul className="text-marks-400">
              {phones.map((phone) => (
                <li key={phone.id} className="flex space-x-2 items-center">
                  <FaPhoneAlt className="text-marks-400" />
                  <p>{phone.phone}</p>
                </li>
              ))}
              {email.map((email) => (
                <li key={email.id} className="flex space-x-2 items-center">
                  <FaEnvelope className="text-marks-400" />
                  <p>{email.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between items-center justify-center">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} -
          <a href="https://marksit.info/" className="hover:underline mx-1">
            Marks It
          </a>
          . Todos os direitos reservados
        </span>
        <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.social}
              className="text-gray-400 hover:text-gray-500"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
