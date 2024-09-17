import { config, DotenvParseOutput } from "dotenv";
import { iConfigService } from "./config.interface";

export class ConfigService implements iConfigService {

    private config : DotenvParseOutput;
    constructor () {
        const {error, parsed} = config();
        if(error) {
            throw new Error("not found .env")
        } 
        if (!parsed) {
            throw new Error("empty .env")
        }
        this.config = parsed;
    }
    get(key: string): string {
        const res = this.config[key];
        if(!res) {
            throw new Error("There is no such key");

        }
        return res;
    }

}