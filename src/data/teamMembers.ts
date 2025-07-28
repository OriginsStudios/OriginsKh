

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
    id: "Cheng Dalipine",
    name: "Cheng Dalipine",
    position: "Marketing Executive", 
    image: "/ORS_Dalipine_v60.jpg",
    description: "",
    expertise: [
    ],
    joinDate: "",
  },
    {
    id: "Horn Davin",
    name: "Horn Davin",
    position: "Creative Lead",
    image: "/ORS_Davin_v60.jpg",
    description: "",
    expertise: [
      "Business Strategy",
      "Financial Management",
      "Corporate Leadership"
    ],
    joinDate: "",
  },
  {
    id: "Ly Bovy",
    name: "Ly Bovy",
    position: "Creative Executive (Motion)",
    image: "/ORS_Bovy_v60.jpg",
    description: "",
    expertise: [
    ],
    joinDate: "",
  },
  {
    id: "Sarin Sophavatey",
    name: "Sarin Sophavatey",
    position: "Creative Executive (Graphics & Concept)",
    image: "/ORS_Vatey_v60.jpg",
    description: "",
    expertise: [
    ],
    joinDate: "",
  },
    {
    id: "Van Hoklin",
    name: "Van Hoklin",
    position: "Web Developer",
    image: "/ORS_Hoklin_v60.jpg",
    description: "",
    expertise: [
    ],
    joinDate: "",
  },

];

// Helper function to get team member by ID
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find(member => member.id === id);
};
