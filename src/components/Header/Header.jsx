import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const visibleNavItems = authStatus ? navItems.filter((item) => item.active) : navItems.slice(0, 3);

  const handleButtonClick = (slug) => {
    navigate(slug);
  };

  return (
    <header className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <Logo width="70px" className="text-white p-2 bg-blue-700 rounded-md" />
            <span className="ml-2 text-xl font-bold"><i><b>blogVista</b></i></span>
          </Link>

          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4 text-sm font-semibold">
              {visibleNavItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => handleButtonClick(item.slug)}
                        className="rounded-full bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
                        style={{
                          border: "2px solid #fff",
                          fontWeight: "bold",
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "1px",
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
            </ul>

            {authStatus && (
              <div>
                <LogoutBtn />
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
