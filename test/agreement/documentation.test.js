import {
    assert
} from "./index.js";

import {
    fs,
    dirname,
    fileURLToPath,
    Documentation,
} from './index.js';



//TODO: Controller debe validar que exista carpeta de documentos
//TODO: Conseguir el path actual de manera dinamica.


//#TAG: Integration.
describe("Documentation module", function() {

    before(function() {
        if (!fs.existsSync("user_proposal_documents/")) {
            fs.mkdirSync("user_proposal_documents/");
        }
        this.current_file_for_testing = "/home/peace/Projects/inmobiler/v1/test/help/test_document.pdf"
    });

    it('test_documentation_should_save_files_in_storage', function() {
        fs.readFile(this.current_file_for_testing, 'utf8', (err, documento) => {
            if (err) {
                console.error(err);
            }
            this.documentation = new Documentation();
            this.documentation.save_document({
                persistence: "LOCAL"
            }, documento);

        })

    })

});
