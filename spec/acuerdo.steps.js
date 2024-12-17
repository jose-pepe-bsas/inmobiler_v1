'use strict';

import {
    expect
} from "chai";

let Scenario = describe
let Feature = describe
let Dado = it;
let Cuando = it;
let Entonces = it;
let Y = it;

Feature('Acuerdo', function() {
  Scenario('El oferente crea una propuesta de alquiler', function() {
    Cuando('el oferente crea una propuesta de alquiler completa', function() {
      this.proposal = "hello";
    });
    Entonces('el sistema debe permitir la revisión de la propuesta por parte del oferente', function() {
      expect(this.proposal).to.equal("hello");
    });
    Y('debe enviar la propuesta como un mensaje de chat', function () {
      expect(this.proposal).to.equal("hello");
    });
  });
});
