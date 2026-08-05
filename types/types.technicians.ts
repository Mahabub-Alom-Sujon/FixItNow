
 export interface ITechnician {
     id: string;
     bio: string;
     experience: number;
     hourlyRate: number;
     skills: string;
     nationalId: string;
     certification: string;
     averageRating: number;
     totalReviews: number;
     completedJobs: number;
     isAvailable: boolean;
     userId: string;
     createdAt: string;
     updatedAt: string;
     user: ITechnicianUser;
     reviews: IReview[];
 }

 export interface ITechnicianUser {
     id: string;
     name: string;
     email: string;
     phone: string;
     profileImage: string | null;
     address: string | null;
     city: string | null;
     district: string | null;
     status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
     isVerified: boolean;
     isActive: boolean;
 }

 export interface ICustomer {
     id: string;
     name: string;
     profileImage: string | null;
 }

 export interface IReview {
     id: string;
     rating: number;
     comment: string;
     bookingId: string;
     customerId: string;
     technicianId: string;
     createdAt: string;
     updatedAt: string;
     customer: ICustomer;
 }