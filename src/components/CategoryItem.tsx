import * as React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";

export const CategoryItem = props => (
  <li className="lstn pa2 mb1 ba br1 b--black-20">
    <Link className="blue" to={`/${props.name}`}>
      {props.name}
    </Link>
  </li>
);
