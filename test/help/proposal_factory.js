const rate_id = 12421421;
const rate_type = "VAR";
const variation_lapse = 3;
const variation_index = "IPC";

const rate = {
  rate_id,
  type: rate_type,
  variation_lapse,
  variation_index
};

const deposit_type = "as_percent_total_rent";
const deposit_value = 12555;

const deposit = {
  type: deposit_type,
  value : deposit_value,
};

const type = "RENT"
const about = {
  start_date:"2024/05",
  end_date:"2025/05",
  starting_value:40000,
  rate: rate,
  deposit: deposit,
};

const offering = {
  type,
  about
};

const documents = [{
  path:["loc1","loc2"],
}];
const offerentID = 32432532;
const demandID = 3052335;
const proposed_validity_days = 14;
const currency = "AR";
const offeringDTO = offering;

const validProposalDTOData = {
 documents,
 offerentID,
 demandID,
 proposed_validity_days,
 currency,
 offering,
};

const invalidProposalDTOData = {
    documents,
    offerentID,
    proposed_validity_days,
    currency,
    offering,
};


const validProposalResumeData = {
  total_months: 24,
 initial_monthly_rent : 20000,
 estimated_total_rent : 4800000,
 rental_period : "01/10/2024 - 01/01/2025",
 rate_type: {rate,},
 deposit: {deposit,},
 documents : ["some docs","other docs"],
};



const invalidProposalResumeData = {
  total_months: 24,
 initial_monthly_rent : 20000,
 estimated_total_rent : 4800000,
 rate_type: {rate,},
 deposit: {deposit,},
};

const proposal_resume_mock= {
  total_months: 24,
  initial_monthly_rent: 40000,
  estimated_total_rent: 960000,
  rental_period: 'from 2024/05 to 2025/05',
  rate_type: 'VAR',
  deposit: 'as_percent_total_rent',
  documents: "loc1,loc2",
}


export {
  invalidProposalDTOData,
  validProposalDTOData,
  validProposalResumeData,
  invalidProposalResumeData,
  proposal_resume_mock,
}
