import { Progress } from 'antd'
import React from 'react'

export const ProgressBar = () => {
  return (
    <div className=" h-full flex justify-center gap-5 flex-wrap gap-y-2 mt-10">
                {dataSkills.map(({ skill, percent }) => (
                  <div className="relative" key={skill}>
                    <div className="transform rotate-180">
                      <Progress
                        type="circle"
                        percent={percent}
                        strokeColor="#0DF0D6"
                        trailColor="#505A5B"
                        showInfo={false}
                        strokeWidth={10}
                      />
                    </div>
                    <div className="absolute inset-0 flex  items-center justify-center text-white text-xs text-center font-mono px-8">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
  )
}
