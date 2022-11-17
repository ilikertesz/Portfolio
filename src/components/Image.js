export default function Image({title, imgURL}) {
    return (
        <div>
            <img src={imgURL} alt={title} />
        </div>
    )
}