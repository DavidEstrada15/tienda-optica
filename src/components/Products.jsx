import React from 'react'
import ultra from "../assets/ultra.jpg"
import precision from "../assets/precision.webp"
import juna from "../assets/juna.webp"
import titanio from "../assets/titanio.webp"
export default function useProducts() {
        let productos= [
        {
            id: 0,
            nombre: "ULTRA",
            precio: 200000,
            descripcion: "",
            descuento: 0,
            stock: 100,
            categoria: "Lentes De Contacto",
            imagen: ultra
        },{
            id: 1,
            nombre: "Precision 1 para Astigmatismo",
            precio: 260000,
            descripcion: "",
            descuento: 0,
            stock: 50,
            categoria: "Lentes De Contacto",
            imagen: precision
        },{
            id: 2,
            nombre: "L+ Juna unisex amber 35D",
            precio: 160000,
            descripcion: "",
            descuento: 50,
            stock: 50,
            categoria: "Gafas",
            imagen: juna
        },{
          id: 3,
            nombre: "Montura Para Gafas Montura En Titanio Premium Diseño 1",
            precio: 70000,
            descripcion: "",
            descuento: 0,
            stock: 200,
            categoria: "Monturas",
            imagen: titanio
        }
    ]
    return{productos}
}
