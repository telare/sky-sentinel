This is the updated and expanded Prisma Guide. I have integrated the information about **Relations**, **Indexes**, and the **"When to use what"** logic for CLI commands to make it a complete reference for your project.

---

# Prisma ORM: Concepts and Commands

Prisma is a modern Object-Relational Mapper (ORM) that makes database access easy and type-safe. Unlike traditional ORMs, it uses a declarative schema to define your data model and generates a custom client for your specific database structure.

### **1. The Core Workflow**

The Prisma workflow follows a circular process:

1.  **Define Schema:** Update `schema.prisma`.
2.  **Migrate:** Push changes to the database and save the history.
3.  **Generate:** Update the Prisma Client (the TypeScript code you use in NestJS).
4.  **Query:** Use the Client in your services to read/write data.

---

### **2. Common Concepts Explained**

#### **The Schema (schema.prisma)**
The "source of truth." It contains:
*   **DataSource:** Database connection details (PostgreSQL, etc.).
*   **Generators:** Tells Prisma where to put the generated code (e.g., `output = "../generated/prisma"`).
*   **Models & Enums:** Defines your tables, relationships, and fixed types (like `Severity`).

#### **Migration (prisma migrate)**
The process of mapping schema changes to actual database tables.
*   Generates a **SQL file** describing the change.
*   Keeps a history of changes in the `_prisma_migrations` table.
*   **Analogy:** If your database is a building, a migration is the blueprint for a renovation.

#### **Generation (prisma generate)**
Reads your schema and creates a type-safe library (Prisma Client).
*   Provides **Autocomplete** in your IDE.
*   If you add a field but don't run `generate`, VS Code will show an error when you try to use that field.

---

### **3. Common CLI Commands**

| Command | Description | **When to use it (Real-World)** |
| :--- | :--- | :--- |
| `npx prisma init` | Initializes Prisma. | At the very start of a project. |
| `npx prisma migrate dev` | Creates SQL migration + Updates DB + Generates Client. | **Daily Dev:** After you add/change a field or model in the schema. |
| `npx prisma generate` | Regenerates only the TypeScript Client. | After a `git pull` or if VS Code doesn't "see" your new fields. |
| `npx prisma studio` | Opens a GUI in your browser. | When you want to see/edit your data without writing code. |
| `npx prisma db push` | Syncs schema to DB **without** a migration file. | **Prototyping:** When you are testing ideas and don't care about history. |
| `npx prisma db pull` | Reads existing DB and writes a schema. | When connecting Prisma to a pre-existing database. |

---

### **4. Schema Attributes & Constraints**

Attributes modify how fields behave in the database.

| Attribute | Effect | Example |
| :--- | :--- | :--- |
| `@id` | Primary Key. | `id Int @id @default(autoincrement())` |
| `@default()` | Sets default value. | `isResolved Boolean @default(false)` |
| `@unique` | Prevents duplicates. | `email String @unique` |
| `?` | Makes field optional. | `description String?` |
| `@@index` | Speeds up searches. | `@@index([timestamp])` |

---

### **5. Relations (Connecting Models)**

#### **One-to-Many (1:n)**
*Example: One UAVdata packet can have many FailureLogs.*
```prisma
model FailureLog {
  id        Int      @id @default(autoincrement())
  uavData   UAVdata? @relation(fields: [uavDataId], references: [id]) // Optional relation
  uavDataId Int?     // Foreign Key
}

model UAVdata {
  id   Int          @id @default(autoincrement())
  logs FailureLog[] // The "many" side
}
```

#### **One-to-One (1:1)**
*Example: One UAV has one specific HardwareConfig. Requires `@unique` on the foreign key.*
```prisma
model UAV {
  id     Int             @id
  config HardwareConfig?
}

model HardwareConfig {
  id    Int @id
  uav   UAV @relation(fields: [uavId], references: [id])
  uavId Int @unique // Essential for 1:1
}
```

#### **Many-to-Many (n:m)**
*Example: Many Pilots can fly many different UAVs.*
```prisma
model Pilot {
  id   Int   @id
  uavs UAV[] 
}

model UAV {
  id     Int     @id
  pilots Pilot[]
}
```

---

### **6. CRUD Cheat-sheet (Code Examples)**

#### **Create**
```typescript
const log = await prisma.failureLog.create({
  data: {
    type: 'HARDWARE',
    severity: 'CRITICAL',
    uavDataId: 5 // Connecting by ID
  },
});
```

#### **Read (With Relations)**
Use `include` to fetch related data (Eager Loading).
```typescript
const logWithData = await prisma.failureLog.findUnique({
  where: { id: 1 },
  include: { uavData: true }, // Joins the UAVdata table
});
```

#### **Update**
```typescript
await prisma.failureLog.update({
  where: { id: 101 },
  data: { isResolved: true },
});
```

#### **Filtering Relations**
Find all UAVdata packets that have at least one "CRITICAL" log:
```typescript
const dangerousFlights = await prisma.uAVdata.findMany({
  where: {
    logs: {
      some: { severity: 'CRITICAL' }
    }
  }
});
```

---

### **7. Best Practices**

*   **Always use DTOs:** Never return your Prisma model directly to the user; use Data Transfer Objects to filter sensitive data.
*   **Commit Migrations:** Always commit the `prisma/migrations` folder to Git. It is the only way to keep your database in sync across the team.
*   **Enums for Safety:** Use `enum` (like `FailureType`) instead of strings to prevent typos in your database.
*   **Path Aliases:** If using a custom `output` path, add a mapping in `tsconfig.json` (e.g., `@generated/*`) for cleaner imports.