

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
    <section id="" className="py-16 bg-transparent px-8">
      <div className="w-full">
        <div className="border-t border-gray-300 flex justify-between items-center text-sm mb-12">
          <p className="text-gray-600 font-medium">OUR CLIENTS</p>
        </div>

        {/* Scroll Container */}
        <div className="overflow-hidden whitespace-nowrap relative px-8">
          <div className="flex space-x-12 animate-scroll">
            {doubledClients.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="inline-block flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow duration-300"
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