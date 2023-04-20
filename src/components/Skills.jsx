import React from 'react'
import mobile from "./images/tabler_device-mobile.png"
import userXperience from "./images/icon-park-outline_enquire.png"
import userResearch from "./images/fluent_brain-circuit-24-regular.png"
import quill from "./images/ri_quill-pen-line.png"
import arrowGuide from "./images/tabler_arrow-guide.png"
const Skills = () => {
  return (
     <section className="text-darkShade py-20 bg-lightShade">
      <div>
        <h3 className="text-3xl font-semibold text-center">Flo's Special Skills</h3>
      </div>
      <div>
        <p className="font-medium text-[0.9rem] px-2 mb-10 mt-6 text-center">
          For the purpose of creating interactive <br />
          and accessible products, Flo engages <br />
          these skills.
        </p>
      </div>
      <div className="flex justify-center  mt-3 flex-wrap gap-4">
        <div
          className="bg-darkShade overflow-hidden rounded-[4px] pt-7 pl-6 text-lightShade h-[160px] w-[160px]"
        >
          <img className="mt-3 w-[30px]" src={mobile} alt="" />
          <p className="pt-4 text-xs font-semibold overflow-visible">
            User Interface <br /> Design
          </p>
        </div>
        <div
          className="bg-darkShade overflow-hidden rounded-[4px] py-7 pl-6 text-lightShade h-[160px] w-[160px]"
        >
          <img
            className="w-[30px] mt-3"
            src={userXperience}
            alt=""
          />
          <p className="pt-4 text-xs font-semibold overflow-visible">
            User Experience <br /> Design
          </p>
        </div>
        <div
          className="bg-darkShade overflow-hidden rounded-[4px] pt-11 pl-6 text-lightShade h-[160px] w-[160px]"
        >
          <img
            className="w-[30px] mt-3"
            src={userResearch}
            alt=""
          />
          <p className="pt-4 text-xs font-semibold leading-none overflow-visible">
            User Research
          </p>
        </div>
        <div
          className="bg-darkShade overflow-hidden rounded-[4px] pt-11 pl-6 text-lightShade h-[160px] w-[160px]"
        >
          <img className="w-[30px] mt-3 " src={quill} alt="" />
          <p className="pt-4 text-xs font-semibold leading-none overflow-visible">
            UX Writing
          </p>
        </div>
        <div
          className="bg-darkShade rounded-[4px] pt-11 pl-6 text-lightShade h-[160px] w-[160px]"
        >
          <img className="w-[30px] mt-3" src={arrowGuide} alt="" />
          <p className="pt-4 text-xs font-semibold leading-none overflow-visible">
            Prototyping
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
