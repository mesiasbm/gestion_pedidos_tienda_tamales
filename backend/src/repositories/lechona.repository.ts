import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Lechona, LechonaRelations} from '../models';

export class LechonaRepository extends DefaultCrudRepository<
  Lechona,
  typeof Lechona.prototype.id_transaccion,
  LechonaRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Lechona, dataSource);
  }
}
