import Loader from "@/components/Loader";
import ProductDetailsContent from "@/app/product/ProductDetailsContent";
import { Suspense } from "react";

interface ProductDetailsPageProps {
    params: Promise<{ productid: string }>;
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
    return (
        <div className="fullscreen">
            <Suspense fallback={<Loader />}>
                <ProductDetailsContent params={params} />
            </Suspense>
        </div>
    );
}