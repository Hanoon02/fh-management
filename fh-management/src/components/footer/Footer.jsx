import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="text-center text-muted mb-2 px-6">
      {" "}
      <small>
        Copyright © 2025 IIITD | All rights reserved | Created at{" "}
        <Link
          to="https://midas.iiitd.edu.in/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#3fada8]"
        >
          MIDAS LABS
        </Link>{" "}
        by{" "}
        <Link
          to="https://avisionx.net/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#3fada8]"
        >
          Avi Garg
        </Link>
        .
      </small>{" "}
      <br />
      <small className="toggle-text">Our Team</small>
    </footer>
  );
}
export default Footer;
