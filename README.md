# KanMaster

KanMaster is a a project management system proudly developed based on Kanban methodology. It's a simple and easy to use tool that helps you to manage your projects and tasks in a visual way.

## Technologies 💻

-   [Next.js](https://nextjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [TRPC](https://trpc.io/)
-   [Drizzle ORM](https://orm.drizzle.team/)
-   [Kinde Auth](https://kinde.com/)
-   [Vercel](https://vercel.com/)
-   [Playwright](https://playwright.dev/)
-   [Docker](https://www.docker.com/)
- [Recharts](https://recharts.org/)

## Getting Started 🏗️

You can run the project locally by following these steps:

1. Clone the repository:

```bash
git clone https://github.com/KoniczynSzef/kanban-master.git
```

2. Install the dependencies using `bun`:

```bash
bun install
```

3. Create a PostgreSQL database using `Docker` and run the migrations:

```bash
bun run db:migrate
```

4. Apply `drizzle` migrations to database by running:

```bash
bun run db:push
```

5. Start the development server:

```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Planned Features 📝

-   [x] Add Docker 🐋 support
-   [x] Add user authentication
-   [ ] Add relations in the database

## Contributing 🤝

If you want to contribute to the project, you can follow these steps:

1. Fork the repository.

2. Create a new branch with the name of the feature you want to implement:

```bash
git branch -c feature/your-feature-name # Replace `your-feature-name` with the name of your feature
```

I assume at this point you have already cloned the repository and installed the dependencies.

3. Make your changes and commit them:

```bash
git add .
git commit -m "Your commit message"
```

4. Push your changes to your fork:

```bash
git push origin feature/your-feature-name
```

5. Create a pull request to the `main` branch of the original repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
