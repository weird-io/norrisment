import * as React from "react";
import { Store } from "react-redux";
import { AppState, Joke } from "../types";

interface Props {
  category: string;
  jokes: Joke[];
}

export class CategoryPage extends React.Component<Props, AppState> {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const li = (joke: Joke) => <li key={joke.id}>{joke.value}</li>;
    const list = this.props.jokes ? this.props.jokes.map(li) : null;
    return <ul>{list}</ul>;
  }
}
