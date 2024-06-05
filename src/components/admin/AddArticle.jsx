import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Popup from '../Popup';
import baseUrl from '../../data/baseUrl';
import UnsplashComponent from './Unsplash';
import { useGlobalState } from '../../GlobalState';
import { IoIosImages } from "react-icons/io";
import {  MdOutlineAddCircle, MdOutlineUploadFile } from "react-icons/md";
import { convertToBase64,adjustHeight } from '../../utils/snippets';



const ArticleForm = () => {
    const {state} = useGlobalState()
    const [popupMsg, setPopupMsg] = useState("");
    const [imagesSource, setImagesSource] = useState('')
    const [selectedImagesInfo, setSelectedImagesInfo]=useState([])
    const [formData, setFormData] = useState({
        title: '',
        writer: '',
        headingOne: '',
        paragraphOne: '',
        headingTwo: '',
        paragraphTwo: '',
        headingThree: '',
        paragraphThree: '',
        pointOne: '',
        pointTwo: '',
        pointThree: '',
        pointFour: '',
        pointFive: '',
        pointSix: '',
        pointSeven: '',
        pointEight: '',
        pointNine: '',
        pointTen: '',
        pictures: []
    });

    const [pictureFiles, setPictureFiles] = useState([]);
    const textAreaRefs = useRef({});

    useEffect(() => {
        // Make the text area height auto adjustable
        Object.values(textAreaRefs.current).forEach(adjustHeight);
    }, []);


    // form input handler excluding uploaded pictures
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        console.log(name,value)
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData)
        if (textAreaRefs.current[name]) {
            adjustHeight(textAreaRefs.current[name]);
        }
    };

    
    
    //form input handler for pictures
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if(files.length>2){
            setPopupMsg("You can not select more than two images")
            return
        }
        //so that UI reflects the image metadata and how many images were
        //chosen
        setSelectedImagesInfo(files)
        

        //create blob files
        const pictures = files.map(file => ({
            title: file.name,
            src: URL.createObjectURL(file)
        }));
        setFormData({
            ...formData,
            pictures
        });
        setPictureFiles(files);
    };


    //submit form
    const handleSubmit = async (e) => {
        e.preventDefault();        
        let uploadPictures = await Promise.all(pictureFiles.map(async (file) => {
            const base64 = await convertToBase64(file);
            return {
                title: file.name,
                src: base64
            };
        }));


        

        try {
            //If user opted for unplash images, clear any uploaded image
            if(state.unsplashArticleImages[0]){
                uploadPictures=[]
            }
            const token = sessionStorage.getItem('admin_token');
            
            if (!token) {
                throw new Error('No authentication token found');
            }
            // return
            const response = await axios.post(
                
                `${baseUrl}/article`,
                {
                    ...formData,
                    unsplashPictures:state.unsplashArticleImages,
                    pictures: uploadPictures
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log('Article uploaded successfully:', response.data);
        } catch (error) {
            setPopupMsg(error.response ? error.response.data.message : error.message);
            console.error('Error uploading article:', error);
        }
    };

    

    return (
        <div className="px-6 md:px-16 pt-12 pb-44">
            
            <div  className=" mx-auto border-t-[15px]   border-[rgba(33,33,33,.5)]  p-6 bg-white pt-12 shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Article</h2>    
            {popupMsg && <Popup message={popupMsg} setPopupMsg={setPopupMsg} link="/add-article" />}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-xl font-semibold">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter the article title"
                        className="w-full p-2 bg-[#FAFAFA20] border-gray-300 text-gray-700 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Writer</label>
                    <input
                        type="text"
                        name="writer"
                        value={formData.writer}
                        onChange={handleInputChange}
                        placeholder="Enter the name of the author of this article"
                        className="w-full p-2 bg-[#FAFAFA20] border-gray-300 text-gray-700 rounded-md"
                        required
                    />
                </div>
                {['One', 'Two', 'Three'].map((field, index) => (
                    <div key={index}>
                        <label className="block text-gray-700 mt-8 font-semibold">{`Heading ${field}`}</label>
                        <input
                            type="text"
                            name={`heading${field}`}
                            value={formData[`heading${field}`]}
                            onChange={handleInputChange}
                            placeholder={`Enter heading ${field}`}
                            className="w-full p-2 bg-[#FAFAFA20] border-gray-300 text-gray-700 rounded-md"
                        />
                        <label className="block text-xs mt-2 mb-1 font-semibold text-gray-500">{`Paragraph ${field}`}</label>
                        <textarea
                            name={`paragraph${field}`}
                            value={formData[`paragraph${field}`]}
                            onChange={handleInputChange}
                            placeholder={`Enter paragraph ${field}`}
                            className="w-full p-2 border text-sm text-gray-600 italic border-gray-300 rounded-md"
                            rows="1"
                            ref={el => (textAreaRefs.current[`paragraph${field}`] = el)}
                            required={index === 0}
                        ></textarea>
                    </div>
                ))}
                {['One', 'Two', 'Three','Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',"Ten"].map((field, i) => (
                    <div key={i}>
                        <label className="block text-sm text-gray-700">{`Point ${i + 1}*`}</label>
                        <input
                            type="text"
                            name={`point${field}`}
                            value={formData[`point${field}`]}
                            onChange={handleInputChange}
                            placeholder={`Enter point ${i+1}`}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                ))}
                <div>
                    <label className="block text-gray-700  pt-4 font-semibold">Add Pictures</label>
                    <div className='pl-1 text-gray-700 pt-2 pb-4 flex w-max gap-4 justify-around'>
                        <div 
                        onClick={()=>{setImagesSource('local')}}
                        className='flex gap-1 text-green-700 cursor-pointer underline items-center'>Upload <MdOutlineUploadFile/></div>    
                        
                        <div
                        onClick={()=>{
                            setImagesSource('online');
                            setSelectedImagesInfo([])
                            setFormData({
                                ...formData,
                                pictures:[]
                            });

                        }} 
                        className='flex gap-1 text-orange-700 cursor-pointer underline items-center'>Search Online <IoIosImages/></div>    
                    </div>    

                    {imagesSource=='local'&& 
                    
                    <>
                    <label 
                        className='my-4 border-2 cursor-pointer border-darkShade px-2 py-1 w-max flex flex-row items-center gap-1 text-darkShade' 
                        htmlFor='file-upload'>
                        <p className=''>{selectedImagesInfo.length==0?'Select Images':'Selected'}</p>
                        {selectedImagesInfo.length>0&&<p>{selectedImagesInfo.length} Image{selectedImagesInfo.length>1?'s':''}</p>}  
                        {selectedImagesInfo.length==0?<MdOutlineAddCircle/>:''}
                        <input
                        type="file"
                        accept='image/*'
                        multiple
                        id='file-upload'
                        onChange={handleFileChange}
                        className="w-full  border hidden border-gray-300 rounded-md"
                    />
                    </label>
                    <div className='pl-1 text-sm italic'>
                    {selectedImagesInfo.map((image,index)=>{
                            return(
                                <p key={index}>{index+1} &mdash; {image.name}</p>
                            )
                        })}
                    </div>
                    </> 
                    }
                </div>

                <button type="submit" className="w-full p-2 bg-darkShade text-lightShade rounded-md">Submit</button>
            </form>
            </div>
            {imagesSource=='online'&&<UnsplashComponent editing="article"/>}
        </div>
    );
};

export default ArticleForm;
