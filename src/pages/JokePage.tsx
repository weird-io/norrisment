import * as React from "react";
import { connect } from "react-redux";
import { AppState, Category, Joke } from "../types";
import { fetchCategoriesRequest, fetchRandomJokeRequest } from "../actions";
import { Link } from "react-router-dom";

interface Props {
  categoryName: string;
  joke?: Joke;
  fetchJoke(categoryName: string): any;
}

const li = (category: Category) => <li key={category.name}>{category.name}</li>;

class JokePageInner extends React.Component<Props, AppState> {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchJoke(this.props.categoryName);
  }

  handleButtonClick(evt: any) {
    this.props.fetchJoke(this.props.categoryName);
  }

  render() {
    const joke = this.props.joke;
    if (!joke) {
      return <div>This is no joke</div>;
    }
    return (
      <div>
        <h1>{this.props.categoryName ? this.props.categoryName : "Random"}</h1>
        <img src={joke.icon_url} />
        <p>{joke.value}</p>
        <p>{joke.id}</p>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={this.handleButtonClick}>Another one please!</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, props: Props) => ({
  joke: state.randomJoke
});

const mapDispatchToProps = dispatch => ({
  fetchJoke: (categoryName: string) => dispatch(fetchRandomJokeRequest(categoryName))
});

export const JokePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(JokePageInner);
