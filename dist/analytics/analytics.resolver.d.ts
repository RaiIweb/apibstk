import { AnalyticsService } from './analytics.service';
export declare class AnalyticsResolver {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    findAll(): string;
}
