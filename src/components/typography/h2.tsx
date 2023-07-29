import { DOMAttributes, HTMLAttributes } from 'react';

export default function H2({
  children,
  className,
}: {
  children: DOMAttributes<HTMLHeadingElement>['children'];
  className?: HTMLAttributes<HTMLHeadingElement>['className'];
}) {
  return (
    <h2 className={[className, 'text-xl'].filter(Boolean).join(' ')}>
      {children}
    </h2>
  );
}
