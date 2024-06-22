import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { updateMeta } from '../utils/dynamicTag';
gsap.registerPlugin(ScrollTrigger);

const PostAll = ({ postType, posts, theme }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [sliced, setSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = 'Posts page';
    updateMeta('og:title', 'Welcome to Posts page mount of mercy');
  }, []);

  useEffect(() => {
    setAllPosts(posts);
  }, [posts]);

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

  // Theme classes
  const bgClass = theme === 'night' ? 'bg-darkShade' : 'bg-lightShade';
  const textClass = theme === 'night' ? 'text-lightShade' : 'text-neutral-700';

  return (
    <>
      {allPosts.length > 0 && (
        <main className={`${bgClass} flex flex-col items-center`}>
            
          <section className={` ${bgClass}`}>
            <div className="flex flex-col md:flex-row md:flex-wrap">
              {sliced.map((datum, index) => (
                <Link
                  className="flex md:w-[50%] md:h-[400px] px-6 justify-center items-center sm:my-8"
                  key={index}
                  to={`${datum._id}`}
                >
                  <div className="mb-8 w-[100%] md:w-[90%] relative">
                    <div className="h-[300px]">
                      <img
                        className="h-full w-full object-cover"
                        src={datum.image[0]}
                        alt={datum.name}
                      />
                    </div>
                    <aside className="flex flex-col max-w-full mt-3">
                      <div className="flex max-w-full justify-between">
                        <h3 className={`font-semibold max-w-[70%] text-[17px] md:text-base mt-2 ${textClass}`}>
                          {datum.title.toUpperCase()}
                        </h3>
                        <p className={`opacity-50 text-[11px] max-w-[25%] font-medium mt-2 md:text-sm ${textClass}`}>
                          {datum.writer}
                        </p>
                      </div>
                      <p className={`text-[14px] opacity-70 max-w-full font-semibold mt-4 md:mb-8 md:text-sm ${textClass}`}>
                        {formatDate(datum.day)}
                      </p>
                    </aside>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className={`${textClass} flex gap-4 mb-10 [&>*]:cursor-pointer [&>*]:p-[1px] `}>
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
