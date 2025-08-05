
export interface SingleImage {
  src: string;
  width: number;
  height: number;
}
export interface ImageData {
  date: string | number | Date;
  images: SingleImage[];
  src: string;
  caption: string;
  hashtags: string;
  description: string;
  longDescription: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const allImages: ImageData[] = [
  {
    images: [
      { src: '/ORS_HYUJACKET-1.jpg', width: 800, height: 800 },
      { src: '/ORS_HYUJACKET-2.jpg', width: 800, height: 800 },
      { src: '/ORS_HYUJACKET-3.jpg', width: 800, height: 800 },
      { src: '/ORS_HYUJACKET-4.jpg', width: 800, height: 800 },
    ],
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#CONCEPT',
    description: 'Gallery | Hyundai Venue Jacket',
    longDescription: "At ORIGINS STUDIOS, we had the privilege of designing and producing the official Hyundai Venue jacket artwork for Hyundai Cambodia's Venue launch event. This bold and energetic design celebrates the youthful spirit and urban lifestyle that the Hyundai Venue represents. Featuring pop-art influences, street-style elements, and dynamic visuals of the car itself, the jacket communicates both style and performance. Every graphical detail; from the checkerboard pattern to the illustrated icons; was carefully curated to create a cohesive and vibrant identity for the launch, making it not just a promotional item, but a statement piece that embodies the Venue’s arrival in Cambodia.",
    width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
    images: [
      { src: '/custin08.png', width: 800, height: 800 },
      { src: '/custin14.png', width: 800, height: 800 },
      { src: '/custin07.png', width: 800, height: 800 },
      { src: '/custin13.png', width: 800, height: 800 },
      { src: '/custin18.png', width: 800, height: 800 },
      { src: '/custin16.png', width: 800, height: 800 },
      { src: '/custin15.png', width: 800, height: 800 },
      { src: '/custin03.png', width: 800, height: 800 },
    ],
    caption: 'Photography for Hyundai Cambodia',
    hashtags: '#PRODUCTION',
    description: 'Gallery | Hyundai Custin',
    longDescription: 'Our photography project for Hyundai Cambodia showcased the sleek and modern Hyundai Custin. We conducted multiple shoots in diverse locations around Cambodia, capturing the vehicle’s design and functionality in urban and scenic settings. The gallery highlights the car’s premium features, with high-resolution images used for marketing materials, dealership displays, and online campaigns.',
    width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
    {
      images: [
        { src: '/stargazerXPic6.png', width: 800, height: 800 },
        { src: '/stargazerXPic7v2.png', width: 800, height: 800 },
        { src: '/stargazerXPic6.png', width: 800, height: 800 },
        { src: '/stargazerXPic5.png', width: 800, height: 800 },
        { src: '/stargazerXPic1.png', width: 800, height: 800 },
        { src: '/stargazerXPic3v4.png', width: 800, height: 800 },
        { src: '/stargazerXPic9.png', width: 800, height: 800 },
      ],
      caption: 'Photography for Hyundai Cambodia',
      hashtags: '#PRODUCTION',
      description: 'Gallery | Hyundai Stargazer X',
      longDescription: 'Our photography project for Hyundai Cambodia showcased the sleek and modern Hyundai Custin. We conducted multiple shoots in diverse locations around Cambodia, capturing the vehicle’s design and functionality in urban and scenic settings. The gallery highlights the car’s premium features, with high-resolution images used for marketing materials, dealership displays, and online campaigns.',
      width: undefined,
      height: undefined,
      src: "",
      date: ""
    },
  {
    images: [
      { src: '/DSC00637.png', width: 800, height: 800 },
    ],
    caption: 'Photography for Hyundai Cambodia',
    hashtags: '#PRODUCTION',
    description: 'Gallery | Hyundai Stargazer',
    longDescription: 'Our photography project for Hyundai Cambodia spotlighted the bold and family-friendly Hyundai Stargazer. Through carefully planned shoots across various Cambodian landscapes, we captured the MPV’s futuristic design, spacious interior, and tech-forward features. The resulting gallery presents the Stargazer in both everyday and lifestyle settings, with high-resolution visuals crafted for marketing campaigns, dealership displays, and digital media use.',
    width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
    images: [
      { src: '/DSC04366.jpg', width: 800, height: 800 },
      { src: '/DSC04780.jpg', width: 800, height: 800 },
      { src: '/DSC04264.jpg', width: 800, height: 800 },
      { src: '/DSC04658.jpg', width: 800, height: 800 },
    ],
    caption: 'Stage Design for Cloud Photo Studio',
    hashtags: '#CONCEPT',
    description: 'Launch Event | Into The Cloud CPS Opening',
    longDescription: 'We designed an immersive stage setup for the grand opening of Cloud Photo Studio’s “Into The Cloud” event. The concept blended modern and ethereal elements, using lighting, textures, and spatial design to create a memorable experience. Our team managed everything from ideation to execution, ensuring the stage reflected CPS’s creative vision and wowed attendees.',
    width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
    images: [
      { src: '/DFGL_hah_001.jpeg', width: 800, height: 800 },
      { src: '/4k-horizon-pastures.png', width: 800, height: 800 },
    ],
    caption: 'Branding Materials for DFLG',
    hashtags: '#CREATIVE',
    description: 'Logo, Branding & Corporate Materials | Horizon Pastures',
    longDescription: 'For Horizon Pastures, we developed a cohesive visual identity encompassing logo design, branding guidelines, and a full suite of corporate materials. Inspired by the brand’s natural and forward-thinking ethos, our designs blended elegance with approachability. From business cards to presentation decks, every asset was crafted to ensure consistent, professional communication across all platforms.',
    width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
    images: [
      { src: '/mtstick-001.png', width: 800, height: 800 },
      { src: '/DSC06992v2.png', width: 800, height: 800 },
    ],
    caption: 'Graphic Design (Print) for MATTER Phnom Penh',
    hashtags: '#CREATIVE',
    description: 'Sticker Pack | Matter’s One',
    longDescription: 'We designed a custom sticker pack for MATTER Phnom Penh’s “Matter’s One” collection, blending playful visuals with the brand’s bold and experimental spirit. Each sticker was crafted to reflect the creative culture and community around MATTER, with eye-catching illustrations, vibrant colors, and layered textures. The design aimed to stand out both as a collectible and as a meaningful piece of brand storytelling in print form.',
    width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
    images: [
      { src: '/tunsai-Packaging-Box.png', width: 800, height: 800 },
      { src: '/tunsai-bottle.png', width: 800, height: 800 },
    ],
    caption: 'Packaging Design for Tunsai Water',
    hashtags: '#CREATIVE',
    description: 'Retail Packaging | Super Tunsai & Smart Series',
    longDescription: 'Our packaging design for Tunsai Water focused on elevating brand identity across the Super Tunsai and Smart Series. We crafted sleek, modern visuals that highlight purity and innovation while maintaining strong shelf appeal. The concept integrates bold typography and vibrant color schemes to distinguish each product line, enhancing visibility in retail environments. From concept to final production, this project balanced creativity with market strategy, resulting in a fresh and recognizable look for Tunsai Water.', width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
    images: [
      { src: '/smart.png', width: 800, height: 800 },
      { src: '/maxxx-009.png', width: 800, height: 800 },
      { src: '/tunsai5.jpg', width: 800, height: 800 },
      { src: '/mid-year.jpg', width: 800, height: 800 },
      { src: '/stt-001v2.png', width: 800, height: 800 },
    ],
    caption: 'Social Media Contents for Tunsai Water',
    hashtags: '#CREATIVE',
    description: 'Graphics | Ranging from Year 2020 - 2021',
    longDescription: 'For Tunsai Water, we developed a robust social media content strategy from 2020 to 2021. Our graphics featured bold visuals and concise messaging to promote the brand’s purity and quality, tailored for platforms like Instagram, Twitter, and Facebook. This campaign increased engagement by 35%, with designs supporting product reveals and seasonal campaigns.',
    width: undefined,
    height: undefined,
    src: "",
    date: ""
  },

  {
    images: [
      { src: '/DSC06741.png', width: 800, height: 800 },
      { src: '/DSC06744.png', width: 800, height: 800 },
      { src: '/DSC06749.png', width: 800, height: 800 },
    ],
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#CONCEPT',
    description: 'T-shirt | Hyundai Stargazer X',
    longDescription: 'Our apparel design for the Hyundai Stargazer X featured bold, stylish T-shirts that echoed the vehicle’s rugged and adventurous spirit. We combined durable materials with unique graphic elements, incorporating the Stargazer X’s signature lines and colors. These shirts were a hit at promotional events, strengthening Hyundai Cambodia’s brand presence.',
    width: undefined,
    height: undefined,
    src: " ",
    date: ""
  },
  {
    images: [
      { src: '/back.png', width: 800, height: 800 },
      { src: '/front.jpeg', width: 800, height: 800 },
    ],
    caption: 'Apparel Design for Hyundai Cambodia',
    hashtags: '#CONCEPT',
    description: 'T-shirt | Hyundai Staria',
    longDescription: 'For Hyundai Cambodia, we designed a custom T-shirt inspired by the futuristic design of the Hyundai Staria. The apparel merges clean, minimal aesthetics with dynamic visual elements that echo the vehicle’s sleek silhouette and modern identity. Tailored for brand ambassadors and staff, the design balances comfort with style, reinforcing brand consistency across physical touchpoints while celebrating innovation through wearable design.', width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
    images: [
      { src: '/multiple-1.JPEG', width: 800, height: 800 },
      { src: '/multiple-2.JPEG', width: 800, height: 800 },
      { src: '/multiple-3.JPEG', width: 800, height: 800 },
      { src: '/multiple-4.JPEG', width: 800, height: 800 },
      { src: '/multiple-5.JPEG', width: 800, height: 800 },
      { src: '/multiple-6.JPEG', width: 800, height: 800 },
      { src: '/multiple-7.JPEG', width: 800, height: 800 },
      { src: '/multiple-8.JPEG', width: 800, height: 800 },
      { src: '/multiple-9.JPEG', width: 800, height: 800 },
    ],
    caption: 'Apparel Design',
    hashtags: '#CONCEPT',
    description: 'T-shirt | Multiple Projects',
    longDescription: 'This collection showcases a series of T-shirt designs developed across multiple projects, each tailored to reflect the unique identity and message of the respective brand. From bold graphics and typographic statements to subtle minimalist details, each piece was crafted with attention to both visual impact and wearability. The designs served various purposes—brand promotion, event merchandise, and internal teamwear—bridging creativity with functionality through versatile apparel solutions.', width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  {
  images: [
      { src: '/DSC06709.png', width: 800, height: 800 },
    ],
    caption: 'Apparel Design for MATTER Phnom Penh',
    hashtags: '#CONCEPT',
    description: 'T-shirt | Matter’s One',
    longDescription: 'We developed a custom T-shirt design for MATTER Phnom Penh’s “Matter’s One” drop, blending streetwear aesthetics with the brand’s bold, experimental energy. The design features strong graphic elements and typography that reflect the creative pulse of MATTER’s community. Made to be both a wearable piece and a statement of identity, this T-shirt was part of a limited release that connected design, culture, and self-expression.', width: undefined,
    height: undefined,
    src: "",
    date: ""
  },
  


];

export const imageMap: Record<string, ImageData[]> = {
  ALL: allImages,
  CREATIVE: allImages.filter((item) => item.hashtags.includes('CREATIVE')),
  PRODUCTION: allImages.filter((item) => item.hashtags.includes('PRODUCTION')),
  CONCEPT: allImages.filter((item) => item.hashtags.includes('CONCEPT')),
};

