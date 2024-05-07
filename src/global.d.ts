type JobDetails = {
    jdUid: string;
    jdLink: string;
    jobDetailsFromCompany: string;
    maxJdSalary: number | null;
    minJdSalary: number | null;
    salaryCurrencyCode: string;
    location: string;
    minExp: number | null;
    maxExp: number | null;
    jobRole: string;
    companyName: string;
    logoUrl: string;
}

type FilterObj = {
    experience?: number,
    roles: string[],
    salary?: number,
    location: string[],
    company?: string,
}

interface ApiResponse<T> {
    data: T[];
    totalCount: number;
}