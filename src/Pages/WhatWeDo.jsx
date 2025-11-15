import Container from "../Components/Container";

import { Link } from "react-router";
import { whatWeDo } from "../constants";
// import { services } from "../constants";

// const Card = ({ title, description, image, direction, to }) => {
//   const flexDirection =
//     direction === "row-reverse" ? "md:flex-row-reverse" : "md:flex-row";
//   return (
//     <div
//       className={`flex flex-col ${flexDirection} gap-5 font-inter not-last:mb-10`}
//     >
//       <img src={image} alt="image" className="h-auto object-cover" />
//       <div className="">
//         <h2 className="font-bold text-xl mb-3">{title}</h2>
//         <p className="p mb-3">{description}</p>
//       </div>
//     </div>
//   );
// };

const Card = ({ title, subTitle, description, image, to }) => {
  // const flexDirection =
  //   direction === "row-reverse" ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div className="flex justify-center flex-col md:flex-row gap-8 mb-16 ">
      <div className="w-full md:w-[50%] h-80  overflow-hidden">
        <img src={image} alt="image" className="h-full w-full object-cover" />
      </div>
      <div className="w-full md:w-[50%]">
        <h1 className="h1 font-bold">{title}</h1>
        <p className="font-bold p leading-7 mt-4">{subTitle}</p>
        <p className="p leading-7 mt-2 mb-8">{description}</p>
        <Link to={to} className="link w-1/2">
          Read More
        </Link>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  // const serviceObj = Object.fromEntries(
  //   services.map((service) => [service.id, service])
  // );
  // console.log(serviceObj);
  // console.log(serviceObj["consultancy"]);

  return (
    <Container>
      <section className="py-20">
        {/* <div className="flex flex-col md:flex-row mx-auto w-full gap-5 md:gap-16 justify-center items-center"> */}
        <div className="">
          {/* <div className="w-full md:w-2/3"> */}
          <div className="mb-8 flex flex-col gap-3">
            <h1 className="h1 text-midnight-green">What We Do</h1>
            <p className="p font-semibold">Turning Knowledge Into Impact</p>
            <p className="p leading-7 mt-4">
              At RAISSAT, we translate research into real-world solutions. We
              believe research should do more than inform, it should transform.
              Through evidence-based innovation, capacity building, and
              strategic partnerships, we help bridge the gap between knowledge
              and real-world application. Our multidisciplinary approach ensures
              every project we undertake delivers measurable impact in science,
              agriculture, and technology.
            </p>
          </div>
          {/* <div className="mt-8 flex flex-col gap-2 border-1 p-4 rounded-2xl font-medium text-midnight-green text-center justify-center w-full md:w-1/2">
            <span className="flex gap-3 justify-between">
              <Link
                to={`${serviceObj["research-and-project-management"].id}`}
                className="link w-1/2"
              >
                Research & Project Managemen
              </Link>
              <Link
                to={`${serviceObj["policy-engagement-and-advocacy"].id}`}
                className="link w-1/2"
              >
                Policy Engagement & Advocacy
              </Link>
            </span>
            <Link
              to={`${serviceObj["consultancy-and-capacity-building"].id}`}
              className="link"
            >
              Consultancy & Capacity Building
            </Link>
            <Link
              to={`${serviceObj["youth-mentoring-and-engagement"].id}`}
              className="link"
            >
              Youth Mentorship & Knowledge Exchange
            </Link>
            <Link
              to={`${serviceObj["youth-mentoring-and-engagement"].id}`}
              className="link"
            >
              Youth Mentoring and Engagement
            </Link>
          </div> */}
        </div>
        {whatWeDo.map((whatWeDo, idx) => (
          <Card
            key={idx}
            title={whatWeDo.title}
            subTitle={whatWeDo.subTitle}
            description={whatWeDo.description}
            image={whatWeDo.images[0]}
            to={`/services/${whatWeDo.id}`}
          />
        ))}
      </section>
    </Container>
  );
};

export default WhatWeDo;

{
  /* {whatWeDo.map((whatWeDo, idx) => (
            <Card
              key={idx}
              title={whatWeDo.title}
              subTitle={whatWeDo.subTitle}
              description={whatWeDo.description}
              image={whatWeDo.image}
              direction={whatWeDo.flexDirection}
            />
          ))} */
}
