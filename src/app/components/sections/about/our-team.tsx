// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { TEAM_MEMBERS, TeamMember } from "@/data/teamMembers";

// interface OurManagementTeamProps {
//   textColor?: string;
//   id?: string;
// }

// const OurManagementTeam = React.forwardRef<HTMLElement, OurManagementTeamProps>(
//   ({ id, textColor }, ref) => {
//     const [selectedMember] = useState<TeamMember | null>(null);

//     // Preload all images when component mounts
//     useEffect(() => {
//       TEAM_MEMBERS.forEach((member) => {
//         const img = new window.Image();
//         img.src = member.image;
//       });
//     }, []);

//     return (
//       <section
//         id={id}
//         ref={ref}
//         className="pb-32 px-8 sm:px-8"
//         style={{
//           transition:
//             "background-color 700ms ease-in-out, color 700ms ease-in-out",
//         }}
//       >
//         <div className="w-full">
//           {/* Header */}
//           <div className="border-t border-gray-300 flex justify-between items-center text-sm mb-12">
//             <p className={`text-[${textColor}] text-xl mt-2 font-medium`}>
//               STUDIO TEAM
//             </p>
//           </div>

//           {/* Team Grid */}
//           <div className="flex overflow-x-auto overflow-y-hidden space-x-6 pb-4 md:grid md:grid-cols-5 md:gap-8 md:overflow-x-visible md:overflow-y-visible">
//             {TEAM_MEMBERS.map((member, index) => (
//               <div
//                 key={member.id}
//                 className="group cursor-pointer flex-shrink-0"
//               >
//                 {/* Image container */}
//                 <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 relative overflow-hidden mb-4 rounded-full mx-auto">
//                   <Image
//                     src={member.image}
//                     alt={`${member.name} - ${member.position}`}
//                     fill
//                     className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
//                     priority={index < 5}
//                     loading={index > 4 ? "lazy" : "eager"}
//                   />
//                 </div>

//                 {/* Text content */}
//                 <div className="text-center">
//                   <h3 className="font-bold text-xl sm:text-2xl text-black mb-1 group-hover:translate-x-1 transition-transform duration-200">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-600 font-medium text-sm sm:text-base">
//                     {member.position}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom CTA Section */}
//           <div className="pt-16 sm:pt-32">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
//               <div className="w-full md:w-1/2 text-left">
//                 <h3 className="text-xl sm:text-2xl md:text-3xl text-black mb-6">
//                   Think you&lsquo;d be a good addition to our team?
//                 </h3>
//                 <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
//                   Hiring
//                   <motion.div
//                     className="ml-3"
//                     animate={selectedMember ? {} : { x: [0, 6, 0] }}
//                     transition={
//                       selectedMember ? {} : { repeat: Infinity, duration: 1.5 }
//                     }
//                   >
//                     →
//                   </motion.div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// );

// OurManagementTeam.displayName = "OurManagementTeam";
// export default OurManagementTeam;


"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS, TeamMember } from "@/data/teamMembers";

interface OurManagementTeamProps {
  textColor?: string;
  id?: string;
}

const OurManagementTeam = React.forwardRef<HTMLElement, OurManagementTeamProps>(
  ({ id, textColor }, ref) => {
    const [selectedMember] = useState<TeamMember | null>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    // Preload all images when component mounts
    useEffect(() => {
      TEAM_MEMBERS.forEach((member) => {
        const img = new window.Image();
        img.src = member.image;
      });
    }, []);

    // Check if we're on desktop
    useEffect(() => {
      const checkDesktop = () => {
        setIsDesktop(window.innerWidth >= 768); // md breakpoint
      };

      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      
      return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    // Calculate grid styling based on number of items
    const totalMembers = TEAM_MEMBERS.length;
    const itemsPerRow = 5; // Fixed 5 items per row on desktop
    const fullRows = Math.floor(totalMembers / itemsPerRow);
    const remainingItems = totalMembers % itemsPerRow;
    
    // Only apply special centering for 1 or 2 items in last row on desktop
    const shouldCenterLastRow = isDesktop && remainingItems > 0 && remainingItems < 3;
    const lastRowStartIndex = fullRows * itemsPerRow;

    return (
      <section
        id={id}
        ref={ref}
        className="pb-32 px-8 sm:px-10"
        style={{
          color: textColor,
          transition:
            "background-color 700ms ease-in-out, color 700ms ease-in-out",
        }}
      >
        <div className="w-full">
          {/* Header */}
          <div className="border-t border-stone-200/70 flex justify-between items-center text-sm mb-12">
            <p className="text-stone-500 text-xs uppercase tracking-[0.4em] mt-4 font-medium">
              STUDIO TEAM
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex flex-col">
            {/* Full rows */}
            {Array.from({ length: fullRows }).map((_, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-8"
              >
                {TEAM_MEMBERS.slice(
                  rowIndex * itemsPerRow,
                  (rowIndex + 1) * itemsPerRow
                ).map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            ))}
            
            {/* Last row with conditional centering */}
            {remainingItems > 0 && (
              <div className={`${shouldCenterLastRow ? 'flex justify-center' : ''}`}>
                <div 
                  className={`
                    grid 
                    ${shouldCenterLastRow ? '' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-5'} 
                    gap-6 md:gap-8
                    ${shouldCenterLastRow ? 'inline-grid' : ''}
                  `}
                  style={
                    shouldCenterLastRow 
                      ? { 
                          gridTemplateColumns: `repeat(${remainingItems}, minmax(0, 1fr))`,
                          maxWidth: 'fit-content'
                        } 
                      : {}
                  }
                >
                  {TEAM_MEMBERS.slice(lastRowStartIndex).map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA Section */}
          <div className="pt-16 sm:pt-32">
            <div className="flex flex-row items-center justify-between gap-8">
              <h3 className="flex-1 text-xl sm:text-2xl md:text-3xl font-serif text-stone-900">
                Think you&lsquo;d be a good addition to our team?
              </h3>
              <button className="shrink-0 flex items-center px-6 py-3 bg-stone-900 text-stone-50 rounded-full font-semibold uppercase tracking-[0.2em] hover:bg-amber-700 transition-colors text-xs md:text-sm">
                Hiring
                <motion.div
                  className="ml-3"
                  animate={selectedMember ? {} : { x: [0, 6, 0] }}
                  transition={
                    selectedMember ? {} : { repeat: Infinity, duration: 1.5 }
                  }
                >
                  →
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

// Extract the team member card to a separate component for cleaner code
const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group cursor-pointer flex-shrink-0 rounded-3xl p-4 bg-white/70 ring-1 ring-stone-200/70 shadow-sm transition-transform duration-300 hover:-translate-y-1">
      {/* Image container */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-stone-200/70 relative overflow-hidden mb-4 rounded-full mx-auto">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.position}`}
          fill
          className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, 10rem"
        />
      </div>

      {/* Text content */}
      <div className="text-center">
        <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1 group-hover:translate-x-1 transition-transform duration-200">
          {member.name}
        </h3>
        <p className="text-stone-600 font-medium text-sm sm:text-base">
          {member.position}
        </p>
      </div>
    </div>
  );
};

OurManagementTeam.displayName = "OurManagementTeam";
export default OurManagementTeam;
