import React from 'react'
import s from './Music.module.css'

const Music = (props) => {
  const musicPage = props.musicPage
  const musicElements = musicPage.music.map(m => (
    <div>
      <audio id={m.id} src={m.source} controls>Не поддерживается</audio>
      <i>
        <span className={s.musicTxt}>
          {' - '}
          {m.name}
        </span>
      </i>
    </div>
  ))
  return (
    <div className={s.player}>
      {musicElements}
    </div>
  )
}

export default Music
