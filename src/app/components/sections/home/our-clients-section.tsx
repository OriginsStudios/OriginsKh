

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
        <div className="absolute top-8 right-16 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-6 left-12 h-52 w-52 rounded-full bg-teal-200/30 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="border-t border-teal-200/60 flex justify-between items-center text-sm mb-12 pt-8">
          <p className="text-teal-700 text-xs uppercase tracking-[0.35em]">Our Clients</p>
        </div>

        {/* Scroll Container */}
        <div className="overflow-hidden whitespace-nowrap relative px-2 md:px-8">
          <div className="flex space-x-10 animate-scroll">
            {doubledClients.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white/80 rounded-2xl shadow-sm p-5 border border-white/60 backdrop-blur hover:shadow-md transition-shadow duration-300"
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
