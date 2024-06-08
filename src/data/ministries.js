import landingAlertz from '../assets/landing-alertz.webp'
import landingVr from '../assets/landing-vr.webp'
import landingGuild from '../assets/landing-guild.webp'
import landingKodetech from '../assets/landing-kodetech.webp'
import landingFemmina from '../assets/landing-femmina.webp'
import landingDexchange from '../assets/landing-dexchange.webp'
import kiti from '../assets/kiti.webp'
import teen from '../assets/teen2.webp'
import prayingLady from '../assets/pray-lady.jpg'

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
        link: '/mr',
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
        name: 'Guild',
        image: `${landingGuild}`,
        details: 'A Web3 Community Platform.',
        year: '2022',
        link: '/guild',
        style: "bg-green-200 flex  text-darkShade w-50% md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "
    }
]

export default data