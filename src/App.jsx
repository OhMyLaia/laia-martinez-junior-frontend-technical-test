import './App.css'
import Navbar from './layout/Navbar'
import AppRoutes from './routes/AppRoutes'
import { ScheduleProvider } from './context/ScheduleContext';

function App() {

  return (
    <>
      <ScheduleProvider>
        <Navbar />
        <AppRoutes />
      </ScheduleProvider>
    </>
  )
}

export default App
