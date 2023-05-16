import { useState } from 'react';
import { useRouter } from 'next/router';
function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports');
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports', underfined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}> sports Events</button>
      <h1>List of Events</h1>
      {events.map((event) => {
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

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';
  const response = await fetch('http://localhost:4000/events{queryString}');
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

export default EventList;
