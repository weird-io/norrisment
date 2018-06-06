import * as React from "react";
import { connect } from "react-redux";
import { AppState, Category } from "../types";
import { fetchCategoriesRequest } from "../actions";
import { Link } from "react-router-dom";
import { CategoryItem, Loading } from "../components";

interface Props {
  categories: Category[];
  fetchCategories(): any;
}

const li = (category: Category, i: Number) => <CategoryItem name={category.name} icon={category.icon} key={i} />;

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
    const list = this.props.categories && this.props.categories.length ? this.props.categories.map(li) : <Loading />;
    return (
      <div>
        <h1 className="f1">Norrisment for the soul</h1>
        <p className="f6 ttu mt0 mb3 bt pb2 pt2">Pick a category to get a random chuck norris joke</p>
        <ul className="ma0 pa0">{list}</ul>
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
