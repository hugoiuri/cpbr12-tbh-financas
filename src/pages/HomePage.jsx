import React, { Component } from 'react';
import { Header, TreemapView } from '../components';

export default  class HomePage extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <TreemapView />
        </div>
      </div>
    );
  };
}