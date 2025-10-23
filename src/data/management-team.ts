export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description?: string;
  education?: string;
  expertise?: string[];
  socialLinks?: SocialLinks;
  joinDate?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "prof-bk",
    name: "Prof. BK",
    position: "Owner & Business Director",
    image: "/prof-bk.png",
    description:
      "With over 20 years of experience in business management, Prof. BK has led numerous successful ventures and brings strategic vision to our team.",
    expertise: [
      "Business Strategy",
      "Financial Management",
      "Corporate Leadership",
    ],
    joinDate: "",
  },
  {
    id: "sam-wujiale",
    name: "Sam Wujiale",
    position: "Founder & Studio Director",
    image: "/Team/SAM_CUTOUTv2.png",
    description:
      "Creative leader and founder with extensive experience in directing studios and creative projects across multiple sectors including corporate, social enterprise, and community.",
    expertise: [
      "Creative Direction",
      "Video Production",
      "Studio Leadership",
      "Photography",
      "Media Consultant",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/samwujiale/",
      facebook: "https://web.facebook.com/samwujiale",
    },
    joinDate: "",
  },

  {
    id: "sreng-sannyaliza",
    name: "Sreng Sannyaliza",
    position: "Co-founder & Studio Manager",
    image: "/Team/LZA_CUTOUT.png",
    description:
      "Operations expert who ensures our projects run smoothly from conception to delivery. Liza brings structure and efficiency to our creative process.",
    expertise: [
      "Project Management",
      "Team Leadership",
      "Process Optimization",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/aliza_sanny/",
      facebook: "https://web.facebook.com/sanny.aliza",
    },
    joinDate: "",
  },
];

// Helper function to get team member by ID
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find((member) => member.id === id);
};
