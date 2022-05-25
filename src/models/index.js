// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pet } = initSchema(schema);

export {
  Pet
};