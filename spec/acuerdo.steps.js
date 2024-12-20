'use strict';

import {
    expect
} from "chai";
import { Agreement } from "../src/agreement/agreement.js";

import { 
  invalidProposalDTOData,
  validProposalDTOData,

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
      this.agreement = IsolatedAgreement(storage, null, suscribers);
      this.agreement.proposal(validProposalDTOData,2142);
    });
    Entonces('el sistema debe permitir la revisión de la propuesta por parte del oferente', function() {
      expect(this.agreement.reviewing()).to.equal(validProposalDTOData);
    });
    Y('debe enviar la propuesta como un mensaje de chat', function () {
      expect(suscribers.chat.called).to.be.true;
    });
  });
});
