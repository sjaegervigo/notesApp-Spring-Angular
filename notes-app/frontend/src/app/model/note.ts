export interface Note {

    id?: number;
    title: string;
    content: string;    
    archived: boolean;  
    createdAt?: Date;
    updatedAt: Date | null;

}
