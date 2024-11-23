import Head from "next/head"
import Product1 from "../../../public/assets/images/chinamal.png"
import Image from "next/image";
import MyComponent from "@/components/MyComponent";
import { useEffect, useState } from "react"
import Link from "next/link";

export default function Product({ product }) {
    console.log("====", product)
    // const [r, setR] = useState(0);
    // useEffect(() => {
    //     setR(r + 0.001);
    // }, [r]);
    return (<>
        <Head>
            <title>Products</title>
        </Head>
        <div style={{ background: `Linear-gradient(${90}deg, rgba(238,174,202,1)0%, rgba(148,187,233,1) 100%) ` }}
            className="min-h-screen justify-center flex "
        ><div>
                <p className="text-5xl font-Lobster text-white px-6 py-10 text-center ">Products</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-5 "

                >
                    {product.map((item) => (
                    <Link key={item.id} href={`/products/${item.id}`}> 
                    <div>
                        <Image
                            src={item.image}
                            alt="product 1"
                            className="w-[220px] h-[220px] mix-blend-multiply hover:scale-110"
                            width={180}
                            height={0}
                        />
                        <p className="text-center text-3xl py-2 ">{item.title}</p>
                        <p className="text-center text-2xl ">{item.price}</p>
                    </div>
                    </Link>

                ))}
                </div>
            </div>

        </div>

    </>)
}

export async function getServerSideProps(context) {
    const resp = await fetch('https://fakestoreapi.com/products')
    const product = await resp.json()

    return {
        props: { product },
    }

}