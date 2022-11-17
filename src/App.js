import { useState } from 'react';

import './App.css';
import Display from './components/Display';
import Thumbnails from './components/Thumbnails.js';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setSelectedItem(event.currentTarget.id);
    setIsShown(true);
  };
  
  // const gridRef = useRef();

  // useEffect(() => {
  //   const computed = {};
  //   computed.rowHeight = parseInt(window.getComputedStyle(gridRef.current).getPropertyValue('grid-auto-rows'));
  //   computed.rowGap = parseInt(window.getComputedStyle(gridRef.current).getPropertyValue('grid-row-gap'));
  // });

  const rowHeight = 1;
  const rowGap = 20 * (1 / rowHeight);

  return (
    <div>
      {isShown && (
        <Display ref={selectedItem} />
      )}
      <div className='thumbnail-container'>
        {thumbsData.map((thumb) => {
          return <Thumbnails onClick={handleClick} imgURL={thumb.imgURL} title={thumb.title} rowGap={rowGap} rowHeight={rowHeight} id={thumb.ref} key={thumb.ref} />
        })}
      </div>
    </div>
  );
}

const thumbsData = [
  {
    'imgURL': './thumbnails/thumbnail_advent.png',
    'title': 'Advent Challenge',
    'ref': 'advent'
  },
  {
    'imgURL': './thumbnails/thumbnail_april.png',
    'title': 'Work In The Garden',
    'ref': 'april'
  },
  {
    'imgURL': './thumbnails/thumbnail_foxes.png',
    'title': 'Watching the Clouds',
    'ref': 'foxes'
  },
  {
    'imgURL': './thumbnails/thumbnail_harvest.png',
    'title': 'Harvest'
  },
  {
    'imgURL': './thumbnails/thumbnail_badger.png',
    'title': 'Inked Animals',
    'ref': 'animals'
  },
  {
    'imgURL': './thumbnails/thumbnail_character.png',
    'title': 'Character Study',
    'ref': 'character'
  },
  {
    'imgURL': './thumbnails/thumbnail_picnic.png',
    'title': 'The Secret Valley',
    'ref': 'wpw'
  },
  {
    'imgURL': './thumbnails/thumbnail_walnut-tree-1.png',
    'title': 'On the Walnut Tree'
  },
  {
    'imgURL': './thumbnails/thumbnail_walnut-tree-2.png',
    'title': 'On the Walnut Tree 2'
  },
  {
    'imgURL': './thumbnails/thumbnail_september.png',
    'title': 'September Morning'
  },
  {
    'imgURL': './thumbnails/thumbnail_book-club.png',
    'title': 'Book Club'
  },
  {
    'imgURL': './thumbnails/thumbnail_crafting.png',
    'title': 'Crafting'
  },
  {
    'imgURL': './thumbnails/thumbnail_trip.png',
    'title': 'Trip to the Woods'
  },
]