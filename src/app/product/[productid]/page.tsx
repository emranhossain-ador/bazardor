
import ProductDetailsContent from "@/app/product/ProductDetailsContent";
import { Suspense } from "react";
import ProductDetailsSkeleton from "../ProductDetailsSkeleton";

interface ProductDetailsPageProps {
    params: Promise<{ productid: string }>;
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
    return (
        <div className="fullscreen">
            <Suspense fallback={<ProductDetailsSkeleton />}>
                <ProductDetailsContent params={params} />
            </Suspense>
        </div>
    );
}