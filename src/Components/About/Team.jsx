import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Container from "../Container";

import { aboutPage } from "../../constants";

const { team } = aboutPage;

const Team = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <Container className="py-12 font-inter">
      <div className="w-full text-center">
        <h2 className="bg-midnight-green rounded-xl text-bright-gray font-bold text-center md:w-lg mx-auto py-3">
          Meet the Team
        </h2>
        <p className="mt-6 p font-bold text-center md:text-left">
          Our Team &amp; Leadership Philosophy
        </p>
        <p className="mt-4 p text-center md:text-left">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
        {team.map((member) => (
          <Card
            key={member.id}
            name={member.name}
            plainName={member.plainName}
            img={member.image}
            profileSummary={member.profileSummary}
            onOpen={() => setActiveId(member.id)}
          />
        ))}
      </div>

      {activeId && (
        <Modal memberId={activeId} onClose={() => setActiveId(null)} />
      )}
    </Container>
  );
};

export default Team;
