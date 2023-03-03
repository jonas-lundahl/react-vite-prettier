# React with Vite and Prettier (and ESLint)

## Getting Started

1. Run `npm install`.
2. Run `npm run dev` and visit http://127.0.0.1:5173/ to verify that the application has launched successfully.

## Before Coding

Please set the following settings in your IntelliJ -> `Ctrl+Shift+S` (on Windows).

### Line Separators

To avoid false positives in commit diffs when formatting files, a consistent line endings are used.

Found in `Editor > Code Style`.

Set up consistent line endings by setting Line separator to "Unix and macOS (\n)".

![code-style-config](https://user-images.githubusercontent.com/90792675/222815394-6e874ab5-0789-4e9d-8c93-fc3d737f834e.png)

### Prettier

Prettier is an open-source code formatter that automatically formats code according to a set of predefined rules.
Prettier aims to make code formatting more consistent and readable,
which can improve code quality and reduce the time spent formatting code manually.

Found in `Languages & Frameworks > JavaScript > Prettier`.

Set up Prettier by:

1. Verifying that a Prettier package is specified, such as `~\IdeaProjects\react-vite-prettier\node_modules\prettier`.
2. Verifying that it is run for files `{**/*,*}.{js,ts,jsx,tsx,css,less,scss,vue,json}`.
3. The "On 'Reformat Code'" action checkbox is enabled.
4. The "On Save" checkbox is enabled.

![prettier-config](https://user-images.githubusercontent.com/90792675/222812153-801e0500-5f0e-4b85-b780-d403d1cd3f7c.png)

### ESLint

ESLint is a popular open-source JavaScript linter that helps developers find and fix problems in their code.
Linting is the process of analyzing code for potential errors, style issues,
and other problems that may make the code harder to read or maintain.

Found in `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint`.

Set up ESLint by enabling "Automatic ESLint configuration" and "Run eslint --fix on save".

![eslint-config](https://user-images.githubusercontent.com/90792675/222810334-10ef43e8-c38f-44b2-b6c4-923c899e5a81.png)
