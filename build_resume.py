from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.enums import TA_LEFT

INK = HexColor("#20242a")
MUTED = HexColor("#5b6570")
ACCENT = HexColor("#3d6f93")
LINE = HexColor("#c7ccd1")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name", parent=styles["Title"], fontName="Helvetica-Bold",
    fontSize=24, leading=28, textColor=INK, spaceAfter=2, alignment=TA_LEFT,
)
title_style = ParagraphStyle(
    "RoleTitle", parent=styles["Normal"], fontName="Helvetica",
    fontSize=12, leading=15, textColor=ACCENT, spaceAfter=2,
)
contact_style = ParagraphStyle(
    "Contact", parent=styles["Normal"], fontName="Helvetica",
    fontSize=9, leading=13, textColor=MUTED,
)
section_style = ParagraphStyle(
    "Section", parent=styles["Heading2"], fontName="Helvetica-Bold",
    fontSize=11, leading=14, textColor=INK, spaceBefore=14, spaceAfter=6,
    letterSpacing=1.2,
)
body_style = ParagraphStyle(
    "Body", parent=styles["Normal"], fontName="Helvetica",
    fontSize=9.3, leading=13.5, textColor=INK, spaceAfter=4,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=body_style, leftIndent=12, bulletIndent=0, spaceAfter=3,
)
project_title_style = ParagraphStyle(
    "ProjectTitle", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=9.8, leading=13, textColor=INK, spaceBefore=7,
)
project_meta_style = ParagraphStyle(
    "ProjectMeta", parent=styles["Normal"], fontName="Helvetica-Oblique",
    fontSize=8.3, leading=11, textColor=MUTED, spaceAfter=3,
)

doc = SimpleDocTemplate(
    "public/resume.pdf",
    pagesize=letter,
    leftMargin=0.62 * inch, rightMargin=0.62 * inch,
    topMargin=0.55 * inch, bottomMargin=0.55 * inch,
    title="Salman Ali Khan — Resume",
    author="Salman Ali Khan",
)

story = []

story.append(Paragraph("Salman Ali Khan", name_style))
story.append(Paragraph("AI/ML Engineer + Odoo 19 Developer", title_style))
story.append(Spacer(1, 4))
story.append(Paragraph(
    "khanalisak1113@gmail.com &nbsp;|&nbsp; github.com/mighatenosak &nbsp;|&nbsp; "
    "linkedin.com/in/salman-ali-khan-95157b353 &nbsp;|&nbsp; Riyadh, Saudi Arabia",
    contact_style
))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=1, color=LINE))

story.append(Paragraph("SUMMARY", section_style))
story.append(Paragraph(
    "BCA (Bachelor of Computer Applications) Honours graduate (2022–2026) working across "
    "Odoo 19 development and applied AI/ML. Built real estate modules for top companies in "
    "Riyadh in collaboration with bsoln Riyadh, and integrated Odoo with ZK biometric "
    "hardware, WhatsApp/Instagram/Facebook/Snapchat lead capture, and Salla e-commerce. "
    "On the ML side, built a two-stage YOLOv8 + EfficientNet brain tumour detection pipeline. "
    "34+ custom Odoo modules shipped to production.",
    body_style
))

story.append(Paragraph("EDUCATION", section_style))
story.append(Paragraph(
    "<b>BCA (Bachelor of Computer Applications) Honours</b> — 2022–2026", body_style
))

story.append(Paragraph("SKILLS", section_style))
skills_rows = [
    ["Odoo", "Odoo 19 modules, ORM, views, security, workflow automation"],
    ["AI / ML", "Deep learning, YOLOv8, EfficientNet, applied computer vision"],
    ["Backend & APIs", "Python, FastAPI, Pydantic, Java, C, C++"],
    ["Databases", "PostgreSQL, MongoDB, SQLAlchemy, Alembic"],
    ["Systems", "Linux, computer architecture & design, DBMS, software engineering"],
]
skills_table = Table(skills_rows, colWidths=[1.35 * inch, 5.5 * inch])
skills_table.setStyle(TableStyle([
    ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
    ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
    ("FONTSIZE", (0, 0), (-1, -1), 9.2),
    ("TEXTCOLOR", (0, 0), (0, -1), INK),
    ("TEXTCOLOR", (1, 0), (1, -1), MUTED),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 2),
    ("LEFTPADDING", (0, 0), (0, -1), 0),
]))
story.append(skills_table)

story.append(Paragraph("SELECTED PROJECTS", section_style))

projects = [
    ("Real Estate Modules — Riyadh", "Odoo 19 · bsoln Riyadh",
     "Built real estate modules (Properties, Contracts & Payments, Maintenance) for top companies in Riyadh."),
    ("ZK Biometric Integration", "Odoo 19",
     "Integrated ZK biometric attendance hardware directly into Odoo's hr.attendance."),
    ("Social & CRM Lead Integrations", "Odoo 19 CRM",
     "Unified lead capture from WhatsApp, Instagram, Facebook, and Snapchat ads into one CRM pipeline."),
    ("Salla Integration", "Odoo 19",
     "Synced a Salla e-commerce storefront with Odoo for consistent orders and catalog data."),
    ("KSA Payroll Export", "Odoo 19 · ksa_payroll_export",
     "Automated XLSX payroll export from Odoo's Pay Run, replacing a manual spreadsheet process."),
    ("Saudi HR & Payroll Suite", "Odoo 19 · l10n_sa_payroll_enhanced",
     "Fixed an Eid attendance bug via an Islamic calendar module; added Iqama alerts and ZATCA push."),
    ("CRM & Sales Approvals", "Odoo 19 · custom_approval_sale",
     "Dual-stage sales approval workflow and field-level security on sensitive Sale Order data."),
    ("NeuroScan", "Applied ML · YOLOv8 + EfficientNet",
     "Two-stage brain tumour detection pipeline: YOLOv8 for detection, EfficientNet for classification."),
    ("Clock-in Attendance App", "Python · FastAPI",
     "Standalone attendance application built outside the Odoo ecosystem."),
    ("PCF Software", "Python · FastAPI · In Progress",
     "Currently building software to calculate and track Product Carbon Footprint."),
]

for title, meta, desc in projects:
    story.append(Paragraph(title, project_title_style))
    story.append(Paragraph(meta, project_meta_style))
    story.append(Paragraph(desc, body_style))

story.append(Paragraph("ODOO MODULE ARSENAL", section_style))
story.append(Paragraph(
    "34 custom Odoo 19 modules across CRM & Sales, HR & Attendance, KSA Localization & "
    "Payroll, Access & Visibility, Reports & Documents, and Integrations & Procurement — "
    "including custom_approval_sale, ksa_payroll_export, l10n_sa_payroll_enhanced, "
    "zk_biometric, crm_not_qualified, hr_iqama_notification, zatca_manual_push, and "
    "arabic_address_module. Full list available on request or on the portfolio site.",
    body_style
))

doc.build(story)
print("done")
