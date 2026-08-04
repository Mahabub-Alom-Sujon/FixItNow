export interface IService {
        id: string;
        title: string;
        description: string;
        price: number;
        duration: number;
        serviceArea: string;
        featured:boolean;
        type: string;
        location: string;
        rating: number;
        minPrice:number;
        maxPrice:number;
        image: string | null;
        createdAt: string;
        updatedAt: string;
        category: {
            id: string;
            name: string;
            description: string | null;
            icon: string | null;
        };
        technician: {
            id: string;
            averageRating: number;
            completedJobs: number;
            totalReviews: number;

            user: {
                id: string;
                name: string;
                city: string;
                profileImage: string;
            };
        };
}