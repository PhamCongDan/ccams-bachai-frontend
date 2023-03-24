import { PrintPage } from "../views/PrintPage";
import { ReportPage } from "../views/ReportPage";
import { RequestCardPage } from "../views/RequestCardPage";
import { SearchStudentPage } from "../views/SearchStudentPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const configRoutes = [
  {
    name: 'Search',
    path: '/search',
    component: (<SearchStudentPage />)
  },
  {
    name: 'RequestCard',
    path: '/request-card',
    component: (<RequestCardPage />)
  },
  {
    name: 'Print',
    path: '/print',
    component: (
      <ProtectedRoute>
        <PrintPage />
      </ProtectedRoute>
    )
  },
  {
    name: 'Report',
    path: '/',
    component: (<ReportPage />)
  }
]