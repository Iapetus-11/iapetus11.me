import Default from "./default";
import NavButton from "./navButton";
import IconNavButton from "./iconNavButton";

export default function DesignatedPage({ title, children }) {
  return (
    <Default>
      <div className="flex flex-col md:flex-row self-center w-full md:px-48 pt-12">
        <span className="text-6xl text-white text-left font-semibold self-center">{title}</span>

        <div className="flex flex-col-reverse md:flex-row md:space-x-6 md:ml-auto pt-5 self-center">
          <div className="flex flex-row space-x-4 self-center pt-2 md:pt-0 md:pl-6">
            <IconNavButton href="https://github.com/Iapetus-11" icon="fab fa-github" idx="1" />
            <IconNavButton
              href="https://www.linkedin.com/in/milo-weinberg/"
              icon="fab fa-linkedin"
              idx="2"
            />
            <IconNavButton href="https://discord.bio/p/Iapetus11" icon="fab fa-discord" idx="3" />
            <IconNavButton href="https://twitter.com/iapetus_11" icon="fab fa-twitter" idx="4" />
          </div>

          <div className="flex flex-row space-x-4 self-center">
            <NavButton href="/" idx="1" name="Home" />

            {title == "Friends" ? (
              <NavButton name="Projects" href="/projects" idx="2" />
            ) : (
              <NavButton name="Friends" href="/friends" idx="2" />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-8 py-16 space-y-16">
        {children}
      </div>
    </Default>
  );
}
