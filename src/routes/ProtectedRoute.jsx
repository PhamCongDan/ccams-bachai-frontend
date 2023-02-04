import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const lstPrintCard = useSelector(
    ({ studentReducers }) => studentReducers.lstPrintCard
  );
  if (!lstPrintCard.length) {
    // user is not authenticated
    return <Navigate to="/search" />;
  }
  return children;
};