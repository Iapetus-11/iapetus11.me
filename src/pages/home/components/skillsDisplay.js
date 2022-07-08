import SkillCard from "./skillCard";

export default function SkillsDisplay(props) {
  return (
    <div className={`flex flex-col items-center md:items-start px-5 md:px-0 ${props.bottom ? 'pb-24 md:pb-10' : ''}`}>
      <span className="fin fin-1 text-2xl text-aqua-normal text-center md:text-left font-semibold pb-2 md:pl-4 w-full">{props.title}</span>

      <div className="flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start text-base md:text-lg text-white space-x-2 space-y-2 max-w-xl">
        <div className="fin fin-2 w-0 p-0 -m-2 md:m-0"></div> {/* for some reason, size of next div is fucked if I don't do this */}

        {props.skills?.map((s, i) => (<SkillCard idx={i} name={s.name} icon={s.icon} key={i} />))}
      </div>
    </div>
  )
}
