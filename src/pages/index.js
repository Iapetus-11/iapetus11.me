import Default from '../ui/default'
import SkillsDisplay from './home/components/skillsDisplay'
import skills from "../lib/data/skills";
import NavButton from '../ui/navButton';
import IconNavButton from '../ui/iconNavButton';

export default function Home() {
  return (
    <Default>
      <div className="flex flex-row flex-wrap md:flex-nowrap items-center w-full h-full self-center">
        {/* profile picture, mobile nav, name, and bio */}
        <div className="flex flex-col space-y-3 px-3 md:px-0 md:items-center lg:w-2/3 -ml-0 md:-ml-16 lg:-ml-32">
          {/* mobile pfp and nav buttons on either side of pfp */}
          <div className="flex md:hidden flex-row items-center justify-center space-x-6 text-base text-white text-center self-center">
            <div className="flex flex-col space-y-0">
              <div className="flex flex-row space-x-4">
                <IconNavButton href="https://github.com/Iapetus-11" icon="fab fa-github" idx="1" fixWidth={true} />
                <IconNavButton href="https://www.linkedin.com/in/milo-weinberg/" icon="fab fa-linkedin" idx="2" fixWidth={true} />
              </div>
              <div className="flex flex-row space-x-4">
                <IconNavButton href="https://discord.bio/p/Iapetus11" icon="fab fa-discord" idx="2" fixWidth={true} />
                <IconNavButton href="https://twitter.com/iapetus_11" icon="fab fa-twitter" idx="3" fixWidth={true} />
              </div>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */ }
            <img src="/images/petus-circle.png" draggable="false" className="fin fin-0 w-1/3 py-6 self-center" alt="Iapetus11's profile picture" />
            
            <div className="flex flex-col space-y-2">
              <NavButton name="Projects" href="/projects" idx="3" />
              <NavButton name="Friends" href="/friends" idx="4" />
            </div>
          </div>

          {/* desktop pfp */}
          {/* eslint-disable-next-line @next/next/no-img-element */ }
          <img src="/images/petus-circle.png" className="hidden md:flex fin fin-0 w-1/3 pb-6 self-center" draggable="false" alt="Iapetus11's profile picture" />

          <h1 className="fin fin-1 text-3xl text-center text-aqua-normal font-semibold w-full max-w-sm self-center">Milo <span className="text-white">/</span> Iapetus11</h1>

          <span className="fin fin-2 text-lg text-left text-white font-semibold max-w-md self-center text-center">
            Hey! I&lsquo;m Milo, an 18 year-old student and full-stack developer who&lsquo;s been programming for 6+ years and loves to learn new things!</span>
        </div>

        {/* desktop nav and lists */}
        <div className="flex flex-col items-center md:items-start space-y-7 lg:pr-16">
          <div className="hidden md:flex flex-col-reverse md:flex-row md:space-x-6 md:mr-auto pt-5 self-center">
            <div className="flex flex-row space-x-4 self-center md:pl-6">
              <IconNavButton href="https://github.com/Iapetus-11" icon="fab fa-github" idx="1" />
              <IconNavButton href="https://www.linkedin.com/in/milo-weinberg/" icon="fab fa-linkedin" idx="2" />
              <IconNavButton href="https://discord.bio/p/Iapetus11" icon="fab fa-discord" idx="3" />
              <IconNavButton href="https://twitter.com/iapetus_11" icon="fab fa-twitter" idx="4" />
            </div>

            <div className="flex flex-row space-x-4 self-center">
              <NavButton name="Projects" href="/projects" idx="3" />
              <NavButton name="Friends" href="/friends" idx="4" />
            </div>
          </div>

          {/* list of programming languages */}
          <SkillsDisplay skills={skills.languages} title="Programming Languages" />

          {/* list of tools/software/other/etc... */}
          <SkillsDisplay skills={skills.other} title="Technologies / Tools" bottom={true} />
        </div>
      </div>
    </Default>
  )
}
