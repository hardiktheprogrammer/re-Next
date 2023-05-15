import { initialize } from 'next/dist/server/lib/render-server';
import { useState } from 'react';
function EventList({ eventList }) {
  const [events, setEvents] = useState(EventList);

  const fetchSportsEvents = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports');
    const data = await response.json();
  };
  return (
    <>
      <button onClick={fetchSportsEvents}> sports Events</button>
      <h1>List of Events</h1>
      {eventList.map((event) => {
        return (
          <div Key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.discription}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/events');
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

export default EventList;
