import React from "react";

const ExecutedExports: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F6EB3] text-center">Professionally Executed Exports</h3>
        <p className="text-center mt-2 text-[#0B3B63]">End-to-end export operations managed with precision, compliance, and global delivery standards.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
          {/* Left: large image */}
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden shadow">
              <img src="/images/exports-woman.jpg" alt="Exports" className="w-full h-64 object-cover" />
            </div>
          </div>

          {/* Right: playlist-like list card */}
          <aside className="bg-white rounded-xl shadow p-4">
            <div className="text-sm text-gray-500 mb-3">Playlist</div>
            <ul className="space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-14 h-10 bg-gray-100 rounded-md flex items-center justify-center text-xs font-medium text-gray-600">Img</div>
                  <div>
                    <div className="text-sm font-semibold text-[#0B3B63]">Dummy Agriculture life of a man</div>
                    <div className="text-xs text-gray-500">1.2k views</div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ExecutedExports;
