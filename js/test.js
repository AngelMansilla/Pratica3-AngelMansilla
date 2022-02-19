"use strict";
//Importamos los objetos que necesitamos

function testERP() {

  console.log("***Comprobando clase Coords***");
  let coords1 = new Coords(3.2, 43);
  console.log(coords1);
  console.log("Expepciones:");
  try {
    let coords2 = Coords(2, 3);
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let coords2 = new Coords(2);
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let coords2 = new Coords();
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");
  console.log("***Category***");
  let cat1 = new Category("Décima generación", "Chip 7 nanometros");
  console.log(cat1);
  let cat3 = new Category();
  console.log("Asigna default al llamar sin argumentos:")
  console.log(cat3);
  console.log("Expepciones:");
  try {
    let cat2 = Category(2, 3);
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let x;
    cat3.title = x;
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");

  console.log("***Store***");
  let store1 = new Store("12332", "Intel", "Plaza mayor, 1, Madrid, España", "685723102", new Coords(143, 1542));
  console.log(store1);
  console.log("Expepciones:");
  try {
    let store3 = Store("12332", "Intel", "Plaza mayor, 1, Madrid, España", "685723102", new Coords(143, 15423.2));
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let x;
    store2.CIF = x;
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let x;
    store2.name = x;
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let store3 = new Store("12332", "Intel", "Plaza mayor, 1, Madrid, España", "685723102", 143, 15423.2);
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");


  console.log("***Product***");
  let pro1 = new Processor("432214321423", "I5 10400F", "Not bad", "125€", 21, "i510440f.img", "2.9GHz", "LG20", "R300", "No");
  console.log(pro1);
  let pro2 = new Processor("d23141234", "I7 10700F", "Not bad", "125€");
  console.log("Asigna default al llamar sin algunos argumentos:")
  console.log(pro2);
  let gra1 = new Graphic_Card("432214321429", "3060", "GOOD", "125€", 21, "3060ti.img", "NVIDIA", "TI1", "8GB");
  console.log(gra1);
  let gra2 = new Graphic_Card("23423151234", "3060 ti", "GOOD", "125€");
  console.log("Asigna default al llamar sin algunos argumentos:")
  console.log(gra2);
  let ram1 = new RAM("432214321423", "ASUS PRIME", " bad", "125€", 21, "asus4gb.img", "DDR2", "4GB", "2666MHz");
  console.log(ram1);
  let ram2 = new RAM("d23141234", "ASUS PRIME", "Not bad", "125€");
  console.log("Asigna default al llamar sin algunos argumentos:")
  console.log(ram2);

  console.log("");
  console.log("Expepciones:");
  try {
    let pro3 = new Product();
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let pro1 = Processor("432214321423", "I5 10400F", "Not bad", "125€", 21, "i510440f.img", "2.9GHz", "LG20", "R300", "No");
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let pro1 = new Processor("", "I5 10400F", "Not bad", "125€", 21, "i510440f.img", "2.9GHz", "LG20", "R300", "No");
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let pro1 = new Processor("432214321423", "", "Not bad", "125€", 21, "i510440f.img", "2.9GHz", "LG20", "R300", "No");
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let pro1 = new Processor("432214321423", "I5 10400F", "Not bad");
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");

  console.log("***StoreHouse***");
  console.log("{El objeto StoreHouse es único}");
  let almacen = StoreHouse.getInstance("Almacen");
  console.log(almacen);
  console.log(almacen.name);
  console.log("Creamos otro almacen con otro nombre para comprobar si se mantiene el mismo de antes");
  let almacen2 = StoreHouse.getInstance("Almacen2");
  console.log(almacen);
  console.log(almacen.name);
  console.log("Categorias del almacen");
  let categories = almacen.categories;
  let category = categories.next();
  while (!category.done) { // Mientras la propiedad "done" no es true.
    console.log(category.value);
    category = categories.next();
  }

  console.log("***Metodos categorias***");
  console.log("Añadimos categorias");
  almacen.addCategory(cat1);
  let pilas = new Category("Pilas");
  almacen.addCategory(pilas);
  console.log("Eliminamos la categoria pilas");
  almacen.removeCategory(pilas);
  let categories1 = almacen.categories;
  let category1 = categories1.next();
  while (!category1.done) { // Mientras la propiedad "done" no es true.
    console.log(category1.value);
    category1 = categories1.next();
  }
  console.log("***Metodos productos***");
  console.log("Añadimos productos: procesador y grafica");
  almacen.addProduct(pro1);
  almacen.addProduct(gra1);
  console.log("Eliminamos la grafica");
  almacen.removeProduct(gra1);
  console.log("Mostramos los productos de la tienda default");
  let products4 = almacen.getShopProducts(new Store("XXXX", "Default", "Default", "0", new Coords(1, 1)));
  let product4 = products4.next();
  while (!product4.done) { // Mientras la propiedad "done" no es true.
    console.log(product4.value);
    product4 = products4.next();
  }
  console.log("añadimos tiendas");
  almacen.addShop(store1);
  let store2 = new Store("12322332", "Intel", "Plaza mayor, 1, Madrid, España", "685723102", new Coords(143, 1542));
  almacen.addShop(store2);
  console.log("eleminamos una");
  almacen.removeShop(store2);
  console.log("Tiendas del almacen");
  let stores = almacen.stores;
  let store = stores.next();
  while (!store.done) { // Mientras la propiedad "done" no es true.
    console.log(store.value);
    store = stores.next();
  }
  // Testear metodos:  getCategoryProducts

  console.log("Comprobamos que añadimos el producto ram 1 a la store1")
  almacen.addProductInShop(ram1, store1, [cat1.title]);

  let products5 = almacen.getShopProducts(store1);
  let product5 = products5.next();
  while (!product5.done) { // Mientras la propiedad "done" no es true.
    console.log(product5.value);
    product5 = products5.next();
  }

  almacen.addQuantityProductInShop(ram1, store1);

  let products6 = almacen.getShopProducts(store1);
  let product6 = products6.next();
  while (!product6.done) { // Mientras la propiedad "done" no es true.
    console.log(product6.value);
    product6 = products6.next();
  }
  console.log("Borramos la ram1 de la store1, añadimos pro2 y añadimos gra1 en categoria default");
  almacen.addProductInShop(pro2, store1, [cat1.title]);
  almacen.addProductInShop(gra1, store1);
  almacen.removeProductInShop(ram1, store1);

  let products8 = almacen.getShopProducts(store1);
  let product8 = products8.next();
  while (!product8.done) { // Mientras la propiedad "done" no es true.
    console.log(product8.value);
    product8 = products8.next();
  }

  console.log("Obtenemos todos los productos de cat1, como hemos borrado ram1 deberíamos obtener el pro2");

  let products7 = almacen.getCategoryProducts(cat1);
  let product7 = products7.next();
  while (!product7.done) { // Mientras la propiedad "done" no es true.
    console.log(product7.value);
    product7 = products7.next();
  }
}

window.onload = testERP;
