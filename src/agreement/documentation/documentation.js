import { OsManager } from "./os_manager.infra.js";

/**
 * Clase que gestiona la documentación de propuestas, incluyendo la persistencia local de documentos.
 */
class Documentation {
  /**
   * @param {string} [documents_path="user_proposal_documents/"] - Ruta base para almacenar los documentos.
   * @param {Object|null} [config=null] - Configuración adicional para el manejo de documentos.
   * @param {OsManager} [os_manager=new OsManager()] - Gestor de sistema operativo para manejar archivos.
   */
  constructor(documents_path="user_proposal_documents/", config=null, os_manager=new OsManager()) {
    this.documents_path = documents_path;
    this.config = config;
    this.os_manager = os_manager;
  }

  /**
   * Guarda un documento en la ruta especificada utilizando la configuración de persistencia.
   * @param {Object|null} [config=this.config] - Configuración utilizada para determinar el tipo de persistencia.
   * @param {string|null} [document_data=null] - Datos del documento a guardar.
   * @returns {number} Retorna -1 si ocurre un error o si el tipo de persistencia no está implementado.
   */
  save_document(config=this.config, document_data=null) {
    if (config.persistence === "LOCAL") {
      this.os_manager.save_archive(this.documents_path + "doomie_name.pdf", document_data, "utf8");
    } else {
      console.error("Error, tipo de persistencia no implementada.");
      return -1;
    }
  }
}

export {
  Documentation,
}
