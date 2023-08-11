import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import VideoDetailPage from "./pages/VideoDetailPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "videos/:videoId",
        element: <VideoDetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
