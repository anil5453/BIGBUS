import React from 'react';

const Rout = () => {
  const travelHistory = [
    {
      id: 1,
      date: '2025-05-15',
      from: 'Hyderabad',
      to: 'Bangalore',
      busType: 'AC Sleeper',
      amount: 1200,
      status: 'Completed',
    },
    {
      id: 2,
      date: '2025-04-20',
      from: 'Chennai',
      to: 'Coimbatore',
      busType: 'Non-AC Seater',
      amount: 800,
      status: 'Completed',
    },
    {
      id: 3,
      date: '2025-03-10',
      from: 'Mumbai',
      to: 'Pune',
      busType: 'AC Seater',
      amount: 600,
      status: 'Cancelled',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">My Travel History</h2>

      {travelHistory.length === 0 ? (
        <p className="text-center text-muted">You have no travel history yet.</p>
      ) : (
        <div className="row g-4">
          {travelHistory.map((trip) => (
            <div className="col-md-6 col-lg-4" key={trip.id}>
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Trip #{trip.id}{' '}
                    <span
                      className={`badge ${
                        trip.status === 'Completed' ? 'bg-success' : 'bg-danger'
                      }`}
                    >
                      {trip.status}
                    </span>
                  </h5>
                  <p className="card-text mb-1">
                    <strong>Date:</strong> {trip.date}
                  </p>
                  <p className="card-text mb-1">
                    <strong>From:</strong> {trip.from}
                  </p>
                  <p className="card-text mb-1">
                    <strong>To:</strong> {trip.to}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Bus Type:</strong> {trip.busType}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Amount:</strong> ₹{trip.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rout;
