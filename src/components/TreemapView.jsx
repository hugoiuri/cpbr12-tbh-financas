import React from 'react';
import { withRouter } from 'react-router';
import { Treemap } from 'd3plus-react'

import data from '../database/db2.json'

class TreeMapView extends React.Component {
  state = {
    methods: {
      data,
      size: d => d.value,
      groupBy: d => d.numOriginalContrato != null
      ? `Contrato: ${d.id} - Nº Original: ${d.numOriginalContrato}`
      : `Contrato: ${d.id}`,
      tooltipConfig: {
        body: d => {
          var table = "<table class='tooltip-table'>";
          if(d.numOriginalContrato != null) {
            table += `<tr><td class='title'>Número Original do Contrato: </td><td class='data'>${d.numOriginalContrato}</td></tr>`;
          }
          table += `<tr><td class='title'>Orgão: </td><td class='data'>${d.codOrgao}</td></tr>`;
          table += `<tr><td class='title'>Tipo de Contratação: </td><td class='data'>${d.txtTipoContratacao}</td></tr>`;
          table += `<tr><td class='title'>Status: </td><td class='data'>${d.status}</td></tr>`;
          table += `<tr><td class='title'>Valor Total: </td><td class='data'>${d.value}</td></tr>`;
          table += `<tr><td class='title'>Saldo Empenhado: </td><td class='data'>${d.saldoEmpenhado}</td></tr>`;
          table += `<tr><td class='title'>Saldo Liquidado: </td><td class='data'>${d.saldoLiquidado}</td></tr>`;
          table += '</table>';
          return table;
        },
        footer: d => {
          return "<sub class='tooltip-footer'>Dados fornecidos pela Prodam</sub>";
        },
        title: d => d.numOriginalContrato != null
          ? `Contrato: ${d.id}<br/>Nº Original: ${d.numOriginalContrato}`
          : `Contrato: ${d.id}`
      },
      on: {
        click: d => {
          document.querySelector('.d3plus-tooltip').style.display = 'none';
          this.props.history.push(`/contract/${d.code}`);
        }
      },
      shapeConfig: {
        fill: d => {
          if (d.status === 'Contrato vencido'
            || d.status === 'Contrato vencido com saldo') {
            return '#3c6382' 
          }
  
          if (d.status === 'Contrato com empenho inferior ao previsto'
            || d.status === 'Contrato com pagamento em aberto'
            || d.status === 'Contrato com empenho superior ao previsto') {
            return '#fad390'
          }
  
          return '#E74C3C';
        }
      },
      legend: false
    }  
  }

  render(){
    const { state } = this;
    return (
      <Treemap config={state.methods} />
    )
  }
}

export default withRouter(TreeMapView);