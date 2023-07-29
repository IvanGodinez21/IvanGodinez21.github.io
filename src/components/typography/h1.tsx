import { DOMAttributes, HTMLAttributes } from 'react';

export default function H1({
  children,
  className,
}: {
  children: DOMAttributes<HTMLHeadingElement>['children'];
  className?: HTMLAttributes<HTMLHeadingElement>['className'];
}) {
  return (
    <h1 className={[className, 'text-2xl'].filter(Boolean).join(' ')}>
      {children}
    </h1>
  );
}
