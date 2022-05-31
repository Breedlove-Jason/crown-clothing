import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className={"navigation"}>
        <Link className={"logo-container"} to={`/`}>
          <div className={"logo"}>Logo</div>
        </Link>
        <div className={"nav-links-container"}></div>
        <Link className={"nav-link"} to={"/shop"}>
          Shop
        </Link>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default Navigation;
