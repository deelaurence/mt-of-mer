import landingAlertz from '../assets/landing-alertz.webp'
import landingVr from '../assets/landing-vr.webp'
import landingGuild from '../assets/landing-guild.webp'
import landingKodetech from '../assets/landing-kodetech.webp'
import landingFemmina from '../assets/landing-femmina.webp'
import landingDexchange from '../assets/landing-dexchange.webp'


let data = [
    {
        name: 'Search the World',
        image: `https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
        details: 'We study the bible together.',
        year: 'Tuesday//5:00p',
        link: '/alertz',
        style: "bg-red-200 flex flex-col w-full md:flex-row text-lightShade  md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "
    },
    {
        name: 'We Pray',
        image: `https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=60`,
        details: 'We raise our hearts to God',
        year: 'Fridays',
        link: '/mr',
        style: "bg-blue-200 flex  text-lightShade w-50% md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "

    },
    {
        name: 'Guild',
        image: `${landingGuild}`,
        details: 'A Web3 Community Platform.',
        year: '2022',
        link: '/guild',
        style: "bg-orange-200 flex  text-lightShade w-50% md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "

    }
    ,
    {
        name: 'Guild',
        image: `${landingGuild}`,
        details: 'A Web3 Community Platform.',
        year: '2022',
        link: '/guild',
        style: "bg-green-200 flex  text-lightShade w-50% md:w-[50%] md:h-[300px] flex-wrap md:[&>*]:w-[50%] justify-center "
    }
]

export default data