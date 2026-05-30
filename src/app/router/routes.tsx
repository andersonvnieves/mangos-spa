import ProtectedRoute from "../auth/ProtectedRoute.tsx";
import AppLayout from "../layout/AppLayout.tsx";
import {createBrowserRouter} from "react-router-dom";
import DashboardPage from "../../modules/dashboard/pages/DashboardPage.tsx";
import OverviewPage from "../../modules/overview/pages/OverviewPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "overview",
                element: <OverviewPage />,
            },
        ],
    },
]);