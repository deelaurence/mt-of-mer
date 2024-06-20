import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Popup from '../Popup';
import { Link } from 'react-router-dom';
import LoadingButtonUniversal from '../LoadingButtonUniversal';
import baseUrl from '../../data/baseUrl';
import tornPaper from '../../assets/paper.png'
import UnsplashComponent from './Unsplash';
import { useGlobalState } from '../../GlobalState';
import { IoIosImages } from "react-icons/io";
import { MdOutlineAddCircle, MdOutlineUploadFile } from "react-icons/md";
import { convertToBase64, adjustHeight } from '../../utils/snippets';
import paperBg from '../../assets/paper-bg.jpg'
import paperBg2 from '../../assets/paper-bg1.jpg'
import paperBg3 from '../../assets/paper-bg2.jpg'
import pencil from '../../assets/pencil.png'
import { RiLogoutCircleFill } from 'react-icons/ri';
import BackButton from './BackButton';
import SinglePost from '../SinglePost';

const PostFormComponent = ({ formType }) => {
    const { state } = useGlobalState();
    const [popupMsg, setPopupMsg] = useState("");
    const [editingPost,setEditingPost]=useState(null)
    const [singlePostEdit,setSinglePostEdit]=useState(null)

    const [imagesSource, setImagesSource] = useState('');
    const [selectedImagesInfo, setSelectedImagesInfo] = useState([]);
    const [isLoading, setIsLoading]=useState(false)
    const [isLoading_edit, setIsLoading_edit]=useState(false)
    
    const [pictureAvailable,setPictureAvailable]=useState(null)
    const [buttonMessage,setButtonMessage]=useState(`Submit ${formType.charAt(0).toUpperCase() + formType.slice(1)}`)
    const initialFormData={
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
    }
    const [formData, setFormData] = useState(initialFormData);
    //hold uploaded image files
    const [pictureFiles, setPictureFiles] = useState([]);
    const textAreaRefs = useRef({});


    
    //************************
    // exclusive to edit post
    //************************

    //fetch post to be edited
    const fetchPosts = async () => {
        try {
            setIsLoading_edit(true)
            const response = await axios.get(`${baseUrl}/${formType}s/all`);
            const adminName = sessionStorage.getItem('admin_name')
            
            const filterEditorPosts=response.data.filter((post)=>{
                return post.author===adminName
            })
            setEditingPost(filterEditorPosts);
            

            setIsLoading_edit(false)
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };



    //After geting the list of posts,
    //clicking on one sets the value of singlePostEdit
    const handleEditClick = (post) => {
        setSinglePostEdit(post)
        setButtonMessage("Confirm Edit")
        if(post.image[0]){
            setPictureAvailable(true)
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        setFormData({
            ...post,
            writerOrMinister: post.writer || post.minister,
            pictures: post.image || []
        });
    };




    //Adjust the height of textArea automatically
    useEffect(() => {
        Object.values(textAreaRefs.current).forEach(adjustHeight);
    }, []);




    //handle Input change when creating or editing
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


    




    //handle picture upload
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




    //Submit new or edited post
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
            //If there are images in unsplashState, 
            //erase the images in uploaded state
            if ((formType === 'article' && state.unsplashArticleImages[0]) ||
             (formType === 'message' && state.unsplashMessageImages[0])) {
                uploadPictures = [];
            }
            const token = sessionStorage.getItem('admin_token');
            if (!token) {
                throw new Error('No authentication token found');
            }

            
            const endpoint = editingPost&&singlePostEdit
                ? `${baseUrl}/${formType}/${singlePostEdit._id}`
                : `${baseUrl}/${formType}`;

            const method = editingPost&&singlePostEdit ? 'put' : 'post';
            
            const unsplashPictures = formType === 'article' ? state.unsplashArticleImages : state.unsplashMessageImages;
            
            
            let hasPictures = unsplashPictures.length > 0 || uploadPictures.length > 0;
            if (!hasPictures&&!pictureAvailable) {
                setPictureAvailable(!pictureAvailable)
                alert("Are you sure you want to submit without pictures?");
                setButtonMessage('Try and use pictures na!');
                setIsLoading(false);
                return;
            }


            const response = await axios({
                method,
                url: endpoint,
                data: {
                    ...formData,
                    writer: formType === 'article' ? formData.writerOrMinister : undefined,
                    minister: formType === 'message' ? formData.writerOrMinister : undefined,
                    unsplashPictures,
                    pictures: singlePostEdit?.image??uploadPictures
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setEditingPost(null)
            setPictureAvailable(false)            
            setButtonMessage('Bravo!, awaiting review')
            setSinglePostEdit(null)
            setIsLoading(false)
            setFormData(initialFormData)
            // window.location.reload()
        } catch (error) {
            setPopupMsg(error.response ? error.response.data.message : error.message);
            setIsLoading(false)
            setButtonMessage(error.response ? error.response.data.message : error.message);
            console.error(`Error uploading ${formType}:`, error);
        }
    };

    return (
        <div 
        
        style={{ backgroundImage: `url(${paperBg3})` }}
        className={`${singlePostEdit&&editingPost?'border-2 overflow-hidden border-green-400':'border-none'} px-6 md:px-16 pt-44 pb-12`}>
            <BackButton/>
            <div
            // style={{ backgroundImage: `url(${paperBg3})` }}
            className="mx-auto relative mt-8 p-6 bg-transparent overflow-hidden rounded-lg">
                <h2 className="relative z-[0] mb-12 mt-6 text-2xl itaic font-semibold text-gray-600">Add {formType.charAt(0).toUpperCase() + formType.slice(1)}.</h2>
                {popupMsg && <Popup message={popupMsg} setPopupMsg={setPopupMsg} link={`/add-${formType}`} />}
                <form onSubmit={handleSubmit} className="space-y-4 relative z-[0]">
                    
                    
                    {/*TITLE*/}
                    
                    <div>
                        <label className="block text-gray-700 text-xl font-semibold">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder={`Enter the ${formType} title`}
                            className="w-full p-2 bg-[#FAFAFA20] border-gray-300 font-medium text-gray-700 rounded-md"
                            required
                        />
                    </div>
                    
                    
                    <div>
            {/* WRITER OR MINISTER */}
            <div>
                <label className="block text-gray-700 font-semibold">
                    {formType === 'article' ? 'Writer' : 'Minister'}
                </label>
                <select
                    name="writerOrMinister"
                    value={formData.writerOrMinister}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#FAFAFA20] border-gray-300 font-medium text-gray-700 rounded-md"
                    required
                >
                    <option value="" disabled>
                        {`Select the ${formType === 'article' ? 'author' : 'minister'}`}
                    </option>
                    {state.allAuthors?.map((author, index) => (
                        <option key={index} value={author.name}>
                            {author.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>

                    {/*hEADINGS 1,2,3*/}
                    {['One', 'Two', 'Three'].map((field, index) => (
                        <div key={index}>
                            <label className="block text-gray-700 mt-8 font-semibold">{`Heading ${field}`}</label>
                            <input
                                type="text"
                                name={`heading${field}`}
                                value={formData[`heading${field}`]}
                                onChange={handleInputChange}
                                placeholder={`Enter heading ${field}`}
                                className="w-full p-2 bg-[#FAFAFA20] border-gray-300 font-medium text-gray-700 rounded-md"
                            />

                    {/*PARAGRAPHS ONE,TWO,THREE*/}
                    <label className="block text-xs mt-2 mb-1 font-semibold text-gray-500">{`Paragraph ${field}`}</label>
                            <textarea
                                name={`paragraph${field}`}
                                value={formData[`paragraph${field}`]}
                                onChange={handleInputChange}
                                placeholder={`Enter paragraph ${field}`}
                                className="w-full p-2 border text-sm text-gray-600 italic font-medium border-gray-300 rounded-md"
                                rows="1"
                                ref={el => (textAreaRefs.current[`paragraph${field}`] = el)}
                                required={index === 0}
                            ></textarea>
                    
                    {/*qUOTES 1,2,3*/}
                    <label className="block text-xs mt-2 mb-1 font-semibold text-gray-500">{`Quote ${field}`}</label>
                            <textarea
                                name={`quote${field}`}
                                value={formData[`quote${field}`]}
                                onChange={handleInputChange}
                                placeholder={`Enter quote ${field}`}
                                className="w-full p-2 border text-sm text-gray-600 italic font-medium border-gray-300 rounded-md"
                                rows="1"
                                ref={el => (textAreaRefs.current[`quote${field}`] = el)}
                            ></textarea>
                        </div>
                    ))}


                    {/*KEY POINTS 1-10*/}
                    {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', "Ten"].map((field, i) => (
                        <div key={i}>
                            <label className="block text-sm text-gray-700">{`Point ${i + 1}*`}</label>
                            <input
                                type="text"
                                name={`point${field}`}
                                value={formData[`point${field}`]}
                                onChange={handleInputChange}
                                placeholder={`Enter point ${i + 1}`}
                                className="w-full bg-transparent p-2 border  border-gray-300 rounded-md"
                            />
                        </div>
                    ))}
                    <div>
                        
                    
                    <label className="block text-gray-700 pt-4 font-semibold">Add Pictures</label>
                        <div className='pl-1 text-gray-700 pt-2 pb-4 flex w-max gap-4 justify-around'>
                            
                            
                            {/*UPLOAD PICTURES FROM DEVICE*/}
                            <div
                                onClick={() => { setImagesSource('local') }}
                                className='flex gap-1 text-green-700 cursor-pointer underline items-center'>Upload <MdOutlineUploadFile /></div>
                            
                            
                            {/*UPLOAD PICTURES FROM UNSPLASH*/}
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


                        {/*IF UPLOADING FROM DEVICE, SHOW COMPONENT*/}
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

                        {/*DISPLAY LOCAL PICTURE*/}    
                        {formData&&<div className='flex gap-2 mt-4'>
                            {formData.pictures.map((pic, index) => (
                                <div key={index} className='relative'>            
                                    <img src={pic.src||pic} alt={`Selected ${formType} pic ${index + 1}`} className='w-32 h-32 object-cover rounded-md' />
                                </div>
                            ))}
                        </div>}
                    </div>


                    {/*SUBMIT BUTTON*/}
                    <button 
                    disabled={isLoading}
                    type="submit" 
                    className={`w-full py-2 mt-6 flex justify-center bg-darkShade rounded-md shadow-md ${isLoading ? "opacity-90" : ""}`}>
                        <LoadingButtonUniversal
                        text={buttonMessage} 
                        loading={isLoading}/>
                    </button> 
                </form>

                {/*IF ONLINE PICTURES PICKED, SHOW UNSPLASH COMPONENT*/}
                {imagesSource === 'online' && <UnsplashComponent editing={formType} />}
                

                {/* EDIT BUTTON FOR EDITING MODE */}
                {!editingPost&&<button 
                    onClick={()=>{
                        fetchPosts()          
                    }}
                    disabled={false}
                    type="submit" 
                    className={`w-full relative py-2 mt-6 flex justify-center bg-gray-500 rounded-md shadow-md ${false ? "opacity-90" : ""}`}>
                        <LoadingButtonUniversal
                        text={`Edit your ${formType}s`} 
                        loading={false}/>
                </button>}

                {/*LIST OF POSTS TO PICK POTENTIAL EDIT FROM*/}
                {editingPost&&
                <div className="mt-12 relative bg-opacity-40  border-gray-500">
                    <h2 className="text-lg mb-12 font-semibold text-gray-600 capitalize">Select the {formType} you want to edit</h2>
                    <div>
                        {editingPost.map((post) => (
                            <div key={post.id}
                            onClick={()=>{handleEditClick(post)}}
                            className="mt-4 border-b border-gray-400 flex justify-between items-center">
                                <div className='max-w-full'>
                                    <h3 
                            
                                    className="text-3xl max-w-full text-gray-700 font-semibold ">{post.title}.</h3>
                                    <p className="text-gray-600 text-sm overflow-hidden">{post.writer || post.minister}</p>
                                    <p className='text-xs italic text-gray-500 mt-2'>{post.paragraphOne.slice(0,200)}...</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                }
                {isLoading_edit&& 
                    <div className='flex items-center relative my-6 py-2 justify-center bg-orange-400'>
                        <LoadingButtonUniversal
                        text={`Fetching posts`} 
                        loading={true}/>
                    </div>
                }
        


            </div>
        </div>
    );
};

export default PostFormComponent;
