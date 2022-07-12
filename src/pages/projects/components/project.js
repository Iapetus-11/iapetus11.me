export default function Project({ name, description, href, image, idx }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`fin fin-${idx} transition hover:bg-opacity-20 flex flex-row flex-nowrap items-center bg-black bg-opacity-30 rounded-2xl p-9 max-w-lg md:space-x-4`}
      rel="noreferrer"
    >
      <div className="flex flex-col flex-nowrap">
        <span className="text-base text-white text-left">
          {/* project icon on desktop/md+ */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            draggable="false"
            className="w-1/6 rounded-full flex md:hidden float-left mr-2 mt-1 -ml-2"
            alt=""
          />

          <span className="text-xl md:text-3xl text-aqua-normal text-left font-semibold">
            {name}
          </span>

          {/* little spacer, a litttttle more than a <br> */}
          <div className="pb-1" />

          {description}
        </span>
      </div>

      {/* project icon on desktop/md+ */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} draggable="false" className="w-1/3 rounded-full hidden md:flex" alt="" />
    </a>
  );
}
