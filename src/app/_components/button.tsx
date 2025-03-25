interface ButtonProps {
  name: string;
  title: string;
  href: string;
  className?: string;
}

export function Button({ name, title, className, href }: ButtonProps) {
  return (
    <a
      href={href}
      className={className}
      title={title}
      target="_blank"
      rel="nofollow"
    >
      {name}
    </a>
  );
}
