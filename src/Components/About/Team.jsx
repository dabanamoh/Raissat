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
      <div className="max-w-[72ch]">
        <h2 className="h1 text-midnight-green mb-3">{copy.heading}</h2>
        <p className="p font-bold">{copy.philosophyTitle}</p>
        <p className="p mt-2">{copy.philosophyText}</p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 list-none m-0 p-0">
        {team.map((member) => (
          <li key={member.id}>
            <Card
              member={member}
              readMoreLabel={copy.readMoreLabel || "Read full profile"}
              onOpen={() => setActiveId(member.id)}
            />
          </li>
        ))}
      </ul>

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
