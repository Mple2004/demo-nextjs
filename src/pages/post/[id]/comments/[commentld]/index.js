import { useRouter } from "next/router";
//import { comment } from "postcss";
export default function Comment(){
    const router = useRouter();
    const{id,commentld} = router.query;
    return <div>
        <h1>Post ID: {id}</h1>
        <h1>Comment ID: {commentld}</h1>
    </div>
}