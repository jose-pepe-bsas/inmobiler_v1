import {
  fs,
  dirname,
  fileURLToPath,
} from '.././index.js';

class OsManager {
  constructor (lib=fs) {
      this.lib = fs;
  }

  save_archive(document_path,data,format){
    if (this.lib === fs ) {
      this.lib.writeFile(document_path,data,"utf8",(error) => {
        if (error) {
          console.error(error);
        }
      })

    }
  }
}

export {
  OsManager,
}
