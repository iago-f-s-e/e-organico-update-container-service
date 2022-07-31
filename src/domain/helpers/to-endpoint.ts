type ToEndpoint = (name: string) => string;

export const toEndpoint: ToEndpoint = name => name.toLowerCase().split(/-|_/).join('-');
