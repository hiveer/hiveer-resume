import React from 'react'
import { PageTemplate } from './page_template.js'

import './about_me.css'

export const AboutMe = () => {
  return (
    <PageTemplate>
      <section className="about-me">
        <p>
          <label className="name-label"> 中文名：</label>
          小白
        </p>
        <p>
          <label className="name-label"> English Name：</label>
          Hiveer
        </p>
        <h2> 教育背景：</h2>
        <p>
          于2011年毕业。在大学期间学习了电气工程及其自动化，强电，电力系统相关专业知识。
          大学毕业后，有幸与中国海洋石油集团有限公司以及中国石油云南大理销售分公司相继签约。
          于2012年初返回成都，初步踏入web开发领域。
        </p>
      </section>
    </PageTemplate>
  )
}
