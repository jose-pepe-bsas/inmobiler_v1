import {
    validProposalDTOData,
    invalidProposalDTOData,
    invalidProposalResumeData,
    validProposalResumeData,
    assert,
    ProposalResume,
    ProposalDTO,
} from "./index.js";

//TODO: Refactorizar construccion de contrato con un builder.
//TODO: Separar la entidad contrato de la entidad propuesta
/*TODO: Pending testing cases
 * - TEST: proposal should return a proposal resume
 * - TEST: proposal should obtain required data for datatables in database from chat id
 * - TEST: Solamente pueden hacerse propuestas de contrato con propiedades cuyo estado no sea "bloqueada"
 * - TEST: el proposalDTO debe llevar informacion en general de las propuestas, el "ABSoferringDTO" debe llevar informacion variable segun si es contrato de servicios o propiedades (RentOfferingDTO o ServiceOfferingDTO)
 * - TEST: Generation debe poder generar tanto propuestas de alquiler como propuestas de servicios
 * - TEST: La propuesta de contrato debe tener una cantidad de dias de validez que sean mayores a 0
 * - TEST: NO debe poder aceptarse una propuesta fuera de sus dias de validez
 * - TEST: La propuesta de contrato debe almacenarse
 * - TEST: La propuesta de contrato debe tener estados (pendiente, rechazada, vencida, invalida)
 * - TEST: En caso de una propuesta de contrato ser aceptada, debe crearse un contrato
 * - TEST: En caso de una propuesta de contrato ser aceptada, debe enviar una notifiacion al modulo de propiedades para bloquear la propiedad segun su id
 * - TEST: Si se crea una propuesta de contrato para un chat el cual ya tenia una, la propuesta anterior debe invalidarse
 * - TEST: Si una propuesta es aceptada sobre una propiedad, las propuestas existentes para esa propiedad deben invalidarse
 * - TEST: Generation deberia devolver un Resumen de Propuesta (Entidad ProposalResume) para que sea eso enviado directamente al chat con el servicio apropiado
 * - TEST: Generation deberia poder instanciarse con una referencia de interfaz al servicio de Chat, para poder enviar el mensaje al chat al cual se hace la propuesta (en caso de tener una referencia al chat)
 * - TEST: Generation deberia instanciarse con un modulo de Configuracion por referencia
 *
 */


describe("Proposal dto generation from client data", function() {

    it("test_proposal_dto_should_have_all_required_fields", function() {
        const proposal_dto = new ProposalDTO(validProposalDTOData);
        assert.ok(proposal_dto, "ProposalDTO should be created successfully.");
    });

    it("test_proposal_dto_should_throw_exception_if_any_field_is_missing", function() {
        assert.throws(
            () => new ProposalDTO(invalidProposalDTOData),
            Error, "No all parameters has been passed here"
        );
    });

});
