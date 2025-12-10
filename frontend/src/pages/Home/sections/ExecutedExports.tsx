import React from "react";

const ExecutedExports: React.FC = () => {
  const playlistImages = [
    "/images/farm1.png",
    "/images/farm2.png",
    "/images/farm3.png",
    "/images/farm4.png",
    "/images/farm5.png",
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F6EB3] text-center">
          Professionally Executed Exports
        </h3>
        <p className="text-center mt-2 text-[#0B3B63]">
          End-to-end export operations managed with precision, compliance, and global delivery standards.
        </p>

        {/* Parent Grid → Make equal height using flex */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
          
          {/* LEFT CARD */}
          <div className="md:col-span-2 h-full">
            <div className="rounded-xl overflow-hidden shadow h-full">
              <img
                src="/images/woman2.png"
                alt="Exports"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <aside className="bg-white  rounded-xl shadow p-4 h-full flex flex-col">
            <div className="text-sm text-gray-500 mb-3">Playlist</div>

            <ul className="space-y-3   overflow-y-auto">
              {playlistImages.map((imgSrc, i) => (
                <li key={i} className="flex mb-2 py-1  bg-[#F3F7FB]  items-center gap-3">
                  <img
                    src={imgSrc}
                    className="w-14 h-10 rounded-md object-cover"
                    alt={`playlist-${i}`}
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#0B3B63]">
                      Dummy Agriculture life of a man
                    </div>
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
