import React, { Component } from 'react';

import { Header, Contract } from '../components';

export default class ContractPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid page">
          <Contract codigoContrato={this.props.match.params.id} />
        </div>
      </div>
    );
  };
}