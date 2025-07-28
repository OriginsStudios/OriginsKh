

"use client";

import { useEffect } from "react";
import { X, Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description?: string;
  expertise?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
      // Preload the image when member is set
      if (member?.image) {
        const img = new window.Image();
        img.src = member.image;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [member]);

  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-50"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Container */}
        <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 p-2 bg-white/80 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 shadow-md"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="relative w-full h-60 md:h-auto md:w-1/2 flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 overflow-hidden">
                <div className="overflow-y-auto max-h-full pr-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{member.name}</h1>
                  <p className="text-lg sm:text-xl text-orange-600 font-semibold mb-4">{member.position}</p>

                  {member.description && (
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{member.description}</p>
                  )}

                  {member.expertise && member.expertise.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Expertise:</h3>
                      <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
                        {member.expertise.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.socialLinks && (
                    <div className="mt-4 flex items-center gap-4">
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 transition"
                        >
                          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                      )}
                      {member.socialLinks.facebook && (
                        <a
                          href={member.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 transition"
                        >
                          <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                      )}
                      {member.socialLinks.instagram && (
                        <a
                          href={member.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800 transition"
                        >
                          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
