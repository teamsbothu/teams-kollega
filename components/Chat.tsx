'use client';
import { useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const startDict = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'hu-HU';
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      setText(e.results[0][0].transcript);
    };
    recognition.start();
  };

  const send = () => {
    setMessages([...messages, text]);
    setText('');
  };

  return (
    <div className="p-4">
      <div className="space-y-2">
        {messages.map((m, i) => (
          <div key={i} className="bg-gray-800 p-2 rounded">{m}</div>
        ))}
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full h-24 mt-4 bg-gray-900 text-white p-2"
      />
      <div className="mt-2 space-x-2">
        <button onClick={startDict} className="px-4 py-2 bg-blue-600 rounded">Diktálás</button>
        <button onClick={send} className="px-4 py-2 bg-green-600 rounded">Küldés</button>
      </div>
    </div>
  );
}
