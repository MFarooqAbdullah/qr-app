export class QR {

    text:           string;
    imageBase64:    string;
    // created:    Date;
 
    constructor(text: string, imageBase64: string) {
        this.imageBase64 = imageBase64;
        this.text = text;
        // this.created = created;
    }
 
 }