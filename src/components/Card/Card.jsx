export default function Card({ data }) {
  return (
    <figure>
      <img src={data.imageUrl} alt={data.name} />
      <figcaption>{data.name}</figcaption>
    </figure>
  );
}
