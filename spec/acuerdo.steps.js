'use strict';

import {
    expect
} from "chai";
import { Agreement } from "../src/agreement/agreement.js";

import { 
  invalidProposalDTOData,
  validProposalDTOData,

} from "../test/help/proposal_factory.js";

let Scenario = describe
let Feature = describe
let Dado = it;
let Cuando = it;
let Entonces = it;
let Y = it;

// TODO: implementar verdaderamente la persistencia en base de datos
// TODO: esperar como retorno el resumen de propuesta

const chat = {
  called : false,
  newProposal(){
    this.called = true;
  },
};
const storage = {
  called : false,
  store: [],
  saveProposal (saving,data){
    this.store[0] =saving
    this.called = true;
  },
};

Feature('Acuerdo', function() {
  Scenario('El oferente crea una propuesta de alquiler', function() {
    Cuando('el oferente crea una propuesta de alquiler completa', function() {
      this.suscribers = {
        chat,
      };
      this.agreement = new Agreement(storage, null, this.suscribers);
      this.agreement.proposal(validProposalDTOData,2142);

    });
    Entonces('el sistema debe permitir la revisión de la propuesta por parte del oferente', function() {
      expect(this.agreement.reviewing()).to.equal(validProposalDTOData);
    });
    Y('debe enviar la propuesta como un mensaje de chat', function () {
      expect(this.suscribers.chat.called).to.be.true;
    });
  });
});
