import React from 'react'
import HomebodyComp from './HomebodyComp'
import NavComp from './NavComp'
import SliderComp from './SliderComp'
import FooterComp from './FooterComp'

function HomeComp() {
  return (
    <>
      <NavComp></NavComp>
      <HomebodyComp></HomebodyComp>
      <SliderComp></SliderComp>
      <FooterComp></FooterComp>
    </>
  )
}

export default HomeComp
