import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cliente,
  Lechona,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteLechonaController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/lechona', {
    responses: {
      '200': {
        description: 'Lechona belonging to Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Lechona)},
          },
        },
      },
    },
  })
  async getLechona(
    @param.path.string('id') id: typeof Cliente.prototype.id,
  ): Promise<Lechona> {
    return this.clienteRepository.lechona(id);
  }
}
