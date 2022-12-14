import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const email = user?.email;
        console.log(`admin email`, email);
        if (email) {
            axios.get(`http://localhost:5000/user/admin/${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    console.log(`admin status`, res?.data);
                    setAdmin(res?.data?.isAdmin)
                })
        }
    }, [user])
    return [admin];
}
export default useAdmin;