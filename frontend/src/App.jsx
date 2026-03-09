import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/protectedRoutes";

function App(){

const token = localStorage.getItem("token");

return(

<BrowserRouter>

<Routes>
  <Route path="/" element={<Navigate to="/login" />} />

<Route path="/login"element={token ? <Navigate to="/dashboard"/> : <Login/>}


/>

<Route

path="/dashboard"element={
<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>

</Routes>

</BrowserRouter>
);
}
export default App;