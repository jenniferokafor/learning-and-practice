import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Notes from "./components/Notes";

export default function Views () {
    return (
        <Routes>
            <Route index element={<Notes />} />
            <Route path='/create' element={<Create />} />
        </Routes>
    )
}