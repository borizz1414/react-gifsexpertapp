
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {

    // const categories = ['One', 'Two', 'Three'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Hulk']);
    //     setCategories(cats => [...categories, 'Huld']);
    // }
    return (<>
        <h1>Gifs Expert App</h1>
        <h4>Encuentra todo tipo de Gif</h4>
        <p className="subtitle">Practicando con react <a href="https://borisdev.com">Borisdev</a></p>
        
        <AddCategory setCategories={setCategories} />
        <hr />
        <ol>
            {
                categories.map(category => (
                    <GifGrid 
                    key={category}
                    category={category}/>
                ))
            }
        </ol>
    </>
    )
}

export default GifExpertApp;