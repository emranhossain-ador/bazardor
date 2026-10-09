
import { Suspense } from "react";
import CategoryItems from "../CategoryItems";
import Loader from "@/components/Loader";


interface CategoryPageProps {
    params: Promise<{ categoryid: string }>
}


const CategoryPage = ({ params }: CategoryPageProps) => {


    return (
        <section className="space-y-8 fullscreen">

            <Suspense fallback={<Loader />}>
                <CategoryItems params={params} />
            </Suspense>

        </section>
    )
}

export default CategoryPage