import { v4 as uuidv4 } from 'uuid';
const idGenerator = {
  newId() {
      return  uuidv4();
  },
}

export {
  idGenerator
}
