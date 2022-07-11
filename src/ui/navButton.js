export default function NavButton({name, href, newWindow, idx}) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={href} target={newWindow ? "_blank" : "_self"} rel={newWindow ? "noreferrer" : null} className={`flex items-center justify-center fin fin-${idx} py-2 px-4 align-middle hover:bg-aqua-dark transform duration-100 md:hover:scale-110 border hover:border-opacity-0 border-white rounded-md h-8 md:h-10`}>
      <p className="leading-tight text-white text-base self-center">{name}</p>
    </a>
  )
}
