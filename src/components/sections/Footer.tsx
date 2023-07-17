import { CONTACT_EMAIL } from '@/helpers/links';

const Footer = () => (
  <section className="footer">
    <p className="footer__paragraph paragraph">
      Enquiries:{' '}
      <a className="footer__email link" href={'mailto:' + CONTACT_EMAIL}>
        {CONTACT_EMAIL}
      </a>
    </p>
  </section>
);

export default Footer;
