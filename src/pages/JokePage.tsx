import * as React from "react";
import { connect } from "react-redux";
import { AppState, Category, Joke } from "../types";
import { fetchCategoriesRequest, fetchRandomJokeRequest } from "../actions";
import { Link } from "react-router-dom";
import { Loading } from "../components";

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
      return (
        <div>
          <h1>This is no joke</h1>
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <p className="b bb pb2">/ {this.props.categoryName ? this.props.categoryName : "Random"}</p>
        {/* <div className="w-100">
          <img src={joke.icon_url} />
        </div> */}
        <h1>{joke.value}</h1>
        <p className="f7">#{joke.id}</p>
        <div className="mt4">
          <Link to="/">
            <button className="ba b--blue br3 bg-white pa3 mr2 blue">Home</button>
          </Link>
          <button className="ba b--blue br3 bg-white pa3 blue" onClick={this.handleButtonClick}>
            Another one please!
          </button>
        </div>
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
