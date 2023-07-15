import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';

export interface IContactMethod {
  icon: string | FunctionalComponent<HTMLAttributes & VNodeProps>;
  name: string;
  url: string;
}
