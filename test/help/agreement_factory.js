import {
    Generation
} from "../../src/agreement/index.js";
const chat = {
    called: false,
    newProposal() {
        this.called = true;
    },
};
const storage = {
    called: false,
    store: new Map(),
    saveProposal(saving, data) {
        this.store.set(saving.id, saving);
        this.called = true;
    },
    getProposal(proposalId) {
        return this.store.get(proposalId);
    }
};

const suscribers = {
    chat,
};

function IsolatedAgreement(storage, config, _suscribers) {
    return new Generation(storage, null, _suscribers);
}

export {
    IsolatedAgreement,
    chat,
    storage,
    suscribers,
}
