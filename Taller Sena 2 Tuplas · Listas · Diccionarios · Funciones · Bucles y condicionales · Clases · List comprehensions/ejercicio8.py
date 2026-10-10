class CarritoCompras:
    def __init__(self):
        self.productos = []

    def agregar_producto(self, nombre, precio):
        self.productos.append({"nombre": nombre, "precio": precio})

    def total(self):
        return sum(p["precio"] for p in self.productos)
