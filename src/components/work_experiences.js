import React from 'react'
import { PageTemplate } from './page_template.js'

import './work_experiences.css'

export const WorkExperiences = () => {
  return (
    <PageTemplate>
      <section className="work-experiences">
        <section className="work-experiences__section">
          <h2> 爱齐科技 </h2>
          <p>Full Stack Developer 2018.07 - Now</p>
          <p>
            作为第二个成员，加入了数字化开发团队。刚开始的时候我们面临了一个很大的问题，那些正在使用的代码极其的难以维护。每个JS，CSS文件都是10000行以上的代码，而且没有规范，凌乱不堪。我们需要制定规则，重构代码。通过和这些代码作斗争，我的前端技能得到了极大的提升。
            我们同时需要维护超过14个项目，这极大的提高了我的多线程能力。
          </p>
          <p>
            很多时候我们需要独立完成整套的Web开发流程，从业务分析，数据结构定义，到功能开发，到前端页面的开发，集成开发，再到部署（Heroku 或者阿里云)。
          </p>
          <p>
            我每天都需要跟Salesforce打交道，我们所有的数据都需要同步到SFDC。
            有时候我们需要处理比较复杂的查询，这些查询需要从庞大的Salesforce数据库读取到我们需要的信息，很多表间的关联以及复杂的逻辑关系。
          </p>
        </section>

        <section className="work-experiences__section">
          <h2> 活跃网络 </h2>
          <p>Ruby on Rails Developer 2014.11 - 2018.06</p>
          <p>
            这是一个刚组建的团队，在公司被称作数据虚拟化团队，团队分为中国团队和北美团队，这两个团队需要密切配合来完成每天的工作。主要做数据分析，数据可视化的功能。技术栈是Ember，D3，Ruby on Rails. 这个团队执行了标准的敏捷开发。 我们每天都需要和北美的同事结对编程，因为是去的差异我们刚好可以做到互补。 在项目里面Rails主要用来构建API服务，然后Ember构建前端页面。项目的单元测试的覆盖率达到了95%。
          </p>
          <p>
            一个比较大的挑战就是在处理复杂业务逻辑的同时，我们需要保证代码的质量和可维护性。因此，我们制定了很多规则，比如有名的"DRY"， "no more than 5 lines method", "one method one thing", 等等。除了这些规则，我们还建立很好的开发流程，比如Code Review 和 Dev QA的流程。
          </p>
        </section>

        <section className="work-experiences__section">
          <h2> 权益宝 </h2>
          <p>Ruby on Rails Developer 2013.04 - 2014.10</p>
          <p>
            这是我的一个分Rails的工作。这对我而言也是几个全新的挑战，因为我没有同伴，我需要自己独立使用Rails搭建一个完整的应用，包含数据库，数据结构，功能以及发布。我们在大概三个月左右的时间里，搭建了一个众筹网站。其中包含了很多第三方应用的集成，像短信，支付等等。
          </p>
          <p>
            这是一次摸着石头过河的过程，比较艰难，但是收获也很大。从此有了搭建中型Web项目的完整经验。
          </p>
        </section>

        <section className="work-experiences__section">
          <h2> Avvo </h2>
          <p>Ruby Newbie 2012.01 - 2013.03</p>
          <p>
            这是我的第一份关于编程的工作。我通过C语言面试，然后成功入职，而我的工作是使用Ruby。在我的技术leader的指导下，我开始了我的编程之旅。我从零开始学习Ruby，然后使用Ruby进行日常的编码工作。我们主要是用Ruby脚本来处理一些数据，然后存储到数据库。这个看起来是个比较简单和轻松的工作，但是对于当时的我而言极具挑战。而Ruby的动态特性和灵活性，对我而言即是吸引又是挑战。
          </p>
        </section>
      </section>
    </PageTemplate>
  )
}
