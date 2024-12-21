import {
    ProposalResume
} from './proposal_resume.js'

/**
 * Clase que gestiona acuerdos, incluyendo el almacenamiento, configuración y notificaciones.
 */
class Generation{
    /**
     * @param {Object|null} [storage=null] - Objeto de almacenamiento para manejar datos relacionados con propuestas.
     * @param {Object|null} [config=null] - Configuración adicional para la instancia de Agreement.
     * @param {Object} suscribers - Referencia a otros componentes que requieren notificarse de eventos de agreement.
     */
    constructor(storage = null, config = null, suscribers) {
        this.storage = storage;
        this.config = config;
        this.suscribers = suscribers;
    }

    /**
     * Guarda una propuesta en el almacenamiento, notifica a los suscriptores y genera un resumen de la propuesta.
     * @param {Object} proposalDTO - Objeto que contiene los datos de la propuesta.
     * @param {string} chatID - Identificador del chat relacionado con la propuesta.
     * @param {Object} IStorage - Objeto de almacenamiento, por defecto se usa el enviado al constructor del componente.
     * @returns {ProposalResume} Resumen de la propuesta creada.
     */
    proposal(proposalDTO, chatID, storage = this.storage) {
        storage.saveProposal(proposalDTO, chatID);
        const proposal_resume_info = this.proposalResumeInfo(proposalDTO);
        this.notify();
        return this.proposalResume(proposal_resume_info);
    }

    /**
     * Genera un resumen de la propuesta.
     * @param {Object} data - Datos necesarios para generar el resumen de la propuesta.
     * @returns {ProposalResume} Resumen de la propuesta.
     */
    proposalResume(data) {
        const total_months = 24; // TODO: Implementar!
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
        };
        return new ProposalResume(resume_data);
    }

    /**
     * Extrae y organiza información clave de una propuesta.
     * @param {Object} proposalDTO - Objeto que contiene los datos de la propuesta.
     * @returns {Object} Información resumida de la propuesta.
     */
    proposalResumeInfo(proposalDTO) {
        const offert = proposalDTO.offering.about;
        const from = offert.start_date;
        const to = offert.end_date;
        const initial_rent_value = offert.starting_value;
        const rental_type = offert.rate.type; // Nota: Renombrarlo a tipo de renta.
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
        };
        return data;
    }

    /**
     * Obtiene los detalles de una propuesta específica.
     * @param {string} proposal_id - Identificador único de la propuesta.
     * @returns {Object} Datos de la propuesta almacenada.
     */
    reviewing(proposal_id) {
        return this.storage.getProposal(proposal_id);
    }

    /**
     * Notifica a los suscriptores sobre una nueva propuesta.
     */
    notify() {
        if (!this.suscribers) return;
        this.suscribers.chat.newProposal();
    }
}

export {
    Generation,
}
