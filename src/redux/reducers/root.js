import { combineReducers } from "redux";

import { user } from "./user";
import { contract } from "./contract";
import { wallet } from "./wallet";
import { policy } from "./policy";
import { penalty } from "./penalty";
import { vehicle } from "./vehicle";
import { device } from "./device";
import { holder } from "./holder";
import { partner } from "./partner";

const rootReducer = combineReducers({
    wallet,
    contract,
    user,
    policy,
    penalty,
    vehicle,
    device,
    holder,
    partner,
});
export default rootReducer;