import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import ProfilePage from "@/pages/ProfilePage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:username" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
