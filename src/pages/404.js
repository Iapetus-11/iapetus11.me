import Default from "../ui/default";
import NavButton from "../ui/navButton";

export default function PageNotFound() {
  return (
    <Default>
      <div className="flex flex-col h-2/3 w-full">
        <div className="m-auto">
          <span className="text-8xl text-white font-semibold">404</span>
          <NavButton href="javascript:history.back()" idx="1" name="Go Back" />
        </div>
      </div>
    </Default>
  );
}
