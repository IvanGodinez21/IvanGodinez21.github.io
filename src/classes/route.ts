import { IRouteConstructor } from '@/types/route.js';

export default class Route {
  public name: IRouteConstructor['name'];

  constructor({ name }: { name: string }) {
    this.name = name;
  }

  get path() {
    if (this.name !== 'about') return `/${this.name}`;
    return '/';
  }
}
