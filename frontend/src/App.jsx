import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav style={{ background: "#222", color: "white", padding: "10px" }}>
        <span onClick={() => setPage("home")} style={{ marginRight: "15px", cursor: "pointer" }}>Home</span>
        <span onClick={() => setPage("resorts")} style={{ marginRight: "15px", cursor: "pointer" }}>Resorts</span>
        <span onClick={() => setPage("booking")} style={{ marginRight: "15px", cursor: "pointer" }}>Booking</span>
        <span onClick={() => setPage("rentals")} style={{ cursor: "pointer" }}>Rentals</span>
      </nav>

      <div style={{ padding: "20px" }}>
        {page === "home" && <h1>Welcome to SkiTrack</h1>}
        {page === "resorts" && <h1>Resorts Page</h1>}
        {page === "booking" && <h1>Booking Page</h1>}
        {page === "rentals" && <h1>Rentals Page</h1>}
      </div>
    </div>
  );
}

export default App;