import React, { useState } from "react";
import Card from "./Card";

import { aboutPage } from "../../constants";
import Modal from "./Modal";

const { team } = aboutPage;

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleToggleModal = (id) => {
    setIsModalOpen(!isModalOpen);
    setId(id);
  }

  return (
    <div className="relative py-8 font-inter px-4 sm:px-4 md:px-15 lg:px-30">
      {/* <h1 className="h1 text-center mb-4">The Board</h1>
      <p className="p leading-6 mb-6 text-center">
        Business Advisor | Legal Advisor | Academic Advisors - Science,
        Agriculture and Technology | Grants Advisors | Influencers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
        {team.slice(0, 4).map((member, index) => (
          <Card
            key={index}
            name={member.name}
            role={member.role}
            img={member.image}
            profileSummary={member.profileSummary}
            handleToggleModal={() => handleToggleModal(member.id)}
          />
        ))}
      </div> */}

      <div className="w-full mt-12 text-center">
        <h1 className=" bg-midnight-green rounded-xl text-bright-gray font-bold text-center  md:w-lg mx-auto  py-3">
          Meet the Team
        </h1>
        <p className="mt-6 text-sm md:text-base lg:text-lg leading-7 font-bold text-center md:text-left">
          Our Team & Leadership Philosophy
        </p>
        <p className="mt-6 p leading-7 text-center md:text-left">
          Led by visionary experts across science, business, and public policy,
          for RAISSAT’s leadership it is more than governance, it’s
          collaboration in action. Our executive team brings together diverse
          expertise in science, agriculture, and technology, united by a shared
          vision: to turn evidence into sustainable impact. Each leader embodies
          the institute’s core values of integrity, innovation, and inclusion,
          working collectively to bridge the gap between research and real-world
          solutions. Together, they inspire a culture of purpose-driven
          excellence where bold ideas become transformative outcomes for
          communities and the planet.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
        {team.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            role={member.role}
            img={member.image}
            profileSummary={member.profileSummary}
            handleToggleModal={() => handleToggleModal(member.id)}
          />
        ))}
      </div>
      {/* Card Modal */}
      {isModalOpen && (
        <div className="h-screen fixed top-0 left-0 flex justify-center items-center w-full bg-black/50 z-50 px-3 sm:px-8 md:px-15 lg:px-30">
          <Modal memberId={id} handleToggleModal={handleToggleModal} />
        </div>
      )}

      {/* <div className="mt-20">
        <hr class="border-t-1 border-rich-black" />

        // Our Impact
        <h1 className="h1 text-center mt-10">Our Impact</h1>
        <p className="p leading-6 my-4 text-center">
          Our Impact The Research Applied Institute for Sustainability in
          Science, Agriculture and Technology (RAISSAT) started off in 2021 as a
          group of multidisciplinary researchers who were passionate about
          implementing research projects that have global impact and capable of
          improving human, animal as well as environmental health, offering
          sustainable solutions for the future. This group of research
          professionals actively mentor several youth aspiring to become astute
          researchers, implement relevant field projects with actionable
          insights, participate in both specialized and multidisciplinary
          research projects with sustainable solutions and continue to produce
          articles on sustainability which captures agricultural, science and
          technological research advancements from a global perspective.
        </p>
      </div> */}
    </div>
  );
};

export default Team;
