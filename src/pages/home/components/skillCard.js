
export default function SkillCard(props) {
  return (
    <div className={`fin fin-${props.idx} py-2 px-4 bg-black bg-opacity-30 rounded-md`}>
      <i className={`text-aqua-normal ${props.icon}`}></i> <span>{props.name}</span>
    </div>
  )
}
