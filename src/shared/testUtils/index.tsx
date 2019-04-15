// // test-utils.js
// import { render } from 'react-testing-library'
// import { FC, ReactNode } from 'react';

// const AppProviders: FC = ({ children }) => {
//   return (
//     <ThemeProvider theme="light" >
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   )
// };

// const customRender = (ui: React.ReactElement, options: any) =>
//   render(ui, { wrapper: AppProviders, ...options })

// // re-export everything
// export * from 'react-testing-library'

// // override render method
// export { customRender as render }
export const test = 1;