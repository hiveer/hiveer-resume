import React from 'react'
import { PageTemplate } from './../pageTemplate/pageTemplate.js'

import './projectExperiences.css'
import smile_sharing_landing_page_png from './../assets/smile_sharing.png'
import smile_sharing_admin_png from './../assets/smile_sharing_admin.png'
import smile_view_one_png from './../assets/smile_view_one.png'
import smile_view_two_png from './../assets/smile_view_two.png'
import smile_view_three_png from './../assets/smile_view_three.png'
import mn_landing_before from './../assets/mn-landing-before.png'
import mn_landing_after from './../assets/mn-landing-after.png'
import mn_google_speed_after from './../assets/mn-google-speed-after.jpg'

export const ProjectExperiences = () => {
  return (
    <PageTemplate>
      <section className="project-experiences__section">
        <div className="project-experiences__div--basic-intro">
          <h2> 前端资源优化 </h2>
          <ul>
            <li>JS 优化</li>
            <li>CSS 优化</li>
            <li>图片 优化</li>
          </ul>
          <div className="smile-view-projects__div row">
            <div className="col-xs-12 col-sm-12 project-experiences__div--img text-center">
              <img className="project-experiences__img smile-view-one" src={mn_landing_before} />
              <p>优化前</p>
            </div>
            <div className="col-xs-12 col-sm-12 project-experiences__div--img text-center">
              <img className="project-experiences__img smile-view-two" src={mn_landing_after} />
              <p>优化后</p>
            </div>
            <div className="col-xs-12 col-sm-12 project-experiences__div--img text-center">
              <img className="project-experiences__img smile-view-two" src={mn_google_speed_after} />
              <p>优化后</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-experiences__section">
        <div className="project-experiences__div--basic-intro">
          <h2> 权益宝 </h2>
          <p>一个生活服务类的众筹网站</p>
          <p>通过设定了一个众筹目标，一般是金额，然后用户开始投标众筹。当目标金额达到之后，权益宝将会兑现相应的权益。</p>
          <p>
            <strong>主要功能：</strong>
            <ul>
              <li>用户登录，session管理</li>
              <li>订单状态管理</li>
              <li>银联支付接入</li>
            </ul>
          </p>
        </div>
        <div>
          <p>
            <strong>担任角色：</strong>
            <span>Rails 后端开发</span>
          </p>
          <p>
            <strong>职责：</strong>
            <span>数据结构设计，后端架构的搭建，自动化部署，功能开发</span>
          </p>
        </div>
      </section>

      <section className="project-experiences__section">
        <div className="project-experiences__div--basic-intro">
          <h2> Activity Cloud </h2>
          <p>数据可视化Web Application</p>
          <p>基于公司积累的丰富的数据资源，提供了数据分析，以及数据的可视化展示</p>
          <p>
            <strong>主要功能：</strong>
            <ul>
              <li>RESTFUL API(active_model_serializers)</li>
              <li>自建数据映射层</li>
              <li>数据可视化</li>
            </ul>
          </p>
        </div>
        <div>
          <p>
            <strong>担任角色：</strong>
            <span>Rails 后端开发</span>
          </p>
          <p>
            <strong>职责：</strong>
            <span>功能开发</span>
            <span>单元测试</span>
          </p>
        </div>
      </section>

      <section className="project-experiences__section">
        <div className="project-experiences__div--basic-intro">
          <h2> Smile Sharing (微笑分享) </h2>
          <p>一个支持多国家，多种类型的coupon注册分配系统</p>
          <p>同时集成了面向公司内部的后台系统，面向用户的客户端系统，还有面向医生的系统</p>
          <p>
            <strong>主要功能：</strong>
            <ul>
              <li>后台管理页面，数据分析，数据下载，数据筛选</li>
              <li>用户页面，模块化</li>
              <li>医生页面</li>
              <li>SSO 集成</li>
              <li>Salesforce 集成</li>
              <li>短信服务(Twilio)集成</li>
              <li>支持多国家多类型活动</li>
              <li>可配置应用</li>
            </ul>
          </p>
        </div>
        <h4 className="text-center">首页</h4>
        <div className="project-experiences__div--img text-center">
          <img className="project-experiences__img smile-sharing" src={smile_sharing_landing_page_png} />
        </div>
        <h4 className="text-center">后台</h4>
        <div className="project-experiences__div--img text-center">
          <img className="project-experiences__img smile-sharing-admin" src={smile_sharing_admin_png} />
        </div>
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
        <div className="project-experiences__div--basic-intro">
          <h2> Smile View (微笑模拟) </h2>
          <p>一个支持多国家，多种场景微笑模拟web 应用</p>
          <p>采集用户的微笑，然后通过机器学习修正牙齿问题，然后把最美的微笑展现给用户自己</p>
          <p>
            <strong>主要功能：</strong>
            <ul>
              <li>基于campaign，支持多类型，多语言</li>
              <li>websockect 支持模拟进度实时监控</li>
              <li>集成机器学习API集成</li>
              <li>前后端分离，Rails+React</li>
            </ul>
          </p>
        </div>
        <h4 className="text-center"> 客户端 </h4>
        <div className="smile-view-projects__div row">
          <div className="col-xs-12 col-sm-6 project-experiences__div--img text-center">
            <img className="project-experiences__img smile-view-one" src={smile_view_one_png} />
          </div>
          <div className="col-xs-12 col-sm-6 project-experiences__div--img text-center">
            <img className="project-experiences__img smile-view-two" src={smile_view_two_png} />
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
    </PageTemplate>
  )
}
