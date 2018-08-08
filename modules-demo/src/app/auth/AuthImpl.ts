import { IAuthentication } from "./IAuthentication";
export abstract class AuthImpl implements IAuthentication {
    abstract login(userName: string, password: string);
}