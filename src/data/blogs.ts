export interface TextBlock {
  type: "text";
  content: string;
}

export interface HeadingBlock {
  type: "heading";
  level: 2 | 3 | 4;
  content: string;
  id: string;
}

export interface VideoBlock {
  type: "video";
  src: string;
  poster?: string;
  caption?: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export interface QuoteBlock {
  type: "quote";
  content: string;
  author?: string;
  className?: string;
}

export interface ListBlock {
  type: "list";
  items: Array<{
    title?: string;
    content: string;
    icon?: string;
  }>;
  ordered?: boolean;
}

export interface GridBlock {
  type: "grid";
  items: Array<{
    title: string;
    content: string;
    icon?: string;
    className?: string;
  }>;
  columns?: 2 | 3 | 4;
}

export interface CalloutBlock {
  type: "callout";
  title: string;
  content: string;
  variant?: "info" | "warning" | "success" | "error";
}

export interface StepsBlock {
  type: "steps";
  steps: Array<{
    title: string;
    content: string;
    number: number;
  }>;
}

export interface CTABlock {
  type: "cta";
  title: string;
  content: string;
  buttons: Array<{
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
}

export type ContentBlock =
  | TextBlock
  | HeadingBlock
  | VideoBlock
  | ImageBlock
  | QuoteBlock
  | ListBlock
  | GridBlock
  | CalloutBlock
  | StepsBlock
  | CTABlock;

export interface TableOfContentsItem {
  id: string;
  title: string;
  href: string;
}

export interface Blog {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
  authorId?: string;
  tableOfContents?: TableOfContentsItem[];
  content?: ContentBlock[];
}

export const blogs: Blog[] = [
  // ✅ BLOG 1 (Existing sample you already have)
  {
    id: "bovy-vending-machine-motion-masterpiece",
    title: "How Bovy Turned 'Vending Machine' into a Motion Masterpiece",
    summary:
      "At ORIGINS Studios, every project is a chance to show what happens when vision meets skill — and 'Vending Machine' is one of our proudest examples. In just one week, our motion artist Bovy transformed a simple concept into a visually stunning animation that's as entertaining as it is technically impressive.",
    date: "January 15, 2025",
    image: "/blog/blog1/thumbnail.png",
    category: "Portfolio",
    authorId: "Horn Davin",
    tableOfContents: [
      { id: "creative-vision", title: "A Creative Vision, Perfectly Executed", href: "#creative-vision" },
      { id: "tools-behind-magic", title: "The Tools Behind the Magic", href: "#tools-behind-magic" },
      { id: "professionalism-deadline", title: "Professionalism on a Deadline", href: "#professionalism-deadline" },
      { id: "origins-capabilities", title: "ORIGINS' Complete Creative Capabilities", href: "#origins-capabilities" },
      { id: "motion-design-process", title: "The Motion Design Process", href: "#motion-design-process" },
      { id: "client-collaboration", title: "Client Collaboration & Communication", href: "#client-collaboration" },
      { id: "conclusion", title: "Ready to Create Your Next Masterpiece?", href: "#conclusion" },
    ],
    content: [
      {
        type: "video",
        src: "/blog/blog1/Ors Media-Machine Vfinal.mp4",
        poster: "/blog/blog1/thumbnail.png",
        caption:
          "Watch Bovy's \"Vending Machine\" animation - a week's worth of creative excellence compressed into motion",
      },
      {
        type: "image",
        src: "/blog/blog1/1.png",
        alt: "Bovy's Vending Machine - Frame 1",
        caption: "A key frame from the motion masterpiece (1/4)",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      {
        type: "image",
        src: "/blog/blog1/2.png",
        alt: "Bovy's Vending Machine - Frame 2",
        caption: "A key frame from the motion masterpiece (2/4)",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      {
        type: "image",
        src: "/blog/blog1/3.png",
        alt: "Bovy's Vending Machine - Frame 3",
        caption: "A key frame from the motion masterpiece (3/4)",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      {
        type: "image",
        src: "/blog/blog1/4.png",
        alt: "Bovy's Vending Machine - Frame 4",
        caption: "A key frame from the motion masterpiece (4/4)",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      { type: "heading", level: 2, content: "A Creative Vision, Perfectly Executed", id: "creative-vision" },
      {
        type: "text",
        content:
          "From the start, Bovy knew Vending Machine could be more than a motion project — it could be a story told through movement, timing, and design. He built every sequence to guide the viewer's eye, using playful transitions, smooth motion reveals, and dynamic pacing to keep the animation alive from start to finish.",
      },
      {
        type: "text",
        content:
          "What sets this project apart isn't just the technical execution, but the thoughtful narrative structure. Each element of the vending machine comes to life with purpose, creating a cohesive experience that feels both whimsical and professional.",
      },
      {
        type: "text",
        content:
          "The project demonstrates ORIGINS' philosophy: every creative decision should serve both aesthetic beauty and functional storytelling.",
      },
      {
        type: "image",
        src: "/blog/blog1/ORS_Bovy_v60.jpg",
        alt: "Bovy - Motion Artist at ORIGINS",
        caption: "Ly Bovy - Creative Executive (Motion)",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      { type: "heading", level: 2, content: "The Tools Behind the Magic", id: "tools-behind-magic" },
      {
        type: "text",
        content:
          "Bovy's workflow combined artistry with technical precision, leveraging industry-standard tools to bring his vision to life:",
      },
      {
        type: "grid",
        columns: 2,
        items: [
          {
            title: "Adobe After Effects",
            content:
              "The primary workspace where layers came to life, enhanced with advanced plugins for unique visual effects. Bovy utilized complex keyframe animations, motion blur, and sophisticated timing curves to achieve the smooth, professional feel.",
            icon: "Ae",
            className: "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100",
          },
          {
            title: "Adobe Illustrator",
            content:
              "The backbone for crisp, scalable vector designs that fed perfectly into the animation pipeline. Every element was crafted with precision, ensuring clean scaling and smooth integration into After Effects.",
            icon: "Ai",
            className: "bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-100",
          },
        ],
      },
      {
        type: "callout",
        title: "Technical Insight",
        content:
          "The result was a collection of fancy animations that feel polished, seamless, and full of personality. Each transition was carefully crafted to maintain visual continuity while adding delightful surprises.",
        variant: "info",
      },
      { type: "heading", level: 2, content: "Professionalism on a Deadline", id: "professionalism-deadline" },
      {
        type: "quote",
        content: "7 Days - From concept to final export",
        className:
          "bg-gradient-to-r from-green-50 to-teal-50 border-green-100 text-center text-4xl font-bold text-green-600",
      },
      {
        type: "text",
        content:
          "Here's what makes this project even more impressive: Bovy delivered the entire production in just one week — from initial concept development to final export. This wasn't a rush job that sacrificed quality for speed; it was a masterclass in efficient creative workflow.",
      },
      {
        type: "grid",
        columns: 3,
        items: [
          { title: "Sharp Eye for Detail", content: "Every frame meticulously crafted for visual impact", icon: "👁️" },
          { title: "Smooth Communication", content: "Clear updates and collaborative feedback loops", icon: "💬" },
          { title: "Disciplined Workflow", content: "Organized process that made delivery effortless", icon: "✅" },
        ],
      },
      {
        type: "text",
        content:
          "This efficiency didn't come at the cost of creativity. Instead, it demonstrated how proper planning, clear vision, and technical expertise can accelerate the creative process without compromising quality.",
      },
      { type: "heading", level: 2, content: "Ready to Create Your Next Masterpiece?", id: "conclusion" },
      {
        type: "cta",
        title: "Let's Bring Your Vision to Life",
        content:
          "Ready to see what ORIGINS can create for your brand? Let's start a conversation about your next project.",
        buttons: [
          { text: "Start Your Project", href: "/contact", variant: "primary" },
          { text: "View Our Portfolio", href: "/portfolio", variant: "secondary" },
        ],
      },
    ],
  },

  // ✅ BLOG 2 (Existing sample you already have)
  {
    id: "sannyaliza-driving-force-project-studio-manager",
    title: "The Driving Force Behind Our Success: Spotlight on Sannyaliza Sreng",
    summary:
      "Meet Sannyaliza Sreng, our Project and Studio Manager who powers structure, collaboration, and excellence across every initiative — turning ambitious ideas into extraordinary results.",
    date: "January 22, 2025",
    image: "/blog/blog2/ORS_LIZABLOG-THUMBNAIL.png",
    category: "Achievements",
    authorId: "Origins Studios",
    tableOfContents: [
      { id: "introduction", title: "The Heart of Our Studio", href: "#introduction" },
      { id: "role-impact", title: "Aligning Creativity with Execution", href: "#role-impact" },
      { id: "leadership", title: "Leadership that Elevates the Team", href: "#leadership" },
      { id: "results", title: "From Ideas to Impactful Results", href: "#results" },
      { id: "bts", title: "Behind the Scenes", href: "#bts" },
      { id: "conclusion", title: "A Driving Force at ORIGINS", href: "#conclusion" },
    ],
    content: [
      { type: "video", src: "/blog/blog2/result.mp4", poster: "/blog/blog2/ORS_LIZABLOG-THUMBNAIL.png", caption: "Project outcomes highlight Sannyaliza's ability to shepherd complex initiatives to polished completion" },
      { type: "heading", level: 2, content: "The Heart of Our Studio", id: "introduction" },
      { type: "text", content: "Every successful studio is built not only on creativity and innovation, but also on structure, strategy, and leadership..." },
      { type: "heading", level: 2, content: "A Driving Force at ORIGINS", id: "conclusion" },
      { type: "cta", title: "Work with ORIGINS", content: "Partner with ORIGINS for services delivered with creativity, strategy, and seamless project management.", buttons: [{ text: "Start a Project", href: "/contact", variant: "primary" }, { text: "See Our Work", href: "/portfolio", variant: "secondary" }] },
    ],
  },

// ✅ BLOG 3 (UPDATED CONTENT) — CHERY EVENT
{
  id: "chery-car-event-full-creative-production",
  title: "Origins Studios Powers the Launch Event for the New iCAUR V23 2026",
  summary:
    "On January 30, 2026, Origins Studios delivered a full-scale event experience for Chery’s iCAUR V23 2026 launch — blending media production, production design, and seamless event flow in collaboration with YNext Creative.",
  date: "January 30, 2026",
  image: "/blog/blog4/chery/thumbnail.jpg",
  category: "Concept",
  authorId: "Origins Studios",
  tableOfContents: [
    { id: "launch-overview", title: "Launch Overview", href: "#launch-overview" },
    { id: "full-experience", title: "A Full Creative & Production Experience", href: "#full-experience" },
    { id: "production-design", title: "Strategic Production Design & Event Flow", href: "#production-design" },
    { id: "live-entertainment", title: "Elevating the Atmosphere with Live Entertainment", href: "#live-entertainment" },
    { id: "collaboration", title: "Collaboration That Drives Excellence", href: "#collaboration" },
    { id: "looking-forward", title: "Looking Forward", href: "#looking-forward" },
  ],
  content: [
    {
      type: "image",
      src: "/blog/blog4/chery/2.jpg",
      alt: "Chery launch creative - visual concept 1",
      caption: "The iCAUR V23 2026 takes center stage under a dynamic laser display, setting the tone for an electrifying launch night.",
      className: "h-96 md:h-[520px]",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/3.jpg",
      alt: "Chery launch creative - visual concept 2",
      caption: "Guests immerse themselves in the futuristic launch environment beneath the bold “Born to Play” statement.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/4.jpg",
      alt: "Chery launch creative - visual concept 3",
      caption: "The Origins Studios production team behind the seamless execution of the iCAUR V23 2026 launch experience.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/5.jpg",
      alt: "Chery launch creative - visual concept 4",
      caption: "The iCAUR V23 2026 makes its dramatic entrance, headlights cutting through the darkness in a cinematic reveal moment.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/6.jpg",
      alt: "Chery launch creative - visual concept 5",
      caption: "Capturing the moment — brand ambassadors bringing energy and personality to the launch atmosphere.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/7.jpg",
      alt: "Chery launch creative - visual concept 5",
      caption: "The Tiggo 2 Pro showcased in a bold, high-impact visual setup highlighting Chery’s dynamic design language.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/8.jpg",
      alt: "Chery launch creative - visual concept 5",
      caption: "Live entertainment elevates the evening as music and production design blend into a powerful show experience.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/9.jpg",
      alt: "Chery launch creative - visual concept 5",
      caption: "A symbolic toast marking the official unveiling of the iCAUR V23 2026 and the beginning of a new automotive chapter.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/10.jpg",
      alt: "Chery launch creative - visual concept 5",
      caption: "Brand ambassadors bring energy and personality to the iCAUR V23 2026 launch, capturing the moment in a dynamic behind-the-scenes snapshot.",
    },
    {
      type: "image",
      src: "/blog/blog4/chery/11.jpg",
      alt: "Chery launch creative - visual concept 5",
      caption: "A celebratory group photo capturing partners, guests, and collaborators who made the launch unforgettable.",
    },

    { type: "heading", level: 2, content: "Launch Overview", id: "launch-overview" },
    {
      type: "text",
      content:
        "On January 30, 2026, Origins Studios proudly took part in delivering a full-scale event experience for automotive brand Chery, celebrating the official launch of the highly anticipated iCAUR V23 2026. The event was expertly organized by YNext Creative, bringing together innovation, entertainment, and immersive brand storytelling into one unforgettable evening.",
    },

    { type: "heading", level: 2, content: "A Full Creative & Production Experience", id: "full-experience" },
    {
      type: "text",
      content:
        "For this major automotive launch, Origins Studios was entrusted with managing multiple creative and technical aspects of the event. Our team handled the media production, production design, and contributed significantly to shaping the overall event flow to ensure a seamless and engaging experience for guests, partners, and stakeholders.",
    },
    {
      type: "text",
      content:
        "From conceptual visual direction to execution, our goal was to create an atmosphere that reflected the futuristic and premium identity of the newly introduced vehicle. Every visual element, stage design, and media presentation was carefully crafted to align with Chery’s brand vision while elevating audience engagement throughout the event.",
    },

    {
      type: "grid",
      columns: 3,
      items: [
        { title: "Media Production", content: "Event visuals and media deliverables designed to support storytelling and key moments.", icon: "🎥" },
        { title: "Production Design", content: "A dynamic environment crafted to highlight the iCAUR V23 2026 reveal and brand presence.", icon: "🎬" },
        { title: "Event Flow Support", content: "Segment timing, transitions, and behind-the-scenes coordination for a smooth program journey.", icon: "🧩" },
      ],
    },

    { type: "heading", level: 2, content: "Strategic Production Design & Event Flow", id: "production-design" },
    {
      type: "text",
      content:
        "Our production design team focused on creating a dynamic and visually captivating environment that highlighted the vehicle’s innovative features and modern design philosophy. This included coordinating stage visuals, digital media assets, and presentation materials that complemented the product reveal moment.",
    },
    {
      type: "text",
      content:
        "In addition to design execution, Origins Studios also assisted in structuring the overall event flow. This involved coordinating timing between segments, ensuring smooth transitions between presentations, performances, and the product unveiling, as well as supporting behind-the-scenes production logistics. The result was a cohesive event journey that maintained audience excitement and attention from start to finish.",
    },

    {
      type: "callout",
      title: "Seamless Event Journey",
      content:
        "From segment pacing to reveal timing, we supported the full show flow to keep energy consistent and transitions clean throughout the night.",
      variant: "success",
    },

    { type: "heading", level: 2, content: "Elevating the Atmosphere with Live Entertainment", id: "live-entertainment" },
    {
      type: "text",
      content:
        "To further enhance the event’s energy and audience engagement, the launch featured a special live performance by renowned local artist MESA. His performance added a vibrant entertainment dimension to the event, helping bridge the excitement between program segments and creating memorable moments for attendees.",
    },
    {
      type: "text",
      content:
        "The collaboration between live entertainment and brand presentation played a key role in delivering a well-balanced event experience that felt both celebratory and sophisticated.",
    },

    {
      type: "quote",
      content: "When entertainment meets storytelling, the brand experience becomes unforgettable.",
      className: "text-center text-2xl font-semibold",
    },

    { type: "heading", level: 2, content: "Collaboration That Drives Excellence", id: "collaboration" },
    {
      type: "text",
      content:
        "This event showcased the strong collaboration between Origins Studios, YNext Creative, and Chery. By combining strategic planning, creative direction, and technical expertise, the teams successfully delivered an event that not only introduced a new automotive innovation but also reinforced brand prestige and audience connection.",
    },

    { type: "heading", level: 2, content: "Looking Forward", id: "looking-forward" },
    {
      type: "text",
      content:
        "At Origins Studios, we continuously strive to push creative and production boundaries. Being part of the iCAUR V23 2026 launch represents another milestone in our journey of delivering impactful event experiences and high-quality creative solutions for our partners.",
    },
    {
      type: "text",
      content:
        "We remain committed to helping brands bring their visions to life through innovative storytelling, immersive design, and seamless production execution.",
    },

    {
      type: "cta",
      title: "Planning a Launch or Brand Event?",
      content: "Let Origins Studios help you deliver an event experience with strong storytelling, premium visuals, and smooth execution.",
      buttons: [
        { text: "Start Your Project", href: "/contact", variant: "primary" },
        { text: "View Portfolio", href: "/portfolio", variant: "secondary" },
      ],
    },
  ],
},


  // ✅ BLOG 4 (NEW) — AIR CAMBODIA MAGAZINE
  {
    id: "air-cambodia-magazine-design-production",
    title: "Elevating In-Flight Experience: Designing the Official Air Cambodia Magazine",
    summary:
      "ORIGINS partnered with Air Cambodia to design and produce a premium in-flight magazine — blending editorial storytelling, brand elegance, and high-end layout precision.",
    date: "February 18, 2025",
    image: "/blog/blog3/aircambodia-thumbnail.jpg",
    category: "Creative",
    authorId: "Origins Studios",
    tableOfContents: [
      { id: "project-intro", title: "Project Introduction", href: "#project-intro" },
      { id: "editorial-design", title: "Editorial & Layout Design", href: "#editorial-design" },
      { id: "brand-alignment", title: "Aligning with Airline Identity", href: "#brand-alignment" },
      { id: "production-quality", title: "Print Production & Quality", href: "#production-quality" },
      { id: "impact", title: "Enhancing Passenger Experience", href: "#impact" },
      { id: "conclusion", title: "Designing Stories Above the Clouds", href: "#conclusion" },
    ],
    content: [
      {
        type: "image",
        src: "/blog/blog3/aircambodia-cover.jpg",
        alt: "Air Cambodia magazine cover",
        caption: "A refined in-flight publication designed for elegance and readability",
        className: "rounded-2xl shadow-lg object-cover w-full h-96",
      },

      { type: "heading", level: 2, content: "Project Introduction", id: "project-intro" },
      {
        type: "text",
        content:
          "Air Cambodia entrusted ORIGINS with the design and layout production of its official in-flight magazine — a publication that reflects national pride, travel inspiration, and premium airline identity.",
      },

      { type: "heading", level: 2, content: "Editorial & Layout Design", id: "editorial-design" },
      {
        type: "text",
        content:
          "We developed a clean, structured editorial system that balances storytelling with visual sophistication. Each section — from travel features to brand announcements — follows a consistent grid system for readability and elegance.",
      },

      {
        type: "grid",
        columns: 3,
        items: [
          { title: "Typography System", content: "Modern serif and sans-serif pairing for clarity and refinement.", icon: "✍️" },
          { title: "Photography Integration", content: "High-resolution imagery optimized for full-page spreads.", icon: "📸" },
          { title: "Layout Structure", content: "Balanced white space and modular grid composition.", icon: "📐" },
        ],
      },

      { type: "heading", level: 2, content: "Aligning with Airline Identity", id: "brand-alignment" },
      {
        type: "text",
        content:
          "Every visual element was carefully aligned with Air Cambodia’s branding — from color accents inspired by the airline palette to subtle graphical motifs that reflect aviation elegance.",
      },

      {
        type: "quote",
        content: "A magazine is not just reading material — it is an extension of the airline’s brand experience.",
        className: "text-center text-2xl font-semibold",
      },

      { type: "heading", level: 2, content: "Print Production & Quality", id: "production-quality" },
      {
        type: "text",
        content:
          "Beyond layout design, ORIGINS prepared press-ready files with precise color calibration, bleed setup, and print optimization. We ensured premium paper compatibility and flawless finishing quality.",
      },

      {
        type: "callout",
        title: "Premium Editorial Craftsmanship",
        content:
          "Structured layout systems, high-quality imagery processing, print optimization, and editorial consistency — delivered with meticulous attention to detail.",
        variant: "info",
      },

      { type: "heading", level: 2, content: "Enhancing Passenger Experience", id: "impact" },
      {
        type: "text",
        content:
          "The final magazine elevates the in-flight experience by offering passengers a visually engaging and thoughtfully curated publication. It reflects both Cambodia’s cultural richness and Air Cambodia’s modern aspirations.",
      },

      { type: "heading", level: 2, content: "Designing Stories Above the Clouds", id: "conclusion" },
      {
        type: "text",
        content:
          "This collaboration highlights ORIGINS’ strength in editorial design and large-scale publication production. Whether on the ground or 30,000 feet in the air, we design experiences that resonate.",
      },

      {
        type: "cta",
        title: "Need a Premium Publication Designed?",
        content: "From brand magazines to corporate publications, ORIGINS delivers refined editorial design tailored to your audience.",
        buttons: [
          { text: "Contact Us", href: "/contact", variant: "primary" },
          { text: "See More Projects", href: "/portfolio", variant: "secondary" },
        ],
      },
    ],
  },
  {
    id: "khmer-new-year-chery-tiggo-2-pro-max",
    title: "Khmer New Year with Chery Tiggo 2 Pro Max",
    summary:
      "A festive Khmer New Year concept film featuring the Chery Tiggo 2 Pro Max, blending holiday energy, culture, and modern lifestyle visuals.",
    date: "April 9, 2026",
    image: "/blog/blog5/blog5n1.png",
    category: "Concept",
    authorId: "Origins Studios",
    tableOfContents: [
      { id: "concept", title: "Concept", href: "#concept" },
      { id: "festival-mood", title: "Festival Mood", href: "#festival-mood" },
      { id: "vehicle-focus", title: "Vehicle Focus", href: "#vehicle-focus" },
      { id: "wrap-up", title: "Wrap Up", href: "#wrap-up" },
    ],
    content: [
      {
        type: "video",
        src: "/blog/blog5/blog5n1.mp4",
        caption:
          "Khmer New Year concept featuring the Chery Tiggo 2 Pro Max.",
      },
      { type: "heading", level: 2, content: "Concept", id: "concept" },
      {
        type: "text",
        content:
          "This video celebrates Khmer New Year through a fresh automotive story built around the Chery Tiggo 2 Pro Max. The goal is to connect festive emotion with a modern lifestyle drive.",
      },
      {
        type: "heading",
        level: 2,
        content: "Festival Mood",
        id: "festival-mood",
      },
      {
        type: "grid",
        columns: 3,
        items: [
          {
            title: "Holiday Energy",
            content:
              "Visual rhythm inspired by Khmer New Year celebration moments.",
            icon: "1",
          },
          {
            title: "Cultural Tone",
            content:
              "Color and motion choices designed to feel festive and familiar.",
            icon: "2",
          },
          {
            title: "Lifestyle Feel",
            content:
              "A joyful road-story direction that keeps the brand approachable.",
            icon: "3",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Vehicle Focus",
        id: "vehicle-focus",
      },
      {
        type: "text",
        content:
          "The Tiggo 2 Pro Max remains the hero throughout the piece, with framing that highlights its style while fitting naturally into the Khmer New Year narrative.",
      },
      {
        type: "callout",
        title: "Creative Intent",
        content:
          "Celebrate Khmer New Year while positioning Chery Tiggo 2 Pro Max as a fun and confident holiday ride.",
        variant: "success",
      },
      { type: "heading", level: 2, content: "Wrap Up", id: "wrap-up" },
      {
        type: "cta",
        title: "Need a Festival Campaign Video?",
        content:
          "ORIGINS can turn seasonal moments into strong automotive brand stories.",
        buttons: [
          { text: "Start a Project", href: "/contact", variant: "primary" },
          { text: "See Our Work", href: "/portfolio", variant: "secondary" },
        ],
      },
    ],
  },
  {
    id: "moto-vs-chery-tiggo-2-pro-max-comparison",
    title: "Moto vs Chery Tiggo 2 Pro Max",
    summary:
      "A comparison-style concept that contrasts moto life with the Chery Tiggo 2 Pro Max to highlight comfort, space, and daily practicality.",
    date: "April 8, 2026",
    image: "/blog/blog5/blog5n2.png",
    category: "Concept",
    authorId: "Origins Studios",
    tableOfContents: [
      { id: "overview", title: "Overview", href: "#overview" },
      { id: "comparison-points", title: "Comparison Points", href: "#comparison-points" },
      { id: "story-flow", title: "Story Flow", href: "#story-flow" },
      { id: "takeaway", title: "Takeaway", href: "#takeaway" },
    ],
    content: [
      {
        type: "video",
        src: "/blog/blog5/blog5n2.mp4",
        caption:
          "Comparing moto lifestyle with Chery Tiggo 2 Pro Max.",
      },
      { type: "heading", level: 2, content: "Overview", id: "overview" },
      {
        type: "text",
        content:
          "This cut uses a direct comparison format between moto usage and the Tiggo 2 Pro Max experience. The narrative is built for audiences deciding between two different ways of moving through daily life.",
      },
      {
        type: "heading",
        level: 2,
        content: "Comparison Points",
        id: "comparison-points",
      },
      {
        type: "list",
        items: [
          {
            title: "Comfort",
            content:
              "Shows the difference between open-air riding and enclosed cabin convenience.",
          },
          {
            title: "Practical Space",
            content:
              "Highlights storage, passenger flexibility, and everyday usability.",
          },
          {
            title: "Weather Readiness",
            content:
              "Reinforces the value of protection and comfort in changing conditions.",
          },
        ],
      },
      { type: "heading", level: 2, content: "Story Flow", id: "story-flow" },
      {
        type: "text",
        content:
          "The edit alternates between moto and car moments to keep the comparison clear and easy to digest, then lands on the Tiggo 2 Pro Max as the practical step-up choice.",
      },
      { type: "heading", level: 2, content: "Takeaway", id: "takeaway" },
      {
        type: "callout",
        title: "Main Message",
        content:
          "From quick errands to longer city days, Tiggo 2 Pro Max offers a broader comfort and utility range than moto-only movement.",
        variant: "info",
      },
      {
        type: "cta",
        title: "Need Comparison-Style Campaign Content?",
        content:
          "ORIGINS can build clear side-by-side narratives that make product advantages easy to understand.",
        buttons: [
          { text: "Contact Us", href: "/contact", variant: "primary" },
          { text: "View Portfolio", href: "/portfolio", variant: "secondary" },
        ],
      },
    ],
  },
  {
    id: "stop-oil-start-icaur-v23",
    title: "Stop Oil, Start iCAUR V23",
    summary:
      "A forward-looking EV message centered on the iCAUR V23, encouraging a shift from fuel dependence to a cleaner electric-driving mindset.",
    date: "April 7, 2026",
    image: "/blog/blog5/blog5n3.png",
    category: "Concept",
    authorId: "Origins Studios",
    tableOfContents: [
      { id: "concept", title: "Concept", href: "#concept" },
      { id: "ev-shift", title: "EV Shift", href: "#ev-shift" },
      { id: "v23-positioning", title: "V23 Positioning", href: "#v23-positioning" },
      { id: "campaign-message", title: "Campaign Message", href: "#campaign-message" },
    ],
    content: [
      {
        type: "video",
        src: "/blog/blog5/blog5n3.mp4",
        caption:
          "Stop oil, start iCAUR V23 concept campaign.",
      },
      { type: "heading", level: 2, content: "Concept", id: "concept" },
      {
        type: "text",
        content:
          "This video is built around a simple and direct line: stop oil, start iCAUR V23. The creative direction frames EV adoption as a practical lifestyle upgrade, not just a trend.",
      },
      { type: "heading", level: 2, content: "EV Shift", id: "ev-shift" },
      {
        type: "grid",
        columns: 3,
        items: [
          {
            title: "Less Fuel Dependence",
            content:
              "The narrative contrasts fuel habits with a cleaner electric routine.",
            icon: "1",
          },
          {
            title: "Future-Ready Identity",
            content:
              "Visual language positions EV driving as modern and intentional.",
            icon: "2",
          },
          {
            title: "Daily Practicality",
            content:
              "The story keeps focus on realistic everyday use, not abstract claims.",
            icon: "3",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "V23 Positioning",
        id: "v23-positioning",
      },
      {
        type: "text",
        content:
          "iCAUR V23 is presented as the center of that transition: bold design, modern attitude, and a clear break from conventional oil-based driving habits.",
      },
      {
        type: "heading",
        level: 2,
        content: "Campaign Message",
        id: "campaign-message",
      },
      {
        type: "quote",
        content: "Stop oil. Start electric. Start iCAUR V23.",
        className: "text-center text-2xl font-semibold",
      },
      {
        type: "cta",
        title: "Launching an EV Message Campaign?",
        content:
          "ORIGINS can produce story-led automotive content that makes EV adoption feel clear and relevant.",
        buttons: [
          { text: "Start Now", href: "/contact", variant: "primary" },
          { text: "See Projects", href: "/portfolio", variant: "secondary" },
        ],
      },
    ],
  },
  {
    id: "go-out-alone-chill-icaur-v23",
    title: "Go Out Alone and Chill with iCAUR V23",
    summary:
      "A solo-drive lifestyle concept showing how iCAUR V23 supports calm, independent city escapes and personal recharge moments.",
    date: "April 6, 2026",
    image: "/blog/blog5/blog5n4.png",
    category: "Concept",
    authorId: "Origins Studios",
    tableOfContents: [
      { id: "overview", title: "Overview", href: "#overview" },
      { id: "solo-vibe", title: "Solo Vibe", href: "#solo-vibe" },
      { id: "why-v23", title: "Why V23", href: "#why-v23" },
      { id: "final-thought", title: "Final Thought", href: "#final-thought" },
    ],
    content: [
      {
        type: "video",
        src: "/blog/blog5/blog5n4.mp4",
        caption:
          "Go out alone and chill with iCAUR V23.",
      },
      { type: "heading", level: 2, content: "Overview", id: "overview" },
      {
        type: "text",
        content:
          "This final cut follows a solo-drive mood built around quiet confidence and personal space. It frames the car as a companion for independent city escapes.",
      },
      { type: "heading", level: 2, content: "Solo Vibe", id: "solo-vibe" },
      {
        type: "text",
        content:
          "The pacing is intentionally relaxed, with visual transitions that emphasize chill moments, clean routes, and the freedom of going out alone on your own schedule.",
      },
      { type: "heading", level: 2, content: "Why V23", id: "why-v23" },
      {
        type: "list",
        items: [
          {
            title: "Personal Comfort",
            content:
              "Supports an easy, calm driving experience for solo routines.",
          },
          {
            title: "Urban Style",
            content:
              "Fits modern city visuals with a distinct and contemporary look.",
          },
          {
            title: "Independent Mobility",
            content:
              "Positions V23 as a practical choice for self-directed lifestyles.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Final Thought",
        id: "final-thought",
      },
      {
        type: "callout",
        title: "Lifestyle Message",
        content:
          "Go out alone, chill, and enjoy the city with iCAUR V23 as your personal everyday ride.",
        variant: "success",
      },
      {
        type: "cta",
        title: "Need Lifestyle-Driven Auto Content?",
        content:
          "ORIGINS can craft mood-based car stories that connect with real daily behavior.",
        buttons: [
          { text: "Talk to Us", href: "/contact", variant: "primary" },
          { text: "Browse Work", href: "/portfolio", variant: "secondary" },
        ],
      },
    ],
  },
];
