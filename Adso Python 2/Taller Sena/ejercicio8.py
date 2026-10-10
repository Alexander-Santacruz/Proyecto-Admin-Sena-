# 8. Carrito de compras
class CarritoCompras:
    def __init__(self):
        self.productos = []
        
    def agregar_producto(self, nombre, precio):
        self.productos.append({"nombre": nombre, "precio": precio})
        
    def total(self):
        return sum(p["precio"] for p in self.productos)

carrito = CarritoCompras()
carrito.agregar_producto("Camisa", 45000)
carrito.agregar_producto("Pantalón", 89000)
carrito.agregar_producto("Media", 8000)

print("Productos en el carrito:")
for p in carrito.productos:
    print(f"- {p['nombre']}: ${p['precio']}")
print(f"Total a pagar: ${carrito.total()}")
