import {
    assert
} from "./index.js";
import { ProposalResume } from "../../src/agreement/proposal_resume.js";
import { 
  invalidProposalResumeData,
  validProposalResumeData,
} from "../help/proposal_factory.js";



/* TODO:: Proposal debe instanciar un resumen de propuesta calculando previamente estos datos:
* initial_monthly_rent (initial value + currency)
* estimated_total_rent (initial rent * months)
* rental_period (from - to)
* rate_type (solo el tipo de renta)
* deposit (solo el tipo de deposito)
*
* TODO: El controlador de agreement debe buscar y enviar los documentos como mime
*/

describe("Proposal Resume should be created when proposes", function() {

    it("test_proposal_resume_should_have_all_required_fields", function() {
        const proposal_resume = new ProposalResume(validProposalResumeData);
        assert.ok(proposal_resume, "ProposalResume should be created successfully.");
    });

    it("test_proposal_resume_should_raise_if_theres_no_required_fields", function() {
        assert.throws(
            () => new ProposalResume(invalidProposalResumeData),
            Error, "No all parameters has been passed here"
        );
    });

});
