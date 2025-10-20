"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className="bg-indigo-500 shadow-lg w-full"
      style={{ display: "flex" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <Link
          href="/"
          className="font-bold text-white text-xl hover:text-indigo-200 transition-colors"
        >
          ANIME LIST
        </Link>
        <div className="relative">
          <input
            placeholder="Cari Anime..."
            style={{
              backgroundColor: "white",
              borderRadius: "9999px",
              padding: "0.5rem 1.5rem",
              width: "300px",
              outline: "none",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #e0e7ff")}
            onBlur={(e) =>
              (e.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)")
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
