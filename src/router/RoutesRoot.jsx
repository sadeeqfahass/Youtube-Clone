import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import VideoDetails from "../components/VideoDetails";

function RoutesRoot() {
  return (
    <>
      <Routes>
        <Route path="/video" element={<VideoDetails />} />
      </Routes>
    </>
  );
}

export default RoutesRoot;
