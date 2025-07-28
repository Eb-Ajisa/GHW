
import { useUser } from "@civic/auth/react";
import React from "react";
function Confirm() {
    const { user } = useUser();
    if (!user) {
        return <div>Please log in to confirm your identity.</div>;
    }
    return <div>Welcome {user.name}, your identity is confirmed!</div>;
}

export default Confirm;
