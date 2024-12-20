import { OsManager } from "./os_manager.infra.js";

class Documentation {
  constructor (documents_path="user_proposal_documents/",config=null,os_manager=new OsManager()) {
    this.documents_path = documents_path;
    this.config = config;
    this.os_manager = os_manager;

  }

  save_document(config=this.config,document_data=null){
    if (config.persistence == "LOCAL") {
      this.os_manager.save_archive(this.documents_path+"doomie_name.pdf",document_data,"utf8")
    }else{
      console.error("Error, tipo de persistencia no implementada.");
      return -1;
    }
  }
}

export {
  Documentation,
}
