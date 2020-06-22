import { FunctionalComponent, h } from "preact";

export interface HomeProps {}

export const HomePage: FunctionalComponent<HomeProps> = () => {
  return (
    <main>
      <h1>Home</h1>
      <p>Hello World</p>
    </main>
  );
};
