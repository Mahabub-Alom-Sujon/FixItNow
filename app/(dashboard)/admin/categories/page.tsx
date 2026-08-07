import { getAllCategories } from "@/app/(dashboard)/admin/_actions/getCategories";
import Categories from "@/app/(dashboard)/admin/_components/Categories";

export default async function CategoriesPage() {
    const response = await getAllCategories();
    // console.log(data)
    return <Categories initialCategories={response.data} />;
}