import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';

@Injectable({
    providedIn: 'root'
})

export class EncryptionService{
    encryprObj: any;
    key: any;
    constructor(){
        // this.key = CryptoJs.enc.Utf8.parse('key_kiran_is_the_creator');
        // const iv = CryptoJs.enc.Utf8.parse('1234567890987654321');
        // this.encryprObj = {
        //     keySize: 128 / 8,
        //     iv,
        //     mode: CryptoJs.mode.CBC,
        //     padding: CryptoJs.pad.Pkcs7
        // };
    }
    set(value){
        this.key = CryptoJs.enc.Utf8.parse('key_kiran_is_the_creator');
        const iv = CryptoJs.enc.Utf8.parse('1234567890987654321');
        this.encryprObj = {
            keySize: 128 / 8,
            iv,
            mode: CryptoJs.mode.CBC,
            padding: CryptoJs.pad.Pkcs7
        };
        const encrypted = CryptoJs.AES.encrypt(CryptoJs.enc.Utf8.parse(value.toString()), this.key, this.encryprObj );
        return encrypted.toString();
    }

    get(keys, value){
        this.key = CryptoJs.enc.Utf8.parse(keys);
        const iv = CryptoJs.enc.Utf8.parse(keys);
        this.encryprObj = {
            keySize: 128 / 8,
            iv,
            mode: CryptoJs.mode.CBC,
            padding: CryptoJs.pad.Pkcs7
        };
        const decrypted = CryptoJs.AES.decrypt(CryptoJs.enc.Utf8.parse(value.toString()), this.key, this.encryprObj );
        return decrypted.toString(CryptoJs.enc.Utf8);
    }
}