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
    id: "Van Hoklin",
    name: "Van Hoklin",
    position: "Webapp & Tech. Development Executive",
    image: "/Team/ORS_Hoklin_v60.jpg",
    description: "",
    expertise: [],
    joinDate: "",
  },
  {
    id: "Horn Davin",
    name: "Horn Davin",
    position: "Team & Project Lead",
    image: "/Team/DVN_CUTOUT.png",
    description: "",
    expertise: [
      "Business Strategy",
      "Financial Management",
      "Corporate Leadership",
    ],
    joinDate: "",
  },
  {
    id: "Sreng Sannyphillip",
    name: "Sreng Sannyphillip",
    position: "Graphic & Studios Assistant",
    image: "/Team/phillip.png",
    description: "",
    expertise: [],
    joinDate: "",
  },
  {
    id: "Veasna Sokvilya",
    name: "Sokvilya Veasna",
    position: "Marketing & Client Relations Executive",
    image: "/Team/LYA_CUTOUT.png",
    description: "",
    expertise: [],
    joinDate: "",
  },
  {
    id: "Oeung lycheng",
    name: "Oeung lycheng",
    position: "Marketing & Content Creation Executive",
    image: "/Team/lychengpic.jpg",
    description: "",
    expertise: [],
    joinDate: "",
  },

];

// Helper function to get team member by ID
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find((member) => member.id === id);
};
