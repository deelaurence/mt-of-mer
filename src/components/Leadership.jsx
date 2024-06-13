import React from 'react';
import leadershipImage from '../assets/set-man.png';

const ChurchLeadership = () => {
  return (
    <>
      <main className='px-6 sm:px-16 -mb-1 text-lightShade py-24 bg-darkShade'>
        <h1 className='text-5xl -mb-1 font-semibold text-lightShade py-24 bg-darkShade'>CHURCH LEADERSHIP.</h1>
        <img src={leadershipImage} alt="Church Leadership" className="w-full h-auto"/>
        <p className='pt-16 pb-16 -mb-1 font-[aboreto] text-5xl text-faded bg-darkShade'>
          Guiding with Faith, Serving with Love
        </p>

        <p className='text-opaque text-xl leading-8'>
          At Mount of Mercy Church, our leadership team 
          is dedicated to serving the congregation and 
          community with love, humility, 
          and a deep commitment to the 
          teachings of Jesus Christ. 
          Our leaders are passionate 
          about guiding others in their 
          spiritual journeys and fostering 
          a supportive, inclusive church environment.
        </p>
        <br />
        <p className='text-xl text-opaque leading-8'>
          <strong>Senior Pastor:</strong> Pastor G.I Alo has 
          been leading Mount of Mercy for over 20 years, b
          ringing a wealth of wisdom, experience, 
          and a heartfelt passion for the gospel. 
          His vision is to see lives transformed 
          through the power of God's word and to 
          create a church that reflects the love and grace of Jesus Christ.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Associate Pastors:</strong> Our associate pastors, 
          Ayoola 0., Emmanuel A., and Tunde F.
          play a vital role in supporting the 
          senior pastor and the overall mission 
          of the church. 
          They oversee various ministries, 
          provide pastoral care, 
          and lead worship services, 
          always striving to build a strong, 
          faith-filled community.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Elders:</strong> The elders at Mount of 
          Mercy are a group of seasoned 
          leaders who provide spiritual 
          oversight and guidance. 
          They are committed to prayer, 
          teaching, and mentoring, 
          ensuring that the church 
          remains rooted in biblical 
          truth and continues to grow in faith and unity.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Deacons:</strong> Our deacons are 
          dedicated to serving the 
          practical needs of the congregation and community. 
          From organizing outreach programs to supporting 
          those in need, the deacons embody the 
          spirit of service and compassion that is central to our church’s mission.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Ministry Leaders:</strong> We have a diverse 
          team of ministry leaders who oversee various aspects of 
          church life, including children’s ministry, youth ministry, 
          worship, and small groups. Each leader brings 
          unique gifts and a deep love for God’s people, 
          working tirelessly to create meaningful 
          and impactful ministry opportunities.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          Together, our leadership team is committed to serving with integrity, guiding with wisdom, and loving with the heart of Christ. We are here to support you in your faith journey and to help you discover and fulfill your God-given purpose. We invite you to get to know our leaders and join us as we work together to make a difference in our community and beyond.
        </p>
      </main>
    </>
  );
};

export default ChurchLeadership;
