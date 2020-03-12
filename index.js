var map1 = new Map(); // Виробник - Назва

map1.set('Lenovo', 'Indea Pad 100-15 IBD')
    .set('Acer', 'Nitro 5')
    .set('Xiaomi', 'Redmi 4X')
    .set('Bloody', 'V3M')
    .set('Edifier', 'R19U');


var map2 = new Map(); //Виробник - Вартість

map2.set('Lenovo', 12600)
    .set('Acer', 30000)
    .set('Xiaomi', 3500)
    .set('Bloody', 650)
    .set('Edifier', 599);


var map3 = new Map(); //Виробник - Час доставки

map3.set('Lenovo', 5)
    .set('Acer', 4)
    .set('Xiaomi', 2)
    .set('Bloody', 1)
    .set('Edifier', 2);


let lowPrice = function() {
    let a = map2.get("Lenovo")
    let b = map2.get("Acer")
    let c = map2.get("Xiaomi")
    let d = map2.get("Bloody")
    let e = map2.get("Edifier")


    if(a == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Lenovo")} / ${map2.get("Lenovo")} / Lenovo / ${map3.get("Lenovo")} day`)
    }else if(b == Math.min(b, a, c, d, e)) {
        console.log(`${map1.get("Acer")} / ${map2.get("Acer")} / Acer / ${map3.get("Acer")} day`)
    }else if(c == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Xiaomi")} / ${map2.get("Xiaomi")} / Xiaomi / ${map3.get("Xiaomi")} day`)
    }else if(d == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Bloody")} / ${map2.get("Bloody")} / Bloody / ${map3.get("Bloody")} day`)
    }else if(e == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Edifier")} / ${map2.get("Edifier")} / Edifier / ${map3.get("Edifier")} day`)
    }
}

let lowTime = function() {
    let a = map3.get("Lenovo")
    let b = map3.get("Acer")
    let c = map3.get("Xiaomi")
    let d = map3.get("Bloody")
    let e = map3.get("Edifier")


    if(a == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Lenovo")} / ${map2.get("Lenovo")} / Lenovo / ${map3.get("Lenovo")} day`)
    }else if(b == Math.min(b, a, c, d, e)) {
        console.log(`${map1.get("Acer")} / ${map2.get("Acer")} / Acer / ${map3.get("Acer")} day`)
    }else if(c == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Xiaomi")} / ${map2.get("Xiaomi")} / Xiaomi / ${map3.get("Xiaomi")} day`)
    }else if(d == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Bloody")} / ${map2.get("Bloody")} / Bloody / ${map3.get("Bloody")} day`)
    }else if(e == Math.min(a, b, c, d, e)) {
        console.log(`${map1.get("Edifier")} / ${map2.get("Edifier")} / Edifier / ${map3.get("Edifier")} day`)
    }
}

let maxPrice = function() {
    let a = map2.get("Lenovo")
    let b = map2.get("Acer")
    let c = map2.get("Xiaomi")
    let d = map2.get("Bloody")
    let e = map2.get("Edifier")


    if(a == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Lenovo")} / ${map2.get("Lenovo")} / Lenovo / ${map3.get("Lenovo")} day`)
    }else if(b == Math.max(b, a, c, d, e)) {
        console.log(`${map1.get("Acer")} / ${map2.get("Acer")} / Acer / ${map3.get("Acer")} day`)
    }else if(c == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Xiaomi")} / ${map2.get("Xiaomi")} / Xiaomi / ${map3.get("Xiaomi")} day`)
    }else if(d == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Bloody")} / ${map2.get("Bloody")} / Bloody / ${map3.get("Bloody")} day`)
    }else if(e == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Edifier")} / ${map2.get("Edifier")} / Edifier / ${map3.get("Edifier")} day`)
    }
}

let maxTime = function() {
    let a = map3.get("Lenovo")
    let b = map3.get("Acer")
    let c = map3.get("Xiaomi")
    let d = map3.get("Bloody")
    let e = map3.get("Edifier")


    if(a == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Lenovo")} / ${map2.get("Lenovo")} / Lenovo / ${map3.get("Lenovo")} day`)
    }else if(b == Math.max(b, a, c, d, e)) {
        console.log(`${map1.get("Acer")} / ${map2.get("Acer")} / Acer / ${map3.get("Acer")} day`)
    }else if(c == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Xiaomi")} / ${map2.get("Xiaomi")} / Xiaomi / ${map3.get("Xiaomi")} day`)
    }else if(d == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Bloody")} / ${map2.get("Bloody")} / Bloody / ${map3.get("Bloody")} day`)
    }else if(e == Math.max(a, b, c, d, e)) {
        console.log(`${map1.get("Edifier")} / ${map2.get("Edifier")} / Edifier / ${map3.get("Edifier")} day`)
    }
}

lowPrice();
lowTime();
maxPrice();
maxTime();