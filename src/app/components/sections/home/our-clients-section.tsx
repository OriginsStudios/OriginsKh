

"use client";
import Image from "next/image";

export default function OurClientsSection() {
  const clients = [
    { name: "Asset1@hyu2", src: "/asset1_hyu2.png" },
    { name: "Asset1@muc", src: "/asset1_muc.png" },
    { name: "Cps", src: "/cps.png" },
    { name: "Global_color_copy", src: "/global_color_copy.png" },
    { name: "Grav", src: "/grav.png" },
    { name: "GROOD", src: "/grood.png" },
    { name: "Icon153", src: "/icon153.png" },
    { name: "Ide", src: "/ide.png" },
    { name: "klat", src: "/klat.png" },
    { name: "Tree", src: "/tree.png" },
    { name: "Tuns", src: "/tuns.png" },
  ];

  // Duplicate the list to create seamless loop
  const doubledClients = [...clients, ...clients];

  return (
    <section id="" className="relative py-20 md:py-28 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-10 right-16 h-44 w-44 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/75 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-teal-700">Our Clients</p>
              <h3
                className="mt-3 text-3xl md:text-5xl font-normal text-teal-900"
                style={{ fontFamily: "DM Serif Text" }}
              >
                Brands we grow with, stories we shape.
              </h3>
            </div>
            {/* <p className="max-w-2xl text-sm md:text-base text-teal-900/70">
              From lifestyle launches to cinematic brand narratives, we partner
              with teams who care about craft and feeling.
            </p> */}
          </div>

          {/* Scroll Container */}
          <div className="mt-10 overflow-hidden whitespace-nowrap rounded-[28px] border border-white/60 bg-white/80 px-4 py-6 shadow-sm">
            <div className="flex space-x-10 animate-scroll">
              {doubledClients.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex-shrink-0 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center bg-white/90 rounded-2xl shadow-sm p-5 border border-white/70 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client.src || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="object-contain"
                      priority
                      rel="preload"
                      onError={(e) => {
                        console.error(`Failed to load image: ${client.src}`, e);
                        (e.target as HTMLImageElement).src = "/placeholder.png";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Styles for Animation */}
        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            min-width: 200%;
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
