function EventList({ eventList }) {
  return (
    <>
      <h1>List of Event</h1>
      {eventList.map((event) => {
        return (
          <div Key={event.id}>
                <h2>
                    
                    
                    {event.id } {event.title} 
                
                </h2>
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
