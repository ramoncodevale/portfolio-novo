	interface ButtonProps {
	    name: string;
	    href: string;
	    title: string;
	    className?: string;
	}

	export function Button({ name, href, title, className }: ButtonProps) {
	    return (
	        <a href={href} className={className} title={title} target="_blank" rel="nofollow">
	            {name}
	        </a>
	    );
	}
