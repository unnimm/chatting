"use client"
import Link from "next/link";
import axios from "axios";

const LoginButton = () => {

    return (
            <Link href={'http://112.186.245.109:8080/oauth2/authorization/kakao'}
                  className={"rounded-full px-3 py-2 bg-[#FE6F0F] border border-transparent text-white font-bold hover:opacity-75 transition text-center"
                }>로그인</Link>
    )
}
export default LoginButton;