import * as React from "react";
import { Link } from "gatsby";
import { capitalize } from "lodash";

const overlayStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  overflow: "scroll",
  backgroundColor: "#87A4CA",
};

const linkStyle = {
  display: "block",
  fontSize: "10rem",
  textDecoration: "none",
  textAlign: "center",
  color: "white",
};

const navStyle = {};
const buttonStyle = {
  margin: "2rem",
  border: "none",
  background: "white",
  padding: "2px .5rem",
  borderRadius: "10px",
  boxShadow: "0 0 5px 10px #FFF",
};
const pages = [
  "about",
  "artists",
  "livestream",
  "program",
  "symposium",
  "announcement",
  "social",
];

function Menu() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <button style={buttonStyle} onClick={() => setVisible(!visible)}>
        Menu
      </button>
      {visible && (
        <section style={overlayStyle}>
          <nav style={navStyle}>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                onClick={() => setVisible(false)}
                style={linkStyle}
              >
                {capitalize(page)}
              </Link>
            ))}
          </nav>
        </section>
      )}
    </>
  );
}

export default Menu;
