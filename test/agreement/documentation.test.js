import {
    assert
} from "./index.js";

import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';


import { Documentation } from "../../src/agreement/documentation/documentation.js";


//const upload = multer({ dest: "uploads/" });


//TODO: Controller debe validar que exista carpeta de documentos

if (!fs.existsSync("user_proposal_documents/")) {
  fs.mkdirSync("user_proposal_documents/");
}


//const persistence_local_path = dirname(fileURLToPath(import.meta.url));
const current_file_for_testing = "/home/peace/Projects/inmobiler/v1/test/help/test_document.pdf"
const persistence_local_path = "/home/peace/Projects/inmobiler/v1/user_proposal_documents/"



describe("Documentation module", function() {

  it('test_documentation_should_save_files_in_storage', function () {
    fs.readFile(current_file_for_testing, 'utf8', (err,documento) => {
  if (err) {
    console.error(err);
  }
    this.documentation = new Documentation();
    this.documentation.save_document({persistence:"LOCAL"},documento);

    })

  })

});
