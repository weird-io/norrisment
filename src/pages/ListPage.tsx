import * as React from 'react';
import { Store } from 'react-redux';
import { AppState, Norrisism } from '../types';

interface Props {
  list: Norrisism[]
}

export class ListPage extends React.Component<Props, AppState> {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <ul>
        {this.props.list ? this.props.list.map((x: Norrisism) => <li key={x.id}>{x.title}</li>) : null}
      </ul>
    );
  }
};
