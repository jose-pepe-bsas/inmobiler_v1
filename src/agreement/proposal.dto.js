import {
    ABS
} from '../config/abs.js'

import { idGenerator } from "./index.js";



class AboutRent {
    constructor(start_date, end_date, starting_value, rate, deposit) {
        this.start_date = start_date;
        this.end_date = end_date;
        this.starting_value = starting_value;
        this.rate = rate;
        this.deposit = deposit;
    }
};

class AboutService {
    constructor(date, location, budget, advance_payment) {
        this.date = date;
        this.location = location;
        this.budget = budget;
        this.advance_payment = advance_payment;
    }
};

class ABSofferingDTO{
    constructor(type, about) {
        this.type = type;
        this.about = about;
    }
}

class RentOfferingDTO extends ABSofferingDTO {
    constructor(type, about) {
        super(type, about)
    }
}

class ServiceOfferingDTO extends ABSofferingDTO {
    constructor(type, about) {
        super(type, about)
    }
}


class ProposalDTO extends ABS {

    constructor(data) {

        try {
            super("ProposalDTO", data)
        } catch (error) {
            throw error;
        }
        Object.assign(this, arguments[0]);
        this.id = idGenerator.newId()
        this.documents = this.documents.map(doc => doc.path).toString();
        this.offeringDefinition()
    }

  offeringDefinition () {
    if (this.offering.type == "RENT") {
        this.offering = new RentOfferingDTO(this.offering.type,this.offering.about)
    } else if(this.offering.type == "SERV"){
        this.offering = new ServiceOfferingDTO(this.offering.type,this.offering.about)
    }
  }



}


export {
    ProposalDTO,
}
