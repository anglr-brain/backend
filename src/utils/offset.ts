export const offset = (page: number, limit: number): number =>
  (page - 1) * limit;
