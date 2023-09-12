import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const lstPrintCard = useSelector(
    ({ studentReducers }) => studentReducers.lstPrintCard,
  );
  if (!lstPrintCard.length) {
    return <Navigate to='/search' />;
  }
  return children;
}
