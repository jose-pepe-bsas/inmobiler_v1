'use strict';

class ProposalResume {
  constructor(start_date, end_date, starting_value, currency, rate, deposit, documents) {
    this.start_date = start_date; // Fecha de inicio (YYYY/MM)
    this.end_date = end_date;     // Fecha de fin (YYYY/MM)
    this.starting_value = starting_value; // Valor inicial del alquiler
    this.currency = currency;             // Moneda (máx 3 caracteres)
    this.rate = rate;                     // Instancia de Rate
    this.deposit = deposit;               // Instancia de Deposit
    this.documents = documents;           // Array de documentos (char[])
    this.total_month_to_pay = null;       // Total de meses a pagar (calculado)
    this.estimated_total_rent = null;     // Renta total estimada (calculada)
  }
}

class Rate {
  constructor(rate_id, type, variation_lapse = 0) {
    this.rate_id = rate_id;         // ID del rate (bigint)
    this.type = type;               // Tipo (fixed/variable)
    this.variation_lapse = variation_lapse; // Variación en meses (por defecto: 0)
  }
}

class Deposit {
  constructor(type, value) {
    this.type = type; // Tipo (as_percent_total_rent o value)
    this.value = value; // Valor del depósito
  }
}

export { ProposalResume, Rate, Deposit };
