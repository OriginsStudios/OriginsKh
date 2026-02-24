"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS, TeamMember } from "@/data/management-team";
import TeamMemberModal from "../team-modal";

interface TeamSectionProps {
  id?: string;
  textColor?: string;
}

const TeamSection = React.forwardRef<HTMLElement, TeamSectionProps>(
  ({ id, textColor }, ref) => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(
      null
    );
    const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
      new Set()
    );

    // Preload all images when component mounts
    useEffect(() => {
      TEAM_MEMBERS.forEach((member) => {
        const img = new window.Image();
        img.src = member.image;
      });
    }, []);

    // Preload specific image on hover
    const handleHover = (imageUrl: string) => {
      if (!preloadedImages.has(imageUrl)) {
        const img = new window.Image();
        img.src = imageUrl;
        setPreloadedImages((prev) => new Set(prev).add(imageUrl));
      }
    };

    return (
      <section
        id={id}
        ref={ref}
        className="pb-32 px-8 sm:px-10 transition-all duration-700 ease-in-out"
      >
        <div className="w-full">
          {/* Header */}
          <div className="border-t border-stone-200/70 flex justify-between items-center text-sm mb-12">
            <p className="text-stone-500 text-xs uppercase tracking-[0.4em] mt-4 font-medium">
              MANAGEMENT TEAM
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={selectedMember ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer rounded-3xl p-3 md:p-4 bg-white/70 ring-1 ring-stone-200/70 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                onHoverStart={() => handleHover(member.image)}
                onClick={() => setSelectedMember(member)}
              >
                {/* Image container */}
                <div className="aspect-square bg-stone-200/70 relative overflow-hidden mb-4 rounded-2xl">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    fill
                    className="rounded-2xl group-hover:scale-105 scale-100 transition-transform duration-300 object-cover object-top"
                    priority={index < 3}
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                </div>

                {/* Text content */}
                <div className="text-left">
                  <h3
                    className="font-serif text-xl sm:text-2xl text-stone-900 mb-1 group-hover:translate-x-1 transition-transform duration-200"
                    style={{ color: textColor }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-stone-600 font-medium text-sm sm:text-base"
                    style={{ color: textColor }}
                  >
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
  }
);

TeamSection.displayName = "TeamSection";
export default TeamSection;
