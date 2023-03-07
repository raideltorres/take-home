// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import { Route, Routes } from "react-router-dom";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { HomeSection } from "@/sections/home-section";
import { MainLayout } from "@/layouts/main-layout";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomeSection />} />
      </Route>
    </Routes>
  );
};
