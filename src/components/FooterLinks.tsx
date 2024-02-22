import { NavLink } from "react-router-dom";

const links = ["meals", "cart", "about", "locations"];
function FooterLinks() {
  return (
    <div>
      <h2 className="font-niconne text-xl font-bold">Quick links</h2>
      <ul className="font-montserrat my-5">
        {links.map((link) => (
          <li key={link} className="py-2">
            <NavLink to={`/${link}`}>{link}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
