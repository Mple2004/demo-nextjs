import { useRouter } from "next/router";
import Link from "next/link";
import MyComponent from "@/components/MyComponent";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Comment() {
    // const router = useRouter();
    // const{username}=router.query;
    const [count, setCount] = useState(0);
    console.log("-count", count)

    useEffect(() => {
        setCount(count + 1);
    }, []);

    return (
        <div>
            <Head>
                <title>User Page</title>
            </Head>
            
            {/* <h1>User Page</h1> */}
            {/* <h1>Username: {username}</h1> */}

            <MyComponent title="Hello" />
            <Link href={"/post/1/comments/2"}>
                Go to Comments pages</Link>
            <br />
            <p>count: {count}</p>
            <button onClick={() => { setCount(count + 1) }}
                className="bg-blue-400 mx-1.5 my-1.5 px-5 hover:bg-blue-800 text-white-200 font-bold py-2 px-[4px] rounded"> +</button>
            <button onClick={() => { setCount(count - 1) }}
                className="bg-blue-400 mx-1 my-1.5 px-5 hover:bg-blue-800 text-white-200 font-bold py-2 px-[4px] rounded"> -</button>
            <br/>
            <button className="bg-pink-400 mx-1.5 my-1.5 px-9  hover:bg-pink-800 text-red-200 font-Playfair_Display py-2 px-[4px] rounded">color</button>
        </div>
    )
}