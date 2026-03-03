# 🧠 NestJS Mental Model: From Frontend to Backend

If you're coming from **React**, NestJS might feel "boilerplate-heavy" at first. This guide is designed to shift your mental model from **Component-Props** thinking to **Module-Dependency Injection** thinking.

---

## 🔄 The Fundamental Shift

| Feature | React (Frontend) | NestJS (Backend) |
| :--- | :--- | :--- |
| **Building Block** | Component | **Module** |
| **Logic Container** | Hooks (`useSomething`) | **Service (Provider)** |
| **Entry Point** | URL Route -> Page Component | **Controller** (HTTP) or **Gateway** (WS) |
| **Data Passing** | Props & Context | **Dependency Injection (DI)** |
| **Visibility** | Everything exported is usable | Only **Exported** providers are usable |

---

## 📦 1. Modules: The "Black Box"
In React, if you want to use a component, you just `import` the file. In NestJS, imports happen at the **Module level**, not just the file level.

Think of a **Module** as a "Feature Package".
- **`imports`**: What tools do I need from other packages? (e.g., `DatabaseModule`)
- **`controllers`**: What are the public doors to this feature? (Routes)
- **`providers`**: What are the internal "brains" (Services) that do the work?
- **`exports`**: What "brains" am I willing to share with other modules?

> **Mental Shift:** You don't "import a Service" into another file. You "import the Module" that *provides* that service.

---

## 💉 2. Dependency Injection (DI): Automatic Props
In React, if `ComponentA` needs data from `ComponentB`, you pass props: `<ComponentA data={data} />`.

In NestJS, we use **Constructor Injection**. You simply tell NestJS: *"Hey, I need the `FailuresService` here,"* and NestJS finds it and gives it to you.

**React (Manual):**
```tsx
const Parent = () => {
  const logic = useLogic();
  return <Child logic={logic} />;
}
```

**NestJS (DI):**
```typescript
@Injectable()
export class FailuresController {
  // NestJS automatically "props" this in because of the type hint
  constructor(private readonly failuresService: FailuresService) {}

  @Get()
  findAll() {
    return this.failuresService.findAll();
  }
}
```

---

## 🚦 3. Controllers vs. Services (Separation of Concerns)
In React, we often mix fetching logic and UI in one file. In NestJS, we split them strictly:

1.  **Controller (The Concierge):** 
    - Handles the request (URL, Body, Params).
    - Validates that the "customer" is allowed in.
    - **Calls the Service.**
    - Returns the response.
2.  **Service (The Chef):** 
    - Does the actual work (Database queries, AI calculations).
    - Doesn't care if the request came from HTTP or WebSockets.
    - Returns raw data.

---

## 🏗️ 4. The SkySentinel Example
Looking at your current structure:

```text
modules/
  ├── ai/
  ├── failures/
  └── validator/
```

If the `FailuresService` needs to check if a failure is valid using the `ValidatorService`:

1.  **`ValidatorModule`** must `export` the `ValidatorService`.
2.  **`FailuresModule`** must `import` the `ValidatorModule`.
3.  **`FailuresService`** can then "ask" for `ValidatorService` in its constructor.

---

## 💡 Pro-Tip for React Devs
Think of a **Service** as a **Global Hook** that never unmounts. 
Think of a **Module** as a **Context Provider** that automatically handles its own dependencies.

---

## 🛠️ Common Commands
- `nest generate module <name>`: Create a new feature box.
- `nest generate controller <name>`: Create a new API entry point.
- `nest generate service <name>`: Create a new logic worker.
