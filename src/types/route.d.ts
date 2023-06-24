export interface IRoute {
  name: string;
  path(): IRoute['name'];
}
