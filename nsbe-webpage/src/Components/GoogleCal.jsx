export default function GoogleCal() {
  return (
    <>
      <div className="flex justify-center py-[5vh]">
        <div className="flex flex-col">
          <p className="miniheader sm:text-xl font-semibold tracking-wider leading-relaxed text-black">
            All Scheduled Events!
          </p>
          <h2 className="subheaderstyle text-gray-900 transition-all hover:scale-105 duration-300 ease-out mb-3">
            Calendar
          </h2> 
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTz=0&showCalendars=0&showTabs=0&src=c2VjcmV0YXJ5dXRuc2JlQGdtYWlsLmNvbQ&src=MmE2bDFobHR0MWM0MGk0cnZmdG1sb2xnaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bG9vNG1ldW1mYmg0OTlpcDdyN29mbmV0b2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%23F4511E&color=%23F6BF26&color=%237CB342"
            className="h-[75vh] w-[75vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] darkbg transition-all hover:scale-105 duration-300 ease-out"
          /> 
        </div>
      </div>
    </>
  );
};