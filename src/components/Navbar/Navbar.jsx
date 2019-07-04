import React from 'react'
import s from './Navbar.module.css'
import NavItem from './NavItem/NavItem'
import MyFriends from './MyFriends/MyFriends'

const Navbar = (props) => {
  const navItems = props.navItems.map(
    p => (
      <NavItem
        key={p.id}
        name={p.name}
        linkTo={p.linkTo}
        imgSrc={p.imgSrc}
      />
    )
  )
  const myFriends = props.myFriends.map(p => (
    <MyFriends
      key={p.id} id={p.id} name={p.name} avaSrc={p.avaSrc} />
  ))
  return (
    <nav className={s.nav}>

      {navItems}

      <div>
        <h2>My friends</h2>
      </div>
      <div className={s.myFriends}>
        {myFriends}
      </div>
    </nav>
  )
}

export default Navbar
