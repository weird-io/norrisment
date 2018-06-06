import * as React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";

export const CategoryItem = props => (
  <li className="lstn pa1 db w-50-m w-25-l fl-ns">
    <Link className="blue db pa3 ba br3 b--black-20 bg-white tl ttu" to={`/${props.name}`}>
      {props.name}
    </Link>
  </li>
);
