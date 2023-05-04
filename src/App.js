import { Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import SkillsAndProjects from './pages/SkillsAndProjects';
import LayoutPage from './pages/LayoutPage';
import ContactsPage from './pages/ContactsPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                {' '}
                <Route index element={<IntroPage />} />
                <Route
                    path="/skillsAndProjects"
                    element={<SkillsAndProjects />}
                />
                <Route path="/contacts" element={<ContactsPage />} />
            </Route>
        </Routes>
    );
}

export default App;
