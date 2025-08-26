// Content block types for flexible article structure
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
      {
        id: "creative-vision",
        title: "A Creative Vision, Perfectly Executed",
        href: "#creative-vision",
      },
      {
        id: "tools-behind-magic",
        title: "The Tools Behind the Magic",
        href: "#tools-behind-magic",
      },
      {
        id: "professionalism-deadline",
        title: "Professionalism on a Deadline",
        href: "#professionalism-deadline",
      },
      {
        id: "origins-capabilities",
        title: "ORIGINS' Complete Creative Capabilities",
        href: "#origins-capabilities",
      },
      {
        id: "motion-design-process",
        title: "The Motion Design Process",
        href: "#motion-design-process",
      },
      {
        id: "client-collaboration",
        title: "Client Collaboration & Communication",
        href: "#client-collaboration",
      },
      {
        id: "conclusion",
        title: "Ready to Create Your Next Masterpiece?",
        href: "#conclusion",
      },
    ],
    content: [
      {
        type: "video",
        src: "/blog/blog1/Ors Media-Machine Vfinal.mp4",
        poster: "/blog/blog1/thumbnail.png",
        caption:
          "Watch Bovy's \"Vending Machine\" animation - a week's worth of creative excellence compressed into motion",
      },
      // Inserted images 1.png to 4.png after the video and before the first heading
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
      {
        type: "heading",
        level: 2,
        content: "A Creative Vision, Perfectly Executed",
        id: "creative-vision",
      },
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
      {
        type: "heading",
        level: 2,
        content: "The Tools Behind the Magic",
        id: "tools-behind-magic",
      },
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
            className:
              "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100",
          },
          {
            title: "Adobe Illustrator",
            content:
              "The backbone for crisp, scalable vector designs that fed perfectly into the animation pipeline. Every element was crafted with precision, ensuring clean scaling and smooth integration into After Effects.",
            icon: "Ai",
            className:
              "bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-100",
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
      {
        type: "heading",
        level: 2,
        content: "Professionalism on a Deadline",
        id: "professionalism-deadline",
      },
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
          {
            title: "Sharp Eye for Detail",
            content: "Every frame meticulously crafted for visual impact",
            icon: "👁️",
          },
          {
            title: "Smooth Communication",
            content: "Clear updates and collaborative feedback loops",
            icon: "💬",
          },
          {
            title: "Disciplined Workflow",
            content: "Organized process that made delivery effortless",
            icon: "✅",
          },
        ],
      },
      {
        type: "text",
        content:
          "This efficiency didn't come at the cost of creativity. Instead, it demonstrated how proper planning, clear vision, and technical expertise can accelerate the creative process without compromising quality.",
      },
      {
        type: "heading",
        level: 2,
        content: "Not Just One Masterpiece — ORIGINS Has Many Talents",
        id: "origins-capabilities",
      },
      {
        type: "text",
        content:
          "At ORIGINS, Vending Machine is just one example of what we can create. Our team spans multiple creative disciplines so we can bring any idea to life, no matter the scale or style.",
      },
      {
        type: "grid",
        columns: 3,
        items: [
          {
            title: "Motion Graphics & Animation",
            content:
              "From explainer videos to complex character animations, we bring static designs to life with purpose and personality.",
            icon: "🎬",
          },
          {
            title: "Brand Identity & Design",
            content:
              "Complete visual identity systems that capture your brand's essence and communicate effectively across all touchpoints.",
            icon: "🎨",
          },
          {
            title: "Web Development",
            content:
              "Modern, responsive websites and web applications that combine beautiful design with flawless functionality.",
            icon: "💻",
          },
          {
            title: "Video Production",
            content:
              "From concept to final cut, we handle all aspects of video production including filming, editing, and post-production.",
            icon: "🎥",
          },
          {
            title: "Creative Strategy",
            content:
              "Strategic thinking that aligns creative output with business objectives, ensuring every project drives real results.",
            icon: "⚡",
          },
          {
            title: "Digital Marketing",
            content:
              "Comprehensive digital marketing solutions that amplify your brand's reach and engagement across all platforms.",
            icon: "📈",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "The Motion Design Process: From Concept to Completion",
        id: "motion-design-process",
      },
      {
        type: "text",
        content:
          "Understanding how we approach motion design projects can help you see the value in our methodology. Here's how the Vending Machine project unfolded:",
      },
      {
        type: "steps",
        steps: [
          {
            number: 1,
            title: "Conceptualization & Storyboarding",
            content:
              "We start by understanding the core message and target audience. For the vending machine, we mapped out each interaction and transition to create a cohesive narrative flow.",
          },
          {
            number: 2,
            title: "Design & Asset Creation",
            content:
              "Every visual element is crafted with animation in mind. We design for scalability, ensuring crisp visuals at any size while maintaining animation-friendly structures.",
          },
          {
            number: 3,
            title: "Animation & Timing",
            content:
              "This is where the magic happens. We carefully choreograph each movement, considering easing curves, anticipation, and follow-through to create natural, engaging motion.",
          },
          {
            number: 4,
            title: "Refinement & Polish",
            content:
              "Multiple review cycles ensure every detail meets our standards. We fine-tune timing, adjust colors, and perfect transitions until the animation feels effortless.",
          },
          {
            number: 5,
            title: "Delivery & Optimization",
            content:
              "Final exports are optimized for their intended use — whether that's web, social media, presentations, or broadcast. We ensure optimal quality and file sizes.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Client Collaboration & Communication",
        id: "client-collaboration",
      },
      {
        type: "text",
        content:
          "What sets ORIGINS apart isn't just our technical capabilities — it's how we work with our clients throughout the creative process. The Vending Machine project exemplifies our collaborative approach:",
      },
      {
        type: "callout",
        title: "Our Collaborative Framework",
        content:
          "Transparent Communication: Regular updates, preview sessions, and open feedback channels ensure you're never left wondering about project status.\n\nIterative Development: We work in phases, allowing for feedback and adjustments at each stage rather than waiting until the end.\n\nCreative Partnership: Your input shapes the creative direction. We see ourselves as an extension of your team, not just a service provider.\n\nTechnical Expertise: We handle the complex technical aspects while keeping you informed about how our decisions impact your goals.",
        variant: "info",
      },
      {
        type: "text",
        content:
          "This approach allowed Bovy to deliver the Vending Machine project not just on time, but with a level of polish and creativity that exceeded expectations. When you work with ORIGINS, you're not just hiring animators or designers — you're partnering with creative problem-solvers who are invested in your success.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ready to Create Your Next Masterpiece?",
        id: "conclusion",
      },
      {
        type: "text",
        content:
          "The Vending Machine project represents everything we love about creative work at ORIGINS: the perfect blend of artistic vision, technical expertise, and professional execution. But more importantly, it demonstrates what's possible when you have the right team working on your project.",
      },
      {
        type: "text",
        content:
          "Whether you need motion graphics that tell your brand's story, web development that brings your digital presence to life, or comprehensive creative strategy that drives real business results, ORIGINS has the expertise and passion to make it happen.",
      },
      {
        type: "text",
        content:
          "Just like Bovy transformed a simple vending machine concept into a motion masterpiece, we can help you transform your ideas into compelling visual experiences that engage your audience and achieve your objectives.",
      },
      {
        type: "cta",
        title: "Let's Bring Your Vision to Life",
        content:
          "Ready to see what ORIGINS can create for your brand? Let's start a conversation about your next project.",
        buttons: [
          {
            text: "Start Your Project",
            href: "/contact",
            variant: "primary",
          },
          {
            text: "View Our Portfolio",
            href: "/portfolio",
            variant: "secondary",
          },
        ],
      },
    ],
  },
  {
    id: "sannyaliza-driving-force-project-studio-manager",
    title:
      "The Driving Force Behind Our Success: Spotlight on Sannyaliza Sreng",
    summary:
      "Meet Sannyaliza Sreng, our Project and Studio Manager who powers structure, collaboration, and excellence across every initiative — turning ambitious ideas into extraordinary results.",
    date: "January 22, 2025",
    image: "/blog/blog2/ORS_LIZABLOG-THUMBNAIL.png",
    category: "Achievements",
    authorId: "Origins Studios",
    tableOfContents: [
      {
        id: "introduction",
        title: "The Heart of Our Studio",
        href: "#introduction",
      },
      {
        id: "role-impact",
        title: "Aligning Creativity with Execution",
        href: "#role-impact",
      },
      {
        id: "leadership",
        title: "Leadership that Elevates the Team",
        href: "#leadership",
      },
      {
        id: "results",
        title: "From Ideas to Impactful Results",
        href: "#results",
      },
      {
        id: "origins-capabilities",
        title: "ORIGINS' Complete Creative Capabilities",
        href: "#origins-capabilities",
      },
      { id: "bts", title: "Behind the Scenes", href: "#bts" },
      {
        id: "conclusion",
        title: "A Driving Force at ORIGINS",
        href: "#conclusion",
      },
    ],
    content: [
      {
        type: "video",
        src: "/blog/blog2/result.mp4",
        poster: "/blog/blog2/ORS_LIZABLOG-THUMBNAIL.png",
        caption:
          "Project outcomes highlight Sannyaliza's ability to shepherd complex initiatives to polished completion",
      },
      {
        type: "heading",
        level: 2,
        content: "The Heart of Our Studio",
        id: "introduction",
      },
      {
        type: "text",
        content:
          "Every successful studio is built not only on creativity and innovation, but also on structure, strategy, and leadership. At the heart of our achievements stands Sannyaliza Sreng, our dedicated Project and Studio Manager, whose expertise and commitment ensure that every initiative runs seamlessly from concept to completion.",
      },
      {
        type: "image",
        src: "/blog/blog2/Result1.png",
        alt: "Polished project result led by Sannyaliza",
        caption:
          "A refined outcome made possible by clear direction and disciplined execution",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      {
        type: "heading",
        level: 2,
        content: "Aligning Creativity with Execution",
        id: "role-impact",
      },
      {
        type: "text",
        content:
          "Sannyaliza plays a pivotal role in aligning our team’s creative energy with clear direction and purposeful execution. With exceptional organizational skills and meticulous attention to detail, she ensures projects are managed efficiently, timelines are honored, and standards of excellence are consistently upheld.",
      },
      {
        type: "grid",
        columns: 3,
        items: [
          {
            title: "Planning & Structure",
            content:
              "Clear roadmaps, realistic timelines, measurable milestones",
            icon: "📅",
          },
          {
            title: "Quality & Precision",
            content:
              "Consistent review cycles, documentation, and delivery standards",
            icon: "✨",
          },
          {
            title: "Collaboration",
            content:
              "Open communication channels and timely stakeholder alignment",
            icon: "🤝",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Leadership that Elevates the Team",
        id: "leadership",
      },
      {
        type: "quote",
        content:
          "Professional and approachable — Sannyaliza builds trust, empowers the team, and keeps us focused on the goal.",
        author: "ORIGINS Team",
        className:
          "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 text-center text-xl text-blue-700",
      },
      {
        type: "text",
        content:
          "What makes Sannyaliza truly remarkable is her balance of professionalism and approachability. She cultivates an environment where every team member feels supported, empowered, and motivated to perform at their best. Her leadership inspires confidence, builds trust, and reinforces the high standards that define our work.",
      },
      {
        type: "image",
        src: "/blog/blog2/Result2.png",
        alt: "Team success under Sannyaliza’s leadership",
        caption:
          "A culture of accountability and support drives consistent excellence",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      {
        type: "heading",
        level: 2,
        content: "From Ideas to Impactful Results",
        id: "results",
      },
      {
        type: "text",
        content:
          "Thanks to Sannyaliza’s dedication and vision, our studio delivers projects that stand out for their quality, impact, and precision. Under her guidance, ideas become organized plans — and organized plans become outcomes that exceed expectations.",
      },
      {
        type: "callout",
        title: "What This Means for Clients",
        content:
          "Predictable delivery, clear communication, and polished results — every time.",
        variant: "success",
      },

      {
        type: "heading",
        level: 2,
        content: "Behind the Scenes",
        id: "bts",
      },
      {
        type: "video",
        src: "/blog/blog2/behindTheScene.mp4",
        poster: "/blog/blog2/thumbnail.png",
        caption:
          "A glimpse into the coordination and collaboration that power our productions",
      },
      {
        type: "grid",
        columns: 2,
        items: [
          {
            title: "BTS Snapshot 1",
            content: "Team syncs that align scope, quality, and timelines",
            className:
              "bg-gradient-to-br from-gray-50 to-slate-50 border-slate-100",
          },
          {
            title: "BTS Snapshot 2",
            content: "Issue‑spotting early, resolving fast, staying on track",
            className:
              "bg-gradient-to-br from-gray-50 to-slate-50 border-slate-100",
          },
        ],
      },
      {
        type: "image",
        src: "/blog/blog2/BTS1.png",
        alt: "Behind the scenes – coordination",
        caption: "Practical systems that keep creative work moving",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      {
        type: "image",
        src: "/blog/blog2/BTS2.png",
        alt: "Behind the scenes – collaboration",
        caption: "Tight feedback loops, strong outcomes",
        className: "rounded-2xl shadow-lg object-cover w-full h-80 relative",
      },
      {
        type: "text",
        content:
          "Sannyaliza is, without question, a driving force behind our success — a leader who brings clarity, momentum, and excellence to every project. With structure and care, she helps us turn ambitious ideas into extraordinary results.",
      },
      {
        type: "heading",
        level: 2,
        content: "ORIGINS: Creativity, Structure, and Leadership",
        id: "origins-overview",
      },
      {
        type: "text",
        content:
          "At ORIGINS, we believe the best creative work happens when talent is paired with structure and leadership. Our Project & Studio Manager, Sannyaliza Sreng, plays a vital role in ensuring our services are delivered with precision, clarity, and excellence.",
      },
      {
        type: "heading",
        level: 2,
        content: "Our Capabilities",
        id: "origins-services",
      },
      {
        type: "text",
        content:
          "With a diverse team of specialists, ORIGINS offers a full range of creative services. Under Sannyaliza’s management, every project flows seamlessly from vision to execution:",
      },
      {
        type: "grid",
        columns: 3,
        items: [
          {
            title: "Motion Graphics & Animation",
            content:
              "From explainer videos to character animations, we craft engaging motion work that tells stories with impact.",
            icon: "🎬",
          },
          {
            title: "Brand Identity & Design",
            content:
              "We build visual identity systems that capture your brand’s personality and resonate across every touchpoint.",
            icon: "🎨",
          },
          {
            title: "Web Development",
            content:
              "Responsive websites and applications designed for seamless performance and aesthetic appeal.",
            icon: "💻",
          },
          {
            title: "Video Production",
            content:
              "From concept to post-production, we deliver professional video that communicates and captivates.",
            icon: "🎥",
          },
          {
            title: "Creative Strategy",
            content:
              "Strategic frameworks that align creativity with your business goals, turning ideas into measurable results.",
            icon: "⚡",
          },
          {
            title: "Digital Marketing",
            content:
              "Campaigns that amplify your brand’s presence, engage audiences, and drive sustainable growth.",
            icon: "📈",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "How Projects Come to Life",
        id: "project-process",
      },
      {
        type: "text",
        content:
          "Every service we provide follows a clear and thoughtful process, overseen by Sannyaliza. Here’s how she ensures excellence at every stage:",
      },
      {
        type: "steps",
        steps: [
          {
            number: 1,
            title: "Discovery & Planning",
            content:
              "Defining goals, understanding the audience, and creating a roadmap tailored to each client’s vision.",
          },
          {
            number: 2,
            title: "Creative Development",
            content:
              "Designing and building assets that not only look good but also serve the purpose of the project.",
          },
          {
            number: 3,
            title: "Execution & Oversight",
            content:
              "Coordinating team efforts, maintaining timelines, and balancing structure with creativity.",
          },
          {
            number: 4,
            title: "Review & Refinement",
            content:
              "Iterative feedback and quality control cycles ensure every detail meets our high standards.",
          },
          {
            number: 5,
            title: "Delivery & Beyond",
            content:
              "Optimized outputs, smooth delivery, and post-project support to ensure lasting impact.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Collaboration at the Core",
        id: "collaboration",
      },
      {
        type: "callout",
        title: "How We Work With You",
        content:
          "• Transparent Communication: Updates and previews at every stage.\n\n• Iterative Development: Feedback loops that shape the final outcome.\n\n• True Partnership: We see ourselves as an extension of your team.\n\n• Trusted Expertise: Our leadership and technical know-how guide you every step of the way.",
        variant: "info",
      },
      {
        type: "text",
        content:
          "This framework allows ORIGINS to consistently deliver work that is not only creative, but also reliable, efficient, and impactful — thanks to the leadership of Sannyaliza Sreng.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ready to Build Something Remarkable?",
        id: "cta",
      },
      {
        type: "text",
        content:
          "From motion design to digital marketing, ORIGINS delivers projects that inspire and perform. With Sannyaliza ensuring every detail is managed to perfection, you can trust that your project will not only meet expectations — it will exceed them.",
      },
      {
        type: "cta",
        title: "Work with ORIGINS",
        content:
          "Partner with ORIGINS for services delivered with creativity, strategy, and seamless project management.",
        buttons: [
          { text: "Start a Project", href: "/contact", variant: "primary" },
          { text: "See Our Work", href: "/portfolio", variant: "secondary" },
        ],
      },
    ],
  },
];
