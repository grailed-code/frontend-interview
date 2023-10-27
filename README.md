<a name="readme-top"></a>
<br />

<div align="center">
    <img src="https://media-assets.grailed.com/prd/misc/-RX1V_JQQQLCZNNTDSDYB-WCAIHQG170G9OVQG" alt="Logo" width="80" height="80">

  <h3 align="center">Grailed Frontend Interview</h3>
</div>

## About The App

This application is a simple e-commerce store intended to serve as a template for interviewees to demonstrate their ability to work within an existing codebase. The patterns, components, and code are not what is necessarily used in the Grailed codebase, and some of them are intentionally complex to provide interviewees with an opportunity to show how well they pick up and emulate existing patterns.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Pages

- Home `/` - demo page for existing UI components that can be reused
- Shop Page `/shop` - a page that listings products and will let users sort, filter, and find producs they like

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This application can be run either locally or in codesandbox. It currently exists as a synced template that can be forked [here](https://codesandbox.io/p/sandbox/github/grailed-code/frontend-interview/tree/main)

Install NPM packages

```sh
npm install
```

Run the application

```sh
npm run dev
```

Run the tests

```sh
npm run test
```

Lint

```sh
npm run link
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project structure

The application has an established project structure just like you'd see in any existing codebase.

- `__tests__` - All tests are kept here. The internal structure of this folder should map to the rest of the project structure. For example, the tests for the `lib/utils/classnames.ts` file lives at `__tests__/lib/utils/classnames.test.ts`.
- `components` - This folder is where components are kept. They are nested as closely to the page they're built for, with the highest level components being ones that are universal/global/reusable.
  - `components/pages` - the components for the pages. The Next pages folder should use very minimal JSX/ui code and it should be kept here as much as possible
  - `components/ui` - universal UI components
- `lib` - shared non-ui components
- `pages` - the [NextJS pages folder](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
