import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {LuTimer} from 'react-icons/lu'
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
    const [popupImg, setPopupImg] = useState('');
    const [pop, setPop] = useState(false);
    const [landscape, setLandscape] = useState(false);
    const whatsappLink = `whatsapp://send?text=${window.location.href}`;
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;

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
            console.log(jsonData)
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
                    {/* <Helmet>
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content={singlePost.title ? capitalizeFirst(singlePost.title) : ""} />
                        <meta property="og:description" content="Description of my webpage" />
                        <meta property="og:image" content={singlePost.image ? singlePost.image[0] : ''} />
                    </Helmet> */}
                    <main ref={parentRef} className=" px-6 tracking-[0.4px] sm:px-16 pt-20 relative flex flex-col bg-lightShade text-darkShade dark:bg-darkShade dark:text-lightShade md:min-h-[90vh] md:pb-10">
                        {/* Popup */}
                        <div onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-10 h-screen w-screen" : "hidden"}>
                            <img src={popupImg} className={landscape ? 'relative rotate-90 min-w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'relative top-1/2 left-1/2 max-h-[95%] min-h-[30%] -translate-x-1/2 -translate-y-1/2'} alt="popup" />
                        </div>
                        <section className='mt-20 relative pb-10'>
                            <div>
                                <h1 className="">
                                    <span className='text-[3rem] leading-[3rem] font-[700]'>{singlePost.title ? capitalizeFirst(singlePost.title)+"." : <Waiting />}</span>
                                    <p className='font-medium text-[1.1rem] capitalize mt-8 underline'>By {singlePost.writer||singlePost.author ? singlePost.writer||singlePost.author : <Waiting />}</p>
                                    <p className='italic mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quibusdam dolorem placeat, culpa blanditiis dolore, iusto dolorum amet ipsum, laborum sit? Voluptatibus facere asperiores fugiat at iste! Recusandae, consequuntur harum!</p>
                                    
                                </h1>
                            </div>
                            <div className='text-[1.1rem] font-[500] text-darkShade dark:text-da1hade leading-8 mt-16'>
                                <p className='mb-2'>Edited By:</p>
                                <p className='font-[600] text-[1.1rem] capitalize text-darkShade'>{singlePost.author ? singlePost.author : <Waiting />}</p>
                            </div>
                            <div className='gap-1 lowercase text-[1.1rem] text-darkShade dark:text-da1hade leading-8 mt-10 flex items-center'>
                                <p className=''><LuTimer/>  </p>
                                <p className='font-[600] text-darkShade dark:text-lightShade italic text-[1.1rem]'>{singlePost.readMinutes ? "| "+singlePost.readMinutes : <Waiting />}</p>
                            </div>
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
                                    <article className='pl-2 text-[1.1rem] text-faded border-l-4 border-l-purple-300 leading-8 font-[400] ml-8 mr-12 sm:mr-16 italic dark:text-lightShade'>
                                        <span className='quotes opacity-50 '></span>{singlePost.quoteOne}
                                    </article>
                                </div>
                            )}
                            {imageOne && (
                                <div className='mt-12 overflow-hidden'>
                                    <img className='mt-14' src={singlePost.image[0]} alt="" />
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
                                    <article className='pl-2 text-[1.1rem] text-faded border-l-4 border-l-purple-300 leading-8 font-[400] ml-8 mr-12 sm:mr-16 italic dark:text-lightShade'>
                                        <span className='quotes opacity-50 '></span>{singlePost.quoteTwo}
                                    </article>
                                </div>
                            )}
                            {imageTwo && (
                                <div className='mt-12 overflow-hidden'>
                                    <img className='mt-14' src={singlePost.image[1]} alt="" />
                                </div>
                            )}
                            <div ref={findingsRef} className='text-[1.5rem] font-[600] mt-6'>
                                {singlePost.paragraphThree && (
                                    <div>
                                        <h3 className='mb-5'>
                                            {singlePost.headingThree && capitalizeFirst(singlePost.headingThree || "null")}
                                        </h3>
                                        <article className='text-[1rem] leading-8 font-[400] dark:text-lightShade text-darkShade'>
                                            {PostIsArray ? singlePost.paragraphThree.map((paragraph, index) => (
                                                <p key={index + 22} className='mb-4'>{capitalizeFirst(paragraph)}</p>
                                            )) : <Waiting />}
                                        </article>
                                        {singlePost.quoteThree && (
                                            <div className='text-[1.5rem] font-[600] mt-6'>
                                                <article className='pl-2 text-[1.1rem] text-faded border-l-4 border-l-purple-300 leading-8 font-[400] ml-8 mr-12 sm:mr-16 italic dark:text-lightShade'>
                                                    <span className='quotes opacity-50 '></span>{singlePost.quoteThree}
                                                </article>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </section>
                        <div ref={ref} className='flex justify-between items-center mt-20 mb-32'>
                            <div className='flex justify-center items-center gap-3'>
                                <FacebookShareButton className='border border-faded p-4 rounded-full' url={facebookLink}><FaFacebookF /></FacebookShareButton>
                                <WhatsappShareButton className='border border-faded p-4 rounded-full' url={whatsappLink}><FaWhatsapp /></WhatsappShareButton>
                                <RiShareForwardLine className='border border-faded p-4 rounded-full' />
                            </div>
                            <div className='opacity-50'>
                                <img className='w-[40px] animate-next hover:rotate-180' src={next} alt="" />
                            </div>
                        </div>
                    </main>
                </div>
            )}         
      </>  
    );
};

export default SinglePost;
