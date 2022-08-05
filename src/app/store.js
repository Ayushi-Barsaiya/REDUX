import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/IcecreamSlice"

const store = configureStore({
    reducer: {
        cake :cakeReducer,
        icecream : icecreamReducer,
        user: userReducer
    }
})

export default store