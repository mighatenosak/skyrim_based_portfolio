export const PROJECTS = [
  {
    slug: "real-estate-riyadh",
    name: "Real Estate Modules — Riyadh",
    tag: "Odoo 19",
    weight: "Properties · Contracts · Maintenance",
    value: "bsoln Riyadh",
    stack: ["Odoo 19", "Python", "PostgreSQL", "XML Views"],
    effects: [
      "Built real estate modules for top companies in Riyadh, working with bsoln Riyadh",
      "Full property, contract & payment, and maintenance flow",
      "Documented Odoo 19 breaking changes: res.groups removals, kanban template renames, computed-field search limits",
    ],
    summary:
      "A property management build for real estate companies in Riyadh, covering the three things that actually run the business: what's owned, what's contracted, and what needs fixing.",
    body: [
      "The brief was a full property lifecycle inside Odoo — properties as records, contracts and payments tied to them, and a maintenance workflow that could be tracked from request to close.",
      "Odoo 19 had shipped enough breaking changes that a chunk of the work was archaeology before it was development: res.groups fields had been removed in places the client's existing setup depended on, kanban templates had been renamed, and some computed fields could no longer be searched on the way they used to be. Each of those had to be found, documented, and worked around before the actual feature work could move.",
      "The result is a prototype module covering Properties, Contracts & Payments, and Maintenance — deliberately scoped to leave CRM/leads and the customer portal for a later phase.",
    ],
  },
  {
    slug: "zk-biometric",
    name: "ZK Biometric Integration",
    tag: "Odoo 19",
    weight: "Attendance Hardware",
    value: "zk_biometric",
    stack: ["Odoo 19", "Python", "ZKTeco SDK", "hr.attendance"],
    effects: [
      "Integrated ZK biometric devices directly into Odoo attendance",
      "Device punches synced into hr.attendance without manual entry",
      "Feeds into the same attendance/timeoff pipeline as the HR suite",
    ],
    summary:
      "Pulling fingerprint punches off ZK biometric devices straight into Odoo's attendance model, so nobody's re-typing a clock-in sheet.",
    body: [
      "Physical attendance hardware and Odoo don't talk to each other out of the box. This module bridges that gap: punches recorded on ZK biometric devices are read and written into hr.attendance records automatically.",
      "It's built to sit underneath the rest of the HR suite — the same attendance data that a biometric punch creates here is what timeoff_attendance_sync and the WFH balance logic downstream consume, so the whole attendance picture stays consistent regardless of how a punch was recorded.",
    ],
  },
  {
    slug: "social-crm-integrations",
    name: "Social & CRM Lead Integrations",
    tag: "Odoo 19",
    weight: "WhatsApp · Instagram · Facebook · Snapchat",
    value: "Lead Capture",
    stack: ["Odoo 19 CRM", "Meta/WhatsApp APIs", "Snapchat Ads API", "Python"],
    effects: [
      "WhatsApp, Instagram, and Facebook leads flowing straight into CRM",
      "Snapchat ad leads captured and routed the same way",
      "One consistent lead pipeline regardless of which platform it came from",
    ],
    summary:
      "Every platform a lead can come from — WhatsApp, Instagram, Facebook, Snapchat ads — landing in the same CRM pipeline, tagged consistently.",
    body: [
      "Sales teams don't care which app a lead came from; they care that it shows up in one place, tagged correctly, ready to work. That's what this integration set does: WhatsApp conversations, Instagram and Facebook lead ads, and Snapchat ad leads are all captured and pushed into Odoo CRM as opportunities.",
      "The work was less about any single API and more about normalizing four very different lead shapes into one Odoo CRM record structure that a sales rep can work without needing to know or care where it originated.",
    ],
  },
  {
    slug: "salla-integration",
    name: "Salla Integration",
    tag: "Odoo 19",
    weight: "E-Commerce Sync",
    value: "Salla",
    stack: ["Odoo 19", "Salla API", "Python"],
    effects: [
      "Connected a Salla storefront to Odoo",
      "Keeps orders and catalog data flowing between the store and the backend",
    ],
    summary: "Syncing a Salla storefront with Odoo, so the store and the backend agree on orders and catalog.",
    body: [
      "Salla handles the storefront; Odoo handles everything after the sale. This integration keeps the two in sync — orders placed on Salla land in Odoo, and catalog data stays consistent between the two systems, without a manual export/import step in between.",
    ],
  },
  {
    slug: "ksa-payroll-export",
    name: "KSA Payroll Export",
    tag: "Odoo 19",
    weight: "Payroll Automation",
    value: "ksa_payroll_export",
    stack: ["Odoo 19", "hr.payslip.run", "XLSX Export", "Python"],
    effects: [
      "Automated XLSX payroll export from Odoo's Pay Run (hr.payslip.run)",
      "Mapped salary rule codes: BASIC, HOUALLOW, TRAALLOW, OTALLOW, GOSI_EMP, GOSI_COMP, GROSS, NET",
      "GOSI employee contributions applied only to Saudi-national staff",
    ],
    summary:
      "Replacing a manual payroll spreadsheet with a one-click XLSX export generated straight from Odoo's Pay Run.",
    body: [
      "The client was running payroll through a manual spreadsheet process — error-prone, and slow every single pay cycle. This module generates the payroll sheet directly from Odoo's Pay Run feature (hr.payslip.run), mapped against the client's actual salary rule codes: BASIC, HOUALLOW, TRAALLOW, OTALLOW, GOSI_EMP, GOSI_COMP, GROSS, and NET.",
      "A few details mattered more than they looked like they would: the correct bank field turned out to be primary_bank_account_id rather than the more obvious bank_account_id, OTHER_DEDUCTION had to be computed rather than looked up directly, and GOSI_EMP only applies to Saudi-national employees — get any of those wrong and the export is quietly incorrect rather than obviously broken.",
    ],
  },
  {
    slug: "saudi-hr-payroll-suite",
    name: "Saudi HR & Payroll Suite",
    tag: "Odoo 19",
    weight: "Localization",
    value: "l10n_sa_payroll_enhanced",
    stack: ["Odoo 19", "Julian Day Number Calc", "Cron Jobs", "XML Data"],
    effects: [
      "Fixed employees wrongly marked absent over Eid due to missing calendar entries",
      "Islamic holiday lookup table with a Meeus-algorithm / Julian Day Number fallback",
      "Iqama expiry notifications, ZATCA manual push, and SAR currency symbol fixes",
    ],
    summary:
      "A cluster of Saudi-localization fixes: an Eid attendance bug, Islamic calendar math, Iqama expiry alerts, and ZATCA/SAR formatting.",
    body: [
      "This started as one bug — employees getting marked absent over Eid because the calendar had no entry for it — and grew into a small localization suite. Fixing the root cause meant building an Islamic holiday lookup table (2020–2026) with a Meeus-algorithm fallback for dates outside the table.",
      "The date math had a real bug in it along the way: a miscalibrated K_OFFSET constant in the Islamic calendar calculation, eventually resolved by switching the whole approach to Julian Day Number arithmetic instead of patching the original formula further.",
      "Around that core fix sit the rest of the Saudi-specific pieces: Iqama expiry notifications for HR, a manual ZATCA push utility, and a fix for how the SAR currency symbol was rendering in reports.",
    ],
  },
  {
    slug: "crm-sales-approvals",
    name: "CRM & Sales Approvals",
    tag: "Odoo 19",
    weight: "Workflow & Security",
    value: "custom_approval_sale",
    stack: ["Odoo 19", "Security Groups", "XPath Views", "ORM"],
    effects: [
      "Dual-stage sales order approval: Sales Manager → CEO",
      '"Not Qualified" CRM lead stage with a mandatory reason wizard, enforced at ORM and view level',
      "Field-level security via view xpath groups on sensitive Sale Order fields",
    ],
    summary:
      "A two-stage sales approval chain, a proper 'Not Qualified' lead outcome, and field-level security on the numbers that matter.",
    body: [
      "Sales orders above a threshold needed sign-off from both a Sales Manager and the CEO before they could proceed — this module builds that as an explicit two-stage approval state machine rather than a manual email chain.",
      "On the CRM side, leads only had 'Lost' as a dead-end outcome. This adds a proper 'Not Qualified' stage that mirrors Lost functionality but requires a reason through a wizard, enforced at both the ORM and the view level so it can't be skipped from either direction.",
      "Sensitive Sale Order fields — vendor cost, margin, untaxed amount, and others — are restricted through PRC and SRC user groups applied via xpath on the form view, so the wrong person simply never sees the number rather than being trusted not to look.",
    ],
  },
  {
    slug: "clock-in-attendance-app",
    name: "Clock-in Attendance App",
    tag: "Software Engineering",
    weight: "Attendance Tracking",
    value: "Standalone App",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    effects: [
      "A dedicated clock-in application separate from the Odoo attendance flow",
      "Built around the same real-world constraint: punches have to be simple and hard to fake",
    ],
    summary: "A standalone clock-in application built outside of Odoo, for teams that need attendance tracking without the rest of the ERP.",
    body: [
      "Not every team needs the whole of Odoo just to track a clock-in and clock-out. This is a standalone attendance application built to do exactly that — simple to use, and built around the same constraint that shapes the ZK biometric work: a punch has to be quick, and it has to be hard to fake.",
    ],
  },
  {
    slug: "pcf-software",
    name: "PCF Software",
    tag: "In Progress",
    weight: "Product Carbon Footprint",
    value: "Currently Building",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    effects: [
      "Software for calculating and tracking product carbon footprint",
      "Actively in development",
    ],
    summary: "In-progress software for calculating and tracking a product's carbon footprint across its lifecycle.",
    body: [
      "Currently in active development — software for calculating and tracking Product Carbon Footprint (PCF). More detail here as the build progresses.",
    ],
  },
  {
    slug: "neuroscan",
    name: "NeuroScan",
    tag: "Applied ML",
    weight: "Brain Tumour Detection",
    value: "YOLOv8 + EfficientNet",
    stack: ["Python", "YOLOv8", "EfficientNet", "PyTorch"],
    effects: [
      "Two-stage detection-then-classification pipeline for brain tumour imaging",
      "Rebuilt the project report into a polished 40-page document with a full TOC and diagrams",
    ],
    summary:
      "A two-stage YOLOv8 + EfficientNet pipeline for brain tumour detection — detect first, then classify.",
    body: [
      "NeuroScan splits the problem into two stages rather than asking one model to do everything: YOLOv8 handles detection — finding whether and where a tumour appears in a scan — and EfficientNet handles classification on what YOLOv8 finds.",
      "Alongside the model work, the project report went through a major rebuild into a full 40-page document: proper pagination, a manual table of contents, expanded chapters, and diagrams placed correctly against the text they support — the kind of detail that's easy to skip and obvious when it's missing.",
    ],
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
