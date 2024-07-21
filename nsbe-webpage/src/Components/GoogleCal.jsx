import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "582500803390-7a4vdul5lad6utict422j8ul42uhvccd.apps.googleusercontent.com";
const API_KEY = "AIzaSyAm9oo-x2acHu2_bxlXwV6ykYiuKi0hoE4";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events.readonly";

const GoogleCalendar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(setIsSignedIn);

        // Handle the initial sign-in state.
        setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());

        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
          listUpcomingEvents();
        }
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const listUpcomingEvents = () => {
    gapi.client.calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    }).then(response => {
      const events = response.result.items;
      setEvents(events);
    });
  };

  return (
    <div className="base-bg">
      {!isSignedIn ? (
        <button onClick={handleAuthClick}>Sign in with Google</button>
      ) : (
        <>
          <button onClick={handleSignOutClick}>Sign out</button>
          <h2>Upcoming Events</h2>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                {event.summary} ({event.start.dateTime || event.start.date})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GoogleCalendar;
