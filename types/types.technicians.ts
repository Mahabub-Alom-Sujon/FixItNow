 export  interface ITechnician {
    id: string;
    bio: string;
    experience: number;
    hourlyRate: number;
    skills: string;
    certification: string;
    averageRating: number;
    totalReviews: number;
    completedJobs: number;
    isAvailable: boolean;
    user: {
        id: string;
        name: string;
        profileImage: string | null;
        city: string | null;
        isVerified: boolean;
    };
}