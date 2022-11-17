import Description from "./Description";
import Gallery from "./Gallery";
import Navigation from "./Navigation";

export default function Display({ ref }) {
    return (
        < Navigation >
            < Gallery items={data[ref].images} />
            < Description description={data[ref].description} />
        </Navigation>
    )
}

const data = {
    advent: {
        images: [
            {
                title: 'In the snow',
                imgURL: './images/advent/advent003_edited.jsp'
            },
            {
                title: 'Making Friends',
                imgURL: './images/advent/advent008_edited2.jpg'
            },
            {
                title: 'Going Home',
                imgURL: './images/advent/advent015_edited.jpg'
            },
            {
                title: 'In the Christmas Market',
                imgURL: './images/advent/advent016_edited.jpg'
            },
            {
                title: 'Above the Roofs',
                imgURL: './images/advent/advent042_edited.jpg'
            },
            {
                title: 'Good Night',
                imgURL: './images/advent/advent045_square_edited.jpg'
            },
            {
                title: 'The Christmas Present',
                imgURL: './images/advent/advent074_1var2_edited.jpg'
            }
        ],
        description: 'I created this series of pictures for an instagram challenge.'
    },
    april: {
        images: [
            {
                title: 'Work in the Garden',
                imgURL: './images/april_ed.png'
            }
        ],
        description: 'I made this picture for a family calendar.'
    }
}