function Product(title,price){
    this.title = title;
    this.price = price;
}
Product.prototype.owner = "foo";
Product.prototype.displayProduct = function(){
    console.log(this);
}

let p1 = new Product("p1", 900);
let p2 = new Product("p2", 700);

p1.displayProduct = function(){
    console.log(this);
    console.log(this.owner);
}

p1.displayProduct();
p2.displayProduct();
p1.displayProduct.call(p2);