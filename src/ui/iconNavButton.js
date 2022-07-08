
export default function IconNavButton(props) {
  return (
    <a href={props.href} target="_blank" className={`fin fin-${props.idx} py-2 text-white hover:text-aqua-normal transform duration-100 md:hover:scale-110`} rel="noreferrer">
      <i className={props.icon}></i>
    </a>
  )
}
