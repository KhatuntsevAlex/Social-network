import a from '../assets/music/Black_Strobe_I_am_a_man.mp3'
import b from '../assets/music/Alan_Walker_-_Faded.mp3'
import c from '../assets/music/Andra_&_Mara_-_Sweet_Dreams.mp3'
const ADD_POST = 'ADD-POST';
const DELL_POST = 'DELL-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    music: [
       /*  { id: 1, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 2, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 3, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 4, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 5, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 6, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 7, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 8, source: "https://www.youtube.com/embed/qwzKRZp-fZE" },
        { id: 9, source: "https://www.youtube.com/embed/qwzKRZp-fZE" } */
        { id: 1, source: a, name: 'Black Strobe - I am a man.mp3' },
        { id: 2, source: b, name: 'Alan Walker - Faded.mp3' },
        { id: 3, source: c, name: 'Andra & Mara - Sweet Dreams.mp3' }
        
    ]




};

const musicReducer = (state = initialState, action) => {
    return state
};



export default musicReducer;