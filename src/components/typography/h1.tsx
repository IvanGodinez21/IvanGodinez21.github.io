export default function H1({ children }: { children: string }) {
  return <h1 className={'text-2xl font-semibold first-letter:uppercase'}>{children}</h1>;
}
