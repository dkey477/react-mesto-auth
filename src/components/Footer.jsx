import React from "react";

function Footer() {
  const yer = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">© {yer}. Дмитрий Киреев</p>
    </footer>
  );
}

export default Footer;
