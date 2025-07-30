
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS, TeamMember } from "@/data/management-team";
import TeamMemberModal from "../team-modal";

const TeamSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Preload all images when component mounts
  useEffect(() => {
    TEAM_MEMBERS.forEach(member => {
      const img = new window.Image();
      img.src = member.image;
    });
  }, []);

  // Preload specific image on hover
  const handleHover = (imageUrl: string) => {
    if (!preloadedImages.has(imageUrl)) {
      const img = new window.Image();
      img.src = imageUrl;
      setPreloadedImages(prev => new Set(prev).add(imageUrl));
    }
  };

  return (
    <section id="team" ref={ref} className="pb-32 bg-white px-8 sm:px-8">
      <div className="w-full">
        {/* Header */}
        <div className="border-t border-gray-300 flex justify-between items-center text-sm mb-12">
          <p className="text-gray-600 text-xl mt-2 font-medium">MANAGEMENT TEAM</p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={selectedMember ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onHoverStart={() => handleHover(member.image)}
              onClick={() => setSelectedMember(member)}
            >
              {/* Image container */}
              <div className="h-80 sm:h-96 bg-gray-300 relative overflow-hidden mb-4 rounded-xl">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  priority={index < 3}
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>

              {/* Text content */}
              <div className="text-left">
                <h3 className="font-bold text-xl sm:text-2xl text-black mb-1 group-hover:translate-x-1 transition-transform duration-200">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <TeamMemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
