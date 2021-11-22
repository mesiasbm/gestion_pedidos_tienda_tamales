import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Lechona} from '../models';
import {LechonaRepository} from './lechona.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly lechona: BelongsToAccessor<Lechona, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('LechonaRepository') protected lechonaRepositoryGetter: Getter<LechonaRepository>,
  ) {
    super(Cliente, dataSource);
    this.lechona = this.createBelongsToAccessorFor('lechona', lechonaRepositoryGetter,);
    this.registerInclusionResolver('lechona', this.lechona.inclusionResolver);
  }
}
