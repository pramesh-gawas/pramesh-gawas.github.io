import "./App.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Projects",
        element: <Projects></Projects>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}>
          <Header></Header>
          <Home></Home>
          {/* <Footer></Footer> */}
        </RouterProvider>
      </div>
    </>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
