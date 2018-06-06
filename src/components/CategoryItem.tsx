import * as React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CategoryItem = props => {
  const icon = props.icon ? <FontAwesomeIcon className="pr1" icon={props.icon} /> : null;
  return (
    <li className="lstn pa1 db w-50-m w-25-l fl-ns">
      <Link className="blue db pa3 ba br3 b--black-20 bg-white tl ttu" to={`/${props.name}`}>
        {icon} {props.name}
      </Link>
    </li>
  );
};
