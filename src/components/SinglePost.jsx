import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {LuShare, LuShare2, LuTimer} from 'react-icons/lu'
import axios from 'axios';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { useInView } from "react-intersection-observer";
import { useGlobalState } from '../GlobalState';
import Waiting from './Waiting';
import capitalizeFirst from '../utils/capitalize';
import next from '../assets/next.png';
import baseUrl from '../data/baseUrl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingButtonUniversal from './LoadingButtonUniversal';
import { BsWindowSidebar } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const SinglePost = ({postType}) => {
    const { state } = useGlobalState();
    const { id } = useParams();
    const [ref, inView] = useInView();
    const parentRef = useRef(null);
    const findingsRef = useRef(null);


    const [singlePost, setSinglePost] = useState({});
    const [imageOne, setImageOne] = useState(false);
    const [imageTwo, setImageTwo] = useState(false);
    const [socialIcon, setSocialIcon] = useState(false);
    const [PostIsArray, setPostIsArray] = useState(false);
    const [publishMessage, setPublishMessage]=useState("Publish")
    const [loading,setLoading]=useState(false)
    const [popupImg, setPopupImg] = useState('');
    const [pop, setPop] = useState(false);
    const [landscape, setLandscape] = useState(false);
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(window.location.href)}`;
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    const dummy = "You are reading this because this author hasn't completed the bio part of thier profile which would not be allowed when the application fully launches"
    const [points,setPoints] = useState([])

    // const whatsappLink=`whatsapp://send?text=${window.location.href}`
    // const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`

    
    useEffect(() => {
        const fetchData = async () => {
            let globalPostsArray;
            if(postType=='article'){
                globalPostsArray=state.allArticles
            } 
            if(postType=='message'){
                globalPostsArray=state.allMessages
            }
            if(!globalPostsArray) return;


            const jsonData = globalPostsArray.find(element => element._id === id);
            if (!jsonData) return;
            const {paragraphOne,paragraphTwo,paragraphThree}=jsonData
            if(typeof paragraphOne=='string'){
                jsonData.paragraphOne=paragraphOne.split("<br/>");
            }
            if (paragraphTwo&&typeof paragraphTwo=='string'){
                jsonData.paragraphTwo = paragraphTwo.split("<br/>");
            } 
            if (paragraphThree&&typeof paragraphThree=='string'){
                jsonData.paragraphThree = paragraphThree.split("<br/>");
            } 
            setPostIsArray(true);





            setImageOne(jsonData.image && jsonData.image[0] ? true : false);
            setImageTwo(jsonData.image && jsonData.image[1] ? true : false);
            
            setSinglePost(jsonData);
            //make the key points into an array and filter out the empty ones
            const keyPoints = Object.keys(jsonData)
                .filter(key=>key.startsWith('point'))
                .map(key=>jsonData[key])
                .filter(key=>key!=="")

            setPoints(keyPoints)

            
        };

        fetchData();
    }, [state , id]);

    const handleDecrease = () => {
        setPop(!pop);
    };
    return (
      <>
            {true && (
                <div>
                    <Helmet>
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content={singlePost.title ? capitalizeFirst(singlePost.title) : "Title"} />
                        <meta property="og:description" content={singlePost.aboutAuthor || "Description of the post"} />
                        <meta property="og:image" content={singlePost.image ? singlePost.image[0] : 'default-image-url'} />
                        <meta property="og:image:alt" content={singlePost.title ? capitalizeFirst(singlePost.title) : "Image description"} />
                    </Helmet>
                    
                    <main ref={parentRef} className=" px-6 tracking-[0.4px] sm:px-16 pt-20 relative flex flex-col bg-lightShade text-darkShade dark:bg-darkShade dark:text-lightShade md:min-h-[90vh] md:pb-10">
                        {/* Popup */}
                        <div onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-10 h-screen w-screen" : "hidden"}>
                            <img src={popupImg} className={landscape ? 'relative rotate-90 min-w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'relative top-1/2 left-1/2 max-h-[95%] min-h-[30%] -translate-x-1/2 -translate-y-1/2'} alt="popup" />
                        </div>
                        <section className='mt-20 relative pb-10'>
                            <div>
                                <div className="">
                                    <p className={`${singlePost.title?'text-[3rem] leading-[3rem] font-[700]':''}`}>{singlePost.title ? capitalizeFirst(singlePost.title)+"." : <Waiting />}</p>
                                    <p className='font-medium text-[.9rem] capitalize mt-8 '> {singlePost.writer||singlePost.minister?"By":""} <span className='underline'>{singlePost.writer||singlePost.minister ? singlePost.writer||singlePost.minister : <Waiting />}</span></p>
                                    <p className='italic mt-2'>
                                        {singlePost.aboutAuthor||dummy||<Waiting/>}
                                    </p>
                                    
                                </div>
                            </div>
                            <div className='text-[1.1rem] font-[500] text-darkShade dark:text-da1hade leading-8 mt-10'>
                                {singlePost.author&&<p className='text-xs font-[400]'>Edited by*</p>}
                                <p className='font-[600] text-[.9rem] capitalize text-darkShade'>{singlePost.author ? singlePost.author : <Waiting />}</p>
                            </div>
                            <div className='gap-1 text-[.8rem] items-center  text-darkShade  leading-8 mt-10 flex'>
                                <p className=''>Published, {singlePost.day} <span className='font-bold italic text-xl'>|</span></p>
                                {singlePost.readMinutes&& <p className='text-[1.1rem] pb-[4px]'>  <LuTimer/>  </p>}
                                <p className='font-[400]  text-darkShade dark:text-lightShade  '>  {singlePost.readMinutes?? <Waiting />}</p>
                            </div>
                            {imageOne && (
                                <div className='mt-12 overflow-hidden'>
                                    <img className='mt-14' src={singlePost.image[0]} alt="" />
                                </div>
                            )}
                            <div className='text-[1.5rem] font-[600] mt-16'>
                                <h3 className='mb-5'>
                                    {singlePost.headingOne && capitalizeFirst(singlePost.headingOne)}
                                </h3>
                            <article className='text-[1rem] leading-8 font-[400] dark:text-lightShade text-darkShade'>
                                    {PostIsArray &&singlePost.paragraphOne ? singlePost.paragraphOne.map((paragraph, index) => (
                                        <p key={index} className='mb-4'>{capitalizeFirst(paragraph)}</p>
                                    )) : <Waiting />}
                            </article>
                            </div>
                            {singlePost.quoteOne && (
                                <div className='my-16 text-[1.5rem] font-[600] mt-6'>
                                    <article className='pl-2 text-[1.2rem]  border-l-0 underline underline-offset-[1px] decoration-red-300 decoration-4  border-l-gray-500 leading-8  mr-12 sm:mr-16 italic dark:text-lightShade'>
                                        <span className='quotes opacity-50  text-5xl'>"</span>{singlePost.quoteOne}
                                    </article>
                                </div>
                            )}
                            
                            {singlePost.paragraphTwo && (
                                <div className='text-[1.5rem] font-[600] mt-[88px]'>
                                    <h3 className='mb-5'>
                                        {singlePost.headingTwo && capitalizeFirst(singlePost.headingTwo)}
                                    </h3>
                                    <article className='text-[1rem] leading-8 font-[400] dark:text-lightShade text-darkShade'>
                                        {PostIsArray ? singlePost.paragraphTwo.map((paragraph, index) => (
                                            <p key={index + 11} className='mb-4'>{capitalizeFirst(paragraph)}</p>
                                        )) : <Waiting />}
                                    </article>
                                </div>
                            )}
                            {singlePost.quoteTwo && (
                                <div className='my-16 text-[1.5rem] font-[600] mt-6'>
                                    <article className='pl-2 text-[1.2rem]  border-l-0 underline underline-offset-[1px] decoration-red-300 decoration-4  border-l-gray-500 leading-8  mr-12 sm:mr-16 italic dark:text-lightShade'>
                                        <span className='quotes opacity-50  text-5xl'>"</span>{singlePost.quoteTwo}
                                    </article>
                                </div>
                            )}
                            {imageTwo && (
                                <div className='mt-12 overflow-hidden'>
                                    <img className='mt-14' src={singlePost.image[1]} alt="" />
                                </div>
                            )}
                            <div ref={findingsRef} className='text-[1.5rem]  mt-6'>
                                {singlePost.paragraphThree && (
                                    <div>
                                        <h3 className='mt-16 font-semibold mb-4'>
                                            {singlePost.headingThree && capitalizeFirst(singlePost.headingThree || "null")}
                                        </h3>
                                        <article className='text-[1rem] leading-8 font-[400] dark:text-lightShade text-darkShade'>
                                            {PostIsArray ? singlePost.paragraphThree.map((paragraph, index) => (
                                                <p key={index + 22} className='mb-4'>{capitalizeFirst(paragraph)}</p>
                                            )) : <Waiting />}
                                        </article>
                                        {singlePost.quoteThree && (
                                            <div className='my-16 text-[1.5rem] font-[600] mt-6'>
                                                <article className='pl-2 text-[1.2rem]  border-l-0 underline underline-offset-[1px] decoration-red-300 decoration-4  border-l-gray-500 leading-8  mr-12 sm:mr-16 italic dark:text-lightShade'>
                                                    <span className='quotes opacity-50  text-5xl'>"</span>{singlePost.quoteThree}
                                                </article>
                                            </div>
                                        )}

                                        <section>
                                            <h2 className='text-3xl text-darkShade mb-8 font-semibold'>Key<span className='text-gray-600'>Takeaways</span> </h2>
                                        {
                                            points&& points.map((point,index)=>{
                                                    return(
                                                        <div className='my-3 flex items-baseline gap-2 '>
                                                            <p className='font-bold text-darkShade text-sm'>{index==9?"":"0"}{index+1}.</p>
                                                            <p className='text-base font-medium' key={index}> {capitalizeFirst(point)}</p>
                                                        </div>
                                                    )
                                                })    
                                            }
                                        </section>
                                    </div>

                                )}
                            </div>
                        </section>
                        <div ref={ref} className='flex justify-between items-center mt-20 mb-32'>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <p className='flex  p-1 items-center justify-center gap-1 opacity-80 font-medium text-sm'>Share this.  </p>
                                <div className='self-start flex gap-3 text-lg '>
                                    <FacebookShareButton className='border border-faded rounded-full' url={window.location.href}><FaFacebookF /></FacebookShareButton>
                                    <WhatsappShareButton 
                                    className='border border-faded rounded-full' 
                                    url={window.location.href}
                                    title={`*${singlePost.title.toUpperCase()}*`}
                                    seperator=" ">
                                    <FaWhatsapp /></WhatsappShareButton>
                                </div>
                            </div>
                            <div className='opacity-50'>
                                <img className='w-[40px] animate-next hover:rotate-180' src={next} alt="" />
                            </div>
                        </div>
                        {state.publishMode&&!singlePost.publish&&
                        <div 
                        onClick={async()=>{
                            setLoading(true)
                            const response = await axios.put(`${state.baseUrl}/admin/publish/${singlePost._id}`);
                            setLoading(false)
                            setPublishMessage(response.data.message);              
                        }}
                        className='my-8 flex items-center justify-center p-2 text-center bg-darkShade text-lightShade'>
                            <LoadingButtonUniversal
                            text={publishMessage} 
                            loading={loading}/>    
                        </div>}
                    </main>
                </div>
            )}         
      </>  
    );
};

export default SinglePost;
