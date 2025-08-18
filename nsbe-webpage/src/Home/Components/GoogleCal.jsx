/**
 * GoogleCal Component
 *
 * Embeds the NSBE Google Calendar in an iframe to display all scheduled events.
 * The calendar is configured to show a clean view without navigation controls
 * and is styled to be responsive across different screen sizes.
 *
 * @component
 * @returns {JSX.Element} Embedded Google Calendar showing NSBE events
 */

export default function GoogleCal() {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center space-y-2">
            <p
              className="text-sm font-semibold tracking-wider"
              style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              ALL SCHEDULED EVENTS!
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
              CALENDAR
            </h2>
          </div>

          <iframe
            src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FChicago&showTitle=0&showNav=0&showTz=0&showTabs=0&showPrint=0&src=bG9vNG1ldW1mYmg0OTlpcDdyN29mbmV0b2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26"
            className="h-64 w-full max-w-lg md:h-80 lg:h-96 lg:max-w-xl transition-transform duration-300 ease-out hover:scale-[1.02] style-brand-shadow rounded-2xl"
            title="NSBE Events Calendar"
          />
        </div>
      </div>
    </div>
  );
}
