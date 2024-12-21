import {
    invalidProposalResumeData,
    validProposalResumeData,
    validProposalDTOData,
    proposal_resume_mock,
    assert,
    IsolatedAgreement,
    storage,
    ProposalResume,
    ProposalDTO,
} from "./index.js";



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


    it('test_agreement_should_create_a_proposal_resume_from_proposal', function() {
        const agreement = new IsolatedAgreement(storage);
        const proposal_dto = new ProposalDTO(validProposalDTOData);
        const resume = agreement.proposal(proposal_dto, "324523");
        assert.equal(resume.rate_type, "VAR");
        assert.equal(resume.deposit, "as_percent_total_rent");
        assert.equal(storage.called, true);

    })

});
