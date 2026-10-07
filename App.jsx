import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import LandingPage from './pages/LandingPage';
import StaffLoginPage from './pages/StaffLoginPage';
import FoodLoginPage from './pages/FoodLoginPage';
import StaffDashboard from './pages/staff/StaffDashboard';
import FoodDashboard from './pages/food/FoodDashboard';
import RdbmsStudioView from './pages/staff/RdbmsStudioView';
import { ArrowLeft } from 'lucide-react';
import './App.css';

const MainApp = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const [route, setRoute] = useState('landing'); // 'landing', 'staff_login', 'food_login', 'rdbms_preview'

  // If user is authenticated, render appropriate portal
  if (isAuthenticated && currentUser) {
    if (currentUser.type === 'food_manager') {
      return <FoodDashboard />;
    }
    return <StaffDashboard />;
  }

  // If user navigated to public RDBMS Studio preview
  if (route === 'rdbms_preview') {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column' }}>
        <header
          style={{
            padding: '1rem 2rem',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setRoute('landing')}
          >
            <ArrowLeft size={16} />
            <span>Back to Landing Page</span>
          </button>
          <div style={{ fontWeight: 800, color: 'var(--accent-gold)' }}>
            ROYAL SPICE • RDBMS MINI PROJECT EXPLORER
          </div>
        </header>
        <main style={{ padding: '2rem 2.5rem', flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <RdbmsStudioView />
        </main>
      </div>
    );
  }

  // If user clicked Staff Login
  if (route === 'staff_login') {
    return (
      <StaffLoginPage
        onBackToLanding={() => setRoute('landing')}
        onSuccessLogin={() => setRoute('staff_portal')}
      />
    );
  }

  // If user clicked Food Management Login
  if (route === 'food_login') {
    return (
      <FoodLoginPage
        onBackToLanding={() => setRoute('landing')}
        onSuccessLogin={() => setRoute('food_portal')}
      />
    );
  }

  // Default: Landing Page
  return (
    <LandingPage
      onSelectStaffLogin={() => setRoute('staff_login')}
      onSelectFoodLogin={() => setRoute('food_login')}
      onOpenRdbmsDemo={() => setRoute('rdbms_preview')}
    />
  );
};

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
