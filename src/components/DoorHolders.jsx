import React from 'react';
import Ministries from './Ministries';
import data from '../data/ministries';

const DoorHolders = () => {
  return (
    <>
      <main className='px-6 sm:px-16 -mb-1 text-lightShade py-24 bg-darkShade'>
        <h1 className='text-5xl -mb-1 font-semibold text-lightShade py-24 bg-darkShade'>DOOR HOLDERS.</h1>
        <img src={data[3].image}/>
        <p className='pt-16 pb-16 -mb-1 font-[aboreto] text-5xl text-faded bg-darkShade'>
        How beautiful are the feet of those who bring good news!
        </p>

        <br />
        <p className='text-xl text-opaque leading-8'>
          Door Holders are the very heartbeat of our House here at Mount of Mercy! They are dedicated, passionate, and committed to creating an environment where everyone feels welcomed and valued. Whether it's greeting guests, assisting in various ministries, or helping with events, Door Holders play a crucial role in our community.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          Being a Door Holder is more than just serving; it's about being a part of something bigger. It's about making a difference in people's lives and helping them connect with God in a meaningful way. Our Door Holders are leaders who embody the spirit of hospitality and service, ensuring that everyone who walks through our doors experiences the love and grace of Jesus Christ.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          If you feel called to serve and want to be a part of this incredible team, we invite you to join us. As a Door Holder, you'll have the opportunity to grow in your faith, develop lasting relationships, and make a significant impact in our church and community. Together, we can open doors for others and create a space where everyone can encounter Jesus.
        </p>
      </main>
    </>
  );
};

export default DoorHolders;
