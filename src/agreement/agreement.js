class Agreement {
  constructor (storage=null,config=null, suscribers) {
    this.storage =storage;
    this.config = config;
    this.suscribers = suscribers;
  };

  proposal(proposalDTO,chatID){
    this.storage.saveProposal(proposalDTO,chatID)
    this.notify()
  };

  reviewing(){
    return this.storage.store[0];
  }

  notify(){
    if (!this.suscribers) return;
    this.suscribers.chat.newProposal();
  }

}


export {Agreement}
