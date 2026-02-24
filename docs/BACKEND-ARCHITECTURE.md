## 📂 Folder Structure

The project is organized by **feature (domain)** rather than file type. This ensures that all logic related to a specific business requirement is encapsulated in one place.

```plaintext
src/
├── common/                 # 1. Shared resources (App-wide)
│   ├── decorators/         # Custom decorators (e.g., @CurrentUser())
│   ├── filters/            # Global exception filters (e.g., PrismaClientExceptionFilter)
│   ├── guards/             # Auth/Role guards (e.g., JwtAuthGuard, RolesGuard)
│   ├── interceptors/       # Response formatting, logging (e.g., TransformInterceptor)
│   └── pipes/              # Custom validation pipes
│
├── config/                 # 2. Configuration & Env validation
│   ├── env.validation.ts   # Joi or class-validator schemas for .env
│   └── app.config.ts       # Typed config loader
│
├── database/               # 3. Database connection & setup
│   ├── prisma/             # Schema, migrations, and seeds
│   └── database.module.ts  # Global DB module
│
├── modules/                # 4. Feature Modules (The core of your app)
│   ├── auth/               # Authentication domain
│   │   ├── strategies/     # Passport strategies (JWT, Local, OAuth)
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   │
│   └── users/              # User management domain
│       ├── dto/            # Data Transfer Objects (create-user.dto.ts)
│       ├── entities/       # Business models / DB schemas (user.entity.ts)
│       ├── users.controller.ts
│       ├── users.service.ts
│       └── users.module.ts
│
├── app.module.ts           # 5. Root Module (Wires everything together)
└── main.ts                 # 6. Entry point (Bootstrap & Global setup)
```

---

## 🧠 Architecture Philosophy

### 1. The `common/` Folder (Global Utilities)
This is your "toolbox." It contains logic that is used across multiple features. 
*   **Rule:** Nothing in `common/` should depend on anything in `modules/`.
*   **Example:** A `RolesGuard` lives here because it is a generic utility used by the Users module, the Posts module, and the Billing module alike.

### 2. The `modules/` Folder (Feature-First)
Unlike traditional MVC patterns where you have massive `controllers/` or `services/` folders at the root, we encapsulate everything by domain.
*   **Why?** This makes the code highly modular. If you ever need to extract a feature (like "Users") into a separate microservice, you can simply copy the `users/` folder. It contains everything it needs to function.

### 3. Inside a Feature Module
Every module follows a strict separation of concerns:

*   **`controller.ts` (The Traffic Cop):** Handles incoming HTTP requests, parses headers/body, and returns responses. It contains **no business logic**.
*   **`service.ts` (The Brain):** Contains all business logic. It handles database interactions, password hashing, and complex validation rules.
*   **`dto/` (Data Transfer Objects):** Defines the shape of data coming into the API. We use `class-validator` decorators (e.g., `@IsEmail()`) here to ensure data integrity before it even hits the service.
*   **`entities/`:** Defines the internal representation of data (the database schema/model).

## 📏 Naming Conventions

To maintain consistency across the team, follow these naming standards:

| Type          | Convention                    | Example                       |
| :------------ | :---------------------------- | :---------------------------- |
| **Domain Folder** | Singular                      | `user/`, `account/`, `payee/` |
| **Reusable Code** | Plural                        | `pipes/`, `utils/`, `guards/` |
| **Service**       | `[name].service.ts`           | `user.service.ts`             |
| **Module**        | `[name].module.ts`            | `auth.module.ts`              |
| **DTO**           | `[action]-[entity].dto.ts`    | `create-user.dto.ts`          |
| **Client**        | `[provider]-[entity].client.ts` | `stripe-payment.client.ts`    |
| **Guard/Pipe**    | `[name].guard.ts / .pipe.ts`  | `jwt.guard.ts`                |

---

## 🧪 Testing Rules

Testing is integrated into the development workflow rather than being an afterthought.

| Type          | Location                      | Example                  |
| :------------ | :---------------------------- | :----------------------- |
| **Unit Test** | Beside implementation file    | `user.service.spec.ts`   |
| **E2E Test**  | In `test/` or `e2e/` folder   | `user.e2e-spec.ts`       |

*   **Unit Tests:** Focus on isolated business logic within services.
*   **E2E Tests:** Focus on the full request-response cycle, ensuring controllers, services, and the database work together.
