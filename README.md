# AmericaBound

## Overview

**AmericaBound** is a lightweight, filterable university discovery platform designed to help international students find affordable and accessible U.S. universities.

🌐 Live Site: https://americabound.org

The project was built from a personal challenge: as an international student, finding universities in the United States that matched budget constraints, admission timelines, and academic compatibility was extremely difficult due to fragmented and inconsistent information across institutions.

AmericaBound solves this by centralizing key decision-making data into a simple, fast, and mobile-friendly interface.

---

## The Problem

For many international students:

* Tuition information is scattered or difficult to verify
* Admission systems differ significantly from home-country academic calendars
* Filtering universities by affordability and acceptance rate is not straightforward
* Existing platforms are often bloated, slow, or not optimized for low-end devices

This creates an overwhelming and inefficient research process when trying to choose where to study.

---

## The Solution

AmericaBound simplifies university discovery by focusing only on the information that matters most for international students:

* Tuition (international pricing)
* Acceptance rate
* State location
* Rolling admissions availability
* CSS (financial aid indicator where available)

Example dataset structure:

```json id="u9k2aa"
{
  "id": 1047,
  "university_name": "SUNY Fredonia",
  "logo": "fredonia",
  "state": "New York",
  "international_price": 21000,
  "CSS": "no",
  "acceptance_rate": 84,
  "rolling_admission": "yes"
}
```

---

## Key Features

### University Discovery

Users can browse a curated list of U.S. universities with simplified decision-making data.

### Smart Filtering

Users can filter universities based on:

* Budget (international tuition)
* Acceptance rate
* State
* Admission type (rolling vs fixed cycles)

### Shortlisting System

Users can save universities they are interested in.

* Stored locally using browser local storage
* Persistent across sessions
* No login required

### Lightweight Design Philosophy

The application was intentionally designed to:

* Work well on low-end devices
* Load quickly even on slow connections
* Avoid unnecessary backend complexity
* Function fully without authentication barriers

---

## Tech Stack

* React
* JavaScript (ES6+)
* Local Storage (for persistence)
* Static JSON-based dataset architecture
* Responsive CSS design

---

## Design Philosophy

This project prioritizes accessibility over complexity.

Many international students face:

* Limited device storage
* Unstable internet access
* High data costs

Originally, AmericaBound was built as a React Native mobile app and published on the Google Play Store. However, platform restrictions and distribution barriers limited accessibility on other ecosystems.

To solve this, the project was pivoted into a **web-first application**, making it universally accessible across devices without installation friction.

---

## Impact

*  Originally released as a mobile app with **200+ downloads**
*  Web platform has reached **4,500+ visits**
*  Used by international students researching study opportunities abroad

While simple in structure, the project demonstrates real-world usability and addresses a genuine educational access problem.

---

## What I Learned

* Designing for constrained environments (low bandwidth, low-end devices)
* Building user-focused filtering systems
* Data modeling for real-world decision making
* Tradeoffs between mobile apps vs web platforms
* Product iteration based on deployment constraints and accessibility

---

## Future Improvements

* Advanced filtering (scholarships, majors, GPA requirements)
* University comparison tool
* Backend CMS for dynamic university updates
* Personalized recommendations for students
* Multi-country expansion beyond the U.S.

---

## Why This Project Matters

AmericaBound is not just a technical project—it is a response to a personal challenge that reflects a wider issue faced by international students globally.

The goal is to reduce friction in accessing educational opportunities and make university research more transparent, structured, and accessible.
