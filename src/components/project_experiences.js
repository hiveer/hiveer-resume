import React from 'react'
import { PageTemplate } from './page_template.js'

import './project_experiences.css'
import smile_sharing_landing_page_png from './smile_sharing.png'
import smile_sharing_admin_png from './smile_sharing_admin.png'
import smile_view_one_png from './smile_view_one.png'
import smile_view_two_png from './smile_view_two.png'
import smile_view_three_png from './smile_view_three.png'

export const ProjectExperiences = () => {
  return (
    <PageTemplate>
      <section className="project-experiences">
        <section className="project-experiences__section">
          <h2> 权益宝 </h2>
          <p>一个生活服务类的众筹网站</p>
          <p>通过设定了一个众筹目标，一般是金额，然后用户开始投标众筹。当目标金额达到之后，权益宝将会兑现相应的权益。</p>
          <p>
            <strong>担任角色：</strong>
            <span>Rails 后端开发</span>
          </p>
          <p>
            <strong>职责：</strong>
            <span>数据结构设计，后端架构的搭建，自动化部署，功能开发</span>
          </p>
        </section>

        <section className="project-experiences__section">
          <h2> Activity Cloud </h2>
          <p>数据可视化Web Application</p>
          <p>基于公司积累的丰富的数据资源，提供了数据分析，以及数据的可视化展示</p>
          <p>
            <strong>担任角色：</strong>
            <span>Rails 后端开发</span>
          </p>
          <p>
            <strong>职责：</strong>
            <span>功能开发</span>
          </p>
        </section>

        <section className="project-experiences__section">
          <h2> Smile Sharing (微笑分享) </h2>
          <p>一个支持多国家，多种类型的coupon注册分配系统</p>
          <p>同时集成了面向公司内部的后台系统，面向用户的客户端系统，还有面向医生的系统</p>
          <h4>首页</h4>
          <img className="smile-sharing" src={smile_sharing_landing_page_png} />
          <h4>后台</h4>
          <img className="smile-sharing-admin" src={smile_sharing_admin_png} />
          <p>
            <strong>技术架构：</strong>
            <span>Rails, Webpack, Bootstrap, Sass, ES6, jQuery, Postgresql</span>
          </p>
          <p>
            <strong>担任角色：</strong>
            <span>项目负责人，项目开发者（全栈）</span>
          </p>
          <p>
            <strong>职责：</strong>
            <span>需求分析，功能开发，测试，错误分析，优化</span>
          </p>
        </section>

        <section className="project-experiences__section">
          <h2> Smile View (微笑模拟) </h2>
          <p>一个支持多国家，多种场景微笑模拟web 应用</p>
          <p>采集用户的微笑，然后通过机器学习修正牙齿问题，然后把最美的微笑展现给用户自己</p>
          <h4> 客户端 </h4>
          <div className="smile-view-projects__div row">
            <div className="col-xs-12 col-sm-6">
              <img className="smile-view-one" src={smile_view_one_png} />
            </div>
            <div className="col-xs-12 col-sm-6">
              <img className="smile-view-two" src={smile_view_two_png} />
            </div>
          </div>
          <p>
            <strong>技术架构：</strong>
            <span>Rails, NodeJS, React, Bootstrap, ES6, jQuery, Postgresql</span>
          </p>
          <p>
            <strong>担任角色：</strong>
            <span>项目负责人之一，项目开发者（全栈）</span>
          </p>
          <p>
            <strong>职责：</strong>
            <span>需求分析，功能开发，测试，错误分析，优化</span>
          </p>
        </section>
      </section>
    </PageTemplate>
  )
}
