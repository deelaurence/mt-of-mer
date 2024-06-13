import landingAlertz from '../assets/landing-alertz.webp'
import landingVr from '../assets/landing-vr.webp'
import landingGuild from '../assets/landing-guild.webp'
import landingKodetech from '../assets/landing-kodetech.webp'
import landingFemmina from '../assets/landing-femmina.webp'
import landingDexchange from '../assets/landing-dexchange.webp'
import kiti from '../assets/kiti.webp'
import teen from '../assets/teen2.webp'
import prayingLady from '../assets/pray-lady.webp'

let data = [
    {
        name: 'Youngsters ',
        image: `${kiti}`,
        details: 'Nurturing faith in young hearts.',
        year: "Teaching Christ's love and acceptance but, like a 2 years old would understand.",
        link: '/kids',
        style: "bg-red-200 flex flex-col w-full md:flex-row text-darkShade  md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "
    },
    {
        name: 'We Pray',
        image: `${prayingLady}`,
        details: 'We raise our hearts to God',
        year: 'Fridays',
        link: '/prayer',
        style: "bg-lightShade flex  text-darkShade w-50% md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "

    },
    {
        name: 'Teenage ministry',
        image: `${teen}`,
        details: 'Called to be difference makers.',
        year: '2022',
        link: '/teens',
        style: "bg-emerald-700 flex [&>*]:grayscale-[50%] text-lightShade w-50% md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "

    }
    ,
    {
        name: 'Door Holders',
        image: `https://images.unsplash.com/photo-1637615739656-ca10c4285c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvcnNoaXB8ZW58MHx8MHx8fDA%3D`,
        details: 'Leading people to christ through christ',
        year: '2022',
        link: '/door-holders',
        style: "bg-green-200 flex  text-darkShade w-50% md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "
    }
]

export default data