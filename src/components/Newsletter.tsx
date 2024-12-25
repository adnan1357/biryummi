import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl font-medium mb-6 tracking-tight">Stay informed</h2>
        <p className="mb-12 text-gray-600 text-lg">
          Be the first to experience our premium catering services.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-6 py-4 rounded-full bg-white border border-gray-200 text-lg focus:outline-none focus:border-gray-400 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Notify me
            </button>
          </div>
          <p className="text-sm text-gray-500">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}