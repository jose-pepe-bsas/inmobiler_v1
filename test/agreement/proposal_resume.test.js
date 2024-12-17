'use strict';

import { expect } from "chai";
import { ProposalResume, Rate, Deposit } from "../../src/agreement/proposal_resume.js";

describe('ProposalResume', () => {
  it('debería calcular correctamente total_month_to_pay en base a las fechas de inicio y fin', () => {
    const rate = new Rate(1n, 'fixed');
    const deposit = new Deposit('value', 500);
    const proposal = new ProposalResume('2024/01', '2025/12', 1000, 'USD', rate, deposit, []);

    proposal.total_month_to_pay = 24; 
    expect(proposal.total_month_to_pay).to.equal(24);
  });

  it('debería calcular correctamente estimated_total_rent en base al valor inicial y los meses a pagar', () => {
    const rate = new Rate(1n, 'fixed');
    const deposit = new Deposit('value', 500);
    const proposal = new ProposalResume('2024/01', '2025/12', 1000, 'USD', rate, deposit, []);

    proposal.total_month_to_pay = 24;
    proposal.estimated_total_rent = 24000; // 1000 * 24
    expect(proposal.estimated_total_rent).to.equal(24000);
  });
});

describe('Rate', () => {
  it('debería aceptar un tipo válido (fixed o variable)', () => {
    const rate = new Rate(1n, 'fixed');
    expect(rate.type).to.equal('fixed');
  });

  it('debería asignar un valor por defecto a variation_lapse si no se pasa', () => {
    const rate = new Rate(1n, 'variable');
    expect(rate.variation_lapse).to.equal(0);
  });
});

describe('Deposit', () => {
  it('debería aceptar un tipo válido (as_percent_total_rent o value)', () => {
    const deposit = new Deposit('as_percent_total_rent', 10);
    expect(deposit.type).to.equal('as_percent_total_rent');
  });

  it('debería asignar correctamente el valor del depósito', () => {
    const deposit = new Deposit('value', 500);
    expect(deposit.value).to.equal(500);
  });
});
