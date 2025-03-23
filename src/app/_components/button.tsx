interface ButtonProps {
  name: string;
  title: string;
  className?: string;
}

export function Button({ name, title, className }: ButtonProps) {
  return (
    <a className={className} title={title} target="_blank" rel="nofollow">
      {name}
    </a>
  );
}
