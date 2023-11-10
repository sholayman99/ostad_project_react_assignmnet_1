import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <li>
        <NavLink to={"/"}
          className={({ isActive }) =>
            isActive ? " bg-[#20B15A] underline font-semibold  text-base-100 " : "font-semibold"}
        > Home </NavLink>
      </li>
      <li>
        <NavLink to={"/team"}
          className={({ isActive }) =>
            isActive ? " bg-[#20B15A] underline font-semibold text-base-100 " : "font-semibold"}
        > Team </NavLink>
      </li>
      <li>
        <NavLink to={"/service"}
          className={({ isActive }) =>
            isActive ? " bg-[#20B15A] underline font-semibold text-base-100 " : "font-semibold"}
        > Service </NavLink>
      </li>
      <li>
        <NavLink to={"/projects"}
          className={({ isActive }) =>
            isActive ? " bg-[#20B15A] underline font-semibold  text-base-100 " : "font-semibold"}
        > Projects </NavLink>
      </li>
      <li>
        <NavLink to={"/testimonials"}
          className={({ isActive }) =>
            isActive ? " bg-[#20B15A] underline font-semibold  text-base-100 " : "font-semibold"}
        > Testimonials </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar h-[80px] p-[5px] bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl"> <h2 className="font-['Poppins', sans-serif]">Design<span
         className="text-[#F55F1D]">AGENCY</span></h2> </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Login</a>
      </div> */}
    </div>
  );
};

export default Navbar;
