import React from 'react';
import LoginForm from "../components/users/Login.js";


export default function LandingPage() {
return (
        <>
            <div className="flex items-center justify-center mb-2 mt-10">
                <h1 className="flex italic text-center">"Take your education to new heights!!"</h1>
                
            </div>
            <p className="mb-10 text-center"> - Earvin "Magic" Johnson </p>
            <LoginForm />
        </>
    )
};
