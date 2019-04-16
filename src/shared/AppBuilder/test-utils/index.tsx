// test-utils.js
import { render } from 'react-testing-library'
import { ReactNode } from 'react';
import { BasicApp, App } from '../App';

// //  Base DashBoard
class BasicTestApp extends BasicApp {
  constructor(rootContent: ReactNode, DefaultFeatures = {}) {
    super(DefaultFeatures, {}, rootContent, {});
  }
}

export const TestApp = ({ children, ...opts }: { children: ReactNode }): BasicApp => {
  console.log(opts);
  const TestApp = new BasicTestApp(children);
  return TestApp;
}

// const customRender = (ui: React.ReactElement, options: any) =>
//   render(ui, { wrapper: TestWrapper, ...options })

// re-export everything
export * from 'react-testing-library'

// override render method
// export { customRender as render }