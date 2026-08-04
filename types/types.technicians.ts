export interface TechnicianQuery {
    searchTerm?: string;
    location?: string;
    category?: string;
    experience?: number;
    page?: number;
    limit?: number;
    minRating?: number;
    maxHourlyRate?: number;
}
