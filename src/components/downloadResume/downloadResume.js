import React from 'react'
import { PageTemplate } from './../pageTemplate/pageTemplate.js'

import chineseResume from './../assets/chineseResume.pdf'
import chineseResumeJPG from './../assets/chineseResume.jpg'
import englishResume from './../assets/englishResume.pdf'
import englishResumeJPG from './../assets/englishResume.jpg'

import './downloadResume.css'

export const DownloadResume = () => {
  return (
    <PageTemplate>
      <section className="download-resume">
        <div className="download-resume__div--one-resume">
          <div>
            <img className="download-resume__img--resume-png" src={chineseResumeJPG} />
          </div>
          <div>
            <a href={chineseResume} target="_blank">
              <button className="btn btn-info">
                下载中文简历
              </button>
            </a>
          </div>
        </div>
        <div className="download-resume__div--one-resume">
          <div>
            <img className="download-resume__img--resume-png" src={englishResumeJPG} />
          </div>
          <div>
            <a href={englishResume} target="_blank">
              <button className="btn btn-info">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}
