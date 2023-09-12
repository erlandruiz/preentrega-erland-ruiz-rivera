//Limpiamos el inicio de la pantalla
console.clear();

class ProductManager{
    constructor(){

        this.productos = []
    }

    static id = 0

    //Agrega productos

    addProduct(title, description, price, thumbnail, code, stock){

        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].code === code) {
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
            
        }

        const productoParaAgregar = {
            title, description, price, thumbnail, code, stock,

        }

       if (!Object.values(productoParaAgregar).includes(undefined)){
              ProductManager.id++;

        this.productos.push({
            ...productoParaAgregar, 
             id : ProductManager.id
        });

       }else{
        console.log('Los campos son Obligarorios')
       }

    }

    //Retorna productos

    getProducts(){
        return this.productos;
    }

    buscaProducto(id){
        return this.productos.find((producto)=>producto.id === id)
    }

     // Busca productos por ID 

    getProductById(id){
        if (!this.buscaProducto(id)) {
            console.log('Not Found')
        }else{
            console.log(this.buscaProducto(id))
        }
    }
}

const productos = new ProductManager;

//llamadando a get Producto 
console.log(productos.getProducts())

//agreando un productos

productos.addProduct('Producto1', 'Lorem lorem lorem lorem', 120, 'http//www.imagen.com/imagen1', 'code01', 10)
productos.addProduct('Producto2', 'Lorem lorem lorem lorem',60, 'http//www.imagen.com/imagen2', 'code02', 10)


//Mostrando productos agregados
console.log(productos.getProducts())



//Mostrando producto po ID
productos.getProductById(2);

//Tratando de agregar un producto que no tiene el campo de precio
productos.addProduct('Producto4', 'Lorem lorem lorem lorem', 'http//www.imagen.com/imagen4', 'code04', 20)

console.log(productos.getProducts())
