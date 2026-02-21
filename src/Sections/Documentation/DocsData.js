export const docsData = [
  {
    id: "getting-started",
    category: "Introduction",
    title: "Getting Started with Nebula",
    content: [
      {
        heading: "Welcome to the Fleet",
        paragraph:
          "Nebula is a language-independent tool for managing and migrating database schemas using modern DevOps principles. Before you begin, ensure your environment meets the minimum system requirements for deployment.",
      },
      {
        heading: "System Requirements",
        paragraph:
          "To run Nebula efficiently, your system requires at least 4GB of RAM, a multi-core processor (x86_64 or ARM64), and a compatible Unix-based operating system. Windows users should utilize WSL2 for optimal performance.",
      },
    ],
    prev: null,
    next: { id: "declarative-workflow", title: "Declarative Workflow" },
  },
  {
    id: "declarative-workflow",
    category: "Workflows",
    title: "Declarative Workflow",
    content: [
      {
        heading: "What is Declarative Schema?",
        paragraph:
          "With Nebula's declarative schema migrations, users don't need to manually craft SQL migration scripts. Instead, you define the desired state of your database, and Nebula calculates the necessary operations to achieve that state.",
      },
      {
        heading: "Applying Configurations",
        paragraph:
          "Configurations are written in HCL (HashiCorp Configuration Language). Use the `nebula apply` command to push your structural changes directly to the target database securely.",
      },
    ],
    prev: { id: "getting-started", title: "Getting Started" },
    next: { id: "schema-inspection", title: "Schema Inspection" },
  },
  {
    id: "schema-inspection",
    category: "Core Features",
    title: "Schema Inspection",
    content: [
      {
        heading: "Deep Space Scanning",
        paragraph:
          "Inspecting existing database schemas is crucial for reverse-engineering infrastructure into code. Nebula connects directly to your database instances and exports the current topography into standard HCL files.",
      },
      {
        heading: "Exporting to Code",
        paragraph:
          "Run `nebula inspect > schema.hcl` to generate a blueprint of your current database. This file can then be committed to your version control system.",
      },
    ],
    prev: { id: "declarative-workflow", title: "Declarative Workflow" },
    next: null,
  },
];
