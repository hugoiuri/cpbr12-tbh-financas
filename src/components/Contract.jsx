import React from 'react';
import dataBase from '../database/db.json'

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
      <p><h2>Detalhes do contrato</h2></p>
      <br />
      <p><h3 >Status do Contrato: {dadosContrato.status}</h3></p>

      <div><b>Razão social:</b> {dadosContrato.txtRazaoSocial}</div>
      <div><b>Modalidade:</b> {dadosContrato.txtDescricaoModalidade}</div>
      <div><b>Tipo de contratação:</b> {dadosContrato.txtTipoContratacao}</div>
      <div><b>Orgão:</b> {dadosContrato.codOrgao}</div>
      <div><b>Objeto do contrato:</b> {dadosContrato.txtObjetoContrato}</div>
      <div><b>Razão Social do Credor:</b> {dadosContrato.credores[0].txtRazaoSocial}</div>
      <div><b>CPF / CNPJ do Credor:</b> {dadosContrato.credores[0].numCpfCnpj}</div>
      <div><b>Código do Contrato:</b> {dadosContrato.code}</div>
      <div><b>Data de assinatura do contrato:</b> {dadosContrato.datAssinaturaContrato}</div>
      <div><b>Data de vigência do contrato:</b> {dadosContrato.datVigencia}</div>
      <div><b>Valor adiantamentos:</b> {dadosContrato.valAditamentos},00</div>
      <div><b>Valor reajustes:</b> {dadosContrato.valReajustes},00</div>
      <div><b>Valor anulação:</b> {dadosContrato.valAnulacao},00</div>
      <div><b>Valor total empenhado:</b> {dadosContrato.valTotalEmpenhado},00</div>
      <div><b>Valor anulado empenho:</b> {dadosContrato.valAnuladoEmpenho},00</div>
      <div><b>Valor empenhado liquido:</b> {dadosContrato.valEmpenhadoLiquido},00</div>
      <div><b>Valor liquidado:</b> {dadosContrato.valLiquidado},00</div>
      <div><b>Valor pago:</b> {dadosContrato.valPago},00</div>
      <div><b>Valor total:</b> {dadosContrato.valorTotal},00</div>
      <div><b>Valor empenhado:</b> {dadosContrato.saldoEmpenhado},00</div>
      <div><b>Saldo liquidado:</b> {dadosContrato.saldoLiquidado},00</div>
      <div><b>Media prevista:</b> {dadosContrato.mediaPrevista},00</div>
      <div><b>Media empenhada:</b> {dadosContrato.mediaEmpenhada},00</div>
      <div><b>Media Liquidado:</b> {dadosContrato.mediaLiquidado},00</div>
    </div>

  );

}