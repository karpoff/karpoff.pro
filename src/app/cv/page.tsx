import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMars, faEnvelope, faGlobe, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from "react";

import { career, education, projects } from "@/career";
import { Print } from "@/components/print";
import contacts from '@/contacts';

config.autoAddCss = false;

export default function CV() {
    return (
      <div className="w-full py-10 print:py-0">
        <div className="mx-auto max-w-[21cm] flex justify-between print:hidden">
          <a href="/" className="text-neutral-400">back to karpoff.pro</a>

          <Print className="text-neutral-400">print version</Print>
        </div>
        <div
          className={[
              'mx-auto max-w-[21cm] w-4/5 pb-10 pt-6 px-10',
              'bg-white border border-gray-300  rounded-sm shadow-lg',
              'print:border-0 print:p-0 print:shadow-none',
          ].join(' ')}
        >
          <HeaderBlock />

          <main className="flex flex-col gap-x-10 mt-10">
            <div className="flex mb-8">
              <MainBar className="w-2/6 pr-4" />
              <MainContent className="w-4/6" />
            </div>

            <div className="break-before-page">
              <JobsSection />
            </div>

          </main>
        </div>
      </div>
    );
}

const HeaderBlock = () => (
  <header>
    <div className="flex justify-between items-center">
      <div>
        <div className="bg-cover bg-no-repeat rounded-full h-48 w-48"
          style={{ backgroundImage: 'url(../me.png)' }}
        />
      </div>
      <div className="grid justify-items-end">
        <h1 className="text-5xl font-extrabold">Anton Karpov</h1>
        <p className="text-xl mt-5">Web Developer / project manager</p>
        <p className="text-md mt-2">15+ years experience in IT</p>
      </div>
    </div>
  </header>
);

const MainBar: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <ul className="mt-2 mb-10">
      <li className="mt-1">
        <FontAwesomeIcon icon={faMars} />
        <span className="ml-2">38 years</span>
      </li>
      <li className="mt-1">
        <FontAwesomeIcon icon={faLocation} />
        <span className="ml-2">Yerevan, Armenia</span>
      </li>
      <li className="mt-1">
        <FontAwesomeIcon icon={faGlobe} />
        <a href={contacts.web} className="ml-2">{contacts.web}</a>
      </li>
      <li className="mt-1">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${contacts.email}`} className="ml-2">{contacts.email}</a>
      </li>

      {contacts.social.map(soc => (
        <li className="mt-1" key={soc.title}>
          <FontAwesomeIcon icon={soc.icon} />
          <a href={soc.link} target="_blank" className="ml-2">{soc.display}</a>
        </li>
      ))}
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
  </div>
);

const ProjectSection = () => (
  <section>
    <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>
    <ul className="mt-1">
      {projects.map(project => (
        <li className="py-2 break-inside-avoid" key={project.key}>
          <div className="flex justify-between my-1">
            <a href={project.href} target="_blank" className="font-semibold">{project.title}</a>
            <p className="flex">
              {!!project.live && (
                <a href={project.live} target="_blank" className="bg-blue-600 text-white px-2 py-1 mr-1 text-xs rounded no-print">Live</a>
              )}
              {!!project.code && (
                <a href={project.code} target="_blank" className="bg-blue-600 text-white px-2 py-1 mr-1 text-xs rounded no-print">Code</a>
              )}
              {project.technologies.map(t => (
                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded" key={t}>{t}</span>
              ))}
            </p>
          </div>
          <p className="text-xs mb-1">{project.description}</p>
          <p className="text-xs mb-2">{project.what.join('. ')}.</p>
        </li>
      ))}
    </ul>
  </section>
);

const JobsSection = () => (
  <section>
    <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Work Experiences</h2>
    {career.map(job => (
      <div className="py-2 break-inside-avoid" key={job.key}>
        <p className="flex justify-between text-sm">
          <strong className="text-base underline">
            {job.company.name}
          </strong>
          <span className="text-neutral-400">{job.period}</span>
        </p>
        <p className="flex justify-between text-base">{job.position}</p>

        {!!job.roles?.length && (
        <>
          <strong className="text-sm font-medium mt-3">Roles</strong>
          <ul className="ml-6 list-disc grid grid-cols-2">
            {job.roles.map(role => (
              <li className="mt-0.5 text-xs" key={role}>{role}</li>
                ))}
          </ul>
        </>
        )}

        {!!job.achievements?.length && (
        <>
          <strong className="text-sm font-medium mt-3">Achievements</strong>
          <ul className=" list-disc grid grid-cols-2">
            {job.achievements.map(ach => (
              <li className="ml-6 mt-0.5 text-xs" key={ach}>{ach}</li>
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
      {education.map(edu => (
        <li className="pt-2" key={edu.key}>
          <p className="flex justify-between text-sm">
            <span className="text-base font-semibold pr-4">{edu.title}</span>
            <span className="whitespace-nowrap">{edu.period}</span>
          </p>
          <p className="flex justify-between text-sm">{edu.speciality}<small>{edu.degree}</small></p>
        </li>
      ))}
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
    <EducationSection />
  </div>
);
