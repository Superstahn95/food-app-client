import Container from "./Container";
import FooterContact from "./FooterContact";
import FooterDescription from "./FooterDescription";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <div className="bg-slate-800 py-4 text-white">
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <FooterDescription />
          <FooterContact />
          <FooterLinks />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
