import Image from "./Image.js"

export default function Gallery({items}) {
    return (
        <div>
            {items.map((item) => 
                <Image title={item.title} imgURL={item.imgURL} key={item.title} />
            )}
        </div>
    );
}