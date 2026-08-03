export interface IService {
    id: string;
    title: string;
    description: string;
    price: string;
    duration: number;
    serviceArea: string;
    isAvailable: boolean;
    featured: boolean;
    technicianId: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
}
export interface ICategory {
    id: string;
    name: string;
    description: string | null;
    icon: string | null;
    createdAt: string;
    updatedAt: string;
    services: IService[];
}

export interface ICategoryResponse {
    success: boolean;
    message: string;
    data: ICategory[];
}