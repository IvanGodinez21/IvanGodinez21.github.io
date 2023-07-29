import { DOMAttributes, HTMLAttributes } from 'react';

export default function H3({
  children,
  className,
}: {
  children: DOMAttributes<HTMLHeadingElement>['children'];
  className?: HTMLAttributes<HTMLHeadingElement>['className'];
}) {
  return (
    <h2 className={[className, 'text-lg'].filter(Boolean).join(' ')}>
      {children}
    </h2>
  );
}
