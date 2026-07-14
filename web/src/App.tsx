import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ScrollManager } from './components/ScrollManager';
import { I18nProvider } from './i18n/I18nProvider';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminResponseDetailPage } from './pages/admin/AdminResponseDetailPage';
import { PartnersFoundationsPage } from './pages/partners/PartnersFoundationsPage';
import { PartnersTechPage } from './pages/partners/PartnersTechPage';
import { PartnersTargetsPage } from './pages/partners/PartnersTargetsPage';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/responses/:id" element={<AdminResponseDetailPage />} />
          {/* Hidden funder-outreach pages — unlinked + noindex */}
          <Route path="/partners/foundations" element={<PartnersFoundationsPage />} />
          <Route path="/partners/tech" element={<PartnersTechPage />} />
          <Route path="/partners/targets" element={<PartnersTargetsPage />} />
          {/* Internal design-system reference (noindex) */}
          <Route path="/design" element={<DesignSystemPage />} />
          {/* Legal */}
          <Route path="/privacy" element={<LegalPage doc="privacy" />} />
          <Route path="/terms" element={<LegalPage doc="terms" />} />
          <Route path="/disclaimer" element={<LegalPage doc="disclaimer" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}
