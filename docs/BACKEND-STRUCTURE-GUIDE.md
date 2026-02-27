# 🏗️ Backend Architecture Guide: DTOs, Entities, and Models

This guide explains how to manage data structures in the **SkySentinel** backend, focusing on the distinction between Data Transfer Objects (DTOs), Entities, and Prisma Models.

---

## 1. DTOs (Data Transfer Objects)

**Location:** `apps/backend/src/modules/<module-name>/dto/`

- **Purpose:** Define the **Input** schema. They specify what data should be sent to the API in `POST`, `PATCH`, or `GET` (query) requests.
- **Key Features:**
  - **Validation:** Use `class-validator` to enforce rules (e.g., `@IsString()`, `@IsEnum()`, `@Min(0)`).
  - **Transformation:** Use `class-transformer` to ensure incoming data is correctly typed (e.g., converting a string ID from a URL to a number).
  - **Versioning:** Decouples the public API from internal database changes.
- **Naming Convention:** `Create[Name]Dto`, `Update[Name]Dto`, `Filter[Name]Dto`.

## 2. Entities

**Location:** `apps/backend/src/modules/<module-name>/entities/`

- **Purpose:** Define the **Output** schema. They represent the domain object as it should be returned to the client (Frontend).
- **Key Features:**
  - **Abstraction:** Decouples API responses from the database schema.
  - **Filtering:** Use them to hide sensitive internal fields (e.g., hashing salts, internal metadata).
  - **Documentation:** Usually decorated with `@ApiProperty()` for Swagger documentation.
- **Relationship to Prisma:** Services query Prisma models, then the Controller (or Service) maps them to an Entity before returning to the client.

## 3. Prisma Models (Generated)

**Location:** `apps/backend/src/database/generated/prisma`

- **Purpose:** Direct mappings to PostgreSQL tables.
- **Usage:** Used strictly inside **Services**. The service performs a query, receives a Prisma Model, and handles any necessary business logic.

---

## 📊 Summary Table

| Layer      | Folder                      | Responsibility                               |
| :--------- | :-------------------------- | :------------------------------------------- |
| **DTO**    | `modules/*/dto/`            | **Incoming** data shape & validation rules.  |
| **Entity** | `modules/*/entities/`       | **Outgoing** data shape & API documentation. |
| **Model**  | `database/generated/prisma` | **Database** interaction (ORM) types.        |

---

## 🛠️ Recommended Workflow

### Step 1: Define the Entity

Update the entity to mirror what the frontend expects:

```typescript
// src/modules/failures/entities/failure.entity.ts
import { FailureType, Severity } from "src/database/generated/prisma/enums";

export class Failure {
  id: number;
  timestamp: Date;
  type: FailureType;
  severity: Severity;
  description: string;
  isResolved: boolean;
}
```

### Step 2: Define the DTO

Update the DTO for incoming data:

```typescript
// src/modules/failures/dto/create-failure.dto.ts
import { FailureType, Severity } from "src/database/generated/prisma/enums";

export class CreateFailureDto {
  type: FailureType;
  severity: Severity;
  description: string;
}
```

### Step 3: Update Controller and Service

The controller receives the DTO, and the service returns the Entity:

```typescript
// failures.controller.ts
@Post()
create(@Body() createFailureDto: CreateFailureDto): Promise<Failure> {
  return this.failuresService.create(createFailureDto);
}

// failures.service.ts
async create(data: CreateFailureDto): Promise<FailureLog> {
  return this.prismaService.failureLog.create({ data });
}
```

---

## 🚀 Key Rules to Remember

1. **Never return Prisma Models directly** in large-scale projects; always map to an Entity for long-term stability.
2. **Always use DTOs** for any data entering the system via HTTP.
3. **Validation logic** belongs in DTOs, while **Business logic** belongs in Services.
