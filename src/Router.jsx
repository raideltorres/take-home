// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import { Route, Routes } from "react-router-dom";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { HomeSection } from "@sections/home-section";
import { AboutSection } from "@sections/about-section";
import { ContactSection } from "@sections/contact-section";
import { PostsSection } from "@sections/posts-section";
import { PostSection } from "@sections/post-section";
import { MainLayout } from "@layouts/main-layout";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomeSection />} />
        <Route path="about" element={<AboutSection />} />
        <Route path="blog" element={<PostsSection />} />
        <Route path="contact" element={<ContactSection />} />
        <Route path="post/:postId" element={<PostSection />} />
      </Route>
    </Routes>
  );
};

export default Router;
