const urls = [
    "https://images.unsplash.com/photo-1477672680933-0287a151330e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1571069424149-c456e0b413d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpZmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1525104171570-308e54169ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1582398626929-4aaba43f31eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZSUyMHVucmVhbGlzbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1612551396716-e749eef1785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyaXN0YWlufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1579762464140-3101654d98f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hyaXN0YWlufGVufDB8fDB8fHww"
];

export const randomImgUrls = () => {
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
    return randomUrl;
};
