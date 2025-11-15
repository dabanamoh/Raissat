import { GiGiftOfKnowledge } from "react-icons/gi";

import { servicesAssets, profiles, mediaAssets } from "../assets";


// services
const {
  iconConsult,
  iconManagement,
  iconResearch,
  iconKnowledge,
  iconTrust,
  iconCollaboration,
  iconPolicy,
  imageConsultancy,
  imageManagement,
  imageMentoring,
  imagePolicy,
  imageResearch,

  // what we do
  research1,
  research2,
  research3,
  research4,
  policy1,
  policy2,
  policy3,
  policy4,
  consult1,
  consult2,
  consult3,
  consult4,
  capacity1,
  capacity2,
  capacity3,
  capacity4,
  mentor1,
  mentor2,
  mentor3,
  mentor4,
} = servicesAssets;

// staff Profiles images
const {
  elohozino,
  samuel,
  goshen,
  sunday,
  christiana,
  adejoke,
  oladayo,
  // rightArrow,
} = profiles;

// Media center images
const { locust, farmConflict, climateFarming, pestManagement, cow, doctor } =
  mediaAssets;

const navItems = [
  {
    text: "Home",
    route: "/",
  },
  {
    text: "Who We Are",
    route: "/about",
  },
  {
    text: "What We Do",
    route: "/services",
  },
  {
    text: "Media center",
    route: "/media",
  },
  {
    text: (
      <button className="bg-midnight-green hover:bg-rich-black text-white py-2 px-4 rounded-2xl cursor-pointer">
        Get Involved
      </button>
    ),
    route: "/contact",
  },
];

// For About Section component
const about = {
  title: "Who We Are",
  text: "RAISSAT (Research Applied Institute for Sustainability in Science Agriculture and Technology) is a global think-and-do alliance transforming evidence into action. We unite scientists, policymakers, innovators, and communities to create lasting change at the intersection of research and real-world impact.",
};

const services = [
  {
    id: "research-and-project-management",
    title: "Research & Project Management",
    subTitle: "Transforming Evidence Into Real-World Impact",
    text: "Coordinating high-impact, cross-sector projects that translate science into sustainable action.",
    icon: iconConsult,
    rationale:
      "Tailored, research-backed strategies that bridge science and real-world application.Actionable insights and strategies that drive real-world sustainability impact",
    image: imageConsultancy,
  },

  {
    id: "policy-engagement-and-advocacy",
    title: "Policy Engagement & Advocacy",
    subTitle: "Where Research Meets Policy",
    text: "Turning complex data into actionable policies and stakeholder dialogue.",
    icon: iconManagement,
    rationale:
      "Structured project execution that turns ground-breaking ideas into transformative realities",
    image: imageManagement,
  },

  {
    id: "consultancy-and-capacity-building",
    title: "Consultancy & Capacity Building",
    text: "Empowering professionals, communities, and governments with tools for sustainable growth.",
    icon: iconResearch,
    rationale:
      "Hands-on learning that transforms knowledge into practical solutions and career growth.",
    image: imageResearch,
  },

  {
    id: "youth-mentorship-and-knowledge-exchange",
    title: "Youth Mentorship & Knowledge Exchange",
    text: "Cultivating the next generation of innovators and changemakers.",
    icon: iconKnowledge,
    rationale:
      "Clear, powerful communication that drives policy change and collective action.",
    image: imagePolicy,
  },

  {
    id: "youth-mentoring-and-engagement",
    title: "Youth Mentoring and Engagement",
    text: "In the journey to build sustainable, healthy, and inclusive communities, one truth remains constant: youth are not just the future, they are the now. We believe the future of sustainability lies in the hands of young innovators. These young minds are energetic, innovative, and deeply connected to the pulse of the communities we aim to impact. Through mentorship programs, fellowships, research opportunities, and interactive youth forums, RAISSAT nurtures creativity, leadership, and problem-solving skills among young people.",
    icon: "",
    rationale:
      "By connecting them with experts and platforms, we empower youth to lead sustainability initiatives in their communities and beyond.",
    image: imageMentoring,
  },
];

const impact = [
  {
    id: "authenticity-and-trust",
    title: "Authenticity & Trust",
    text: "Neutral, evidence-driven, and community-centered.",
    icon: iconTrust,
    rationale: "",
    image: "",
  },

  {
    id: "multidisciplinary-collaboration",
    title: "Multidisciplinary Collaboration",
    text: "Fusing expertise across science, agriculture, and technology.",
    icon: iconCollaboration,
    rationale: "",
    image: "",
  },

  {
    id: "policy-translation-speed",
    title: "Policy Translation Speed",
    text: "Accelerating research adoption through clear, influential communication.",
    icon: iconPolicy,
    rationale: "",
    image: "",
  },
];

// FAQs

const faqs = [
  {
    question: "What is RAISSAT?",
    answer:
      "RAISSAT (Research Applied Institute for Sustainability in Science, Agriculture and Technology) is a multidisciplinary research and policy organization dedicated to transforming evidence into impact. We bridge science, agriculture, and technology to create sustainable solutions that improve lives and protect the planet.",
  },

  {
    question: "What does RAISSAT stand for?",
    answer:
      "RAISSAT stands for Research Applied Institute for Sustainability in Science, Agriculture and Technology — a name that reflects our purpose: connecting research, innovation, and policy to shape sustainable futures.",
  },

  {
    question: "What is RAISSAT’s Massive Transformative Purpose (MTP)?",
    answer:
      "From evidence to impact. Breaking barriers and shaping sustainable futures.” Our MTP drives everything we do—translating research into real-world transformation through collaboration and innovation.",
  },

  {
    question: "What is RAISSAT’s mission?",
    answer:
      "A world where science, technology, and integrity unite to secure prosperity, nourish communities, and safeguard the planet for generations to come.",
  },

  {
    question: "What is RAISSAT’s vision?",
    answer:
      "A world where science, technology, and integrity unite to secure prosperity, nourish communities, and safeguard the planet for generations to come.",
  },

  {
    question: "What challenges does RAISSAT address?",
    answer:
      "RAISSAT addresses the global gap between research and implementation. We focus on transforming scientific evidence into scalable solutions that tackle food insecurity, climate change, and technological inequity.",
  },

  {
    question: "How does RAISSAT create impact?",
    answer:
      "Through applied research, policy advocacy, capacity building, and strategic partnerships that turn data into action and ideas into sustainable progress.",
  },

  {
    question: "Who does RAISSAT collaborate with?",
    answer:
      "We work with governments, academia, industry partners, development agencies, and civil society to co-create and deploy evidence-based innovations for maximum impact.",
  },

  {
    question: "What makes RAISSAT different from other organizations?",
    answer:
      "We don’t just produce reports—we produce results. RAISSAT operates as an action alliance, combining academic rigor with implementation power to ensure research translates into measurable outcomes.",
  },

  {
    question: "What are RAISSAT’s core values?",
    answer: (
      <>
        <ol>
          <li className="[&:not(:last-child)]:mb-2">
            <span className="font-bold">Integrity:</span> We lead with
            transparency and accountability.
          </li>
          <li className="[&:not(:last-child)]:mb-2">
            <span className="font-bold">Innovation:</span> We harness creativity
            and technology for systemic change.
          </li>
          <li className="[&:not(:last-child)]:mb-2">
            <span className="font-bold">Collaboration:</span> We believe
            progress happens together
          </li>
          <li className="[&:not(:last-child)]:mb-2">
            <span className="font-bold">Sustainability:</span> We focus on
            solutions that endure.
          </li>
          <li className="[&:not(:last-child)]:mb-2">
            <span className="font-bold">Equity:</span> We ensure inclusion and
            fairness across every initiative.
          </li>
        </ol>
      </>
    ),
  },

  {
    question: "What are RAISSAT’s main focus areas?",
    answer: (
      <>
        <ol>
          <li className="[&:not(:last-child)]:mb-2 font-bold">
            Applied Research & Project Management
          </li>
          <li className="[&:not(:last-child)]:mb-2 font-bold">
            Policy Engagement & Advocacy
          </li>
          <li className="[&:not(:last-child)]:mb-2 font-bold">
            Consulting & Strategic Advisory
          </li>
          <li className="[&:not(:last-child)]:mb-2 font-bold">
            Capacity Building & Training
          </li>
          <li className="[&:not(:last-child)]:mb-2 font-bold">
            Youth Empowerment & Knowledge Exchange
          </li>
        </ol>
      </>
    ),
  },

  {
    question: "Where does RAISSAT operate?",
    answer:
      "RAISSAT has its global headquarters in the United Kingdom, with regional operations and partnerships across Africa, Europe, and the Global South.",
  },

  {
    question: "How does RAISSAT support agriculture and food systems?",
    answer:
      "We collaborate with governments and agricultural institutions to develop policies, technologies, and data-driven systems that strengthen food security and sustainable production.",
  },

  {
    question: "How does RAISSAT use technology?",
    answer:
      "We leverage emerging technologies, AI, data science, and digital transformation tools to improve research efficiency, monitoring, and impact measurement.",
  },

  {
    question: "What is “bridging research, policy, and practice”?",
    answer:
      "It’s our approach to ensuring science doesn’t stop at publication. We connect researchers, policymakers, and implementers to ensure knowledge becomes tangible, sustainable action.",
  },

  {
    question: "How does RAISSAT measure success?",
    answer:
      "We measure outcomes through social, economic, and environmental impact indicators, tracking policy adoption, capacity development, and sustainability metrics.",
  },

  {
    question: "What kind of training does RAISSAT offer?",
    answer:
      "Our training programs equip individuals and organizations with practical skills in data-driven decision-making, policy design, leadership, and systems thinking for sustainable development.",
  },

  {
    question: "Does RAISSAT work with youth and students?",
    answer:
      "Yes! We invest in the next generation of thinkers and leaders through mentorship, research fellowships, and innovation labs focused on science, technology, and policy.",
  },

  {
    question: "How can organizations partner with RAISSAT?",
    answer:
      "We welcome partnerships in research, funding, capacity building, and innovation. Visit our Partnerships or Contact page to explore collaboration opportunities.",
  },

  {
    question: "What’s next for RAISSAT?",
    answer:
      "RAISSAT is scaling its impact through regional hubs, policy innovation programs, and data-driven collaborations designed to strengthen global resilience and sustainability.",
  },
];

const aboutPage = {
  // about: {
  //   title: "About Us",
  //   text: "The Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT) is a non-government research organization that works to promote sustainability that transforms the future through the bridging of science, agriculture and technology to create ground-breaking sustainable solutions. Our mission is rooted in the belief that critical global issues can be effectively addressed and sustainable solutions developed through impactful multidisciplinary research. Therefore, in implementing our various activities through research, education, community-based outreach, media projects and advocacy, the core values of “Sustainable Development Goals” are consistently integrated to achieve realistic and impactful results in science, agriculture and technology. As a leading organization actively engaged in research and training, RAISSAT is dedicated to advancing knowledge, driving innovation, and empowering communities through science-based solutions. Our team of global experts collaborates on groundbreaking research, practical training programs, and outreach initiatives designed to foster resilience and prosperity in communities locally and globally with emphasis on sustainable practices that effectively and efficiently balance economic growth, social equity, and environmental stewardship.",
  // },

  about: {
    title: "About Us",
    text: (
      <>
        <p>
          RAISSAT — the Research Applied Institute for Sustainability in
          Science, Agriculture, and Technology — exists to turn knowledge into
          impact. We are a multidisciplinary institute that bridges research,
          innovation, and policy to solve real-world challenges at the nexus of
          science, agriculture, and technology. Our philosophy is simple yet
          powerful: sustainable progress happens when evidence meets execution.
          From the laboratory to the field, from policymakers to farmers, we
          connect people, data, and systems to deliver transformative solutions
          that advance sustainability and equity
        </p>
        <p className="font-semibold mt-6 text-xl text-midnight-green">Why</p>
        <p>
          Every challenge facing our world - from food insecurity to climate
          change - demands more than research; it requires collaboration,
          courage, and continuity. RAISSAT was founded to bridge these systemic
          gaps through evidence-based programs, capacity building, and policy
          translation that ensure ideas don’t just remain on paper, they make a
          difference in people’s lives. We believe in
          <span className="font-bold">
            {" "}
            integrity, inclusivity, and impact.
          </span>{" "}
          Our work empowers governments, institutions, and communities to
          co-create sustainable futures, rooted in science and guided by
          compassion.
        </p>
      </>
    ),
  },

  vision: {
    title: "Our Vision",
    text: "A world where science, technology, and integrity unite to secure prosperity, nourish communities, and safeguard the planet for generations to come.",
  },

  mision: {
    title: "Our Mission",
    text: "To turn knowledge into impact by transforming research into real-world solutions, building human capacity, and advancing policy across science, agriculture, and technology.",
  },

  team: [
    {
      id: crypto.randomUUID(),
      name: (
        <p>
          <span className="uppercase">Elohozino</span> O. Benneth -{" "}
          <span className="font-normal">Executive Director</span>
        </p>
      ),
      role: "Executive Director, RAISSAT",
      image: elohozino,
      profileSummary:
        "Elohozino Benneth is a visionary research strategist and sustainability leader guiding RAISSAT’s mission to bridge science, agriculture, and technology for real-world impact. With dual Master’s degrees from Queen’s University Belfast and Robert Gordon University, she blends scientific depth with strategic leadership, championing ethical, evidence-based innovation. Under her direction, RAISSAT continues to drive transformative projects that empower communities, shape policy, and inspire the next generation of changemakers.",
      profileFull: (
        <>
          <p className="mb-4">
            Elohozino Benneth is the Executive Director of the Research Applied
            Institute for Sustainability in Science, Agriculture, and Technology
            (RAISSAT), where she leads multidisciplinary teams advancing
            evidence-based solutions for sustainable development. A strategic
            leader and research strategist, Elohozino brings over a decade of
            expertise in science, agriculture, and technology to bridge the gap
            between research and real-world impact.
          </p>
          <p className="mb-4">
            She holds dual Master’s degrees in Animal Behaviour and Welfare from
            Queen’s University Belfast and Business Leadership and Management
            from Robert Gordon University, complemented by a Chartered
            Management Institute (CMI) certification in Strategic Management and
            Leadership Practice. Her ability to integrate scientific rigor with
            executive strategy has positioned her as a catalyst for innovation,
            policy influence, and institutional growth.
          </p>
          <p className="mb-4">
            Elohozino is passionate about advancing ethical research practices,
            animal welfare, and sustainability, aligning technology and policy
            to create measurable societal value. A published scholar and
            respected thought leader, she has authored peer-reviewed works that
            enrich global discourse on agriculture, welfare, and sustainability.
            Through mentorship and inclusive leadership, she continues to
            inspire emerging researchers and changemakers across Africa and
            beyond.
          </p>
          {/* <p className="mb-4">
            Holding dual Master’s degrees in Animal Behaviour and Welfare from
            Queens University Belfast, as well as Business Leadership and
            Management from Robert Gordon University, alongside a prestigious
            Chartered Management Institute (CMI) certification in Strategic
            Management and Leadership Practice, she exemplifies the perfect
            synergy of scientific expertise and executive acumen. Her
            multifaceted background equips her to guide RAISSAT’s
            multidisciplinary teams in tackling real-world challenges through
            rigorous research, innovative program design, and sustainable
            development strategies.
          </p>
          <p className="mb-4">
            Elohozino’s extensive experience coordinating complex projects and
            leading high-impact research initiatives sets her apart as a
            trailblazer in her field. She has consistently demonstrated
            excellence in orchestrating collaborative research environments,
            optimizing team performance, and translating scientific insights
            into scalable solutions that drive long-term value.
          </p>
          <p>
            Her ability to anticipate emerging trends and align research outputs
            with stakeholder needs ensures RAISSAT remains at the forefront of
            relevant, actionable science. At her core, Elohozino is a mentor –
            cultivating talent, nurturing young scientists, and building a
            legacy of excellence through knowledge sharing and professional
            development. Her passion for capacity building and inclusive
            leadership continues to inspire the next generation of researchers
            and changemakers. Under her leadership, RAISSAT is not just a
            research institution—it is a movement for sustainable
            transformation, a hub for collaborative ingenuity, and a beacon for
            future-forward science. Elohozino Benneth stands as a formidable
            leader, uniquely equipped to propel RAISSAT—and its partners—into a
            more sustainable, equitable, and innovative future.
          </p> */}
        </>
      ),
    },

    {
      id: crypto.randomUUID(),

      name: (
        <p>
          <span className="uppercase">Samuel</span> Ogah -{" "}
          <span className="font-normal">
            Lead Executive, Corporate Communications & Business Development
          </span>
        </p>
      ),
      role: " Lead Executive, Corporate Communications & Business Development",
      image: samuel,
      profileSummary:
        "A tenured academic and development strategist, Samuel Ogah brings over a decade of expertise in aquaculture, agricultural systems, and institutional growth to RAISSAT. He leads initiatives that strengthen partnerships, drive communications, and position the institute as a hub of sustainable innovation. Samuel’s leadership has helped secure over $150,000 in development grants, advancing RAISSAT’s mission to turn scientific research into measurable impact across Africa and beyond.",
      profileFull: (
        <>
          <p className="mb-4">
            Samuel Ogah is the Lead Executive for Corporate Communications and
            Business Development at the Research Alliance for Innovation in
            Science, Agriculture, and Technology (RAISSAT). With over a decade
            of expertise in aquaculture, sustainable agriculture, and research
            innovation, Samuel bridges the gap between academic excellence and
            practical impact. His leadership focuses on fostering collaboration,
            driving institutional partnerships, and amplifying RAISSAT’s mission
            to turn evidence into sustainable action.
          </p>
          <p className="mb-4">
            A tenured academic at Joseph Sarwuan Tarka University, Makurdi,
            Samuel holds both Bachelor’s and Master’s degrees in Aquaculture,
            and is a member of the Fisheries Society of Nigeria and the
            Malaysian Fisheries Society. His research portfolio spans food
            safety, data-driven fisheries management, and environmental
            sustainability, with international collaborations across
            Africa—including Malawi, South Africa, and Ghana—where he
            contributes to research mitigating antimicrobial resistance in
            aquaculture.
          </p>
          <p className="mb-4">
            Over the years, Samuel has led multidisciplinary teams to secure
            more than $150,000 in development grants for food security and
            animal welfare initiatives. Beyond his research and development
            work, he is a passionate advocate for community engagement and
            capacity building, particularly across African and Latin American
            contexts. As a board member, he brings strategic vision, analytical
            depth, and a people-centered approach to advancing science-based
            innovation and institutional growth at RAISSAT
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: (
        <p>
          <span className="uppercase">Goshen</span> David Miteu -{" "}
          <span className="font-normal">
            Lead Executive for Innovation & Project Implementation (Research)
          </span>
        </p>
      ),
      role: "",
      image: goshen,
      profileSummary:
        "Goshen Miteu is a Commonwealth Scholar and biomedical scientist whose work focuses on translating research into sustainable innovations. A First-Class graduate of Caleb University and Distinction Master’s recipient from the University of Nottingham, he brings academic rigor and visionary leadership to RAISSAT’s research and implementation strategies. His collaborations and published works continue to advance biomedical and environmental research, fostering impact through science-driven solutions.",
      profileFull: (
        <>
          <p className="mb-4">
            Goshen David Miteu is the Lead Executive for Research Innovation and
            Project Implementation at the Research Alliance for Innovation in
            Science, Agriculture, and Technology (RAISSAT). A visionary
            biomedical scientist, Goshen is driven by a passion for translating
            research into real-world impact, guiding multidisciplinary teams to
            develop innovative and sustainable scientific solutions that address
            some of the world’s most pressing challenges.
          </p>
          <p className="mb-4">
            He graduated with First-Class Honours in Biochemistry from Caleb
            University, Lagos—where he emerged as the overall best student and
            valedictorian—and later earned a Master’s degree in Biotechnology
            (Distinction) from the University of Nottingham, UK, as a
            Commonwealth Scholar. His research contributions have been published
            in leading international journals, earning growing citations and
            recognition for advancing biomedical and life-sciences knowledge.
          </p>
          <p className="mb-4">
            A recipient of the I-Scholar Initiative Award and the EducationUSA
            Membership Award, Goshen is also a full member of the Sigma Xi
            Scientific Research Honor Society, a community that includes more
            than 200 Nobel Laureates. His memberships in the Society for
            Experimental Biology and Medicine and the Nigerian Society of
            Biochemistry and Molecular Biology (NSBMB) further underscore his
            professional excellence and ongoing contributions to global science.
          </p>
          <p>
            Beyond his research, Goshen is an advocate for scientific
            collaboration and community development. He regularly partners with
            scientists and organizations across continents, fostering
            multidisciplinary innovation and empowering young researchers. At
            RAISSAT, he combines scientific rigor with visionary leadership,
            ensuring that every project not only advances knowledge—but also
            creates lasting, positive impact for people and the planet.
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: (
        <p>
          <span className="uppercase">Sunday</span> Godwin James -{" "}
          <span className="font-normal">
            Lead Executive, Grants, Operations & Logistics
          </span>
        </p>
      ),
      role: "Lead Executive, Operations & Logistics",
      image: sunday,
      profileSummary:
        "As RAISSAT’s operational backbone, Sunday James ensures that research and innovation translate into on-the-ground results. A graduate of Ebonyi State University, he combines scientific insight with logistical excellence to manage grants, streamline operations, and coordinate sustainable field initiatives. Passionate about food systems, climate-smart agriculture, and community empowerment, Sunday champions efficiency, accountability, and real-world sustainability in every project.",
      profileFull: (
        <>
          <p className="mb-4">
            Sunday Godwin James serves as the Lead Executive for Grants,
            Operations, and Logistics at the Research Alliance for Innovation in
            Science, Agriculture, and Technology (RAISSAT). A passionate
            advocate for sustainable development, Sunday is deeply committed to
            bridging science, agriculture, and technology to create resilient
            food systems and thriving communities. His work centers on
            translating research into action—ensuring that every project RAISSAT
            undertakes is efficiently executed, impact-driven, and aligned with
            global sustainability goals.
          </p>
          <p className="mb-4">
            He holds a Bachelor of Science degree in Applied Biology from Ebonyi
            State University, Nigeria, and brings a multidisciplinary
            perspective to his leadership. At RAISSAT, Sunday oversees
            operational strategy, equipment acquisition, and field coordination,
            ensuring that research outputs transition seamlessly from concept to
            implementation. He has also played an integral role in establishing
            frameworks that connect scientific innovation to community-based
            applications, particularly within the context of the UN Sustainable
            Development Goals (SDGs).
          </p>
          <p className="mb-4">
            A researcher at heart, Sunday has contributed to peer-reviewed
            publications and conducted extensive work in agriculture, food
            traceability, and climate-smart systems, completing over 200
            literature reviews in related fields. His approach blends precision
            with purpose—combining evidence-based methods, ethical practice, and
            scalable innovation to strengthen agricultural value chains and
            empower rural communities.
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: (
        <p>
          <span className="uppercase">Christianah</span> Oki -{" "}
          <span className="font-normal">
            Senior Compliance and Outreach/Youth Engagement Officer
          </span>
        </p>
      ),
      role: "Senior Compliance and Outreach/Youth Engagement Officer",
      image: christiana,
      profileSummary:
        "Christianah Oki is a global health researcher and conservationist leading outreach and youth engagement across Africa. Her work links science, agriculture, and advocacy to drive inclusive research and policy action. Through her leadership, RAISSAT’s programs empower young scientists and communities to participate in building sustainable futures.",
      profileFull: (
        <>
          <p className="mb-4">
            Christianah Oki is a parasitologist, conservationist, and
            global-health researcher whose work sits at the intersection of
            science, agriculture, and technology. As Senior Compliance and
            Outreach / Youth Engagement Officer at the Research Applied
            Institute for Sustainability in Science, Agriculture and Technology
            (RAISSAT), she leads initiatives that strengthen institutional
            integrity, expand community partnerships, and mobilize youth
            participation in sustainable research and innovation.
          </p>
          <p className="mb-4">
            Her multidisciplinary expertise spans neglected tropical diseases,
            wildlife conservation, reproductive health, and climate-smart
            interventions. With a focus on community-based solutions,
            Christianah has designed and supported programs that advance the
            Sustainable Development Goals (SDGs) through evidence-based advocacy
            and education.
          </p>
          <p className="mb-4">
            Driven by purpose and passion, she works to ensure that science and
            sustainability remain accessible to the next generation. Through her
            leadership, RAISSAT’s outreach programs continue to empower young
            scientists, amplify community voices, and champion inclusive
            approaches that link environmental health, agricultural advancement,
            and global development.
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: (
        <p>
          <span className="uppercase">Adejoke</span> A. Ododor -{" "}
          <span className="font-normal">Administrative Secretary</span>
        </p>
      ),
      role: "Administrative Secretary",
      image: adejoke,
      profileSummary:
        "Adejoke Ododor anchors RAISSAT’s daily operations with precision and professionalism. She manages communication, documentation, and coordination across teams—ensuring the organization functions seamlessly. Her diligence and organizational acumen uphold the institute’s integrity and efficiency, making her indispensable to RAISSAT’s mission of advancing sustainability through science.",
      profileFull: (
        <>
          <p className="mb-4">
            Adejoke A. Ododor serves as the Administrative Secretary at the
            Research Applied Institute for Sustainability in Science,
            Agriculture and Technology (RAISSAT), where she provides the
            operational structure that keeps the institute’s multidisciplinary
            programs running efficiently. Her role is pivotal in ensuring that
            RAISSAT’s mission - advancing sustainable, science - driven
            solutions - translates seamlessly into daily execution.
          </p>
          <p className="mb-4">
            With a background in administrative management and organizational
            coordination, Adejoke oversees internal communications, document
            control, and executive scheduling, while fostering collaboration
            across departments. Her precision, professionalism, and proactive
            approach underpin the institute’s commitment to excellence and
            accountability.
          </p>
          <p className="mb-4">
            Adejoke’s meticulous attention to process and people ensures that
            every project at RAISSAT is supported by a strong operational
            foundation. Dedicated to creating an efficient and collaborative
            work environment, she helps bridge the gap between science,
            agriculture, and technology - contributing to a culture of
            integrity, impact, and sustainability.
          </p>
        </>
      ),
    },

    {
      id: crypto.randomUUID(),
      name: (
        <p>
          <span className="uppercase">Oladayo</span> Timileyin Ebenezer -{" "}
          <span className="font-normal">Media Resource Officer</span>
        </p>
      ),
      role: "Media Resource Officer",
      image: oladayo,
      profileSummary:
        "Oladayo Timileyin Ebenezer is a creative storyteller and media strategist passionate about transforming science into stories that inspire change. With a background in Food Technology (B.Sc. & M.Sc., University of Ibadan), he combines scientific insight with creative communication to spotlight RAISSAT’s research and community impact. His work bridges science, sustainability, and storytelling, shaping how RAISSAT’s mission connects with the world.",
      profileFull: (
        <>
          <p className="mb-4">
            Oladayo Timileyin Ebenezer Media Resource Officer | RAISSAT Oladayo
            Timileyin Ebenezer is a creative storyteller, researcher, and media
            strategist dedicated to amplifying the voice and impact of
            sustainability through powerful communication. As the Media Resource
            Officer at the Research Applied Institute for Sustainability in
            Science, Agriculture, and Technology (RAISSAT), he leads the
            development of compelling narratives, visual content, and digital
            strategies that highlight the institute’s research breakthroughs,
            community impact, and global collaborations.
          </p>
          <p className="mb-4">
            With a strong academic background, Oladayo holds both a Bachelor’s
            and Master’s degree in Food Technology from the University of
            Ibadan, where he graduated with distinction in his postgraduate
            studies. His research on bioactive compounds and functional foods
            has been published in peer-reviewed journals, underscoring his deep
            connection to science and innovation.
          </p>
          <p className="mb-4">
            Before joining RAISSAT, Oladayo gained professional experience as a
            Product Manager and Production Supervisor, honing his expertise in
            leadership, communication, and project management. His
            multidisciplinary experience bridges science, creativity, and
            storytelling—an intersection that defines his work at RAISSAT.
            Driven by a passion for media as a tool for transformation, Oladayo
            crafts stories that connect people to purpose, turning complex
            scientific ideas into accessible, engaging, and actionable insights.
            Through his role, he continues to bridge the gap between science,
            sustainability, and public engagement, ensuring RAISSAT’s message of
            impact resonates across diverse audiences.
          </p>
        </>
      ),
    },
    // {
    //   id: crypto.randomUUID(),
    //   name: "Josephine O. Adebayo",
    //   role: "Lead Executive, Corporate Administrative Communications",
    //   image: josephine,
    //   profile:
    //     "A pioneering researcher in aquaculture sustainability and nutrigenomics, serving as the Lead Executive for Corporate Administrative Communications at the Research Applied Institute for Sustainability in Science, Agriculture and Technology (RAISSAT).",
    // },
  ],
};

const whatWeDo = [
  {
    id: "research-project-management",
    title: "Research Project Management",
    subTitle: "Transforming Evidence Into Real-World Impact",
    description:
      "We lead and manage high-impact research programs from concept to completion, ensuring scientific rigor, measurable outcomes, and community relevance. Our project management approach aligns with international standards - integrating monitoring, evaluation, and learning frameworks that turn data into decisions and discoveries into sustainable solutions.",
    detailedDescription:
      "We design, coordinate, and manage high-impact research projects that bridge the gap between laboratories and local communities. Our teams work across agriculture, technology, and environmental sustainability to ensure research outputs lead to measurable change. From project design to execution, monitoring, and knowledge dissemination, we ensure that every initiative meets global standards and delivers tangible results.",
    images: [research1, research2, research3, research4],
    flexDirection: "",
    focusAreas: [
      "Public Health & One Health Approach",
      "Sustainable Agriculture & Environmental Sustainability",
      "Renewable Energy & Climate Resilience",
      "Biomedical & Bioscience Integration​",
    ],
    cta: "Partner With Us",
  },
  {
    id: "policy-engagement-communications",
    title: "Policy Engagement & Communications",
    subTitle: "Where Research Meets Policy",
    description:
      "We bridge the gap between research and governance by transforming complex data into clear, actionable policies. Through strategic communication, policy briefs, and stakeholder dialogues, RAISSAT ensures that science informs sustainable decision-making. Our policy engagement unit amplifies credible voices, shapes reform, and drives systems-level change across Africa and beyond.",
    detailedDescription:
      "We transform scientific data into actionable insights that drive decision-making. RAISSAT’s policy specialists bridge the gap between researchers and policymakers, producing clear, evidence-based recommendations that guide national and regional reforms. Through advocacy, communication strategies, and stakeholder engagement, we make science understandable, usable, and impactful.",
    images: [policy1, policy2, policy3, policy4],
    flexDirection: "",
    focusAreas: [
      "Policy Translation & Brief Development​",
      "Government and NGO Collaboration​",
      "Advocacy Campaigns",
      "Science Communication​",
    ],
    cta: "Collaborate on Policy",
  },

  {
    id: "consulting",
    title: "Consultancy",
    subTitle: "Empowering Organizations to Act Responsibly - and Effectively",
    description:
      "RAISSAT provides advisory and consultancy services that help governments, corporations, and institutions adopt sustainable, data-driven strategies. Our experts work at the intersection of policy, technology, and business to deliver ESG-aligned solutions that create long-term value for people and the planet.",
    detailedDescription:
      "RAISSAT provides advisory and consultancy services that help governments, corporations, and institutions adopt sustainable, data-driven strategies. Our experts work at the intersection of policy, technology, and business to deliver ESG-aligned solutions that create long-term value for people and the planet.",
    images: [consult1, consult2, consult3, consult4],
    flexDirection: "",
    focusAreas: [
      "ESG and Net Zero Implementation​",
      "Environmental and Sustainability Audits​",
      "Climate-Smart Agriculture & Green Technologies",
      "Data-Driven Impact Assessment",
    ],
    cta: "Request a Consultation",
  },

  {
    id: "capacity-building-human-development",
    title: "Capacity Building & Human Development",
    subTitle: "Equipping Minds to Shape a Sustainable Tomorrow",
    description:
      "Through targeted training, workshops, and digital learning platforms, we strengthen the capacity of professionals, policymakers, and researchers to drive sustainable innovation. Our programs combine theory and application—bridging knowledge and action to equip the next generation of changemakers.",
    detailedDescription:
      "RAISSAT believes that lasting transformation begins with people. We deliver high-quality training programs, professional workshops, and mentorship designed to strengthen research skills, leadership capacity, and sustainability knowledge. Our hybrid learning model—spanning physical and digital platforms—ensures accessibility for learners worldwide.",
    images: [capacity1, capacity2, capacity3, capacity4],
    flexDirection: "row-reverse",
    focusAreas: [
      "Research & Innovation Training",
      "Science Communication & Leadership",
      "Technical Skills for Sustainability",
      "Digital Learning and Knowledge Transfer",
    ],
    cta: "Explore Training Opportunities",
  },
  {
    id: "youth-mentorship-community-engagement",
    title: "Youth Mentorship & Community Engagement",
    subTitle: "Inspiring the Next Generation of Innovators",
    description:
      "We believe the future belongs to those empowered to shape it. Our youth programs engage young people in research, sustainability projects, and leadership development - providing mentorship, tools, and real-world experience to foster confidence, creativity, and community impact.",
    detailedDescription:
      "We invest in young people as the architects of a sustainable future. Through mentorship, field experience, and innovation challenges, RAISSAT empowers youth to explore research, entrepreneurship, and social impact. We also work directly with communities to co-create inclusive, science-based solutions that improve livelihoods and strengthen resilience.",
    images: [mentor1, mentor2, mentor3, mentor4],
    flexDirection: "",
    focusAreas: [
      "Youth Leadership & Mentorship",
      "Community-Based Research",
      "Inclusive Innovation Programs​",
      "Local Empowerment Initiatives",
    ],
    cta: "Join Our Youth Programs",
  },
];

const media = {
  blogs: [
    {
      title: "Ethiopia's Battle Against the Locust Invation",
      body: "RAISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few ",
      author: "Elohozino O. Benneth",
      authorProfile: elohozino,
      date: "June 10, 2024",
      thumbnail: locust,
    },

    {
      title: "Conflict Between Herdsmen and Farmers in North Central Nigeria",
      body: "Through the innovative application of cutting-edge science and extensive trials led by dedicated farmers, RAISSAT has successfully introduced a diverse range of natural pest control methods that are revolutionizing the agricultural landscape.",
      author: "Goshen David Miteu",
      authorProfile: elohozino,
      date: "June 10, 2024",
      thumbnail: farmConflict,
    },

    {
      title: "Integrated Pest Management Program - West Africa",
      body: "AISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few ",
      author: "Goshen David Miteu",
      authorProfile: elohozino,
      date: "June 10, 2024",
      thumbnail: pestManagement,
    },
  ],
  articles: [
    {
      title: "Understanding Monkey Pox: A Growing Concern in Congo DRC",
      body: "RAISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few ",
      author: "Christianah Oki",
      authorProfile: christiana,
      date: "June 10, 2024",
      thumbnail: doctor,
    },

    {
      title: "Mad Cow Disease: A Brief Overview of BSE",
      body: "Through the innovative application of cutting-edge science and extensive trials led by dedicated farmers, RAISSAT has successfully introduced a diverse range of natural pest control methods that are revolutionizing the agricultural landscape. ",
      author: "Adejoke A. Ododor",
      authorProfile: adejoke,
      date: "June 10, 2024",
      thumbnail: cow,
    },

    {
      title: "Climate-Resilient Farming Initiative - Northern Ghana",
      body: "RAISSAT has embarked on an inspiring journey to empower smallholder farmers by providing them with extensive training in sustainable soil management techniques and effective water conservation practices. Over the past few  ",
      author: "Samuel I. Ogah",
      authorProfile: samuel,
      date: "June 10, 2024",
      thumbnail: climateFarming,
    },
  ],
  newsletters: [],
  resources: [],
};

export { navItems, about, services, impact, faqs, aboutPage, whatWeDo, media };
