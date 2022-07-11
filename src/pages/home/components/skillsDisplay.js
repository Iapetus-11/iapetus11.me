import SkillCard from "./skillCard";

export default function SkillsDisplay({ title, skills, bottom }) {
  return (
    <div
      className={`flex flex-col items-center md:items-start px-5 md:px-0 ${
        bottom ? "pb-24 md:pb-10" : ""
      }`}
    >
      <span className="fin fin-1 text-2xl text-aqua-normal text-center md:text-left font-semibold pb-2 md:pl-4 w-full">
        {title}
      </span>

      <div className="flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start text-base md:text-lg text-white space-x-2 space-y-2 max-w-xl">
        <div className="fin fin-2 w-0 p-0 -m-2 md:m-0"></div>{" "}
        {/* for some reason, size of next div is fucked if I don't do this */}
        {skills?.map((skill, i) => (
          <SkillCard {...skill} idx={i} key={i} />
        ))}
      </div>
    </div>
  );
}
