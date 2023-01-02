import { Path } from 'path-parser';
import { stringify } from 'query-string';

const buildPath = (template: string, values: object): string => {
  try {
    const path = new Path(template);
    return path.build(values);
  } catch (e) {
    return '';
  }
};

const buildQueryString = (queryParams: object) => {
  if (!queryParams || !Object.keys(queryParams).length) return '';
  return `?${stringify(queryParams)}`;
};

export const routeContext = <P extends object, Q extends object>(path: string) => ({
  path,
  url: (args: { params: P; query: Q }) => {
    const { params, query } = args;

    const urlParams = Boolean(params) ? params : {};
    const urlQuery = Boolean(query) ? query : {};

    return `${buildPath(path, urlParams)}${buildQueryString(urlQuery)}`;
  },
});
