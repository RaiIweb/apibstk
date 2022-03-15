import { WalletsService } from './wallets.service';
import { AddPointsInput } from './dto/add-points.input';
export declare class WalletsResolver {
    private readonly walletsService;
    constructor(walletsService: WalletsService);
    addPoints(input: AddPointsInput): boolean;
}
