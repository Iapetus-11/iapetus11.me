
export default function SkillCard({name, icon, idx}) {
  return (
    <div className={`fin fin-${idx} py-2 px-4 bg-black bg-opacity-30 rounded-md`}>
      <i className={`text-aqua-normal ${icon}`}></i> <span>{name}</span>
    </div>
  )
}
