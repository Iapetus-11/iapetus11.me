export default function Project({ name, description, href, image, idx }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`fin fin-${idx} transition hover:bg-opacity-20 flex flex-row flex-nowrap items-center bg-black bg-opacity-30 rounded-md p-9 max-w-lg md:space-x-4`}
      rel="noreferrer"
    >
      <div className="flex flex-col flex-nowrap">
        <span className="text-3xl text-aqua-normal text-left font-semibold pb-1 float-right">
          {name}
        </span>
        <span className="text-base text-white text-left">{description}</span>
      </div>

      {/* project icon on desktop/md+ */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} draggable="false" className="w-1/3 rounded-full hidden md:flex" alt="" />
    </a>
  );
}
