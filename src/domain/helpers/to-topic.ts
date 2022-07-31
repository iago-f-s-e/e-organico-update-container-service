type ToTopic = (name: string) => string;

export const toTopic: ToTopic = name =>
  `update_container_${name.toLowerCase().split(/-|_/).join('_')}`;
