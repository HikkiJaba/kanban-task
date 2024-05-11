import './Tag.css';

export default function Tag({ tag }: { tag: string }) {
	return <div className='tag-div'>{tag}</div>;
}
