interface Props {
	content?: string;
}

export const ItemLiDelete = ({ content }: Props) => (
	<li>
		<a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="h-4 w-4"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M10 8l4 8" />
				<path d="M10 16l4 -8" />
			</svg>
			{content ? <>{content}</> : "Delete"}
		</a>
	</li>
);
