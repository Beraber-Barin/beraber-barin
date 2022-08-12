import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/styles.scss";
import {
  SharedLayout,
  ProfileInfoPage,
  ProfileSecurityPage,
  ProfileNotificationPage,
  ProfilePrivacyPage,
  ProfileSupportPage,
  HomePage,
  AdvertisementPage,
  ProfileSharedLayout,
  ProtectedRoute,
  LandingPage,
  AddAdvertisementPage,
} from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="/ilanlarim" element={<AdvertisementPage />} />
            <Route path="/ilan-ekle" element={<AddAdvertisementPage />} />
          </Route>
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <ProfileSharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfileInfoPage />} />
            <Route path="security" element={<ProfileSecurityPage />} />
            <Route path="notifications" element={<ProfileNotificationPage />} />
            <Route path="privacy" element={<ProfilePrivacyPage />} />
            <Route path="support" element={<ProfileSupportPage />} />
          </Route>
          <Route path="landing" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
