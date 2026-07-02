

Design a **modern, clean, enterprise-grade, mobile-first ERP web application** for **Drinkwell Water ATM Booth Management System**. The application should feel similar to **Linear, Notion, Stripe Dashboard, Vercel Dashboard, and Google Material 3**, combining simplicity with professional enterprise usability.

The UI should prioritize **speed, readability, and minimal user interaction**, as most users (especially booth operators and supervisors) will use the system from Android smartphones in outdoor environments.

---

# Overall Design Style

* Modern SaaS ERP
* Mobile-first responsive design
* Fully responsive (Mobile → Tablet → Desktop)
* Clean white interface
* Primary color: **Drinkwell Blue (#0099E5)**
* Secondary color: Aqua (#00C2CB)
* Success: Green
* Warning: Orange
* Danger: Red
* Neutral gray palette
* Large rounded cards (12–16px radius)
* Soft shadows
* Minimal borders
* Spacious layout
* Smooth transitions (200–300ms)
* Material Design inspired
* Professional enterprise appearance
* Accessible UI (WCAG AA)
* High contrast for outdoor readability

---

# Typography

Font:

* Inter
  or
* Manrope

Hierarchy

* Large dashboard titles
* Medium section titles
* Clear labels
* Readable form fields
* Large touch-friendly buttons

---

# Navigation

## Desktop

Left collapsible sidebar

Contains

* Dashboard
* Booths
* Operators
* Supervisors
* Managers
* Attendance
* Sales
* Assets
* Phones
* Requisitions
* Complaints
* Reports
* Notifications
* Settings

Top Navigation

* Search
* Notification Bell
* User Profile
* Dark Mode Toggle

---

## Mobile

Bottom Navigation

* Dashboard
* Booths
* Attendance
* Sales
* Profile

Hamburger Menu

Contains all remaining modules.

Floating Action Button (FAB)

For quick actions like:

* Submit Attendance
* Submit Sales
* New Requisition
* Report Issue

---

# Login Screen

Simple modern login

Contains

* Drinkwell Logo
* Welcome message
* Email/Phone
* Password
* Remember Me
* Forgot Password
* Login Button

Minimal illustration of a Water ATM Booth in the background.

---

# Dashboard

Use beautiful KPI cards.

Admin Dashboard

Show

* Total Booths
* Total Operators
* Total Supervisors
* Total Managers
* Today's Attendance
* Water Sold Today
* Cards Sold Today
* Pending Requisitions
* Pending Complaints

Charts

* Daily Sales Trend
* Monthly Water Sales
* Attendance Trend
* Booth Performance
* Operator Performance

Recent Activities

Recent Sales

Latest Complaints

Latest Attendance

Latest Requisitions

---

Supervisor Dashboard

Only assigned booths.

Show

* Assigned Booths
* Today's Attendance
* Sales Summary
* Pending Issues
* Requisitions
* Booth Health Status

---

Operator Dashboard

Very simple.

Large buttons

* Check In
* Check Out
* Submit Sales
* Recharge Card Record
* Sell New Card
* Request Assets
* Report Problem
* My Attendance
* My Profile

Today's Booth Information

Current Shift

Today's Tasks

---

# Booth Management

Booth List

Beautiful cards or table.

Each booth card contains

* Booth Name
* Booth Code
* Supervisor
* Operators
* Today's Sales
* Today's Attendance
* Status Badge

Click opens Booth Details.

---

Booth Details

Google Map

Location Card

Photo Gallery

Assigned Supervisor

Assigned Operators

Assets

Phone

Attendance Summary

Sales Summary

Complaints

Requisitions

Activity Timeline

Quick Action Buttons

---

# Operator Profile

Professional profile page.

Cover photo

Circular profile picture

Personal Info

Employment Info

Academic Certificates

References

Attendance Calendar

Sales History

Complaints

Requisitions

Documents

Performance Statistics

---

# Attendance Screen

Large Check-In button.

When clicked

GPS animation

Verifying location

Distance calculation

If inside 50m

Green success animation

Otherwise

Red warning with explanation.

Show

Today's attendance

History

Monthly calendar

---

# Sales Submission

Simple mobile-friendly form.

Fields

Water Sold (Liters)

ATM Cards Sold

Recharge Amount

Cash Collection

Remarks

Large Submit button

Confirmation dialog

Success animation

---

# Requisition Screen

Grid of common items.

Examples

* Mop
* Bucket
* Pen
* Cleaner
* Fan
* Light
* CCTV
* Mobile Phone
* Chair
* Table

Operator selects item.

Adds quantity.

Reason.

Priority.

Submit.

---

# Complaint Screen

Simple card.

Fields

Title

Description

Category

Priority

Photo Upload

Submit

---

# Assets

Display assets as beautiful cards.

Each card

Asset Image/Icon

Name

Quantity

Condition

Purchase Date

Status Badge

---

# Phone Management

Cards showing

Phone Image

Brand

Model

IMEI

Assigned Booth

Status

Purchase Date

Condition

---

# Reports

Modern dashboard.

Filters

* Date
* Booth
* Supervisor
* Operator

Charts

Bar Charts

Pie Charts

Line Charts

Area Charts

Export Buttons

PDF

Excel

CSV

---

# Search

Global Search Bar.

Can instantly search

* Booth
* Operator
* Supervisor
* Phone
* Asset

Autocomplete

Recent Searches

---

# Notifications

Modern notification center.

Grouped by

Today

Yesterday

Earlier

Each notification contains

Icon

Time

Status

Clickable

---

# Settings

Profile

Change Password

Language

Theme

Notification Preferences

About

Logout

---

# Forms

Every form should

Have step-by-step layout

Validation

Helpful error messages

Auto-save drafts where appropriate

Upload progress indicators

Image preview

Responsive grid

Large mobile-friendly controls

---

# Tables

Modern data tables.

Features

Sorting

Filtering

Pagination

Search

Column hide/show

Export

Sticky headers

Responsive stacking on mobile

---

# UX Requirements

* One-handed mobile operation
* Thumb-friendly buttons (minimum 48px touch targets)
* Large tap areas
* Minimal typing
* Smart dropdowns
* Auto-complete
* Loading skeletons
* Empty states
* Success animations
* Error illustrations
* Pull-to-refresh on mobile
* Offline indicator
* Fast page transitions
* Floating quick actions
* Confirmation dialogs for destructive actions

---

# Color System

Primary

Drinkwell Blue (#0099E5)

Secondary

Aqua (#00C2CB)

Success

#22C55E

Warning

#F59E0B

Danger

#EF4444

Background

#F8FAFC

Card

White

Text

Dark Gray (#1F2937)

Borders

Light Gray (#E5E7EB)

---

# Icons

Use Material Symbols or Lucide Icons.

Examples

Dashboard

Booth

Users

Supervisor

Attendance

Water Drop

Sales

Phone

Asset

Complaint

Notification

Settings

Reports

Map

GPS

Calendar

---

# Animations

* Smooth page transitions
* Card hover effects (desktop)
* Button ripple effects
* Skeleton loading
* Success checkmark animation
* GPS verification animation
* Chart animations
* Slide-in modals
* Bottom sheets on mobile

---

# Technical UI Guidelines

* Mobile-first responsive layout (starting at 360px width)
* Responsive breakpoints for tablet and desktop
* Progressive Web App (PWA) ready
* Optimized for low-bandwidth networks
* Accessible forms with keyboard navigation and screen-reader support
* Component-based design system suitable for React, Next.js, or Flutter Web
* Consistent spacing using an 8px grid system
* Reusable components (cards, dialogs, tables, forms, badges, charts)

---

## Overall Design Goal

Create a **professional, enterprise-grade ERP** that is **simple enough for non-technical booth operators** yet **powerful enough for managers and administrators**. The experience should emphasize **speed, clarity, reliability, and ease of use**, enabling users to complete common tasks such as attendance, sales reporting, and issue reporting in **under one minute** on a mobile device while providing comprehensive dashboards and analytics on larger screens.
