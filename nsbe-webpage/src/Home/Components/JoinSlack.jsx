/**
 * JoinSlack Component
 *
 * Displays a call-to-action section encouraging users to join the NSBE Slack
 * community. Features a title, description, and linked image that opens the
 * Slack invitation in a new tab. Uses standardized spacing and typography.
 *
 * @component
 * @returns {JSX.Element} Slack invitation section with image link
 */
import slackimage from "../Assets/slackimage.png";

export default function JoinSlack() {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center space-y-2">
            <p
              className="text-sm font-semibold tracking-wider"
              style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              JOIN OUR COMMUNITY!
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{
                fontFamily: "Rubik, sans-serif",
                textShadow:
                  "0.1em 0.1em 0 #000, 0.2em 0.2em 0.1em rgba(0,0,0,0.3)",
                WebkitTextFillColor: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              JOIN SLACK
            </h2>
          </div>

          <a
            href="https://join.slack.com/t/nsbemembers/shared_invite/zt-2tubhomb7-AAXwyNg0wrWSqWtu1eUeYA"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={slackimage}
              alt="Join NSBE Slack Community"
              className="h-64 w-full max-w-lg md:h-80 lg:h-96 lg:max-w-xl object-cover transition-transform duration-300 ease-out hover:scale-[1.02] style-brand-shadow rounded-2xl"
              width={500}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
