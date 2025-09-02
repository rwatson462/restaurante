# Restaurante - Restaurant Management System

## Project Overview
A comprehensive restaurant management system built with Nx and NextJS, consisting of multiple interconnected applications and services.

## Applications

### 1. Front of House
**Purpose:** Customer-facing operations
- Seating customers
- Taking orders
- Order tracking
- Payment processing

### 2. Back Office
**Purpose:** Administrative and management operations
- Ordering from suppliers
- Managing staff schedules
- Inventory management
- Financial reporting

### 3. Kitchen
**Purpose:** Kitchen operations management
- Receiving orders
- Order queue management
- Preparation tracking
- Ready for collection status

### 4. Reservations
**Purpose:** Table booking system
- Making reservations
- Managing cancellations
- Table availability
- Waitlist management

## Technical Stack
- **Monorepo Tool:** Nx
- **Frontend Framework:** NextJS
- **Shared Libraries:** Reusable components and utilities using Nx workspace features

## Architecture Notes
- Leveraging Nx's powerful monorepo capabilities for code sharing
- Shared component libraries across all applications
- Common utilities and services
- Consistent design system across all apps

## Development Ports
- **Front of House:** http://localhost:3001
- **Back Office:** http://localhost:3002
- **Kitchen:** http://localhost:3003
- **Reservations:** http://localhost:3004

## Available Scripts
- `npm run dev:all` - Run all applications simultaneously
- `npm run dev:front` - Run front-of-house app only
- `npm run dev:back` - Run back-office app only
- `npm run dev:kitchen` - Run kitchen app only
- `npm run dev:reservations` - Run reservations app only