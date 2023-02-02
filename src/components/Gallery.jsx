export default function Gallery({list}){
    return <div>
        {list.map((item, index) => <figure key={index}>
            <img src={item.imageUrl} alt={item.name} />
            <figcaption>{item.name}</figcaption></figure>)}
    </div>
}