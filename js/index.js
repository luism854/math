function enviart(){
    let bt,at,l1t,l2t,l3t,perimetrot,areat
    /*Captura el dato ingresado en el input con id nombre*/
    bt = document.getElementById('bt').value
    at = document.getElementById('at').value
    l1t = document.getElementById('l1t').value
    l2t = document.getElementById('l2t').value
    l3t= document.getElementById('l3t').value
    perimetrot = parseFloat(l1t)+parseFloat(l2t)+parseFloat(l3t)
    areat = (bt*at)/2
    //se muestra el archivo html con id respuesta
    document.getElementById('res1').innerHTML="El Perimetro del Triangulo es "+perimetrot+", el área es "+areat
}

function enviarc(){
    let lado, peri, area
    lado = document.getElementById('ladocua').value
    peri = lado*4
    area = lado*lado
    document.getElementById('res2').innerHTML="El perimetro es "+peri+",el área es "+area
}

function enviarr(){
    let base, altura, peri, area
    base = document.getElementById('baser').value
    altura = document.getElementById('alturar').value
    peri = base*2 + altura*2
    area = base*altura
    document.getElementById('res3').innerHTML="El perimetro es "+peri+", el area es "+ area
}

function enviarrom(){
    let diaMe, diaMa, lado, peri, area
    diaMe = document.getElementById('diagonal-menor').value
    diaMa = document.getElementById('diagonal-mayor').value
    lado = document.getElementById('lado-rom').value
    peri = lado*4
    area = (diaMa*diaMe)/2
    document.getElementById('res4').innerHTML="El perimetro es "+peri+", el área es "+area
}

function enviartra(){
    let baseMa, baseMe, lado1, lado2, altura, peri, area
    baseMa = document.getElementById('base-mayor').value
    baseMe = document.getElementById('base-menor').value
    lado1 = document.getElementById('lado1-tra').value
    lado2 = document.getElementById('lado2-tra').value
    altura = document.getElementById('alturatra').value
    peri = parseFloat(baseMa)+parseFloat(baseMe)+parseFloat(lado1)+parseFloat(lado2)
    area = altura*(parseFloat(baseMa)+parseFloat(baseMe))/2
    document.getElementById('res5').innerHTML="El perimetro es "+peri+", el área es "+ area
}

function enviarcirc(){
    let radio, peri, area
    radio = document.getElementById('radio').value
    peri = 2*radio*Math.PI
    area = Math.PI*radio**2
    document.getElementById('res6').innerHTML="El perimetro es "+peri+", el área es "+area
}

function enviaresf(){
    let radio, peri , area, volumen
    radio = document.getElementById('radio-esf').value
    peri = 2*radio*Math.PI
    area = 4*Math.PI*radio**2
    volumen = (4/3)*Math.PI*radio**3
    document.getElementById('res7').innerHTML="El perimetro es "+peri+", el área es "+area+", el volumen es "+volumen
}

function enviarcubo(){
    let lado, peri, area, volumen
    lado = document.getElementById('lado-cubo').value
    peri = lado*12
    area = 6*lado**2
    volumen = lado**3
    document.getElementById('res8').innerHTML="El perimetro es "+peri+", el área es "+area+", el volumen es "+volumen
}

function enviarp(){
    let alturap, anchop, largop, perimetrop,areap,volumenp
    alturap = document.getElementById('alturap').value
    anchop = document.getElementById('anchop').value
    largop = document.getElementById('largop').value
    perimetrop = alturap*4 + anchop*4 +largop*4 
    areap = (alturap*anchop*2) + (alturap*largop*2) + (anchop*largop*2)
    volumenp = alturap*anchop*largop
    console.log()
    document.getElementById('res9').innerHTML="El perimetro es "+perimetrop+", el area es "+areap+", el volumen es "+volumenp
}

function enviarcilin(){
    let altura, radio, peri, area, volumen
    altura = document.getElementById('altura-cilindro').value
    radio = document.getElementById('radio-cilindro').value
    peri = 1221
    area = 2*Math.PI*radio*(parseFloat(radio)+parseFloat(altura))
    volumen =Math.PI*altura*radio**2
    document.getElementById('res10').innerHTML="El perimetro es "+peri+", el area es "+area+", el volumen es "+volumen
}
function enviarcono(){
    let altura, radio, peri, area, volumen
    altura = document.getElementById('altura-cono').value
    radio = document.getElementById('radio-cono').value
    peri = 1221
    area = Math.PI*radio*(parseFloat(radio)+Math.sqrt(radio**2 + altura**2))
    volumen =(Math.PI*altura*radio**2)/3
    document.getElementById('res11').innerHTML="El perimetro es "+peri+", el area es "+area+", el volumen es "+volumen
}