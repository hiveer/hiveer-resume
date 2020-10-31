import React from 'react'
import { PageTemplate } from './page_template.js'

import resume from './resume.pdf'
import resume_png from './resume.png'

import './download_resume.css'

export const DownloadResume = () => {
  return (
    <PageTemplate>
      <section className="download-resume">
        <div>
          <img className="download-resume__img--resume-png" src={resume_png} />
        </div>
        <div>
          <a href={resume}>
            <button>
              Download resume
            </button>
          </a>
        </div>
      </section>
    </PageTemplate>
  )
}
