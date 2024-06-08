import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiCheckMark } from "react-icons/gi";
import { useGlobalState } from '../../GlobalState';
import LoadingButtonUniversal from '../LoadingButtonUniversal';
const UnsplashComponent = ({editing}) => {
  const {state, dispatch}=useGlobalState()
  const [images, setImages] = useState([]);
  const [stillChoosing, setStillChoosing]=useState(true)
  const [selectedImages, setSelectedImages] = useState([]);
  const [query, setQuery] = useState('');
  
  //fetch images from unsplash
  const fetchImages = async (searchQuery = 'preacher') => {
    console.log(searchQuery,editing)
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: searchQuery,
          per_page: 10,
        },
        headers: {
            Authorization: `Client-ID TO_s-9lGTvw7FUzd8P5L92dwvNptzu_msWT731Dtu7Q`
        }
      });
      setImages(response.data.results);
      setSelectedImages([])
    } catch (error) {
      console.error('Error fetching images from Unsplash:', error);
    }
  };



//Set images urls into global state  
const setImageForApi = () =>{
  console.log(editing)
    setStillChoosing(false)
    if(editing=='article'){
        dispatch({type:'SET_UNSPLASH_ARTICLES_IMAGES',payload:selectedImages})
    }
    if(editing=='message'){
        dispatch({type:'SET_UNSPLASH_MESSAGE_IMAGES',payload:selectedImages})
    }
    console.log(state)
}
  

const handleSelectImage = (image)=>{
    setStillChoosing(true)
    const imageUrl = image.urls.regular
    console.log(selectedImages)
    
    //Unselect clicked image if it was already selected 
    if(selectedImages.includes(imageUrl)){
        setSelectedImages(selectedImages.filter((url) => url !== imageUrl))
        return
    }

    //dont use more than two images
    if(selectedImages.length==2){
        return
    }
    setSelectedImages([...selectedImages,imageUrl])
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages(query);
  };

return (
 <>
    {images[0]&&<div className="mt-16">
      <h1 className="mt-6 text-2xl font-normal text-gray-600 mb-2">Search for images that matches your writeup</h1>
      <p className='pb-4   text-gray-500'>You can only select up to 2 images</p>
        {selectedImages[0]&&<p 
        onClick={setImageForApi}
        className='sticky  mb-4 flex-col text-white text-sm font-semibold top-32 z-10 left-0  flex justify-center items-center h-10 w-24 cursor-pointer bg-green-700'> 
        {stillChoosing?<span>Use {selectedImages.length} {selectedImages.length>1?'images':'image'}</span>:    
        <span className='flex items-center gap-2'>Selected <GiCheckMark/></span>}
        </p>
        }
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border rounded-md mr-2"
        />
        <button type="submit" className="px-4 my-4 py-2 bg-darkShade text-lightShade rounded  transition duration-300">
          Search
        </button>
        <LoadingButtonUniversal/>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image) => (
          <div key={image.id} className="relative ">
        
            <img
              src={image.urls.small}
              alt={image.description}
              className='cursor-pointer'
              onClick={() => handleSelectImage(image)}
            />
            <p className='text-sm mt-4 text-gray-400 italic'>{image.alt_description}</p>
            {selectedImages.includes(image.urls.regular) && (
              <div
               onClick={() => handleSelectImage(image)}
               className="w-12 absolute inset-0 flex items-center h-12 justify-center bg-black bg-opacity-50 text-white font-bold text-xl">
                <GiCheckMark/>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
}
</>
);
};

export default UnsplashComponent;
