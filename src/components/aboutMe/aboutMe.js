import React from 'react'
import { PageTemplate } from './../pageTemplate/pageTemplate.js'

import './aboutMe.css'

export const AboutMe = () => {
  return (
    <PageTemplate>
      <section className="about-me">
        <section className="about-me__section--name">
          <p>
            <label className="name-label"> 中文名：</label>
            李平
          </p>
          <p>
            <label className="name-label"> English Name：</label>
            Hiveer
          </p>
        </section>

        <section className="about-me__section--education">
          <h2> 教育背景：</h2>
          <p>
            于2011年毕业。在大学期间学习了电气工程及其自动化，强电，电力系统相关专业知识。
            大学毕业后，有幸与中国海洋石油集团有限公司以及中国石油云南大理销售分公司相继签约。
            于2012年初返回成都，初步踏入web开发领域。
          </p>
        </section>

        <section className="about-me__section--vision">
          <h2> 我的愿景：</h2>
          <p>
            希望能成为一名潜心修炼的技术人员，能够用技术解决社会问题。
          </p>
        </section>

        <section className="about-me__section--persion-pages">
          <h2> 我的主页：</h2>
          <p>
            <li>
              <a href='https://ruby-china.org/hiveer'> RubyChina </a>
            </li>
            <li>
              <a href='https://github.com/hiveer'> Github </a>
            </li>
            <li>
              <a href='https://stackoverflow.com/users/3057462/hiveer'> StackOverflow </a>
            </li>
          </p>
        </section>
      </section>
    </PageTemplate>
  )
}
