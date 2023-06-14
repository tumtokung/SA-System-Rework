import { useEffect } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'


const useProtectedPath = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push("/login")
        }
    }, [router, session])
}

export default useProtectedPath;

