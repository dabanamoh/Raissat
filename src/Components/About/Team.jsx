import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Container from "../Container";

import { about, team } from "../../content";

const Team = () => {
  const [activeId, setActiveId] = useState(null);
  const copy = about.team;

  return (
    <Container className="py-12 font-inter">
      <div className="w-full text-center">
        <h2 className="bg-midnight-green rounded-xl text-bright-gray font-bold text-center md:w-lg mx-auto py-3">
          {copy.heading}
        </h2>
        <p className="mt-6 p font-bold text-center md:text-left">{copy.philosophyTitle}</p>
        <p className="mt-4 p text-center md:text-left">{copy.philosophyText}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
        {team.map((member) => (
          <Card key={member.id} member={member} onOpen={() => setActiveId(member.id)} />
        ))}
      </div>

      {activeId && (
        <Modal
          member={team.find((m) => m.id === activeId)}
          onClose={() => setActiveId(null)}
        />
      )}
    </Container>
  );
};

export default Team;
