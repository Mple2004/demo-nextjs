import { useRouter } from "next/router";
export default function Categorie(){
    const router = useRouter();
    const{slug} =router.query;

    return(
        <div>
            <h1>Categoria Page</h1>
            <p>Slug:{JSON.stringify(slug)}</p>
        </div>
    );
}