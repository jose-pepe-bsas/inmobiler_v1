import {
    ProposalResume
} from './proposal_resume.js'

class Agreement {
    constructor(storage = null, config = null, suscribers) {
        this.storage = storage;
        this.config = config;
        this.suscribers = suscribers;
    };

    proposal(proposalDTO, chatID, storage = this.storage) {
        storage.saveProposal(proposalDTO, chatID)
        const proposal_resume_info = this.proposalResumeInfo(proposalDTO)
        this.notify()
        return this.proposalResume(proposal_resume_info)
    };

    proposalResume(data) {
        const total_months = 24; //TODO: Implementar!
        const initial_monthly_rent = data.initial_rent_value;
        const estimated_total_rent = total_months * initial_monthly_rent;
        const rental_period = `from ${data.from} to ${data.to}`;
        const rate_type = data.rental_type;
        const deposit = data.deposit;
        const documents = data.documents;
        const proposal_id = data.proposal_id;
        const resume_data = {
            total_months,
            initial_monthly_rent,
            estimated_total_rent,
            rental_period,
            rate_type,
            deposit,
            documents,
            proposal_id,
        }
        return new ProposalResume(resume_data)
    }

    proposalResumeInfo(proposalDTO) {
        const offert = proposalDTO.offering.about
        const from = offert.start_date;
        const to = offert.end_date;
        const initial_rent_value = offert.starting_value;
        const rental_type = offert.rate.type; //note:Renombrarlo a tipo de renta!
        const deposit = offert.deposit.type;
        const documents = proposalDTO.documents;
        const proposal_id = proposalDTO.id;
        const data = {
            from,
            to,
            initial_rent_value,
            rental_type,
            deposit,
            documents,
            proposal_id,
        }
        return data;

    }

    reviewing(proposal_id) {
        return this.storage.getProposal(proposal_id);
    }

    notify() {
        if (!this.suscribers) return;
        this.suscribers.chat.newProposal();
    }

}


export {
    Agreement
}
