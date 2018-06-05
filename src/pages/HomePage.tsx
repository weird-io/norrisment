import * as React from "react";
import { connect } from "react-redux";
import { AppState, Category } from "../types";
import { fetchCategoriesRequest } from "../actions";
import { Link } from "react-router-dom";

interface Props {
  categories: Category[];
  fetchCategories(): any;
}

const li = (category: Category) => (
  <li key={category.name}>
    <Link to={`/${category.name}`}>{category.name}</Link>
  </li>
);

class HomePageInner extends React.Component<Props, AppState> {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleButtonClick(evt: any) {
    this.props.fetchCategories();
  }

  render() {
    const list = this.props.categories ? this.props.categories.map(li) : null;
    // console.log(this.props);
    return (
      <div>
        <h1>Norrisment for the soul</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategoriesRequest())
});

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageInner);
