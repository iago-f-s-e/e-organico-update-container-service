import { toEndpoint, toTopic } from '../helpers';

const repositoryNames = {
  LOAD_BALANCER_E_ORGANICO: 'load-balancer-e-organico',
  E_ORGANICO_API_SERVICE: 'e-organico-api-service',
  UPDATE_YOURSELF: 'e-organico-update-container-service'
};

export const endpoints = {
  LOAD_BALANCER_E_ORGANICO: toEndpoint(repositoryNames.LOAD_BALANCER_E_ORGANICO),
  E_ORGANICO_API_SERVICE: toEndpoint(repositoryNames.E_ORGANICO_API_SERVICE),
  UPDATE_YOURSELF: toEndpoint(repositoryNames.UPDATE_YOURSELF)
};

export const topics = {
  LOAD_BALANCER_E_ORGANICO: toTopic(repositoryNames.LOAD_BALANCER_E_ORGANICO),
  E_ORGANICO_API_SERVICE: toTopic(repositoryNames.E_ORGANICO_API_SERVICE),
  UPDATE_YOURSELF: toTopic(repositoryNames.UPDATE_YOURSELF)
};
