import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Stack, Divider, Alert, AlertTitle } from '@mui/material'
import Image from 'next/image'
import { useSignInStyles } from '@/styles/signIn/SignInStyles';
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { googleIcon, logoSA } from 'public/assets';
import { STUDENT_DOMAIN_NAME, TEACHER_DOMAIN_NAME } from '@/utils/emailDomainName';
function Login() {
    // styles
    const classesSigIn = useSignInStyles();
    // hook
    const { data: session } = useSession(null);
    const router = useRouter()
    const [errorLogin, setErrorLogin] = useState({
        message: "",
        isShow: false,
    });

    useEffect(() => {
        if (session) {
            const email = session?.user?.email
            //success login
            if (email.endsWith(STUDENT_DOMAIN_NAME)) {
                router.push("Home")
            }
            //teacher case
            else if (email.endsWith(TEACHER_DOMAIN_NAME)) {
                router.push("Home")
            }
            //access denied case
            else {
                setErrorLogin({
                    message: "Email ผู้ใช้ไม่ถูกต้องกรุณาลองใหม่อีกครั้ง",
                    isShow: true,
                })
            }
        }

    }, [router, session])

    const Logo = () => {
        return (
            <Image
                src={logoSA}
                alt="Eng Src Logo"
                width={200}
                priority
            />
        );
    }
    const GoogleIcon = () => {
        return (
            <Image
                src={googleIcon}
                alt="google icon"
                width={30}
                height={30}
                priority
            />
        )
    }

    return (
        <Box className={classesSigIn.container}>
            <Stack spacing={8} className={classesSigIn.boxLogin}>
                <Logo />
                <Typography variant="h4" color="primary">
                    Login
                </Typography>
                <Typography variant="body2" textAlign="center">
                    ระบบคำร้องรับสมัครนิสิตช่วยปฎิบิติงานออนไลน์(SA)
                </Typography>
                <Stack spacing={4} alignItems="center" width="100%">
                    <Typography variant="subtitle2" textAlign="center">
                        กรุณาใส่ Email@ku.th (สำหรับนิสิต) 
                    </Typography>
                    <Button
                        startIcon={<GoogleIcon />}
                        variant="contained"
                        color="white"
                        sx={{ width: "80%" }}
                        onClick={() => signIn("google")}>
                        Sign in with Google
                    </Button>
                    <Divider sx={{ width: "100%" }} />
                    <Typography variant="subtitle2" textAlign="center">
                        กรุณาใส่ Email@eng.src.ku.ac.th (สำหรับอาจารย์)
                    </Typography>
                    <Button
                        startIcon={<GoogleIcon />}
                        variant="contained"
                        color="white"
                        sx={{ width: "80%" }}
                        onClick={() => signIn("google")}>
                        Sign in with Google
                    </Button>
                    {errorLogin?.isShow &&
                        <Alert severity="error">
                            <Typography variant="subtitle2" textAlign="center" color="red">
                                {errorLogin?.message}
                            </Typography>
                        </Alert>
                    }
                    <Link href="https://accounts.ku.ac.th/" passHref>
                        <Typography variant="subtitle2">
                            ลืมรหัสผ่าน?
                        </Typography>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Login