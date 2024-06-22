import React from 'react';
import PostAll from './ReuseableArticles';
import { useGlobalState } from '../GlobalState';
import { useParams } from 'react-router-dom';

const AuthorProfile = () => {
  const { state } = useGlobalState();

  const { name } = useParams(); // Get the 'name' parameter from the URL
  const author = state.allAuthors.find(author => author.name === name); // Find the author with the matching name
  const allAuthorPosts = state.allMessages.filter((message)=>{
    return message.minister===name
  })
  .concat(state.allArticles.filter((article)=>{
    return article.writer===name
  }))
  const length = allAuthorPosts.length



  if (!author) {
    return <div className='pt-12 bg-darkShade text-3xl px-6 md:px-16 text-lightShade'>Author not found</div>;
  }
  return (
    <div className='bg-darkShade'>
      <div className='pt-24 relative'>
        <div className='relative'>
          <img src={author.image[0]} alt={author.name} className='w-full h-auto' />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-darkShade to-transparent p-6'>
            <h1 className='text-lightShade text-3xl font-bold'>{author.name}</h1>
          </div>
          <div className='absolute top-0 left-0 right-0 bg-gradient-to-b from-darkShade to-transparent p-6'>
            {/* <h1 className='text-lightShade text-3xl font-bold'>{author.name}</h1> */}
          </div>
        </div>
      </div>
      <div className='p-6 mt-6 md:p-16'>
        <p className='text-lightShade'>{author.description}</p>
      </div>
      <h1 className='px-6 md:px-16 text-lightShade my-12 mb-12 font-medium'>Check out {length} other post{`${length>1?"s":""}`} by {name.split(" ")[0]}</h1>
      <PostAll postType="author" theme="night" posts={allAuthorPosts} />
    </div>
  );
};

export default AuthorProfile;
