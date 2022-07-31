import { toEndpoint, toTopic } from '../helpers';

const repositoryNames = {
  LOAD_BALANCER_E_ORGANICO_ROOT: 'load-balancer-e-organico-root',
  LOAD_BALANCER_E_ORGANICO_MARKET_SERVICE: 'load-balancer-e-organico-market-service',
  E_ORGANICO_MARKET_SERVICE: 'e-organico-market-service',
  UPDATE_YOURSELF: 'e-organico-update-container-service'
};

export const endpoints = {
  LOAD_BALANCER_E_ORGANICO_ROOT: toEndpoint(repositoryNames.LOAD_BALANCER_E_ORGANICO_ROOT),
  LOAD_BALANCER_E_ORGANICO_MARKET_SERVICE: toEndpoint(
    repositoryNames.LOAD_BALANCER_E_ORGANICO_MARKET_SERVICE
  ),
  E_ORGANICO_MARKET_SERVICE: toEndpoint(repositoryNames.E_ORGANICO_MARKET_SERVICE),
  UPDATE_YOURSELF: toEndpoint(repositoryNames.UPDATE_YOURSELF)
};

export const topics = {
  LOAD_BALANCER_E_ORGANICO_ROOT: toTopic(repositoryNames.LOAD_BALANCER_E_ORGANICO_ROOT),
  LOAD_BALANCER_E_ORGANICO_MARKET_SERVICE: toTopic(
    repositoryNames.LOAD_BALANCER_E_ORGANICO_MARKET_SERVICE
  ),
  E_ORGANICO_MARKET_SERVICE: toTopic(repositoryNames.E_ORGANICO_MARKET_SERVICE),
  UPDATE_YOURSELF: toTopic(repositoryNames.UPDATE_YOURSELF)
};
