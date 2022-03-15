import { AddPointsInput } from './dto/add-points.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
export declare class WalletsService {
    create(createWalletInput: AddPointsInput): boolean;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWalletInput: UpdateWalletInput): string;
    remove(id: number): string;
}
