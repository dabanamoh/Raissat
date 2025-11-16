import { mediaAssets, profiles } from "../assets";

const { drug1, drug2, drug3, antibody} = mediaAssets;
const { elohozino, samuel, goshen, sunday, christiana, adejoke, oladayo, rightArrow } = profiles;


export const media = {
  articles: [
    {
      id: crypto.randomUUID(),
      title:
        "Building Trust and Accountability in Science through Ethical Research",
      body: (
        <>
          <p>
            At RAISSAT, ethics stands at the core of every research endeavour.
            It guides how knowledge is created, shared, and applied for the
            greater good. Our commitment to integrity, transparency, and social
            responsibility defines our operations as well as the values we seek
            to instil in the next generation of scientists and innovators
          </p>
          <p>
            In line with this principle, one of our directors,
            <span className="font-bold"> Goshen David Miteu,</span> who also
            serves as the Lead Executive for Research Innovation &
            Implementation, published an influential and widely cited article in
            2024 titled
            <span>
              “Ethics in Scientific Research: A Lens into Its Importance,
              History, and Future”
            </span>
            in the Annals of Medicine and Surgery (Impact Factor 1.7).
          </p>
          <p>
            In this publication, Miteu examines the historical roots and modern
            applications of research ethics by drawing lessons from pivotal
            cases such as the Tuskegee Syphilis Study, the Thalidomide tragedy,
            and the Stanford Prison Experiment. The paper demonstrates how these
            events shaped today’s global frameworks for informed consent,
            non-maleficence, and justice, and underscores the ongoing need for
            Institutional Review Boards (IRBs) and global ethical harmonization
            to ensure scientific integrity.
          </p>
          <p>
            Reflecting RAISSAT’s values, the article reinforces that ethical
            science should be a foundation for innovation. It emphasizes how
            credibility, public trust, and socially beneficial outcomes arise
            only when research aligns with human rights and societal welfare.
          </p>
        </>
      ),
      conclusion: (
        <>
          <p></p>
        </>
      ),
      source: "Goshen, 2024",
      author: "Goshen David Miteu",
      authorProfile: goshen,
      date: "May 10, 2024",
      thumbnail: "",
      images: [],
      reference: "https://doi.org/10.1097/MS9.0000000000001959",
      publisher: "Annals of Medicine & Surgery (2024), Vol. 86:2395-2398",
    },

    {
      id: crypto.randomUUID(),
      title:
        "Guarding the Last Line of Defense: Tackling Antimicrobial Resistance through Awareness and Action",
      body: (
        <>
          <p>
            “Do you know there are last-resort drugs?” says Goshen David Miteu,
            one of our directors and Lead Executive for Research Innovation and
            Implementation at RAISSAT. In his thought-provoking publication
            titled “Closing Potential Drivers of Antimicrobial Resistance:
            Last-Resort Antimicrobials with the Potential of Being Misused - The
            Way Forward”, published in the Annals of Medicine and Surgery
            (2023).
          </p>
          <p>
            This paper addresses one of the gravest global health threats of our
            time: Antimicrobial Resistance (AMR), where infections caused by
            bacteria, viruses, fungi, and parasites no longer respond to
            treatment. Each year, AMR causes an estimated 1.27 million deaths
            globally, with projections that resistant infections could claim up
            to 10 million lives annually by 2050 if left unchecked. The study
            talks about how last-resort antibiotics, once the final line of
            defense against multi-drug-resistant pathogens like Klebsiella
            pneumoniae and Staphylococcus aureus, are themselves becoming
            ineffective due to misuse and poor stewardship.
          </p>
          <p>
            Miteu’s work reinforces the One Health perspective, recognizing how
            human medicine, veterinary care, and agriculture intersect to drive
            resistance from inappropriate prescriptions and over-the-counter
            antibiotic use to unregulated agricultural applications. His paper
            calls for robust stewardship programs, public education, and global
            surveillance systems to preserve these critical medicines and
            prevent a post-antibiotic era (See image).
          </p>
        </>
      ),
      conclusion: (
        <>
          <p>
            Image description: list of 29 drugs classified by the WHO as
            last-resort antimicrobials. Image source: Goshen et al., 2023
          </p>
          <p>
            At RAISSAT’s Department of Biological and Health Sciences, tackling
            antimicrobial resistance remains a top research priority. Through
            applied research, community education, and policy-driven
            initiatives, RAISSAT is committed to closing the AMR gap by
            promoting sustainable antimicrobial use and aligning with the UN
          </p>
          <p>
            <span className="font-bold">
              Sustainable Development Goals (SDGs 3, 6, and 12)
            </span>{" "}
            on health, clean environments, and responsible consumption. So why
            not key into our initiatives because AMR is not a thing of the
            future, it is happening now, and we may not be ready for the next
            global health emergency if we do not address AMR collectively.
          </p>
        </>
      ),
      source: "Goshen, 2023",
      author: "Goshen David Miteu",
      authorProfile: goshen,
      date: "May 10, 2023",
      thumbnail: "",
      images: [drug1, drug2, drug3],
      reference: "https://doi.org/10.1097/MS9.0000000000000760",
      publisher: "Annals of Medicine & Surgery (Vol. 85, 2023)",
    },

    {
      id: crypto.randomUUID(),
      title:
        "Strengthening Public Health Preparedness through Integrated Biomedical Strategies",
      body: (
        <>
          <p>
            At RAISSAT, we are committed to strengthening public health systems
            through applied research, innovation, and collaboration. Our mission
            recognizes that sustainable global health security depends not both
            discovery and the{" "}
            <span className="font-bold">
              integration of science, policy, and practice.
            </span>
            Building resilient health systems requires a proactive approach; one
            that unites disease prevention, rapid response, and equitable access
            to biomedical tools. In this spirit, we draw inspiration from a
            recent publication titled “Understanding the Public Health Value of
            Vaccines, Antivirals, and Monoclonal Antibodies as Complementary
            Strategies Against Infectious Diseases”, published by Springer
            Nature on October 30th, 2025. It offers a timely reflection on how
            modern biomedical countermeasures can synergize to protect
            populations from viral threats.
          </p>
          <p>
            The study, authored by
            <span className="font-bold"> Goshen David Miteu</span>, explores why
            vaccines, antivirals, and monoclonal antibodies (mAbs) should not be
            viewed as competitors but as complementary public health tools that
            form a layered, resilient defense against infectious diseases. Miteu
            discusses critical questions: Why are certain pathogens targeted
            with multiple interventions while others are not? Should resources
            be distributed evenly across all three? And how can these strategies
            co-exist efficiently in pandemic preparedness planning?
          </p>
          <p>
            Drawing on real case scenarios from{" "}
            <span className="font-bold">measles </span>and
            <span className="font-bold"> Ebola</span>
            to <span className="font-bold">COVID-19</span>, the paper
            demonstrates how each intervention addresses unique phases of
            disease prevention and control. Vaccines act as the first line of
            defense; antivirals reduce viral replication and disease severity;
            and mAbs provide targeted, rapid protection, especially for
            vulnerable populations. Rather than redundancy, this synergy ensures
            that public health systems remain adaptable and future-ready.
          </p>
          <p>
            This work mirrors our ongoing commitment at RAISSAT. At RAISSAT, we
            exist to close the global gap between discovery and deployment. From
            evidence to impact, in another sense. Some examples of how we do
            this are; by advocating for
            <span> evidence-based policies, One Health integration,</span> and
            <span className="font-bold">global collaboration</span> to
            strengthen pandemic resilience. Innovative thinking within
            biomedical and biological sciences is one way we achieve RAISSAT’s
            vision in public health: to transform research into sustainable,
            life-saving impact.
          </p>
        </>
      ),
      conclusion: (
        <>
          <p></p>
        </>
      ),
      source:
        "Goshen David Miteu (2025). Understanding the Public Health Value of Vaccines, Antivirals, and Monoclonal Antibodies as Complementary Strategies Against Infectious Diseases. Discover Public Health, 22:647.",
      author: "Goshen David Miteu",
      authorProfile: goshen,
      date: "May 10, 2025",
      thumbnail: "",
      images: [],
      reference: "https://doi.org/10.1097/MS9.0000000000000760",
      publisher: "Annals of Medicine & Surgery (Vol. 85, 2023)",
    },

    {
      id: crypto.randomUUID(),
      title:
        "Redefining Drug Design: The Future of Precision Antibody Therapeutics",
      body: (
        <>
          <p>
            At <span className="font-bold">RAISSAT, </span>we like to think
            about sustainability in three-folds. I.e via science, agriculture
            and technology. In science, it means to us in part by creating
            <span className="font-bold"> lasting biomedical innovations</span>
            that strengthen health systems and improve lives. This is why in all
            our cores, our mission is in applied research. For example, in
            biomedical research that spins around developing smarter, more
            efficient therapeutic solutions that respond to emerging global
            health needs. In this context, we draw inspiration from the
            publication; “Structure–Function Relationships of Human IgG
            Subclasses: Implications for Therapeutic Antibody Engineering and
            Clinical Application” published by Springer Nature (2025), shows how
            scientific understanding can guide innovation at the molecular
            level.
          </p>
          <p>
            The paper, authored by one of our directors
            <span className="font-bold">Goshen David Miteu</span>, explores how{" "}
            <span className="font-bold">
              structural variations in human Immunoglobulin subclasses
            </span>{" "}
            define their immune functions and therapeutic potential. He
            dissected how Fc-region architecture influences effector activity,
            half-life, and receptor binding, and further explained how we can
            engineer next-generation monoclonal antibodies (mAbs) that are more
            precise, potent, and patient-tailored.
          </p>
          <p>
            To advance
            <span className="font-bold"> drug and therapy development</span>,
            modern biologics can overcome current manufacturing and stability
            challenges to become scalable global therapies. The advent of
            bispecific antibodies, capable of simultaneously binding two
            dis­tinct antigens, introduces new possibilities for Fc subclass
            hybridization (See image).
          </p>
        </>
      ),
      conclusion: (
        <>
          <p>
            Image description: Bispecific Antibody (Miteu, 2025). Think of
            antibodies as special “Y-shaped” tools made by the body to recognize
            and fight germs (called antigens). On the left, IgG1 binds to an
            antigen (Antigen 1) and triggers cytotoxicity, meaning it calls
            immune cells to destroy infected or harmful cells like signaling
            “attack and eliminate.” On the right, IgG4 binds to another antigen
            (Antigen 2) but instead focuses on immune modulation, meaning it
            helps calm or fine-tune the immune response to avoid excessive
            damage like saying “slow down, don’t overreact.” So, a sense, IgG1
            acts as the fighter, while IgG4 works as the regulator. Both are
            vital for balance; one protects against disease, and the other
            prevents unnecessary inflammation.
          </p>
          <p>
            It emphasizes that the future of drug design lies in precision
            medicine. This means treatments crafted for specific patients,
            conditions, and molecular targets. At RAISSAT’s department of
            Biological and Health Sciences, this represents one of our key
            mandates: to transform scientific discovery into sustainable
            therapeutics through interdisciplinary collaboration, translational
            research, and innovation. This study reinforces RAISSAT’s vision of
            promoting sustainability within science itself, ensuring that
            research leads not just to discovery, but to long-term, equitable
            healthcare advancement.
          </p>
        </>
      ),
      source:
        "Goshen David Miteu (2025). Structure–Function Relationships of Human IgG Subclasses: Implications for Therapeutic Antibody Engineering and Clinical Application. Discover Applied Science Impact Factor of 2.8 (Springer Nature).",
      author: "Goshen David Miteu",
      authorProfile: goshen,
      date: "May 10, 2025",
      thumbnail: "",
      images: [antibody],
      reference: "https://doi.org/10.1007/s42452-025-07625-7",
      publisher: "Springer Nature",
    },
  ],

  newsletters: [],
  resources: [],
};
