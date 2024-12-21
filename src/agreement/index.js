import { ABS } from "../config/abs.js";
import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
const idGenerator = {
  newId() {
      return  uuidv4();
  },
}

import { Generation } from "./generation/generation.js";
import { ProposalResume } from "./generation/proposal_resume.js";
import { ProposalDTO } from "./generation/proposal.dto.js";
import { Documentation} from './documentation/documentation.js'

export {
  ABS,
  idGenerator,
  fs,
  dirname,
  fileURLToPath,
  Generation,
  ProposalResume,
  ProposalDTO,
  Documentation,
}
