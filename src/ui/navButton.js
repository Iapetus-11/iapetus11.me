export default function NavButton(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={props.href} target={props.newWindow ? "_blank" : "_self"} rel={props.newWindow ? "noreferrer" : null} className={`flex items-center justify-center fin fin-${props.idx} py-2 px-4 align-middle hover:bg-aqua-dark transform duration-100 md:hover:scale-110 border hover:border-opacity-0 border-white rounded-md`}>
        {props.children}
        <p className="leading-tight text-white">{props.name}</p>
      </a>
    </div>
  )
}
