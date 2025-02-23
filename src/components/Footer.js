// components/Footer.js
const Footer = () => {
    return (
      <footer className="footer text-center py-4">
        <p>© {new Date().getFullYear()} Dashami Puja Committee</p>
      </footer>
    );
  };
  
  // Must have this export
  export default Footer;  // <-- This was likely missing