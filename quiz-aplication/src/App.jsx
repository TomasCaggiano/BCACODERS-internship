import React, { useState } from 'react';
import TopicSelection from './components/TopicSelection.jsx';
import Quiz from './components/Quiz.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleRestart = () => {
    setSelectedTopic(null);
  };

  return (
    <div>
      {selectedTopic ? (
        <Quiz topic={selectedTopic} onRestart={handleRestart} />
      ) : (
        <TopicSelection onSelectTopic={setSelectedTopic} />
      )}
    </div>
  );
}

export default App;
