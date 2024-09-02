import React from 'react';
import './TopicSelection.css'
function TopicSelection({ onSelectTopic }) {
  const topics = ['Stranger Things', 'Arcane', 'Breaking Bad','Game of Thrones','The Witcher','Harry Potter','Marvel Cinematic Universe', 'Star Wars', 'Friends', 'The Office', 'Attack on Titan', 'Naruto','Dragon Ball Z','One Piece','My Hero Academia','Queen',];

  return (
    <div className='inicio'>
      <h1>Select a Quiz Topic</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic} onClick={() => onSelectTopic(topic)}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicSelection;