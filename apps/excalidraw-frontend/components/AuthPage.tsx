"use client";

export function AuthPage({isSignin}:{
    isSignin: boolean;
}) {
   return <div className="w-screen h-screen flex items-center justify-center">
        <div className="p-2 bg-white rounded">
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button onClick={()=>{

            }}>{isSignin ? "Sign in":"Sign up"}</button>
        </div>

    </div>
}