import React from 'react'
import { PageTemplate } from './page_template.js'

import './work_experences.css'

export const WorkExperences = () => {
  return (
    <PageTemplate>
      <section className="work-experences">
        <section className="work-experences__section">
          <h2> 爱齐科技 </h2>
          <p>Full Stack Developer 2018.07 - Now</p>
          <p>
            I was the second one to join this new team, we called it ‘Digital Development Team’. We were facing with a big problem at the time when we are joining the company. The existing code(especially the frontend code) is really hard to maintain. We need to figure out how to improve it and work on it with new features. By fighting with the 10000 lines JS file and 10000 lines CSS file, my front-end skills have improved rapidly. And we need to work on more than 14 projects the same time, so my multiline processing ability have been honed.

  // Add this after I went though the introduction of APOLLO
  By the way I need to work with Salesforce by HerokuConnect every day. All our leads data been saved in SFDC.
  I’m working on a very long SQL these days to get the correct value from our leads.  I almost forgot to mention this. But I think I’d better to remember it, because you must be interested in this. : )
          </p>
        </section>

        <section className="work-experences__section">
          <h2> 活跃网络 </h2>
          <p>Ruby on Rails Developer 2014.11 - 2018.06</p>
          <p>
            Joined newly built team when on aboard (data visualization team), the tech stack is based on Ember, D3, Rails. We used Agile in routine work and always do pair programming with developers in NA team. In our project, Rails act as an API server and provide the apis by using ‘active_model_serializers’. We need to ensure the test coverage be higher than 95%.  The biggest challenge for us is to handle the complex business logic and keep the readability and good structure of the code the same time. In order to reach this goal, we set up many conventions, like ‘DRY’, ‘no more than 5 lines method’, ‘one method one thing’, etc.  Except these rules, we also have a good developing process  to ensure the quality, like a good Code Review work and self-QA things.
          </p>
        </section>

        <section className="work-experences__section">
          <h2> 权益宝 </h2>
          <p>Ruby on Rails Developer 2013.04 - 2014.10</p>
          <p>
            This is my first Rails job. I had no Rails experience in project before. After joined the company, I set up the development environment with the help from other senior team member. And in the following month, I went through an existing project to familiar with the design and the theory of how does a web project working. After that, I was moved to a new team which will be reponsilbe for a new web game project and I was the key member for backend logic. There is another guy who was using C++ to build the server. When I recall what I did at that time, yes, it’s far from good, but it is my first novel in my life.
          </p>
        </section>

        <section className="work-experences__section">
          <h2> Avvo </h2>
          <p>Ruby Newbie 2012.01 - 2013.03</p>
          <p>
            This is my first Rails job. I had no Rails experience in project before. After joined the company, I set up the development environment with the help from other senior team member. And in the following month, I went through an existing project to familiar with the design and the theory of how does a web project working. After that, I was moved to a new team which will be reponsilbe for a new web game project and I was the key member for backend logic. There is another guy who was using C++ to build the server. When I recall what I did at that time, yes, it’s far from good, but it is my first novel in my life.
          </p>
        </section>
      </section>
    </PageTemplate>
  )
}
