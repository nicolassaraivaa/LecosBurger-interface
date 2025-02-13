import { Route, Routes } from "react-router-dom";

import {
    Login,
    Register,
    RegisterCep,
    Home
} from '../container'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='/cadastrocep' element={<RegisterCep />} />
        </Routes>
    )
}