import Profile from './components/Profile';
import Experience from './components/Experience';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <main className="main-layout">
      {/* 1. Hero / Profile Section */}
      <Profile />

      <hr />

      {/* 2. Training Experience & Projects Section */}
      <Experience />

      <hr />

      {/* 3. Interactive Task Manager Section */}
      <TodoList />
    </main>
  );
}

export default App;