import React, {useState,useEffect} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {ImEqualizer} from "react-icons/im"
import {GrReturn} from "react-icons/gr"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {useRouter} from "next/router";
// import {CATEGORY_SLUG} from "../../hooks/useApi";
import {CategoryProducts} from "../../components/products/CategoryProducts";
function CategorySlugArtWorks({data}:any)  {
// function CategorySlugArtWorks({data}:any)  {
    const [artworks,setArtworks] = useState<any>(data)
    const router:any = useRouter();
    const {slug}:any = router.query;
    const [catSlug,setCatSlug] = useState<any>(router.query);
    const [heightRange,setHeightRange] = useState<any>(0);
    const [widthRange,setWidthRange] = useState<any>(0);
    // useEffect(()=>{
    //     CATEGORY_SLUG(slug).then(async (res:any)=>{
    //         console.log(await res)
    //     })
    // },[])
    return (
        <HomeLayout title={data}>
            <section className={"bg-primary px-20 flex pb-20 items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    {
                        data && (
                            <h1>{data}</h1>
                        )
                    }
                </div>
            </section>
            <section className={"flex items-center gap-3 bg-sub-header py-4 lg:px-20 px-10 text-black"}>
                <span>Art and Design</span>
                <span> <MdOutlineKeyboardArrowRight/> </span>
                <span>{data}</span>
            </section>
            {
                data && (
                    <CategoryProducts data={data} />
                )
            }
            
            {/*<section className={"my-20 flex flex-col items-center justify-center text-black gap-y-4"}>*/}
            {/*    <ul className={"flex gap-4"}>*/}
            {/*        <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">1</a></li>*/}
            {/*        <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">2</a></li>*/}
            {/*        <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">3</a></li>*/}
            {/*        <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">4</a></li>*/}
            {/*        <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>*/}
            {/*        <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">6</a></li>*/}
            {/*    </ul>*/}
            {/*</section>*/}
            <section className={"bg-sub-header text-black flex flex-col justify-center items-center py-20 gap-y-8"}>
                <span className={"font-bold text-4xl px-10 lg:px-0"}>
                    Would you like to see more artworks like these?
                </span>
                <p className={"text-lg lg:px-96 px-10 items-center justify-center text-center"}>
                    Send your E.mail to receive exclusive updates on new works
                    that match your search criteria
                </p>
                <div className={"lg:flex gap-8 w-full lg:px-60 px-10"}>
                    <div className={"lg:w-70%"}><input placeholder={"Email Address... "} type="text" className={"pl-10 py-4 w-full  border bg-transparent border-black"}/></div>
                    <div  className={"lg:w-30% mt-2 lg:mt-0"}><button className={"text-white w-full py-4 bg-secondary rounded"}>SEND</button></div>
                </div>
            </section>
            <section className={"flex flex-col bg-secondary text-white gap-y-4 px-20 py-10" }>

                <span className={"font-bold"}>
                    Contemporary Painting
                </span>
                <p>
                    Contemporary art is defined as the art of today, created in the late 20th and early 21st Century. It is characterized by its global nature, the diversity of cultures it represents and the influence of technology and the digital age. Contemporary art involves experimental and dynamic combinations of new materials. Modern art and contemporary art are often confused since there is an overlap between their two definitions. The key moment often described as the transition from modern art to contemporary art is after World War II. Since 1950, many movements such as Pop Art, Abstract Expressionism or even documentary photography have developed and are "encompassed" in what is perceived as contemporary art. On the other hand, the definition of this movement is not uniform and each artistic institution has its own vision of contemporary art. It is extremely vast and diverse, and today's contemporary artists are constantly pushing the established boundaries of art.
                </p>
                <span className={"font-bold"}>
                    Buy a contemporary painting on SINGULART
                </span>
                <p>
                    Contemporary painting - somewhat neglected by artists in the 1980s and 1990s, as they found the medium too deeply rooted in art historical traditions - has regained popularity in the past twenty or so years. The contemporary gallery, SINGULART, offers art lovers the opportunity to discover the breadth and richness of style developed by our contemporary artists. Contemporary painting is characterized by its great diversity: artists explore the boundaries of traditional painting by trying to exceed them, by using new mediums combined with paint in their paintings such as ink, sand, glass and even cement. Contemporary painting often oscillates between abstract painting and figurative painting: the artist François Pagé adopts a very figurative approach in his portraits, while the contemporary work of the Italian Francesco d'Adamo deploys a gestural and expressive touch, resulting in colorful abstract canvases. At SINGULART, discover a selection of diverse and high quality contemporary paintings.
                </p>
            </section>
        </HomeLayout>
    )
}
export async function getServerSideProps({query}:any) {
    // const res:any =  CATEGORY_SLUG(query.slug);
    // const {data} = await res;
    return { props:{
                        data:query.slug
                    }
            }

}
export default CategorySlugArtWorks;
