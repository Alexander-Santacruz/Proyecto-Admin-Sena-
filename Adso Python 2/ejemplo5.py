class carrito_compras:
    def __init__(self, ciudad):
        self.productos = []
        self.ciudad = ciudad
    
    def agregar_producto(self, producto, precio):
        self.productos.append({"producto": producto, "precio": precio})
        
    def subtotal(self):
        return sum(p["precio"] for p in self.productos)
    
    def calcular_envio(self, subtotal_compra):
        if self.ciudad.lower() == "popayan" and subtotal_compra > 300000:
            return 0
        elif self.ciudad.lower() == "popayan":
            return 15000
        else:
            return 25000 # Envío estándar para otras ciudades

    def total_pagar(self):
        sub = self.subtotal()
        desc = 0
        
        if sub > 300000:
            desc = sub * 0.15
            
        sub_con_desc = sub - desc
        envio = self.calcular_envio(sub)
        total = sub_con_desc + envio
        
        return sub, desc, envio, total
    
    def mostrar_factura(self):
        sub, desc, envio, total = self.total_pagar()
        print("--- FACTURA DE COMPRA ---")
        for p in self.productos:
            print(f"- {p['producto']}: ${p['precio']}")
        print(f"Subtotal: ${sub}")
        if desc > 0:
            print(f"Descuento (15%): -${desc}")
        print(f"Envios ({self.ciudad}): ${envio}")
        print(f"Valor Total a Pagar: ${total}")

carrito = carrito_compras("Popayan")
carrito.agregar_producto("Camiseta", 50000)
carrito.agregar_producto("Pantalon", 110000)
carrito.agregar_producto("Gorra", 45000)
carrito.agregar_producto("Zapatos", 150000)

carrito.mostrar_factura()
