'use strict';

import {
    expect
} from "chai";
import {
  Generation,
  ProposalDTO,
} from "../src/agreement/index.js";

import { 
  invalidProposalDTOData,
  validProposalDTOData,
  proposal_resume_mock,

} from "../test/help/proposal_factory.js";

import { 
  IsolatedAgreement,
  chat,
  storage,
  suscribers,
} from "../test/help/agreement_factory.js";

let Scenario = describe
let Feature = describe
let Dado = it;
let Cuando = it;
let Entonces = it;
let Y = it;

// TODO: implementar verdaderamente la persistencia en base de datos
// TODO: esperar como retorno el resumen de propuesta



Feature('Acuerdo', function() {
  Scenario('El oferente crea una propuesta de alquiler', function() {
    Cuando('el oferente crea una propuesta de alquiler completa', function() {
      this.generation = IsolatedAgreement(storage, null, suscribers);
      let proposalDTO = new ProposalDTO(validProposalDTOData);
      this.proposal_resume = this.generation.proposal(proposalDTO,2142)
      console.log("La propuesta es guardada con id: \n",this.proposal_resume.proposal_id,"\n")
    });
    Entonces('el sistema debe permitir la revisión de la propuesta por parte del oferente', function() {
      proposal_resume_mock.proposal_id = this.proposal_resume.proposal_id // esto es debido a que el uuid se genera dinamicamente
      expect(this.proposal_resume).to.deep.equal(proposal_resume_mock);
      console.log("El resumen es: \n",this.proposal_resume)
    });
    Y('debe enviar la propuesta como un mensaje de chat', function () {
      expect(suscribers.chat.called).to.be.true;

    });
  });
});
