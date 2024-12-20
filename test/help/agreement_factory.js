import { Agreement } from "../../src/agreement/agreement.js";
const chat = {
  called : false,
  newProposal(){
    this.called = true;
  },
};
const storage = {
  called : false,
  store: [],
  saveProposal (saving,data){
    this.store[0] =saving
    this.called = true;
  },
};

const suscribers = {
        chat,
};

function IsolatedAgreement(storage, config, _suscribers){
  return new Agreement(storage, null, _suscribers);
}

export {
  IsolatedAgreement,
  chat,
  storage,
  suscribers,
}
