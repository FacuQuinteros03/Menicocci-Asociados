import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'xh2wmn6x', // tu projectId
  dataset: 'production', // tu dataset
  apiVersion: '2024-01-01', // versión de la API
  useCdn: false, // true para datos en cache y rápido
});
