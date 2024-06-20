import React from 'react'
import kiti from '../assets/kiti.webp'
import { Helmet } from 'react-helmet-async'



const KidsMinistry = () => {
  return (
    <>

        <Helmet>
          <title>My Amazing React App</title>
          <meta name="description" content="A description of my amazing React app" />
        </Helmet>
      <main className='px-6 sm:px-16  -mb-1  text-lightShade py-24 bg-darkShade'>
        <h1 className=' text-5xl -mb-1 font-semibold text-lightShade py-24 bg-darkShade '>YOUNGSTERS.EDIT</h1>
        <img src={kiti} alt="" />
        <p className=' pt-16 pb-16 -mb-1 font-[aboreto]  text-5xl text-faded bg-darkShade'>Teaching Christ's love and acceptance but, like a 2 years old would understand </p>

<p className='text-opaque text-xl leading-8'>    
Juvenile Ministry is a dynamic and purposeful community where 
youngsters can thrive in their relationship with God. 
It is a place where young hearts are nurtured, equipped, 
and empowered to live out their faith in a world that 
often challenges their beliefs. Through engaging teachings, 
intentional discipleship, and authentic relationships, 
creating an environment where kids 
can grow in their understanding of God's love and purpose for their lives.
</p>
<br />
 <p className='text-xl text-opaque leading-8'>
Recognizing the unique needs and challenges 
that youngsters face in today's society. We strive to provide a safe 
and supportive space where they can explore their faith, ask tough 
questions, and find guidance and encouragement from mentors and peers. 
 </p>
<br/>
<p className='text-xl text-opaque leading-8'>
Our dedicated team of leaders and volunteers is 
passionate about investing in the lives of teenagers, 
fostering an environment of love, acceptance, and grace. 
We believe in the power of meaningful relationships and 
mentorship, providing kids with trusted guides 
who can help them navigate the challenges of adolescence, 
while pointing them to the unwavering love and truth found in Jesus Christ.

</p>
<br/>
<p className='text-xl text-opaque leading-8'>
Join us in the Juvenile Ministry as we embark on this exciting journey 
of faith and discovery, Let's empower them to be 
courageous in their faith, to impact their generation for Christ, 
and to shine brightly as beacons of God's love in a world that desperately needs it.
</p>
</main>
    </>
  )
}

export default KidsMinistry
