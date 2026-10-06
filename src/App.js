import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import UserContext from "./utils/userContext";

// code splitting , chunking, budling.
const AboutPage = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  // authentication
  useEffect(() => {
    //make api call
    const data = {
      name: "Niveditha",
    };
    setUserName(data.name);
  }, []);

  return (
    //  Provider is used modify and update the context
    <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
      <div>
        <UserContext value={{ loggedUser: "Elon Mask" }}>
          <Header />
        </UserContext>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading..... </h1>}>
            {" "}
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<RouterProvider router={appRouter} />);
