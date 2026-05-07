import { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  // DARK MODE DEFAULT
  const [darkMode, setDarkMode] = useState(true);

   // APPLY THEME
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    document.body.style.background = "#020617";
    document.body.style.color = "white";
  } else {
    document.documentElement.classList.remove("dark");
    document.body.style.background = "#f8fafc";
    document.body.style.color = "black";
  }
}, [darkMode]);

// CLOSE DROPDOWN ON OUTSIDE CLICK
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  // NAV ITEMS
  const menus = [
    {
      name: "Home",
      icon: "/images/home.png",
    },
    {
      name: "Tech Stack",
      icon: "/images/stack.png",
    },
    {
      name: "Qualification",
      icon: "/images/qualification.png",
    },
    {
      name: "Projects",
      icon: "/images/project-icon.png",
    },
    {
      name: "Contact",
      icon: "/images/contact.png",
    },
  ];

  return (
    <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4 md:px-6">

      <div className="max-w-fit mx-auto flex items-center gap-8 sm:gap-[110px] md:gap-180px] lg:gap-[160px]">

        {/* LOGO */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">

          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />

        </div>

        {/* NAVBAR */}
        <div
  className="
  flex items-center

  gap-2
sm:gap-2.5
md:gap-3

  px-2 sm:px-2.5 md:px-3
py-1.5 sm:py-2

  rounded-full

  bg-white/5
  backdrop-blur-md
  border border-white/10

  text-[8px]
  sm:text-[10px]
  md:text-sm

  text-gray-300
  shadow-lg
  relative

  overflow-visible
  whitespace-nowrap

  max-w-[72vw]
  sm:max-w-[80vw]
  md:max-w-full
  "
>

         {/* MENU ITEMS */}
{menus.map((item, i) => (
  <button
    key={i}
    onClick={() => setActive(item.name)}
    className={`
      flex items-center justify-center gap-1.5

      px-3 sm:px-3.5 md:px-4
      py-2

      rounded-full
      transition duration-300
      whitespace-nowrap

      ${
        active === item.name
          ? "bg-white/10 text-white"
          : "hover:bg-white/10 hover:text-white"
      }

      ${
        item.name === "Qualification" || item.name === "Contact"
          ? "hidden lg:flex"
          : "flex"
      }
    `}
  >

    {/* ICON */}
    <img
      src={item.icon}
      alt=""
      className={`
  object-contain
  brightness-0 invert
  shrink-0
  inline-block

  ${
    item.name === "Home"
      ? "w-2.5 h-2.5 sm:w-4 sm:h-4 relative -top-[1px] sm:top-0"
      : "w-3 h-3 sm:w-4 sm:h-4"
  }
`}
    />

    {item.name}

  </button>
))}

          {/* MORE DROPDOWN */}
          <div ref={dropdownRef} className="relative z-50">

            <button
              onClick={() => setOpen(!open)}
              className="
              flex items-center gap-2

              px-2 sm:px-3
              py-2

              rounded-full
              hover:bg-white/10
              hover:text-white
              transition
              whitespace-nowrap
              "
            >

              {/* MORE ICON */}
              <img
                src="/images/more.png"
                alt=""
                className="w-3 h-3 sm:w-4 sm:h-4 object-contain
    brightness-0 invert"
              />

              More

              <FaChevronDown
                className={`text-[10px] transition duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />

            </button>

            {/* DROPDOWN */}
            <div
              className={`
                absolute top-12 right-0 z-[999]

                w-36 sm:w-44

                bg-[#0f172a]
                border border-white/10
                rounded-2xl
                p-2

                shadow-2xl
                backdrop-blur-md

                transition-all duration-300

                ${
                  open
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }
              `}
            >

              <a
  href="/"
  className="
    flex lg:hidden items-center gap-2
    px-4 py-2
    rounded-xl
    hover:bg-white/10
    transition
  "
>
  <img
    src="/images/qualification.png"
    alt=""
    className="
      w-3 h-3 sm:w-4 sm:h-4 object-contain
      brightness-0 invert
    "
  />

  Qualification
</a>

<a
  href="/"
  className="
    flex lg:hidden items-center gap-2
    px-4 py-2
    rounded-xl
    hover:bg-white/10
    transition
  "
>
  <img
    src="/images/contact.png"
    alt=""
    className="
      w-3 h-3 sm:w-4 sm:h-4 object-contain
      brightness-0 invert
    "
  />

  Contact
</a>

              <a
                href="/"
                className="
                flex items-center gap-2
                px-4 py-2
                rounded-xl
                hover:bg-white/10
                transition
                "
              >

                <img
                  src="/images/services.png"
                  alt=""
                  className="w-3 h-3 sm:w-4 sm:h-4 object-contain
    brightness-0 invert"
                />

                Services

              </a>

              <a
                href="/"
                className="
                flex items-center gap-2
                px-4 py-2
                rounded-xl
                hover:bg-white/10
                transition
                "
              >

                <img
                  src="/images/testimonials.png"
                  alt=""
                  className="w-3 h-3 sm:w-4 sm:h-4 object-contain
    brightness-0 invert"
                />

                Testimonials

              </a>

            </div>

          </div>

        </div>

        {/* DARK/LIGHT BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
          w-10 h-10
          sm:w-12 sm:h-12

          rounded-full

          bg-white/5
          border border-white/10

          flex items-center justify-center
          shrink-0

          hover:bg-white/10
          transition

          text-white
          "
        >

          {darkMode ? (
            <FaSun className="text-sm sm:text-base" />
          ) : (
            <FaMoon className="text-sm sm:text-base text-black" />
          )}

        </button>

      </div>
    </div>
  );
};

export default Navbar;