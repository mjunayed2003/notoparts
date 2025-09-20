import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomeLayout from "./component/layout/HomeLayout";
import RouterLayout from "./route/RouterLayout";
import Hero from "./component/Hero";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Home Layout*/}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Hero />} />
        </Route>

        {/* Other pages */}
        <Route element={<RouterLayout />}>
          <Route path="/shop" element={<h1>Shop Page</h1>} />
          <Route path="/blog" element={<h1>Blog Page</h1>} />
          <Route path="/account" element={<h1>Account Page</h1>} />
          <Route path="/pages" element={<h1>Pages Section</h1>} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;