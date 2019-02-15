import React from 'react';
import dataBase from '../database/db2.json'

export default props => {
  const { codigoContrato } = props;

  console.log(codigoContrato);

  if (!codigoContrato) return null;

  let dadosContrato = dataBase.find(element => {
    if (element.code.toString() === codigoContrato) {
      return true
    } else {
      return false
    }
  });

  // console.log(dadosContrato);
  console.log(dadosContrato.credores[0])

  return (
    <div>
      <div className="area-page">
        <div className="area-title">
          <h2>Detalhes do contrato</h2>
          <h3>Status do Contrato: {dadosContrato.status}</h3>
        </div>

        <div className="area-details">
          <div className="field"><span className="label"> Razão social: </span> {dadosContrato.txtRazaoSocial}</div>
          <div className="field"><span className="label"> Modalidade: </span> {dadosContrato.txtDescricaoModalidade}</div>
          <div className="field"><span className="label"> Tipo de contratação: </span> {dadosContrato.txtTipoContratacao}</div>
          <div className="field"><span className="label"> Orgão: </span> {dadosContrato.codOrgao}</div>
          <div className="field"><span className="label"> Objeto do contrato: </span> {dadosContrato.txtObjetoContrato}</div>
          <div className="field"><span className="label"> Razão Social do Credor: </span> {dadosContrato.credores[0].txtRazaoSocial}</div>
          <div className="field"><span className="label"> CPF / CNPJ do Credor: </span> {dadosContrato.credores[0].numCpfCnpj}</div>
          <div className="field"><span className="label"> Código do Contrato: </span> {dadosContrato.code}</div>
          <div className="field"><span className="label"> Código Original do Contrato: </span> {dadosContrato.numOriginalContrato}</div>
          <div className="field"><span className="label"> Código do processo: </span> {dadosContrato.codProcesso}</div>
          <div className="field"><span className="label"> Data de assinatura do contrato: </span> {dadosContrato.datAssinaturaContrato}</div>
          <div className="field"><span className="label"> Data de vigência do contrato: </span> {dadosContrato.datVigencia}</div>
          <div className="field"><span className="label"> Valor total: </span> {dadosContrato.valorTotal},00</div>
          <div className="field"><span className="label"> Valor total empenhado: </span> {dadosContrato.valTotalEmpenhado},00</div>
          <div className="field"><span className="label"> Valor liquidado: </span> {dadosContrato.valLiquidado},00</div>
          <div className="field"><span className="label"> Valor pago: </span> {dadosContrato.valPago},00</div>
          <div className="field"><span className="label"> Saldo empenhado: </span> {dadosContrato.saldoEmpenhado},00</div>
          <div className="field"><span className="label"> Saldo liquidado: </span> {dadosContrato.saldoLiquidado},00</div>
          <div className="field"><span className="label"> Media prevista: </span> {dadosContrato.mediaPrevista},00</div>
          <div className="field"><span className="label"> Media empenhada: </span> {dadosContrato.mediaEmpenhada},00</div>
          <div className="field"><span className="label"> Media Liquidado: </span> {dadosContrato.mediaLiquidado},00</div>
        </div>
     </div>
    </div>
  );

}