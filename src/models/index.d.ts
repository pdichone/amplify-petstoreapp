import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Pet {
  readonly id: string;
  readonly name: string;
  readonly age?: number | null;
  readonly breed?: string | null;
  readonly about?: string | null;
  readonly image?: string | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Pet, PetMetaData>);
  static copyOf(source: Pet, mutator: (draft: MutableModel<Pet, PetMetaData>) => MutableModel<Pet, PetMetaData> | void): Pet;
}