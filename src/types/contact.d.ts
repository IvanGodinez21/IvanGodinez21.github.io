import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, SVGProps } from 'react';

interface IContactMethod {
  icon:
    | string
    | ForwardRefExoticComponent<
        PropsWithoutRef<SVGProps<SVGSVGElement>> & {
          title?: string;
          titleId?: string;
        } & RefAttributes<SVGSVGElement>
      >;
  name: string;
  url: string;
}
