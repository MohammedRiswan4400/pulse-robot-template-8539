// // src/components/BookingList.tsx

// import { useState, useEffect } from 'react';
// import { supabase } from '../lib/supabaseClient'; // Import our client

// // Define a TypeScript type for our booking data based on your table schema.
// // This gives us type safety and auto-completion.
// type BookingRequest = {
//   id: string;
//   name: string;
//   address: string;
//   mobile_no: string;
//   date: string;
//   event_type: 'wedding' | 'engagement' | 'other'; // Assuming event_type is an enum
//   is_reception: boolean;
//   created_at: string;
// };

// function BookingList() {
//   // This is similar to a state variable in a Flutter StatefulWidget.
//   // useState holds the component's state. When it's updated, the component re-renders.
//   const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // useEffect is a hook that runs side effects.
//   // An empty dependency array [] means it runs once when the component is first mounted,
//   // similar to initState() in Flutter.
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         setLoading(true);

//         // This is the Supabase query to get all rows from the 'booking_requests' table.
//         const { data, error } = await supabase
//           .from('booking_requests')
//           .select('*') // Selects all columns
//           .order('created_at', { ascending: false }); // Optional: order by newest first

//         if (error) {
//           // If Supabase returns an error, throw it to be caught by the catch block.
//           throw error;
//         }

//         // If data exists, update our state with it.
//         if (data) {
//           setBookingRequests(data);
//         }
//       } catch (err: any) {
//         console.error(err.message);
//         setError('Could not fetch booking requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings(); // Call the async function
//   }, []); // Empty array means this effect runs only once

//   // Conditional rendering based on the state
//   if (loading) {
//     return <div>Loading bookings...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // This is the JSX that gets rendered to the DOM, like the build() method in Flutter.
//   return (
//     <div>
//       <h1>All Booking Requests</h1>
//       <ul>
//         {bookingRequests.map((booking) => (
//           <li key={booking.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//             <p><strong>Name:</strong> {booking.name}</p>
//             <p><strong>Event Type:</strong> {booking.event_type}</p>
//             <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
//             <p><strong>Mobile:</strong> {booking.mobile_no}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookingList;