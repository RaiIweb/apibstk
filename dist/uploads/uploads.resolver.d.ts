import { FileUpload } from 'graphql-upload';
import { UploadsService } from './uploads.service';
export declare class UploadsResolver {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    upload(attachment?: FileUpload): {
        id: string;
        original: string;
        thumbnail: string;
    }[];
}
