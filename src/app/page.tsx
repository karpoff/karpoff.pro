import Image from "next/image";
import { career } from "@/career";

export default function Home() {
    return (
      <>
        <nav className="sticky top-0 bg-white z-10 border-b px-4">
          <div className="max-w-screen-lg flex mx-auto py-8">
            <div className="flex-1">
              <a className="text-3xl text-sky-800" href="/">karpoff.pro</a>
            </div>

            <div>
              <a href="/cv" className="text-2xl px-4 py-2 border rounded">CV</a>
            </div>
          </div>
        </nav>

        <div
          className="w-full h-screen flex flex-col items-center justify-center bg-cover"
          style={{ backgroundImage: "url('landing-bg.jpeg')" }}
        >
          <h1 className="text-white text-5xl font-semibold text-center px-6 ">
            HI! I'm <span className="text-sky-800 bg-neutral-300 bg-opacity-50 px-1">Anton Karpov</span>
          </h1>

         
          <div className="text-white text-3xl font-semibold opacity-50 mt-16">
            Web developer
          </div>
        </div>

        <div className="bg-white w-screen py-16">
          <div className="max-w-screen-sm mx-auto border shadow-lg flex flex-col p-8">
            <div className="flex">
              <div>
                <Image
                  className="rounded-full w-32 h-32"
                  src="/me.png"
                  alt="Anton Karpov"
                  height={128}
                  width={128}
                />
              </div>
              <div className="ml-4 md:flex md:flex-col md:justify-center md:space-y-4">
                <h2 className="text-black text-3xl">Anton Karpov</h2>
                <a className="text-neutral-400 underline" href="https://t.me/gagarins" target="_blank">@gagarins</a>
              </div>
            </div>
            <p className="mt-4 text-neutral-500">
              Hello, I’m a Web Developer from Yerevan, Armenia.
              I have strong experience in web development (back end, front end, mobile).
              And can manage whole development process
            </p>
            <p className="mt-4 text-neutral-500 opacity-80">You cant contact me via <a className="underline" href="https://t.me/gagarins" target="_blank">telegram @gagarins</a></p>
          </div>
        </div>

        <div className="bg-blue-500 w-screen py-16">
          <div className="max-w-screen-lg px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto">
            {career.map(job => (
              <div key={job.key} className="mb-8 px-4">
                <div className="rounded-full overflow-hidden bg-white w-32 h-32 flex items-center justify-center">
                  <div className="bg-center w-36 h-36 bg-cover scale-75"
                    style={{ backgroundImage: `url(${job.company.logo})` }}
                  />
                </div>

                <p className="text-white text-xl mt-4">{job.company.name}</p>

                <p className="text-white opacity-80">{job.period}</p>
                <p className="text-white opacity-80">{job.position}</p>
                <p className="text-white opacity-80 mt-4">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}
