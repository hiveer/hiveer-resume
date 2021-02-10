import React from 'react'
import { PageTemplate } from './../pageTemplate/pageTemplate.js'

import resume from './../assets/resume.pdf'
import resume_png from './../assets/resume.png'

import './downloadResume.css'

export const DownloadResume = () => {
  return (
    <PageTemplate>
      <section className="download-resume">
        <div>
          <img className="download-resume__img--resume-png" src={resume_png} />
        </div>
        <div>
          <a href={resume} target="_blank">
            <button className="btn btn-info">
              Download resume
            </button>
          </a>
        </div>
      </section>
    </PageTemplate>
  )
}
