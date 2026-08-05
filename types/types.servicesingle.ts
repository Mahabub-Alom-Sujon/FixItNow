export interface IServiceDetails {
    id: string;
    title: string;
    description: string;
    image: string | null;
    price: number;
    duration: number;
    serviceArea: string;
    isAvailable: boolean;
    featured: boolean;
    technicianId: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
    category: {
        id: string;
        name: string;
        description: string | null;
        icon: string | null;
        createdAt: string;
        updatedAt: string;
    };
    technician: {
        id: string;
        bio: string;
        experience: number;
        hourlyRate: number;
        skills: string;
        certification: string;
        averageRating: number;
        totalReviews: number;
        completedJobs: number;
        user: {
            id: string;
            name: string;
            profileImage: string;
        };
    };
    bookings: [];
}

export interface IServiceDetailsResponse {
    success: boolean;
    message: string;
    data: IServiceDetails;
}