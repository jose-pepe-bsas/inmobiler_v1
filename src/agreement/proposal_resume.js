//Proposal Resume

/* Attrs
* total_months
* initial_monthly_rent (initial value + currency)
* estimated_total_rent (initial rent * months)
* rental_period (from - to)
* rate_type
* deposit
* documents (urlpath)
**/
import {
    ABS
} from '../config/abs.js'


class ProposalResume extends ABS{
  constructor (data) {
            try {
            super("ProposalResume",data)
        } catch (error) {
            throw error;
        }
        Object.assign(this, arguments);

  }
}

export {
  ProposalResume
}
