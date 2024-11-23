import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function ProductDetail({ product }) {
    console.log("====", product)
    return (<>
        <Head>
            <title>Product Detail Page</title>
        </Head>
        <div style={{ background: `Linear-gradient(${90}deg, rgba(238,174,202,1)0%, rgba(148,187,233,1) 100%) ` }} className="min-h-screen justify-center flex ">
            <Link href="/products" className="text-left ">
                <IoIosArrowBack />
            </Link>

            <div className="w-full md:w-1/2">
                <p className="text-4xl text-center my-5 ">{product.title}</p>
                <p className="text-2xl text-right  ">{product.id}</p>
                <Image
                    src={product.image}
                    alt="product 1"
                    className="w-[220px] h-[220px] mix-blend-multiply hover:scale-110"
                    width={180}
                    height={0}
                />
                <div>
                    <p className="mt-10 text-2xl mb-2">
                        <h>Category: {product.category}</h>

                    </p>
                    <p className="text-2xl">
                        <h>Category: {product.description}</h>

                    </p>
                    <p className="text-2xl">
                        <h>Category: {product.price}</h>

                    </p>
                    <p className="text-2xl">
                        <h>Category: {product.rating.rate}</h>

                    </p>
                    <p className="text-2xl">
                        <h>Category: {product.rating.count}</h>

                    </p>
                </div>
            </div>
        </div>


    </>)
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const product = await resp.json()

    return {
        props: { product },
    }

}
