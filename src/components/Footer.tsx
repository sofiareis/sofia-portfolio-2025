import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "@/content/links";

const Footer = () => {
  return (
    <div className="bg-[#e9e3e3] text-[black] text-center text-[1.2rem] font-semibold p-5">
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="mb-5">
          <p className="mt-0 pt-2.5">SOCIAL</p>
          <div className="flex justify-center gap-5 mt-8">
            {links.map((link) => (
              <a target="_blank" href={link.href} key={link.href}>
                <FontAwesomeIcon
                  icon={link.icon}
                  className="text-4xl transition-colors duration-300 hover:text-[#AC626F]"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mx-0 my-5 border-t-[#666] border-t border-solid"></div>
        <div className="mb-5">
          <p>&copy; 2025 Sofia Bandeira dos Reis</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
