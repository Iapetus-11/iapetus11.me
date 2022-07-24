export default function IconNavButton({ href, icon, idx, fixWidth }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`fin fin-${idx} py-2 text-lg text-white hover:text-aqua-normal transform duration-100 md:hover:scale-110 ${
        fixWidth ? "w-5" : ""
      }`}
      rel="noreferrer"
    >
      <i className={icon}></i>
    </a>
  );
}
