import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMars, faEnvelope, faGlobe, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from "react";

import { career } from "@/career";
import { Print } from "@/components/print";
import contacts from '@/contacts';

config.autoAddCss = false;

export default function CV() {
    return (
      <div className="w-full py-10">
        <div className="mx-auto max-w-[21cm] flex justify-between">
          <a href="/" className="text-neutral-400">back to karpoff.pro</a>

          <Print className="text-neutral-400">print version</Print>
        </div>
        <div
          className="mx-auto max-w-[21cm] bg-white border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5"
        >
          <HeaderBlock />

          <main className="flex gap-x-10 mt-10">
            <MainBar className="w-2/6" />
            <MainContent className="w-4/6" />
          </main>
        </div>
      </div>
    );
}

const HeaderBlock = () => (
  <header>
    <div className="flex justify-between items-center">
      <div>
        <div className="bg-cover bg-no-repeat rounded-full h-52 w-52"
          style={{ backgroundImage: 'url(../me.png)' }}
        />
      </div>
      <div className="grid justify-items-end">
        <h1 className="text-7xl font-extrabold">Anton Karpov</h1>
        <p className="text-xl mt-5">Web Developer / project manager</p>
      </div>
    </div>
  </header>
);

const MainBar: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <ul className="mt-2 mb-10">
      <li className="px-2 mt-1">
        <FontAwesomeIcon icon={faMars} />
        <span className="ml-2">38 years</span>
      </li>
      <li className="px-2 mt-1">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${contacts.email}`} className="ml-2">{contacts.email}</a>
      </li>
      <li className="px-2 mt-1">
        <FontAwesomeIcon icon={faGlobe} />
        <a href={contacts.web} className="ml-2">{contacts.web}</a>
      </li>

      {contacts.social.map(soc => (
        <li className="px-2 mt-1" key={soc.title}>
          <FontAwesomeIcon icon={soc.icon} />
          <a href={soc.link} target="_blank" className="ml-2">{soc.display}</a>
        </li>
        ))}

      <li className="px-2 mt-1">
        <FontAwesomeIcon icon={faLocation} />
        <span className="ml-2">Yerevan, Armenia</span>
      </li>
    </ul>

    <strong className="text-xl font-medium">Languages</strong>
    <ul className="mt-2 mb-10">
      <li className="px-2 mt-1">Russian <span className="opacity-60">(native)</span></li>
      <li className="px-2 mt-1">English <span className="opacity-60">(professional)</span></li>
    </ul>

    <strong className="text-xl font-medium">Major Skills</strong>
    <ul className="mt-2 mb-10">
      <li className="px-2 mt-1">Project Management</li>
      <li className="px-2 mt-1">System architecture</li>
      <li className="px-2 mt-1">FrontEnd development <span className="opacity-60">(react, angular)</span></li>
      <li className="px-2 mt-1">BackEnd development <span className="opacity-60">(node.js, python)</span></li>
    </ul>

    <strong className="text-xl font-medium">Interests & Hobbies</strong>
    <ul className="mt-2">
      <li className="px-2 mt-1">Snowboarding</li>
      <li className="px-2 mt-1">Travelling</li>
    </ul>
  </div>
);

const ProjectSection = () => (
  <section className="hidden">
    <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>
    <ul className="mt-1">
      <li className="py-2">
        <div className="flex justify-between my-1">
          <strong>Rules of 10000 hours</strong>
          <p className="flex">
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
          </p>
        </div>
        <ul className="flex mb-2">
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
          </li>
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
          </li>
        </ul>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          delectus labore enim in minus quod vero dignissimos et, ratione obcaecati quis
          maiores? Voluptatem, natus cupiditate perferendis omnis ex hic incidunt!
          Earum dolore cupiditate sed et maxime distinctio iure fugiat aspernatur at veniam
          laudantium eveniet corporis dicta reiciendis quod consequatur, labore perferendis
          dolorum velit quibusdam minus iste dolorem! Officiis, obcaecati maxime
        </p>
      </li>
      <li className="py-2">
        <div className="flex justify-between my-1">
          <strong>Vending Machine</strong>
          <p className="flex">
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
          </p>
        </div>
        <ul className="flex mb-2">
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
          </li>
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
          </li>
        </ul>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          expedita illum optio porro suscipit rerum labore veritatis autem eum totam veniam
          repudiandae repellendus perspiciatis eligendi sequi maiores, cum ipsa ut!
          Dolorum aliquid quaerat, dolore nemo, vero alias non porro quam totam impedit
          repellat voluptas, nobis harum quae dolorem accusantium consequatur. Recusandae
          cupiditate possimus natus consequuntur aliquid, molestias provident saepe nobis.
        </p>
      </li>
      <li className="py-2">
        <div className="flex justify-between my-1">
          <strong>Landing Page</strong>
          <p className="flex">
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">React</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">Node.js</span>
          </p>
        </div>
        <ul className="flex mb-2">
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
          </li>
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
          </li>
        </ul>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          odio autem non possimus adipisci, sed sequi culpa ipsa necessitatibus repellat
          rerum. Obcaecati nobis modi voluptate nam minus praesentium soluta voluptatibus!
          Minima temporibus deserunt laborum, expedita ad molestiae perferendis? Ipsa aut,
          necessitatibus expedita rem iure minus sit voluptates magni, sequi eum architecto
          excepturi tempora dolorum soluta quam odit amet nobis incidunt.
        </p>
      </li>
      <li className="py-2">
        <div className="flex justify-between my-1">
          <strong>Gamgyul Market</strong>
          <p className="flex">
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">React</span>
            <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">Node.js</span>
          </p>
        </div>
        <ul className="flex mb-2">
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
          </li>
          <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
          </li>
        </ul>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          suscipit soluta at doloremque ipsa unde, doloribus beatae delectus odio dolorum
          consequatur libero esse ratione nostrum nihil quaerat alias cupiditate assumenda?
          Nesciunt unde aliquid quam quisquam excepturi deserunt ipsa doloremque culpa itaque.
          Esse consectetur odit est laboriosam facilis! Accusamus inventore vel magni sed
          aliquid! Aspernatur dolores, nam id fugit ad aliquam.
        </p>
      </li>
    </ul>
  </section>
);

const JobsSection = () => (
  <section>
    <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Work Experiences</h2>
    {career.map(job => (
      <div className="py-2" key={job.key}>
        <p className="flex justify-between text-sm">
          <strong className="text-base">
            {job.company.name}
          </strong>
          <span className="text-neutral-400">{job.period}</span>
        </p>
        <p className="flex justify-between text-base">{job.position}</p>

        {!!job.roles?.length && (
        <>
          <strong className="text-sm font-medium mt-3">Roles</strong>
          <ul className="ml-6 list-disc">
            {job.roles.map(role => (
              <li className="mt-0.5 text-xs" key={role}>{role}</li>
                ))}
          </ul>
        </>
        )}

        {!!job.achievements?.length && (
        <>
          <strong className="text-sm font-medium mt-3">Achievements</strong>
          <ul className="ml-6 list-disc">
            {job.achievements.map(ach => (
              <li className="mt-0.5 text-xs" key={ach}>{ach}</li>
                ))}
          </ul>
        </>
        )}
      </div>
    ))}
  </section>
);

const EducationSection = () => (
  <section>
    <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Education</h2>
    <ul className="mt-2">
      <li className="pt-2">
        <p className="flex justify-between text-sm">
          <strong className="text-base">Hello Univerisity</strong>
          <span>2022-2019</span>
        </p>
        <p className="flex justify-between text-sm">Digital marketing<small>GPA 4.0</small></p>
      </li>
      <li className="pt-2">
        <p className="flex justify-between text-sm">
          <strong className="text-base">World Univerisity</strong>
          <span>2022-2019</span>
        </p>
        <p className="flex justify-between text-sm">Fashion Design<small>GPA 3.8</small></p>
      </li>
    </ul>
  </section>
);

const MainContent: FC<{ className?: string }> = ({ className }) => (
  <div className="w-4/6">
    <section>
      <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
      <p className="mt-4 text-xs">Hello, I’m a Web Developer from Nizhny Novgorod, Russia, currently living in
        Yerevan, Armenia. I have strong experience in web development (back end, front end, mobile).
        And can hold whole development process
      </p>
    </section>

    <ProjectSection />
    <JobsSection />
  </div>
);
