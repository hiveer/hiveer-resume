import React from 'react'
import { Link } from 'react-router-dom'

import { PageTemplate } from './page_template.js'

export const Home = () => {
  return (
    <PageTemplate>
      <div className="home">
        <h1>[Company Website]</h1>
        <nav>
          <Link to="about">[About]</Link>
          <Link to="events">[Events]</Link>
          <Link to="products">[Products]</Link>
          <Link to="contact">[Contact]</Link>
        </nav>
      </div>
    </PageTemplate>
  )
}

export const About = () => {
  return (
    <PageTemplate>
      <section className="events">
        <h1>[About the Campany]</h1>
      </section>
    </PageTemplate>
  )
}

export const Events = () => {
  return (
    <PageTemplate>
      <section className="events">
        <h1>[Events Calender]</h1>
      </section>
    </PageTemplate>
  )
}

export const Products = () => {
  return (
    <PageTemplate>
      <section className="products">
        <h1>[Products Catalog]</h1>
      </section>
    </PageTemplate>
  )
}

export const Contact = () => {
  return (
    <PageTemplate>
      <section className="contact">
        <h1>[Contact Us]</h1>
      </section>
    </PageTemplate>
  )
}

export const Whoops404 = ({location}) => {
  return(
    <div className="whoops-404">
      <h1> Resource not found at '{location.pathname}'</h1>
    </div>
  )
}
