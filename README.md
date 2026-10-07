# Royal Spice — Restaurant Order Management System

An enterprise-grade, relational database-backed (RDBMS) Restaurant Order Management System built as a college mini project. Features 3NF normalization, multi-role staff access, POS order dispatching, a Live Kitchen Display System (KDS), GST tax invoicing, inventory buffer alerts, and an interactive RDBMS SQL Studio.

---

## 🌟 Key Features

### 1. Animated Culinary Landing Page
- **Fine Dining Theme**: Warm obsidian, gold crest branding, ambient mood lighting, and micro-animations.
- **Dual Login Portals**:
  - 👨‍💼 **Staff Portal** (Manager, Cashier, Waiter)
  - 🍔 **Food Management & Kitchen Portal** (Executive Chef, Kitchen Director)
- **Public RDBMS Schema Preview**: Evaluators can inspect the database schema directly from the landing page.

### 2. Staff Operations Portal
- **Dashboard Overview**: 7 real-time telemetry cards (Total Orders, Pending Orders, Preparing Orders, Completed Orders, Today's Sales, Pending Payments, Low Stock Items) and recent order tickets.
- **Staff Profile**: View and edit employee attributes (ID, Full Name, DOB, Role, Shift, Salary, Phone, Email, Address, Status).
- **Restaurant Details**: Manage business identity, legal GSTIN, operating schedule (Opening/Closing hours), and live status (`OPEN`, `RUSH_HOUR`, `CLOSED`).
- **Customer Management (CRM)**: Add, edit, delete, search customers, and view their complete dining order history with lifetime spend.
- **Order Management (POS)**: Complete state machine flow (`Placed` → `Confirmed` → `Preparing` → `Ready` → `Completed`, plus `Cancelled`). Includes a POS dish picker with live total and tax calculations.
- **Billing & Payment Reconciliation**: Itemized GST breakdown (2.5% CGST + 2.5% SGST), discounts, payment methods (UPI, Card, Cash), settlement status tracking, and printable tax invoices.
- **Inventory & Stock Management**: Live ingredient meters, minimum buffer thresholds, wholesale suppliers, low-stock warning banners, and restock actions.
- **Staff Roster Management**: Directory of personnel categorized by roles (Manager, Cashier, Waiter, Chef, Kitchen Staff, Delivery Staff) and shifts.
- **Executive Reports & Analytics**: Daily/Weekly/Monthly revenue, sales velocity charts, most/least ordered dishes, top customers, and payment method distribution.
- **Notification Center**: Event feeds for new orders, depleted inventory, pending payments, and kitchen alerts.
- **Settings & Demo Reset**: Profile preferences, password changes, restaurant operational mode, and a one-click factory reset button for college presentations.

### 3. Food Management & Kitchen Portal
- **Food Menu Master**: Catalog dishes with Food ID, Category, Description, Price, Veg/Non-Veg indicators, Preparation Time, and images. Full CRUD support.
- **Food Categories**: Manage menu sections (Starters, Main Course, Rice & Biryani, Snacks, Desserts, Beverages).
- **Kitchen Availability Toggle Board**: 1-click status toggles (`Available`, `Low Stock`, `Out of Stock`) to immediately update POS orderability.
- **Live Kitchen Display System (KDS)**: Station line tickets with dish checklists, table numbers, cooking timers, and status progression (`Start Cooking` → `Mark Ready`).
- **Food Analytics**: Most/least ordered dishes, best-selling category rankings, and menu revenue summaries.

### 4. RDBMS Architecture & College Mini Project Studio
- **10 Normalized Entities (3NF)**:
  1. `RESTAURANT`
  2. `STAFF`
  3. `CUSTOMER`
  4. `CATEGORY`
  5. `FOOD`
  6. `ORDERS`
  7. `ORDER_ITEM` (Bridge table resolving M:N relationship)
  8. `PAYMENT`
  9. `SUPPLIER`
  10. `INVENTORY`
- **Data Dictionary**: Comprehensive column types, Primary Keys, Foreign Keys, and CHECK constraints.
- **Interactive SQL Runner**: Run predefined queries directly against the active dataset:
  - Multi-table `JOIN`
  - `GROUP BY` and Aggregate functions (`SUM`, `COUNT`)
  - `HAVING` clause filters
  - Correlated Subqueries
- **Exportable DDL Script**: Copyable SQL script compatible with Oracle, PostgreSQL, and MySQL.

---

## 🔑 Demo Login Credentials

| Portal | User ID / Username | Password | Role |
| :--- | :--- | :--- | :--- |
| **Staff Portal** | `STF-101` | `admin` | Manager (Vikram Sharma) |
| **Staff Portal** | `STF-102` | `admin` | Cashier (Ananya Rao) |
| **Staff Portal** | `STF-104` | `admin` | Waiter (Sneha Kulkarni) |
| **Food Management** | `CHEF-001` | `admin` | Food Director (Chef Rajesh Patel) |

*(Quick-fill demo buttons are provided on both login pages for easy one-click testing.)*

---

## 🚀 Running the Project Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://127.0.0.1:5173/`.

3. **Build for Production**:
   ```bash
   npm run build
   ```
