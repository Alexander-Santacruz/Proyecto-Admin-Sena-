class carrito_compras :
    def __init__(self):
        self.productos = []
    
    def agregar_producto(self, producto, precio):
        self.productos.append({"producto": producto, "precio": precio})
        
    def total(self):
        return sum(p["precio"] for p in self.productos)
    
    def mostrar_productos(self):
        for p in self.productos:
            print(f"- {p['producto']}: ${p['precio']}")

carrito = carrito_compras()
carrito.agregar_producto("Camiseta", 50000)
carrito.agregar_producto("Pantalon", 110000)
carrito.agregar_producto("Gorra", 45000)

print("Detalle de la compra:")
carrito.mostrar_productos()
print("Valor total: ", carrito.total())
