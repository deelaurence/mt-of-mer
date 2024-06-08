import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalState } from '../GlobalState';

gsap.registerPlugin(ScrollTrigger);

const PostAll = ({ postType }) => {
  const { state } = useGlobalState();
  const location = useLocation();
  const [allPosts, setAllPosts] = useState([]);
  const [sliced, setSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (postType === 'article') {
      setAllPosts(state.allArticles);
    }
    if (postType === 'message') {
      setAllPosts(state.allMessages);
    }
  }, [postType, state.allArticles, state.allMessages]);

  useEffect(() => {
    setSliced(allPosts.slice(0, 10));
  }, [allPosts]);

  const changePage = (e) => {
    const pageNumber = Number(e.target.innerHTML);
    const pageStart = (pageNumber - 1) * 10;
    const pageEnd = pageNumber * 10;
    setCurrentPage(pageNumber);
    setSliced(allPosts.slice(pageStart, pageEnd));
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: adds smooth scrolling animation
    });
  };

  const formatDate = (day) => {
    if (day) {
      const formatted = day.replace(/-/g, '.');
      const yearStr = formatted.slice(2, 4);
      const monthStr = formatted.slice(5, 7);
      const dayStr = formatted.slice(8, 10);
      return `${dayStr}.${monthStr}.${yearStr}`;
    }
  };

  return (
    <>
      {allPosts.length > 0 && (
        <main className="pt-32 bg-lightShade flex flex-col items-center">
          <section className="bg-lightShade">
            <h1 className="py-14 font-bold text-center text-neutral-700 uppercase text-5xl">{postType}s.</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap">
              {sliced.map((datum, index) => (
                <Link
                  className="flex md:w-[50%] md:h-[350px] px-6 justify-center items-center sm:my-8"
                  key={index}
                  to={`${datum._id}`}
                >
                  <div className="mb-8 w-[100%] md:w-[90%] relative">
                    <div className="h-[300px]">
                      <img
                        className="h-full w-full object-cover"
                        src={
                          datum.image[0] ||
                          'https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                        }
                        alt={datum.name}
                      />
                    </div>
                    <aside className="flex flex-col mt-3">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-[17px] md:text-base mt-2">{datum.title.toUpperCase()}</h3>
                        <p className="text-[11px] font-medium mt-2 md:text-sm">{datum.writer}</p>
                      </div>
                      <p className="text-[14px] text-faded font-semibold mt-4 md:mb-8 md:text-sm">
                        {formatDate(datum.day)}
                      </p>
                    </aside>
                    {datum.selected && (
                      <div
                        onClick={() => handleSelectImage(datum)}
                        className="absolute inset-0 flex items-center h-full justify-center bg-black bg-opacity-50 text-white font-bold text-xl"
                      >
                        Selected
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className="flex gap-4 mb-10 [&>*]:cursor-pointer [&>*]:p-[1px]">
            {Array.from({ length: Math.ceil(allPosts.length / 10) }, (_, i) => i + 1).map((page) => (
              <div
                key={page}
                className={currentPage === page ? 'font-bold' : 'italic opacity-[.85]'}
                onClick={changePage}
              >
                {page}
              </div>
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export default PostAll;
