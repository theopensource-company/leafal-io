import { useParams } from 'solid-start';

export default function StoreItemPage() {
    const { slug } = useParams();

    return (
        <div>
            <p style={{ color: 'white' }}>{slug}</p>
        </div>
    );
}
