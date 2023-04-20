// Next, we’ll create the circles with CSS.In the code below, we assign a width and height of 50px each to the big circle.To make it a circle, we give it a border radius of 50 %.

// The small circle will be hollow, so we give it a border and border radius of 50 %.Then, we assign it a width and height of 6px each.

// We disable the default cursor by giving cursor a value of none so that we can render the custom cursor in its place.


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
        details: 'Next, we’ll To add animation to the big circle, we use @keyframes.Our animation - duration is 2.0s.At the start of this duration, we set background - color to green and opacity to 0.2.Halfway through, we set the circle’s background - color to orange.At the end of the 2 second duration, we set the circle’s background - color to red. create the circles with CSS.In the code below, we assign a width and height of 50px each to the big circle.To make it a circle, we give it a border radius of 50 %The small circle will be hollow, so we give it a border and border radius of 50 %.Then, we assign it a width and height of 6px each',
        year: 'Tuesday//5:00p',
        link: '/alertz'
    },
    {
        name: 'We Pray',
        image: `https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60`,
        details: 'We raise our hearts to God',
        year: 'Fridays',
        link: '/mr'
    },
    {
        name: 'Guild',
        image: `${landingGuild}`,
        details: 'A Web3 Community Platform.',
        year: '2022',
        link: '/guild'
    }
]

export default data