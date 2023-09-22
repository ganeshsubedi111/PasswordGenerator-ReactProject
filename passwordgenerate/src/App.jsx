import React, { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [numbers, setNumbers] = useState(true);
  const [characters, setCharacters] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let generatedPassword = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numbers) string += '0123456789';
    if (characters) string += '!@&#*/[]{}';

    while (generatedPassword.length < length) {
      let randomIndex = Math.floor(Math.random() * string.length);
      let char = string.charAt(randomIndex);
      generatedPassword += char;
    }

    setPassword(generatedPassword.slice(0, length));
  }, [length, numbers, characters]);

  return (
    <div className="min-h-screen  bg-gray-900 flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-5xl text-center text-white mb-8">
          Generate Password
        </h1>
        <div className="mb-6">
          <label className="text-white">
            Length:
            <input
              className="ml-2 p-2 border border-gray-400 rounded"
              type="range"
              min={1}
              max={50}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="flex items-center text-white">
            <input
              className="mr-2"
              type="checkbox"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            Include Numbers
          </label>
        </div>
        <div className="mb-6">
          <label className="flex items-center text-white">
            <input
              className="mr-2"
              type="checkbox"
              checked={characters}
              onChange={(e) => setCharacters(e.target.checked)}
            />
            Include Special Characters
          </label>
        </div>
        <button
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring focus:ring-blue-300"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-6 text-white">
            <strong>Generated Password:</strong> {password}
          </div>
        )}
      </div>
    </div>
  );
}

export default App