import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/home/Home";
import AmbassadorDetail from "./routes/ambassador-detail/AmbassadorDetail";
import EventDetail from "./routes/event-detail/EventDetail";
import WorkshopDetail from "./routes/workshop-detail/WorkshopDetail";
import Workshops from "./routes/workshops/Workshops";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ambassador-detail" element={<AmbassadorDetail />} />
      <Route path="event-detail" element={<EventDetail />} />
      <Route path="workshop-detail" element={<WorkshopDetail />} />
      <Route path="workshops" element={<Workshops />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
