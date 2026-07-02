# Software Requirements Specification (SRS)

## Drinkwell Water ATM Booth ERP System

**Version:** 1.0
**Date:** July 2, 2026

---

# 1. Introduction

## 1.1 Purpose

The purpose of this document is to define the Software Requirements Specification (SRS) for the **Drinkwell Water ATM Booth ERP System**. The ERP will centralize the management of water ATM booths, supervisors, booth operators, attendance, sales, assets, requisitions, and operational reporting.

The system aims to replace manual record keeping with a secure, role-based web application that provides real-time monitoring and management.

---

## 1.2 Scope

The ERP system will enable:

* Employee Management
* Booth Management
* Supervisor Management
* Attendance Management (GPS Based)
* Sales Reporting
* Asset Management
* Requisition Management
* Complaint & Issue Tracking
* Dashboard & Analytics
* Role-based Access Control
* Activity Logs

---

# 2. User Roles

There are four major roles.

| Role           | Description                                    |
| -------------- | ---------------------------------------------- |
| Admin          | Full system access                             |
| Manager        | Manage supervisors, booths, operators, reports |
| Supervisor     | Manage assigned booths and operators only      |
| Booth Operator | Daily booth operations                         |

---

# 3. System Hierarchy

```
Admin

   │

Manager

   │

Supervisor

   │

Booth

   │

Booth Operator(s)
```

One manager can supervise multiple supervisors.

One supervisor manages multiple booths.

One booth belongs to one supervisor.

One booth has 1 or 2 operators.

---

# 4. Functional Requirements

---

# 4.1 Authentication

### Features

* Single Login Portal
* Email/Phone Login
* Password Login
* Forgot Password
* Reset Password
* Role-based Redirection
* Session Timeout
* Secure Authentication

---

# 4.2 Dashboard

## Admin Dashboard

Display:

* Total Booths
* Total Supervisors
* Total Operators
* Active Operators
* Inactive Operators
* Today's Attendance
* Today's Sales
* Water Sold
* Cards Sold
* Pending Requisitions
* Pending Complaints
* Booth Performance Graph
* Sales Trend Graph
* Attendance Graph

---

## Manager Dashboard

Display only data under their management.

---

## Supervisor Dashboard

Display only assigned booths.

---

## Operator Dashboard

Display:

* Attendance Status
* Today's Tasks
* Sales Submission
* Requisition Status
* Complaints
* Assigned Booth Information

---

# 4.3 Employee Management

## Admin/Manager can:

* Add Operator
* Edit Operator
* Block Operator
* Delete Operator
* View Details
* Search by

  * Name
  * Employee ID
  * Phone
  * NID

---

## Operator Information

Personal Information

* Employee ID (Auto)
* Full Name (According to NID)
* NID Number
* Photograph
* Contact Number
* Email
* DOB
* Gender
* Blood Group

Employment

* Joining Date
* Status
* Assigned Booth
* Assigned Supervisor

Address

* Present Address
* Permanent Address

Academic

Multiple Certificates

Example

* SSC
* HSC
* Diploma
* Bachelor

Each certificate contains

* Degree
* Institute
* Year
* File Upload

Reference

Multiple references

* Name
* Contact
* Relationship

Documents

* NID Scan
* Certificates
* Photograph

---

# 4.4 Supervisor Management

Admin/Manager can

* Add Supervisor
* Edit
* Delete
* Search
* Assign Manager
* Assign Booths

Supervisor Details

Same fields as Operator.

---

# 4.5 Booth Management

Admin/Manager can

* Add Booth
* Edit Booth
* Delete Booth
* Assign Supervisor
* Assign Operator(s)
* Assign Phone
* View Details

---

Booth Information

* Booth ID
* Booth Name
* Booth Code
* Address
* Latitude
* Longitude
* Google Map Link
* Installation Date
* Operating Hours

Examples

12 Hours

or

16 Hours

Supervisor

Assigned Operator(s)

Status

* Active
* Inactive
* Maintenance

---

# 4.6 Phone Management

Admin/Manager can add mobile phones.

Fields

* Phone ID
* Brand
* Model
* IMEI Number
* Purchase Date
* Condition

Values

* New
* Used

Purchased By

Warranty

Assigned Booth

Status

---

# 4.7 Asset Management

Every booth contains assets.

Assets include

Furniture

* Chair
* Table
* Bench

Electronics

* Fan
* Light
* Motor

Cleaning Tools

* Bucket
* Mop
* Floor Cleaner
* Doormat

Electronics

* CCTV
* Smartphone

Stationery

* Pen
* Calculator
* Stapler
* Record Book

Each asset contains

* Asset ID
* Asset Name
* Category
* Quantity
* Purchase Date
* Condition
* Status
* Remarks

---

# 4.8 Attendance Module

Operator attendance is GPS based.

Workflow

Operator Login

↓

Click Attendance

↓

Allow GPS Permission

↓

System gets GPS

↓

Calculate Distance

↓

If distance ≤ 50 meters

Attendance Success

Else

Attendance Rejected

Message

"You are too far from your assigned booth."

Attendance stores

* Check-in
* Check-out
* GPS
* Distance
* Device
* Time

Supervisor/Admin/Manager can view attendance history.

---

# 4.9 Sales Reporting

Operator submits sales once daily.

Fields

* Date
* Booth
* Water Sold (Liter)
* ATM Cards Sold
* Recharge Amount
* Cash Collection
* Remarks

Status

* Draft
* Submitted
* Verified

Supervisor verifies reports.

---

# 4.10 ATM Card Management

Operator can

Sell New Card

Record

* Card Quantity
* Selling Price

Recharge Card

Record

* Recharge Amount
* Recharge Count

Reports available

* Daily
* Weekly
* Monthly

---

# 4.11 Requisition Module

Operator can request assets.

Example

Need

* Mop
* Pen
* Cleaner
* Fan
* Chair

Fields

* Request ID
* Booth
* Item
* Quantity
* Reason
* Priority

Priority

* Low
* Medium
* High

Status

* Pending
* Approved
* Rejected
* Delivered

Admin/Manager can approve.

---

# 4.12 Complaint & Issue Module

Operator submits issues.

Examples

* Water Machine Fault
* Phone Problem
* CCTV Problem
* Internet Problem
* Electricity
* Customer Complaint

Fields

* Title
* Description
* Attachment
* Priority
* Status

Supervisor/Admin can respond.

---

# 4.13 Booth Cleaning Checklist

Operator submits daily checklist.

Tasks

* Floor Cleaned
* Water Filter Cleaned
* Machine Cleaned
* Booth Cleaned

Time

Photo Upload (Optional)

Remarks

---

# 4.14 Booth Details Page

Dedicated page.

Contains

Basic Information

Google Map

Assigned Supervisor

Assigned Operators

Phone Information

Assets

Attendance Summary

Sales Summary

Complaints

Requisitions

Activity Timeline

---

# 4.15 Operator Details Page

Dedicated profile page.

Contains

Complete Personal Information

Employment

Attendance

Sales History

Complaints

Requisitions

Documents

Academic Certificates

References

Activity Log

---

# 4.16 Search

Search by

Operator

* ID
* Name
* Phone
* NID

Booth

* Name
* Code

Supervisor

* Name
* Phone

Phone

* IMEI

Asset

* Asset ID

---

# 4.17 Notifications

System notifications

Examples

Attendance Submitted

Attendance Missed

Sales Pending

New Requisition

Complaint Response

Password Changed

---

# 4.18 Reports

Admin can generate

Attendance Report

Sales Report

Booth Performance

Operator Performance

Asset Report

Complaint Report

Requisition Report

Date-wise Report

Supervisor-wise Report

Manager-wise Report

Export

* PDF
* Excel
* CSV

---

# 4.19 Audit Log

Every important action should be logged.

Examples

Login

Logout

Attendance

Profile Update

Sales Submission

Approval

Deletion

Password Reset

---

# 5. Role Permissions Matrix

| Feature                | Admin | Manager |   Supervisor  |   Operator  |
| ---------------------- | :---: | :-----: | :-----------: | :---------: |
| Dashboard              |   ✔   |    ✔    |       ✔       |      ✔      |
| Add Manager            |   ✔   |    ✖    |       ✖       |      ✖      |
| Add Supervisor         |   ✔   |    ✔    |       ✖       |      ✖      |
| Add Booth              |   ✔   |    ✔    |       ✖       |      ✖      |
| Assign Booth           |   ✔   |    ✔    |       ✖       |      ✖      |
| Add Operator           |   ✔   |    ✔    |       ✖       |      ✖      |
| Edit Assigned Operator |   ✔   |    ✔    |       ✔       | Own Profile |
| Attendance View        |   ✔   |    ✔    |    Assigned   |     Own     |
| Attendance Submit      |   ✖   |    ✖    |       ✖       |      ✔      |
| Sales Submit           |   ✖   |    ✖    |       ✖       |      ✔      |
| Verify Sales           |   ✔   |    ✔    |       ✔       |      ✖      |
| Requisition Approval   |   ✔   |    ✔    |       ✔       |      ✖      |
| Requisition Submit     |   ✖   |    ✖    |       ✖       |      ✔      |
| Complaint View         |   ✔   |    ✔    |       ✔       |     Own     |
| Complaint Submit       |   ✖   |    ✖    |       ✖       |      ✔      |
| Asset Management       |   ✔   |    ✔    | View Assigned |      ✖      |
| Reports                |   ✔   |    ✔    |    Assigned   |     Own     |

---

# 6. Non-Functional Requirements

## Security

* HTTPS Only
* Password Hashing
* JWT/Session Authentication
* Role-based Authorization
* Audit Logs
* Input Validation
* SQL Injection Protection
* XSS Protection

---

## Performance

* Dashboard load < 3 seconds
* Search < 1 second
* Support 500+ concurrent users
* API response < 500 ms (average)

---

## Availability

* 99.9% uptime
* Daily automated backups
* Disaster recovery support

---

## Compatibility

* Chrome
* Edge
* Firefox
* Safari
* Android
* iOS

---

## Scalability

The architecture should support future modules such as:

* Payroll
* Salary Management
* Leave Management
* Inventory Management
* Machine Maintenance
* Expense Tracking
* Customer Feedback
* SMS/Email Notifications
* Biometric Attendance
* Multi-company support

---

# 7. Suggested Database Entities

Core entities include:

* Users
* Roles
* Managers
* Supervisors
* Booths
* Operators
* Phones
* Assets
* Asset Categories
* Attendance
* Sales Reports
* ATM Card Sales
* Card Recharges
* Requisitions
* Complaints
* Academic Certificates
* References
* Documents
* Activity Logs
* Notifications

---

# 8. Future Enhancements

* QR-based attendance in addition to GPS verification
* Offline mode with automatic synchronization when connectivity is restored
* Push notifications via mobile app
* AI-powered anomaly detection for unusual sales or attendance patterns
* Predictive asset maintenance reminders
* Route optimization for supervisor booth visits
* Photo verification for attendance and cleaning tasks
* Integrated inventory and procurement management
* Payroll integration based on attendance and performance
* BI dashboard with advanced analytics and forecasting
