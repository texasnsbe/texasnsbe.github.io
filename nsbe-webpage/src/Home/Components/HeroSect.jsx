/**
 * HeroSect
 *
 * Displays the home page hero header and the looping introduction video.
 * Typography is standardized via the `.herostyle` class defined in `index.css`.
 */
import LoopingVideo from "../../Shared/Components/LoopingVideo";

export default function HeroSect() {
  return (
    <div className="flex justify-center mb-[10vh]">
      <div className="flex flex-col justify-center">
        <h1 className="herostyle tracking-tight transition-all hover:scale-105 duration-300 ease-out">
          WELCOME!
        </h1>
        <div>
          <LoopingVideo />
        </div>
      </div>
    </div>
  );
}
