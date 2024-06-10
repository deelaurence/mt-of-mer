import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Popup from '../Popup';
import LoadingButtonUniversal from '../LoadingButtonUniversal';
import baseUrl from '../../data/baseUrl';
import tornPaper from '../../assets/paper.png'
import UnsplashComponent from './Unsplash';
import { useGlobalState } from '../../GlobalState';
import { IoIosImages } from "react-icons/io";
import { MdOutlineAddCircle, MdOutlineUploadFile } from "react-icons/md";
import { convertToBase64, adjustHeight } from '../../utils/snippets';
import paperBg from '../../assets/paper-bg.jpg'


const PostFormComponent = ({ formType }) => {
    const { state } = useGlobalState();
    const [popupMsg, setPopupMsg] = useState("");
    const [imagesSource, setImagesSource] = useState('');
    const [selectedImagesInfo, setSelectedImagesInfo] = useState([]);
    const [isLoading, setIsLoading]=useState(false)
    const [buttonMessage,setButtonMessage]=useState(`Submit ${formType.charAt(0).toUpperCase() + formType.slice(1)}`)
    const [formData, setFormData] = useState({
        title: '',
        writerOrMinister: '',
        headingOne: '',
        paragraphOne: '',
        quoteOne: '',
        headingTwo: '',
        paragraphTwo: '',
        quoteTwo: '',
        headingThree: '',
        paragraphThree: '',
        quoteThree: '',
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
        Object.values(textAreaRefs.current).forEach(adjustHeight);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (textAreaRefs.current[name]) {
            adjustHeight(textAreaRefs.current[name]);
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 2) {
            setPopupMsg("You cannot select more than two images");
            return;
        }
        setSelectedImagesInfo(files);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setButtonMessage('Hold on...')
        let uploadPictures = await Promise.all(pictureFiles.map(async (file) => {
            const base64 = await convertToBase64(file);
            return {
                title: file.name,
                src: base64
            };
        }));

        try {
            if ((formType === 'article' && state.unsplashArticleImages[0]) || (formType === 'message' && state.unsplashMessageImages[0])) {
                uploadPictures = [];
            }
            const token = sessionStorage.getItem('admin_token');
            if (!token) {
                throw new Error('No authentication token found');
            }
            const endpoint = formType === 'article' ? `${baseUrl}/article` : `${baseUrl}/message`;
            const unsplashPictures = formType === 'article' ? state.unsplashArticleImages : state.unsplashMessageImages;
            let noPictures;
            console.log(unsplashPictures)
            console.log(uploadPictures)
            if(!unsplashPictures[0]&&!uploadPictures[0]&&noPictures!==false){
                noPictures=true
            } 
            if(noPictures){
                alert("Are you sure you want to submit without pictures?")
                noPictures=false
                setButtonMessage('Try and use pictures na!')
                setIsLoading(false)
                return
            }
            const response = await axios.post(
                endpoint,
                {
                    ...formData,
                    writer: formType === 'article' ? formData.writerOrMinister : undefined,
                    minister: formType === 'message' ? formData.writerOrMinister : undefined,
                    unsplashPictures,
                    pictures: uploadPictures
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

                        
            setButtonMessage('Bravo!, awaiting review')
            setIsLoading(false)
        } catch (error) {
            setPopupMsg(error.response ? error.response.data.message : error.message);
            setIsLoading(false)
            setButtonMessage(error.response ? error.response.data.message : error.message);
            console.error(`Error uploading ${formType}:`, error);
        }
    };

    return (
        <div className="px-6 md:px-16 pt-44 pb-12">
            {/* <img src={tornPaper} alt="" /> */}
            <div
            style={{ backgroundImage: `url(${paperBg})` }}
            className="mx-auto   p-6 bg-white border shadow-md rounded-lg">
                
                <h2 className="mb-12 mt-6 text-2xl itaic font-semibold text-gray-600">Add {formType.charAt(0).toUpperCase() + formType.slice(1)}.</h2>
                {popupMsg && <Popup message={popupMsg} setPopupMsg={setPopupMsg} link={`/add-${formType}`} />}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-xl font-semibold">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder={`Enter the ${formType} title`}
                            className="w-full p-2 bg-[#FAFAFA20] border-gray-300 text-gray-700 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">{formType === 'article' ? 'Writer' : 'Minister'}</label>
                        <input
                            type="text"
                            name="writerOrMinister"
                            value={formData.writerOrMinister}
                            onChange={handleInputChange}
                            placeholder={`Enter the name of the ${formType === 'article' ? 'author' : 'minister'}`}
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
                            <label className="block text-xs mt-2 mb-1 font-semibold text-gray-500">{`Quote ${field}`}</label>
                            <textarea
                                name={`quote${field}`}
                                value={formData[`quote${field}`]}
                                onChange={handleInputChange}
                                placeholder={`Enter quote ${field}`}
                                className="w-full p-2 border text-sm text-gray-600 italic border-gray-300 rounded-md"
                                rows="1"
                                ref={el => (textAreaRefs.current[`quote${field}`] = el)}
                            ></textarea>
                        </div>
                    ))}
                    {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', "Ten"].map((field, i) => (
                        <div key={i}>
                            <label className="block text-sm text-gray-700">{`Point ${i + 1}*`}</label>
                            <input
                                type="text"
                                name={`point${field}`}
                                value={formData[`point${field}`]}
                                onChange={handleInputChange}
                                placeholder={`Enter point ${i + 1}`}
                                className="w-full bg-transparent p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    ))}
                    <div>
                        <label className="block text-gray-700 pt-4 font-semibold">Add Pictures</label>
                        <div className='pl-1 text-gray-700 pt-2 pb-4 flex w-max gap-4 justify-around'>
                            <div
                                onClick={() => { setImagesSource('local') }}
                                className='flex gap-1 text-green-700 cursor-pointer underline items-center'>Upload <MdOutlineUploadFile /></div>
                            <div
                                onClick={() => {
                                    setImagesSource('online');
                                    setSelectedImagesInfo([]);
                                    setFormData({
                                        ...formData,
                                        pictures: []
                                    });
                                }}
                                className='flex gap-1 text-orange-700 cursor-pointer underline items-center'>Search Online <IoIosImages /></div>
                        </div>
                        {imagesSource === 'local' &&
                            <>
                                <label
                                    className='my-4 border-2 cursor-pointer border-darkShade px-2 py-1 w-max flex flex-row items-center gap-1 text-darkShade'
                                    htmlFor='file-upload'>
                                    <p className=''>{selectedImagesInfo.length === 0 ? 'Select Images' : 'Selected'}</p>
                                    {selectedImagesInfo.length > 0 && <p>{selectedImagesInfo.length} Image{selectedImagesInfo.length > 1 ? 's' : ''}</p>}
                                    <MdOutlineAddCircle />
                                </label>
                                <input
                                    type='file'
                                    id='file-upload'
                                    name='pictures'
                                    accept='image/*'
                                    onChange={handleFileChange}
                                    multiple
                                    className='hidden'
                                />
                            </>}
                        <div className='flex gap-2 mt-4'>
                            {formData.pictures.map((pic, index) => (
                                <div key={index} className='relative'>
                                    <img src={pic.src} alt={`Selected ${formType} pic ${index + 1}`} className='w-32 h-32 object-cover rounded-md' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button 
                    disabled={isLoading}
                    type="submit" 
                    className={`w-full py-2 mt-6 flex justify-center bg-darkShade rounded-md shadow-md ${isLoading ? "opacity-90" : ""}`}>
                        <LoadingButtonUniversal
                        text={buttonMessage} 
                        loading={isLoading}/>
                    </button> 
                </form>
                
                {imagesSource === 'online' && <UnsplashComponent editing={formType} />}
            </div>
        </div>
    );
};

export default PostFormComponent;
