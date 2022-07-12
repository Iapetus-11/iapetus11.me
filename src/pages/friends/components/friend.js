import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Friend({ name, username, url, content, idx }) {
  return (
    <div
      className={`${(content?.length ?? 0) <= 160 ? "md:w-1/2" : "mx-auto"} md:px-8 self-center`}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <div
          className={`fin fin-${idx} flex flex-row p-8 bg-black transition bg-opacity-30 hover:bg-opacity-20 rounded-2xl`}
        >
          <span className="text-white text-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-16 h-16 rounded-full float-left m-3"
              src={`https://avatars.githubusercontent.com/${username}`}
              alt={`${name}'s avatar`}
            />

            <span className="text-aqua-normal text-3xl">{name}</span>
            <br />

            <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
          </span>
        </div>
      </a>
    </div>
  );
}
