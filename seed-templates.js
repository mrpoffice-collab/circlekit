const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const templates = [
  {
    name: "Grief and Loss Support",
    description:
      "Help adults who have lost a loved one process their grief through structured CBT-based sessions covering understanding grief, naming emotions, challenging unhelpful thoughts, and moving forward.",
    category: "Grief",
    programLength: 8,
    sessionDuration: 90,
    framework: "CBT + Grief-Informed Care",
    sessions: [
      { week: 1, title: "Understanding Grief", topics: ["5 stages of grief", "Grief map worksheet"] },
      { week: 2, title: "Naming Your Emotions", topics: ["Emotions wheel", "Letter to loved one"] },
      { week: 3, title: "Challenging Unhelpful Thoughts", topics: ["Cognitive distortions", "Thought records"] },
      { week: 4, title: "Creating New Meaning", topics: ["Post-traumatic growth", "Continuing bonds"] },
      { week: 5, title: "Managing Grief Triggers", topics: ["Coping toolbox", "Difficult conversations"] },
      { week: 6, title: "Rebuilding Your Life", topics: ["Identity after loss", "Values clarification"] },
      { week: 7, title: "Self-Compassion", topics: ["Self-compassion practice", "Forgiveness"] },
      { week: 8, title: "Moving Forward", topics: ["Review progress", "Letter to future self"] },
    ],
  },
  {
    name: "Divorce Recovery",
    description:
      "Support individuals navigating divorce with sessions on emotional processing, co-parenting strategies, identity rebuilding, and creating a new life chapter.",
    category: "Life Transitions",
    programLength: 6,
    sessionDuration: 90,
    framework: "CBT + Solution-Focused",
    sessions: [
      { week: 1, title: "Processing the Loss", topics: ["Grief of divorce", "Emotional stages"] },
      { week: 2, title: "Managing Conflict", topics: ["Communication strategies", "Boundary setting"] },
      { week: 3, title: "Co-Parenting Strategies", topics: ["Parallel parenting", "Child-focused decisions"] },
      { week: 4, title: "Rebuilding Identity", topics: ["Who am I now?", "Values reconnection"] },
      { week: 5, title: "Financial Independence", topics: ["Budget basics", "Financial self-care"] },
      { week: 6, title: "Creating Your New Chapter", topics: ["Goal setting", "Building support network"] },
    ],
  },
  {
    name: "Step-Parenting Adjustment",
    description:
      "Guide step-parents through the challenges of blended families, including boundary setting, building relationships with stepchildren, and managing family dynamics.",
    category: "Family",
    programLength: 8,
    sessionDuration: 90,
    framework: "CBT + Family Systems",
    sessions: [
      { week: 1, title: "Understanding Blended Family Dynamics", topics: ["Family systems", "Realistic expectations"] },
      { week: 2, title: "Building Trust with Stepchildren", topics: ["Connection strategies", "Patience practices"] },
      { week: 3, title: "Navigating Discipline", topics: ["Role clarity", "United front strategies"] },
      { week: 4, title: "Managing Ex-Partner Relationships", topics: ["Boundaries", "Communication"] },
      { week: 5, title: "Supporting Your Partner", topics: ["Team approach", "Conflict resolution"] },
      { week: 6, title: "Handling Loyalty Conflicts", topics: ["Children's perspectives", "Reducing triangulation"] },
      { week: 7, title: "Creating Family Traditions", topics: ["New rituals", "Inclusion practices"] },
      { week: 8, title: "Long-term Family Success", topics: ["Maintenance strategies", "Ongoing growth"] },
    ],
  },
  {
    name: "Caregiver Burnout Prevention",
    description:
      "Help caregivers recognize burnout signs, set healthy boundaries, practice self-care, and build support systems while caring for loved ones.",
    category: "Wellness",
    programLength: 6,
    sessionDuration: 60,
    framework: "CBT + Self-Compassion",
    sessions: [
      { week: 1, title: "Recognizing Burnout", topics: ["Warning signs", "Self-assessment"] },
      { week: 2, title: "Setting Boundaries", topics: ["Saying no", "Guilt management"] },
      { week: 3, title: "Self-Care Basics", topics: ["Physical care", "Emotional care"] },
      { week: 4, title: "Building Your Support Team", topics: ["Asking for help", "Resource mapping"] },
      { week: 5, title: "Managing Difficult Emotions", topics: ["Grief", "Resentment", "Guilt"] },
      { week: 6, title: "Sustainable Caregiving", topics: ["Long-term strategies", "Finding meaning"] },
    ],
  },
  {
    name: "Life Transitions",
    description:
      "Support people navigating major life changes like career shifts, relocations, retirement, or empty nest with skills for adaptation and growth.",
    category: "Life Transitions",
    programLength: 6,
    sessionDuration: 90,
    framework: "ACT + Solution-Focused",
    sessions: [
      { week: 1, title: "Acknowledging Change", topics: ["Loss and opportunity", "Transition stages"] },
      { week: 2, title: "Managing Uncertainty", topics: ["Tolerance skills", "Flexibility"] },
      { week: 3, title: "Values Reconnection", topics: ["What matters now?", "Priority setting"] },
      { week: 4, title: "Building New Routines", topics: ["Structure creation", "Habit formation"] },
      { week: 5, title: "Strengthening Relationships", topics: ["Social connections", "New communities"] },
      { week: 6, title: "Embracing Your New Chapter", topics: ["Goal setting", "Action planning"] },
    ],
  },
  {
    name: "General Anxiety Management",
    description:
      "Teach evidence-based techniques for managing anxiety including cognitive restructuring, exposure exercises, relaxation skills, and worry management.",
    category: "Mental Health",
    programLength: 8,
    sessionDuration: 90,
    framework: "CBT",
    sessions: [
      { week: 1, title: "Understanding Anxiety", topics: ["Anxiety cycle", "Physical symptoms"] },
      { week: 2, title: "Relaxation Techniques", topics: ["Breathing exercises", "Progressive muscle relaxation"] },
      { week: 3, title: "Identifying Anxious Thoughts", topics: ["Thought tracking", "Common patterns"] },
      { week: 4, title: "Challenging Anxious Thoughts", topics: ["Cognitive restructuring", "Evidence gathering"] },
      { week: 5, title: "Facing Fears Gradually", topics: ["Exposure hierarchy", "Approach strategies"] },
      { week: 6, title: "Worry Management", topics: ["Worry time", "Problem-solving"] },
      { week: 7, title: "Lifestyle Factors", topics: ["Sleep", "Exercise", "Caffeine"] },
      { week: 8, title: "Maintenance and Relapse Prevention", topics: ["Early warning signs", "Action plan"] },
    ],
  },
  {
    name: "Building Self-Esteem",
    description:
      "Guide participants through exercises to challenge negative self-talk, identify strengths, set boundaries, and develop a healthier self-image.",
    category: "Personal Growth",
    programLength: 6,
    sessionDuration: 90,
    framework: "CBT + Self-Compassion",
    sessions: [
      { week: 1, title: "Understanding Self-Esteem", topics: ["Origins of self-esteem", "Self-assessment"] },
      { week: 2, title: "Challenging the Inner Critic", topics: ["Negative self-talk patterns", "Reframing"] },
      { week: 3, title: "Identifying Strengths", topics: ["Values inventory", "Past successes"] },
      { week: 4, title: "Setting Healthy Boundaries", topics: ["Assertiveness", "Saying no"] },
      { week: 5, title: "Self-Compassion Practice", topics: ["Self-kindness", "Common humanity"] },
      { week: 6, title: "Building a Confident Future", topics: ["Goal setting", "Maintenance plan"] },
    ],
  },
  {
    name: "Substance Use Recovery Support",
    description:
      "Provide ongoing support for individuals in recovery with sessions on trigger management, relapse prevention, building healthy habits, and creating a sober support network.",
    category: "Recovery",
    programLength: 12,
    sessionDuration: 90,
    framework: "CBT + Motivational Interviewing",
    sessions: [
      { week: 1, title: "Your Recovery Story", topics: ["Sharing safely", "Building connection"] },
      { week: 2, title: "Understanding Triggers", topics: ["Internal triggers", "External triggers"] },
      { week: 3, title: "Coping with Cravings", topics: ["Urge surfing", "Distraction techniques"] },
      { week: 4, title: "Managing High-Risk Situations", topics: ["Social situations", "Planning ahead"] },
      { week: 5, title: "Healthy Relationships", topics: ["Toxic vs. supportive", "Setting boundaries"] },
      { week: 6, title: "Dealing with Difficult Emotions", topics: ["Anger", "Sadness", "Boredom"] },
      { week: 7, title: "Building Healthy Habits", topics: ["Sleep", "Nutrition", "Exercise"] },
      { week: 8, title: "Finding Meaning and Purpose", topics: ["Values", "Goals"] },
      { week: 9, title: "Repairing Relationships", topics: ["Amends", "Trust rebuilding"] },
      { week: 10, title: "Relapse Prevention Planning", topics: ["Warning signs", "Action steps"] },
      { week: 11, title: "Building Your Support Network", topics: ["Sober connections", "Community resources"] },
      { week: 12, title: "Celebrating Progress", topics: ["Acknowledging growth", "Continuing the journey"] },
    ],
  },
];

async function seed() {
  console.log("Seeding templates...");

  for (const template of templates) {
    const existing = await prisma.template.findFirst({
      where: { name: template.name },
    });

    if (existing) {
      console.log(`Template "${template.name}" already exists, skipping...`);
      continue;
    }

    await prisma.template.create({
      data: {
        name: template.name,
        description: template.description,
        category: template.category,
        programLength: template.programLength,
        sessionDuration: template.sessionDuration,
        framework: template.framework,
        sessions: template.sessions,
        isPublic: true,
      },
    });

    console.log(`Created template: ${template.name}`);
  }

  console.log("Done seeding templates!");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
