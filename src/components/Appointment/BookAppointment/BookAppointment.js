import React from 'react';
const Data = [
    {
        _id:'5e8df50be6e8231764dc23de',
         id: 1,
         subject: 'Teeth Orthodontics',
         visitingHour: '8:00 AM -9:00 AM',
         totalSpace:10
    },
    {
        _id:'5e8df50be6e8231764dc23df',
         id: 2,
         subject: 'Teeth Orthodontics',
         visitingHour: '8:00 AM -9:00 AM',
         totalSpace:10
    },
    {
        _id:'5e8df50be6e8231764dc23dg',
         id: 3,
         subject: 'Teeth Orthodontics',
         visitingHour: '8:00 AM -9:00 AM',
         totalSpace:10
    },
    {
        _id:'5e8df50be6e8231764dc23dh',
         id: 4,
         subject: 'Teeth Orthodontics',
         visitingHour: '8:00 AM -9:00 AM',
         totalSpace:10
    },
    {
        _id:'5e8df50be6e8231764dc23di',
         id: 5,
         subject: 'Teeth Orthodontics',
         visitingHour: '8:00 AM -9:00 AM',
         totalSpace:10
    },
    {
        _id:'5e8df50be6e8231764dc23dj',
         id: 6,
         subject: 'Teeth Orthodontics',
         visitingHour: '8:00 AM -9:00 AM',
         totalSpace:10
    },

]
const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center text-brand'>Available Appointment on February{date.toDateString()} </h2>

        </section>
    );
};

export default BookAppointment;