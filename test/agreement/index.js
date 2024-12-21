import { 
  Generation,
  ProposalDTO,
  Documentation,
  ProposalResume,
} from "../../src/agreement/index.js";

import {
    createRequire
} from 'module';
const require = createRequire(import.meta.url);
const assert = require('assert')

import {
    validProposalDTOData,
    invalidProposalDTOData,
    invalidProposalResumeData,
    validProposalResumeData,
    proposal_resume_mock,
} from "../help/proposal_factory.js";

import {
    IsolatedAgreement,
    storage,
} from "../help/agreement_factory.js";

import fs from 'fs'
import {
    dirname
} from 'path';
import {
    fileURLToPath
} from 'url';




export {
    assert,
    validProposalDTOData,
    invalidProposalDTOData,
    invalidProposalResumeData,
    validProposalResumeData,
    proposal_resume_mock,
    IsolatedAgreement,
    storage,
    fs,
    dirname,
    fileURLToPath,
    Generation,
    ProposalDTO,
    Documentation,
    ProposalResume,
}
