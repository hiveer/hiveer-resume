import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">[About]</Link>
        <Link to="events">[Events]</Link>
        <Link to="products">[Products]</Link>
        <Link to="contact">[Contact]</Link>
      </nav>
    </div>
  )
}

export const About = () => {
  return (
    <section className="events">
      <h1>[About the Campany]</h1>
    </section>
  )
}

export const Events = () => {
  return (
    <section className="events">
      <h1>[Events Calender]</h1>
    </section>
  )
}

export const Products = () => {
  return (
    <section className="products">
      <h1>[Products Catalog]</h1>
    </section>
  )
}

export const Contact = () => {
  return (
    <section className="contact">
      <h1>[Contact Us]</h1>
    </section>
  )
}

export const Whoops404 = ({location}) => {
  return(
    <div className="whoops-404">
      <h1> Resource not found at '{location.pathname}'</h1>
    </div>
  )
}
