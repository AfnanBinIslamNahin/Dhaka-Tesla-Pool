# Dhaka Tesla Pool

Share a seat. Split the fare. Survive Dhaka traffic.

## Overview

Dhaka Tesla Pool is a ride-pooling MVP where passengers travelling
on compatible routes can share a vehicle and receive individual fares.

Drivers manage their availability, assigned passengers, and trip lifecycle.
The system enforces seat capacity and records ride history.

"Tesla" is a fictional nickname for the vehicle and is not affiliated
with Tesla, Inc.

## Current Progress

- Repository and feature branch created.
- Initial MVP scope and business rules documented.
- Application implementation has not started.

## Planned MVP Features

- Passenger signup and login.
- Driver login and online/offline availability.
- Vehicle registration with fixed seat capacity.
- Ride requests with pickup, destination, and seat count.
- Individual fare estimates.
- Compatible ride pooling.
- Driver acceptance, arrival, trip start, and completion.
- Passenger cancellation before the trip starts.
- Passenger and driver ride history.
- Capacity enforcement under concurrent booking attempts.

## Demo Cast

| Name | Role |
| --- | --- |
| Jashim | Driver |
| Bullet | Jashim's vehicle with 3 passenger seats |
| Nusrat | Passenger |
| Rafiq | Passenger |
| Shirin | Passenger |

## Initial Business Rules

These are initial MVP assumptions and may be revised during design.

### Matching

- Use predefined Dhaka areas instead of a real routing service.
- Requests must share a pickup zone and a compatible route group.
- Banani to Mohakhali and Banani to Gulshan 1 belong to one demo group.
- Additional route groups will be documented explicitly.
- New passengers can join only before the driver marks arrival.
- Requested seats must fit within the vehicle's remaining capacity.

### Fare

- Store money as integer poisha.
- Use predefined demo route distances.
- Solo fare per seat = base fare + distance charge.
- Pooled fare per seat = solo fare minus a fixed pool discount.
- Request fare = fare per seat multiplied by requested seats.
- Apply the discount when at least two active requests share a pool.
- Recalculate estimates after membership changes before departure.
- Lock final fares when the trip starts.
- Payment is cash; no real payment gateway is required.

Exact rates and demo distances will be documented with the fare feature.

### Cancellation

- A passenger may cancel their own request before the trip starts.
- Cancellation releases any reserved seats.
- Cancellation and trip start must be coordinated transactionally.
- Started and completed requests cannot be cancelled by passengers.

### Capacity and Access

- Bullet can carry at most 3 passenger seats.
- Capacity checks and seat allocation must happen atomically.
- Passengers can access only their own ride details and fares.
- Drivers can manage only their assigned trips.

## Planned Trip Lifecycle

REQUESTED → ACCEPTED → DRIVER_ARRIVED → STARTED → COMPLETED

Cancellation is allowed before STARTED according to the rules above.
Request statuses and pool statuses will be detailed in the design.

## Git Workflow

feature/* → master → pre-release → release/v1.0.0

Each feature will contain meaningful incremental commits.
Completed features will be reviewed through pull requests into master.

## AI Usage

ChatGPT has been used to explain the challenge and draft the initial plan.

Accepted suggestion:
Use separate feature branches and incremental commits to make progress
traceable, as required by the challenge.

Changed suggestion:
The earlier guidance moved to pull-request creation before any file
changes existed. The workflow was corrected to edit, verify, commit,
and push changes before opening a pull request.
