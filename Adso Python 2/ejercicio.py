# Práctica de Programación en Python - ADSO
# Ejemplos principales y fundamentos

def calcular_propina(cuenta, porcentaje=10):
    return cuenta * (porcentaje / 100)

class CarritoCompras:
    def __init__(self):
        self.productos = []
    
    def agregar_producto(self, nombre, precio):
        self.productos.append({"nombre": nombre, "precio": precio})
        
    def total(self):
        return sum(p["precio"] for p in self.productos)

if __name__ == "__main__":
    print("Propina (10% de 50000):", calcular_propina(50000))
    
    carrito = CarritoCompras()
    carrito.agregar_producto("Camisa", 45000)
    carrito.agregar_producto("Pantalón", 89000)
    print("Total Carrito:", carrito.total())
