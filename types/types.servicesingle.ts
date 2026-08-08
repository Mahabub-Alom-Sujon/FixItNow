export interface IAvailability {
    id: string;
    technicianId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
}

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
        icon: string |null;
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

        availability: IAvailability[];

        user: {
            id: string;
            name: string;
            profileImage: string | null;
        };
    };

    bookings: [];
}

export interface IServiceDetailsResponse {
    success: boolean;
    message: string;
    data: IServiceDetails;
}