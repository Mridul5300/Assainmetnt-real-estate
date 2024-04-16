import { HiOutlineHomeModern } from "react-icons/hi2";


const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <span className="flex items-center">
        <span className="text-orange-400 text-xl ml-2 font-bold">Estate</span> <HiOutlineHomeModern className="text-3xl text-gray-700 bg-orange-300" /> <span className="text-xl font-semibold">Elegance</span>
      </span>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

    </footer>
  );
};

export default Footer;