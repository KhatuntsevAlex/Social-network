import a from '../assets/music/Black_Strobe_I_am_a_man.mp3'
import b from '../assets/music/Alan_Walker_-_Faded.mp3'
import c from '../assets/music/Andra_&_Mara_-_Sweet_Dreams.mp3'

const initialState = {
  music: [
    { id: 1, source: a, name: 'Black Strobe - I am a man.mp3' },
    { id: 2, source: b, name: 'Alan Walker - Faded.mp3' },
    { id: 3, source: c, name: 'Andra & Mara - Sweet Dreams.mp3' },
  ],
}

const musicReducer = (state = initialState) => state
export default musicReducer
