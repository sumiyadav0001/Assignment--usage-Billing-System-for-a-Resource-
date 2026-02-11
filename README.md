# Assignment--usage-Billing-System-for-a-Resource-
I develop a Meeting Room for user. Here only one user can enter at a time and another user wait till whenever the user not stop the session. after that i focuse on the usage of time and billing system like if user enter in the meeting chargs 30rs will applicable for a hour and when user takes extra time then extra charges will be added like 10rs/hr.

# Meeting Room Usage & Billing System

A simple web-based system that manages a shared meeting room with limited capacity and calculates billing based on usage duration.

This project demonstrates:

* Capacity management
* Usage time tracking
* Billing calculation with rounding rules
* In-memory storage using browser `localStorage`
* Clean and simple UI


## Features

* Prevents entry when room capacity is full
* Records user entry time
* Records exit time and calculates total duration
* Rounds partial hours up to the next full hour
* Applies pricing rules:

* First hour: ₹30
* Every additional hour: ₹10
* Displays total bill on exit

---

## Project Structure

```
 Meeting-Room-System
 ├── index.html
 ├── script.js
 ├── style.css
 └── README.md
```

### index.html

* Provides the user interface
* Contains buttons for:

  * Enter Room
  * Exit Room

### script.js

* Contains core logic:

  * Capacity check
  * Entry handling
  * Exit handling
  * Time calculation
  * Billing logic
* Uses `localStorage` to simulate backend storage

### style.css

* Basic UI styling
* Clean layout and button formatting


## System Logic

#1 Room Initialization

When the app loads, it checks if room data exists in `localStorage`.

If not, it creates:

```json
{
  "maxUsers": 2,
  "currentUsers": 0,
  "users": []
}
```


#2 Enter Room Flow

1. User clicks **Enter Room**
2. System checks:

   * If `currentUsers < maxUsers`
3. If space is available:

   * Entry time is recorded
   * User is added to active users
   * currentUsers is incremented
4. If full:

   * Entry is denied

---

#3. Exit Room Flow

1. User clicks **Exit Room**
2. System finds the active user
3. Exit time is recorded
4. Duration is calculated:

```
hours = Math.ceil((exitTime - entryTime) / (1000 * 60 * 60))
```

5. Billing is calculated:

* ≤ 1 hour → ₹30
* > 1 hour → ₹30 + (hours - 1) × ₹10

6. Slot is freed
7. Total cost is displayed

---

## Billing Example

If a user:

* Enters at 10:00 AM
* Exits at 11:20 AM

Duration = 1 hour 20 minutes
Rounded to = 2 hours

Bill:

* First hour = ₹30
* Additional hour = ₹10
* **Total = ₹40**

---

##  How to Run

This project does not require any installation.

### Option 1: Directly Open in Browser

1. Download or clone the repository
2. Open `index.html` in your browser

### Option 2: Using VS Code Live Server

1. Install Live Server extension
2. Right-click `index.html`
3. Click Open with Live Server

---

## Data Storage

* Uses browser `localStorage`
* Data persists until browser storage is cleared
* Simulates backend behavior without a database

---

## Assumptions

* Maximum room capacity is fixed at 2 users
* Only one room exists
* Pricing is fixed:

  * First hour ₹30
  * Additional hour ₹10
* Time is based on system clock
* No authentication is implemented


## Screenshot 
<img width="1365" height="713" alt="image" src="https://github.com/user-attachments/assets/9f3a6839-7b5a-47b6-a22a-bdb22f5fa5e7" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/b6d816ae-833c-47ea-997e-321ddaf4013f" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/767d0ca0-2d9a-4800-b8d2-bb93398068f3" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e3c80017-4827-43ec-93c2-92c367ff3785" />




## Author

SUMIT YADAV
Assignment: Usage & Billing System for a Resource
Year: 2026

