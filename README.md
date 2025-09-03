# Restaurante

This is an example project to get the hang of Nx for sharing code across monorepos.

The application presented here aims to be a rough restaurante management platform whereby an entire restaurant could be run through it.

## Apps
### Back Office
A place to manage users of the other apps, sort out staff members, place supplier orders for food/drink

### Front of house
An app for the restaurant staff to use for seating customers, taking orders, etc

### Reservations
A public website for booking tables for a time in the future

### Kitchen
The app to run the kitchen from receiving food orders to dispatching them

### Backend
A headless backend to store the data required for the other apps

## Libraries
### `shared`
Unimaginatively titled place for code that is used by multiple apps

### `ui-components`
Simple components that are shown on the screen.  Contain no business logic

### `api`
All public definitions of data in the api, including functions for accessing the api from the other apps
