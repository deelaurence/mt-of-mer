import React from 'react';
import Ministries from './Ministries';

const AboutUs = () => {
  return (
    <>
      <main className='px-6 sm:px-16 -mb-1 text-lightShade py-24 bg-darkShade'>
        <h1 className='text-5xl -mb-1 font-semibold text-lightShade py-24 bg-darkShade'>ABOUT US.</h1>
        <img src="https://images.unsplash.com/photo-1541346183200-e8e117d945dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3MlMjBvbiUyMGhpbGx8ZW58MHx8MHx8fDA%3D" alt="About Us" className="w-full h-auto"/>
        <p className='pt-16 pb-16 -mb-1 font-[aboreto] text-5xl text-faded bg-darkShade'>
          Welcome to Mount of Mercy Church
        </p>

        <p className='text-opaque text-xl leading-8'>
          Welcome to Mount of Mercy Church, a vibrant and welcoming community dedicated to spreading the love and message of Jesus Christ. Our mission is to create a place where individuals from all walks of life can come together to worship, grow in their faith, and serve others.
        </p>
        <br />
        <p className='text-xl text-opaque leading-8'>
          <strong>Our Mission:</strong> At Mount of Mercy, we believe in transforming lives through the power of God’s love and grace. Our mission is to lead people into a growing relationship with Jesus Christ, equipping them to live out their faith in practical and meaningful ways. We strive to be a beacon of hope and a sanctuary of peace, where everyone can experience the transformative power of God’s mercy.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Our Vision:</strong> Our vision is to be a church that impacts our community and beyond, demonstrating Christ’s love through acts of service, compassion, and outreach. We aim to cultivate an environment where spiritual growth is encouraged, and where individuals can discover their God-given purpose and potential. We believe in the importance of fostering strong, supportive relationships within our congregation and extending that love and support to those around us.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>What We Believe:</strong> At the heart of Mount of Mercy are our core beliefs, rooted in the teachings of the Bible:
        </p>
        <ul className='text-xl text-opaque leading-8 list-disc list-inside'>
          <li>The Trinity: We believe in one God, existing in three persons: the Father, the Son (Jesus Christ), and the Holy Spirit.</li>
          <li>The Bible: We believe the Bible is the inspired and infallible Word of God, serving as the ultimate guide for our faith and conduct.</li>
          <li>Salvation: We believe that salvation is a gift from God, received through faith in Jesus Christ.</li>
          <li>The Church: We believe the church is the body of Christ, called to worship, serve, and share the gospel with the world.</li>
        </ul>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Join Us:</strong> We invite you to join us for worship services, prayer meetings, and community events. Whether you are new to the faith, seeking a deeper relationship with God, or looking for a place to belong, you are welcome here. Together, we can grow in faith, serve our community, and make a difference in the world.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Get Involved:</strong> There are many ways to get involved at Mount of Mercy. From small groups and Bible studies to volunteer opportunities and outreach programs, we encourage you to find a place where you can connect, grow, and serve. Our Door Holders, as we call our volunteers, are passionate about creating a welcoming environment where everyone can encounter Jesus.
        </p>
        <br/>
        <p className='text-xl text-opaque leading-8'>
          <strong>Contact Us:</strong> If you have any questions or would like more information about our church, please don't hesitate to reach out. We look forward to meeting you and welcoming you into our Mount of Mercy family.
        </p>
      </main>
    </>
  );
};

export default AboutUs;
