import * as React from "react";
import { Link } from "gatsby";
import { capitalize } from "lodash";

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
        {visible ? "X" : "Menu"}
      </button>
      {visible && (
        <section className="fixed inset-0 overflow-y-scroll bg-blue">
          <nav>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                onClick={() => setVisible(false)}
                className="text-white text-9xl no-underline text-center block"
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
