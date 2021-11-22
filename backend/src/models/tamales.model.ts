import {Entity, model, property} from '@loopback/repository';

@model()
export class Tamales extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  tamano: string;

  @property({
    type: 'string',
    required: true,
  })
  cantidad: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  precio: string;

  @property({
    type: 'string',
    required: true,
  })
  id: string;


  constructor(data?: Partial<Tamales>) {
    super(data);
  }
}

export interface TamalesRelations {
  // describe navigational properties here
}

export type TamalesWithRelations = Tamales & TamalesRelations;
