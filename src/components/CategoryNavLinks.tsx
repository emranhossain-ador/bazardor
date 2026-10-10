
import CategoryNavClient from "./CategoryNavClient";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const CategoryNavLinks = async () => {


    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');

    if (!res.ok) { throw new Error("Failed to fetch category"); }

    const categories: Category[] = await res.json();

    return <CategoryNavClient categories={categories} />;
};

export default CategoryNavLinks;