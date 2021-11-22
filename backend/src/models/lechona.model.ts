import {Entity, model, property} from '@loopback/repository';

@model()
export class Lechona extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  cantidad: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_transaccion?: string;


  constructor(data?: Partial<Lechona>) {
    super(data);
  }
}

export interface LechonaRelations {
  // describe navigational properties here
}

export type LechonaWithRelations = Lechona & LechonaRelations;
