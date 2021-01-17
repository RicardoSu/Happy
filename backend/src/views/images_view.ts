import Image from "../models/Image"

export default{
    render(image: Image) {
        return {
            id: image.id,

            //web http://localhost:3333/
            // mobile http://192.168.0.3:3333
            url: `http://192.168.0.3:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]){
        return images.map(image =>this.render(image));
    }

};